import { PlayStorageKeys } from "../plays/BasePlay";
import { getPlayerDiscProperties } from "../utils/haxUtils";
import Room from "..";
import MapReferee from "../structures/MapReferee";
import GameReferee from "../structures/GameReferee";
import { checkBallCarrierContact, checkBallContact } from "./tickEvents";
import Chat from "../roomStructures/Chat";
import { PlayableTeamId } from "../HBClient";
import Snap from "../plays/Snap";
import Ball from "../structures/Ball";
import PreSetCalculators from "../structures/PreSetCalculators";
import FieldGoal from "../plays/FieldGoal";

const eventListeners: EventListener[] = [
  {
    // Pass Incompletes, Punts/Kickoffs Out Of Bounds, Interceptions
    name: "Ball Position",
    runWhen: ["ballSnapped", "punt", "kickOff"],
    stopWhen: [
      "ballCaught",
      "ballRan",
      "puntCaught",
      "kickOffCaught",
      "interceptionRuling",
    ],
    run: () => {
      const ballOutOfBounds = MapReferee.checkIfBallOutOfBounds(); // This returns either null or the ballPosition,
      if (ballOutOfBounds)
        return Room?.game?.play?.handleBallOutOfBounds(ballOutOfBounds);
    },
  },
  {
    // Field Goal Out Of Hashes, Field Goal Successful
    name: "Ball Field Goal",
    runWhen: ["fieldGoal"],
    stopWhen: ["fieldGoalBlitzed", "ballRan"],
    run: () => {
      //   // Here we check if the ball is within the hashes,
      //   // Check if the ball has enough speed to even reach the field goal posts
      //   // Check if the ball went through the posts
      //   const withinHash = checkIfWithinHash(ball.getPosition(), MAP.BALL_RADIUS);
      //   if (!withinHash) return play.handleBallOutOfHashes();
      //   const successfulFieldGoal = checkIfFieldGoalSuccessful();
      //   if (successfulFieldGoal) return play.handleSuccess();
      //   if (play.getState("fieldGoalKicked")) {
      //     const ballMoving = checkIfBallIsMoving();
      //     if (!ballMoving) return play.handleIncomplete("FROM EVENT LISTENER");
      //   }
    },
  },
  {
    // Catches, Pass Deflections, Field Goal Incomplete, Field Goal Auto, DownedBall, Punt Catch, Kickoff Catch
    name: "Ball Contact",
    runWhen: ["always"],
    stopWhen: [
      "ballCaught",
      "ballRan",
      "ballBlitzed",
      "fieldGoalBlitzed",
      "puntCaught",
      "kickOffCaught",
      "interceptionRuling",
    ],
    run: () => {
      const ballContact = checkBallContact();
      if (ballContact) return Room.getPlay().handleBallContact(ballContact);
    },
  },
  {
    // Player Out Of Bounds and Player Touchdowns
    name: "BallCarrier Position Tracker",
    runWhen: ["ballSnapped", "fieldGoal", "puntCaught", "kickOffCaught"],
    stopWhen: ["fieldGoalKicked", "interceptionPlayerEndPosition"],
    run: function () {
      const ballCarrier = Room.getPlay().getBallCarrierSafe();
      if (!ballCarrier) return;

      const { position } = getPlayerDiscProperties(ballCarrier.id);

      const ballCarrierOutOfBounds =
        MapReferee.checkIfPlayerOutOfBounds(position);

      if (ballCarrierOutOfBounds)
        return Room.getPlay().handleBallCarrierOutOfBounds(
          ballCarrierOutOfBounds
        );

      const isTouchdown = GameReferee.checkIfTouchdown(
        position,
        ballCarrier.team as PlayableTeamId
      );
      if (isTouchdown) return Room.getPlay().handleTouchdown(position);
    },
  },
  {
    // Tackles, Sacks, Fumbles, Interception Tackles
    name: "BallCarrier Player Contact Defense",
    runWhen: ["ballSnapped", "fieldGoal", "puntCaught", "kickOffCaught"],
    stopWhen: ["interceptionPlayerEndPosition"],
    run: () => {
      // Here we get the defensive team, and use as an argument to the function
      const defensePlayers = Room!.game!.players.getDefense();
      if (defensePlayers.length === 0) return;
      const playerContact = checkBallCarrierContact(defensePlayers);
      if (playerContact)
        return Room.getPlay().handleBallCarrierContactDefense(playerContact);
    },
  },
  {
    // Runs
    name: "BallCarrier Player Contact Offense",
    runWhen: ["ballSnapped", "fieldGoal"],
    stopWhen: ["ballRan", "ballCaught", "ballDeflected"],
    run: () => {
      // Here we get the offensive team, filter out the QB, and use as an argument to the function
      const offensePlayersNoQb = Room.game.players.getOffenseNoQb();
      const playerContact = checkBallCarrierContact(offensePlayersNoQb);
      if (playerContact)
        return Room.getPlay().handleBallCarrierContactOffense(playerContact);
    },
  },
  {
    // Early Blitz Penalty
    name: "Defense Position",
    runWhen: ["ballSnapped", "fieldGoal"],
    stopWhen: [
      "lineBlitzed",
      "ballRan",
      "ballPassed",
      "fieldGoalKicked",
      "fieldGoalBlitzed",
    ],
    run: () => {
      const defensePlayers = Room.game.players.getDefense();
      const defensiveTeam = Room.game.defenseTeamId;
      const offsidePlayer = MapReferee.findTeamPlayerOffsideNoAdjust(
        defensePlayers,
        defensiveTeam,
        Room.game.down.getLOS().x
      );

      if (!offsidePlayer) return;

      // Check if they were able to blitz

      const canBlitzOnSnap = Room.getPlay().stateExistsUnsafe("canBlitz");
      const isFieldGoal = Room.getPlay().stateExistsUnsafe("fieldGoal");

      if (isFieldGoal)
        return Room.getPlay<FieldGoal>().setState("fieldGoalBlitzed");
      if (canBlitzOnSnap) return Room.getPlay<Snap>().setState("lineBlitzed");

      // If wasnt allowed to blitz, call penalty
      return Room.getPlay<Snap>().handleIllegalBlitz(offsidePlayer);
    },
  },
  {
    // Early LOS Cross Penalty for Snap and FieldGoal
    name: "Quarterback and Kicker Position",
    runWhen: ["ballSnapped", "fieldGoal"],
    stopWhen: ["ballRan", "ballPassed", "fieldGoalKicked", "lineBlitzed"],
    run: () => {
      const qbOrKicker = Room.getPlay().getBallCarrier(); // This is really either the QB, or the kicker

      const { id, team } = qbOrKicker;

      const { position } = getPlayerDiscProperties(id);

      const qbAdjustedPosition = PreSetCalculators.adjustPlayerPositionFront(
        position,
        team as PlayableTeamId
      );

      const isBehindLOS = MapReferee.checkIfBehind(
        qbAdjustedPosition.x,
        Room.game.down.getLOS().x,
        team as PlayableTeamId
      );

      if (!isBehindLOS)
        return Room.getPlay<Snap>().handleIllegalCrossOffense(qbOrKicker);
    },
  },
  {
    // Kick Drag Pass, FG, Punt, Kickoff
    name: "Kick Drag",
    runWhen: ["always"],
    stopWhen: [
      "ballPassed",
      "ballBlitzed",
      "ballRan",
      "fieldGoalKicked",
      "fieldGoalBlitzed",
      "puntKicked",
      "kickOffKicked",
    ],
    run: () => {
      // Each Play has a this.MAX_DRAG_DISTANCE
      const MAX_DRAG_DISTANCE = 15;

      const ballDragged = MapReferee.checkIfBallDragged(
        Room.getPlay().getBallPositionOnSet(),
        Ball.getPosition(),
        MAX_DRAG_DISTANCE
      );
      if (ballDragged)
        return Room.getPlay().onKickDrag(Room.getPlay().getBallCarrier());
    },
  },
  {
    // Ball Moving
    name: "Ball is Moving",
    runWhen: ["interceptionAttemptKicked"],
    stopWhen: ["interceptionRuling"],
    run: () => {
      // Check if the ball is moving, when it starts reaching a very low speed, call bad int
      const ballIsMoving = MapReferee.checkIfBallIsMoving();
      if (!ballIsMoving) {
        return Room.getPlay<Snap>().handleUnsuccessfulInterception("Missed");
      }
    },
  },
];

export default function onGameTick() {
  // Check if bot is even on
  if (!Room.isBotOn) return;

  try {
    eventListeners.forEach((listenerObj) => {
      if (!Room?.game?.play?.isLivePlay) return;
      if (!checkIfRunListener(listenerObj)) return;
      if (checkIfStopListener(listenerObj)) return;
      listenerObj.run();
    });
  } catch (error) {
    console.trace(error);
    Chat.send(error.message);
    Room.game.down.hardReset();
  }
}

interface EventListener {
  name: string;
  runWhen: (PlayStorageKeys | "always")[];
  stopWhen: Exclude<PlayStorageKeys, "always">[];
  run: () => void;
}

const checkIfRunListener = (listenerObj: EventListener) =>
  listenerObj.runWhen.some(
    (state) => state === "always" || Room.getPlay().stateExistsUnsafe(state)
  );

const checkIfStopListener = (listenerObj: EventListener) =>
  listenerObj.stopWhen.some((state) => Room.getPlay().stateExistsUnsafe(state));

import onBallKick from "./events/onBallKick";
import onChat from "./events/onChat";
import onGameTick from "./events/onGameTick";
import onJoin from "./events/onJoin";
import onLeave from "./events/onLeave";
import onPlayerTeamChange from "./events/onPlayerTeamChange";
import HBClient, { HBClientConfig, TeamId } from "./HBClient";
import KickOff from "./plays/Kickoff";
import roomConfig from "./roomConfig";
import RoomClient from "./roomStructures/Room";
import Marquee from "./structures/Marquee";
import HFL_MAP from "./utils/map";

declare function HBInit(clientConfig: HBClientConfig): HBClient;

export const client = HBInit(roomConfig);

const Room = new RoomClient();

Marquee.run();

export default Room;

interface TeamIdEnum {
  SPECTATORS: TeamId;
  RED: TeamId;
  BLUE: TeamId;
}

export const TEAMS: TeamIdEnum = {
  SPECTATORS: 0,
  RED: 1,
  BLUE: 2,
};

client.setCustomStadium(HFL_MAP);
client.setTimeLimit(9);
client.setScoreLimit(0);
client.setTeamsLock(true);

client.onGameStart = () => {
  if (!Room.isBotOn) return;
  Room.startNewGame();
};

client.onGameStop = () => {
  if (!Room.isBotOn) return;
  Room.game.sendManOfTheMatch();
  Room.endGame();
};

client.onPositionsReset = () => {
  if (!Room.isBotOn || !Room.game) return;
  Room.game.down.startNew();
  Room.game.setState("canTwoPoint", false);
  Room.game.setState("twoPointAttempt", false);
  Room.game.setPlay(new KickOff(Room.game.getTime()), null);
};

client.onTeamGoal = () => {
  Room.game.deleteState("canTwoPoint");
};

client.onPlayerTeamChange = onPlayerTeamChange;

client.onPlayerBallKick = onBallKick;

client.onPlayerJoin = onJoin;

client.onPlayerLeave = onLeave;

client.onGameTick = onGameTick;

client.onPlayerChat = onChat;

client.onGamePause = () => {
  if (!Room.isBotOn || !Room.game) return;
  Room.game.setIsPaused(true);
};

client.onGameUnpause = () => {
  if (!Room.isBotOn || !Room.game) return;
  Room.game.setIsPaused(false);
};

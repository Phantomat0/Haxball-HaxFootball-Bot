const HFL_MAP = `{

	"name" : "2023 HFL",

	"width" : 1090,

	"height" : 380,

	"cameraFollow" : "player",

	"spawnDistance" : 980,

	"bg" : { "type" : "grass", "width" : 930, "height" : 280, "kickOffRadius" : 0, "cornerRadius" : 0, "goalLine" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : 0, "y" : 75, "trait" : "kickOffBarrier" },
		/* 1 */ { "x" : 0, "y" : -75, "trait" : "kickOffBarrier" },
		/* 2 */ { "x" : 0, "y" : -330, "trait" : "kickOffBarrier" },
		
		/* 3 */ { "x" : -775, "y" : -280, "trait" : "goalline" },
		/* 4 */ { "x" : -775, "y" : 280, "trait" : "goalline" },
		
		/* 5 */ { "x" : -620, "y" : -280, "trait" : "yardline" },
		/* 6 */ { "x" : -620, "y" : 280, "trait" : "yardline" },
		/* 7 */ { "x" : -310, "y" : -280, "trait" : "yardline" },
		/* 8 */ { "x" : -310, "y" : 280, "trait" : "yardline" },
		/* 9 */ { "x" : -155, "y" : -280, "trait" : "yardline" },
		/* 10 */ { "x" : -155, "y" : 280, "trait" : "yardline" },
		
		/* 11 */ { "x" : 0, "y" : -280, "trait" : "centerline" },
		/* 12 */ { "x" : 0, "y" : 280, "trait" : "centerline" },
		
		/* 13 */ { "x" : 155, "y" : -280, "trait" : "yardline" },
		/* 14 */ { "x" : 155, "y" : 280, "trait" : "yardline" },
		/* 15 */ { "x" : 310, "y" : -280, "trait" : "yardline" },
		/* 16 */ { "x" : 310, "y" : 280, "trait" : "yardline" },
		/* 17 */ { "x" : 465, "y" : -280, "trait" : "yardline" },
		/* 18 */ { "x" : 465, "y" : 280, "trait" : "yardline" },
		/* 19 */ { "x" : 620, "y" : -280, "trait" : "yardline" },
		/* 20 */ { "x" : 620, "y" : 280, "trait" : "yardline" },
		
		/* 21 */ { "x" : 775, "y" : -280, "trait" : "goalline" },
		/* 22 */ { "x" : 775, "y" : 280, "trait" : "goalline" },
		
		/* 23 */ { "x" : -1005, "y" : 25, "trait" : "goal" },
		/* 24 */ { "x" : -1005, "y" : -25, "trait" : "goal" },
		/* 25 */ { "x" : 1005, "y" : 25, "trait" : "goal" },
		/* 26 */ { "x" : 1005, "y" : -25, "trait" : "goal" },
		
		/* 27 */ { "x" : -775, "y" : -375, "trait" : "goalline" },
		/* 28 */ { "x" : -775, "y" : 375, "trait" : "goalline" },
		/* 29 */ { "x" : 775, "y" : -375, "trait" : "goalline", "curve" : 0 },
		/* 30 */ { "x" : 775, "y" : 375, "trait" : "goalline", "curve" : 0 },
		
		/* 31 */ { "x" : -713, "y" : -75, "trait" : "yardline" },
		/* 32 */ { "x" : -713, "y" : -95, "trait" : "yardline" },
		/* 33 */ { "x" : -744, "y" : -75, "trait" : "yardline" },
		/* 34 */ { "x" : -744, "y" : -95, "trait" : "yardline" },
		/* 35 */ { "x" : -744, "y" : 95, "trait" : "yardline" },
		/* 36 */ { "x" : -744, "y" : 75, "trait" : "yardline" },
		/* 37 */ { "x" : -713, "y" : 95, "trait" : "yardline" },
		/* 38 */ { "x" : -713, "y" : 75, "trait" : "yardline" },
		/* 39 */ { "x" : 713, "y" : 95, "trait" : "yardline" },
		/* 40 */ { "x" : 713, "y" : 75, "trait" : "yardline" },
		/* 41 */ { "x" : 62, "y" : 95, "trait" : "yardline" },
		/* 42 */ { "x" : 62, "y" : 75, "trait" : "yardline" },
		/* 43 */ { "x" : 31, "y" : 95, "trait" : "yardline" },
		/* 44 */ { "x" : 31, "y" : 75, "trait" : "yardline" },
		/* 45 */ { "x" : -93, "y" : 95, "trait" : "yardline" },
		/* 46 */ { "x" : -93, "y" : 75, "trait" : "yardline" },
		/* 47 */ { "x" : -124, "y" : 95, "trait" : "yardline" },
		/* 48 */ { "x" : -124, "y" : 75, "trait" : "yardline" },
		/* 49 */ { "x" : -248, "y" : 95, "trait" : "yardline" },
		/* 50 */ { "x" : -248, "y" : 75, "trait" : "yardline" },
		/* 51 */ { "x" : -279, "y" : 95, "trait" : "yardline" },
		/* 52 */ { "x" : -279, "y" : 75, "trait" : "yardline" },
		/* 53 */ { "x" : -403, "y" : 95, "trait" : "yardline" },
		/* 54 */ { "x" : -403, "y" : 75, "trait" : "yardline" },
		/* 55 */ { "x" : -434, "y" : 95, "trait" : "yardline" },
		/* 56 */ { "x" : -434, "y" : 75, "trait" : "yardline" },
		/* 57 */ { "x" : -558, "y" : 95, "trait" : "yardline" },
		/* 58 */ { "x" : -558, "y" : 75, "trait" : "yardline" },
		/* 59 */ { "x" : -589, "y" : 95, "trait" : "yardline" },
		/* 60 */ { "x" : -589, "y" : 75, "trait" : "yardline" },
		/* 61 */ { "x" : 186, "y" : -75, "trait" : "yardline" },
		/* 62 */ { "x" : 186, "y" : -95, "trait" : "yardline" },
		/* 63 */ { "x" : 62, "y" : -75, "trait" : "yardline" },
		/* 64 */ { "x" : 62, "y" : -95, "trait" : "yardline" },
		/* 65 */ { "x" : 31, "y" : -75, "trait" : "yardline" },
		/* 66 */ { "x" : 31, "y" : -95, "trait" : "yardline" },
		/* 67 */ { "x" : -93, "y" : -75, "trait" : "yardline" },
		/* 68 */ { "x" : -93, "y" : -95, "trait" : "yardline" },
		/* 69 */ { "x" : -124, "y" : -75, "trait" : "yardline" },
		/* 70 */ { "x" : -124, "y" : -95, "trait" : "yardline" },
		/* 71 */ { "x" : -248, "y" : -75, "trait" : "yardline" },
		/* 72 */ { "x" : -248, "y" : -95, "trait" : "yardline" },
		/* 73 */ { "x" : -279, "y" : -75, "trait" : "yardline" },
		/* 74 */ { "x" : -279, "y" : -95, "trait" : "yardline" },
		/* 75 */ { "x" : -403, "y" : -75, "trait" : "yardline" },
		/* 76 */ { "x" : -403, "y" : -95, "trait" : "yardline" },
		/* 77 */ { "x" : -434, "y" : -75, "trait" : "yardline" },
		/* 78 */ { "x" : -434, "y" : -95, "trait" : "yardline" },
		/* 79 */ { "x" : -558, "y" : -75, "trait" : "yardline" },
		/* 80 */ { "x" : -558, "y" : -95, "trait" : "yardline" },
		/* 81 */ { "x" : -589, "y" : -75, "trait" : "yardline" },
		/* 82 */ { "x" : -589, "y" : -95, "trait" : "yardline" },
		/* 83 */ { "x" : 186, "y" : 95, "trait" : "yardline" },
		/* 84 */ { "x" : 186, "y" : 75, "trait" : "yardline" },
		/* 85 */ { "x" : 651, "y" : -75, "trait" : "yardline" },
		/* 86 */ { "x" : 651, "y" : -95, "trait" : "yardline" },
		/* 87 */ { "x" : 651, "y" : 95, "trait" : "yardline" },
		/* 88 */ { "x" : 651, "y" : 75, "trait" : "yardline" },
		/* 89 */ { "x" : 682, "y" : 95, "trait" : "yardline" },
		/* 90 */ { "x" : 682, "y" : 75, "trait" : "yardline" },
		/* 91 */ { "x" : 682, "y" : -75, "trait" : "yardline" },
		/* 92 */ { "x" : 682, "y" : -95, "trait" : "yardline" },
		/* 93 */ { "x" : 527, "y" : -75, "trait" : "yardline" },
		/* 94 */ { "x" : 527, "y" : -95, "trait" : "yardline" },
		/* 95 */ { "x" : 527, "y" : 95, "trait" : "yardline" },
		/* 96 */ { "x" : 527, "y" : 75, "trait" : "yardline" },
		/* 97 */ { "x" : 496, "y" : 95, "trait" : "yardline" },
		/* 98 */ { "x" : 496, "y" : 75, "trait" : "yardline" },
		/* 99 */ { "x" : 496, "y" : -75, "trait" : "yardline" },
		/* 100 */ { "x" : 496, "y" : -95, "trait" : "yardline" },
		/* 101 */ { "x" : 372, "y" : -75, "trait" : "yardline" },
		/* 102 */ { "x" : 372, "y" : -95, "trait" : "yardline" },
		/* 103 */ { "x" : 403, "y" : 95, "trait" : "yardline" },
		/* 104 */ { "x" : 403, "y" : 75, "trait" : "yardline" },
		/* 105 */ { "x" : 372, "y" : 95, "trait" : "yardline" },
		/* 106 */ { "x" : 372, "y" : 75, "trait" : "yardline" },
		/* 107 */ { "x" : 341, "y" : -75, "trait" : "yardline" },
		/* 108 */ { "x" : 341, "y" : -95, "trait" : "yardline" },
		/* 109 */ { "x" : 217, "y" : -75, "trait" : "yardline" },
		/* 110 */ { "x" : 217, "y" : -95, "trait" : "yardline" },
		/* 111 */ { "x" : 217, "y" : 95, "trait" : "yardline" },
		/* 112 */ { "x" : 217, "y" : 75, "trait" : "yardline" },
		
		/* 113 */ { "x" : 1005, "y" : 25, "trait" : "goal" },
		/* 114 */ { "x" : 1005, "y" : -25, "trait" : "goal" },
		
		/* 115 */ { "x" : -682, "y" : -75, "trait" : "yardline" },
		/* 116 */ { "x" : -682, "y" : -95, "trait" : "yardline" },
		/* 117 */ { "x" : -682, "y" : 95, "trait" : "yardline" },
		/* 118 */ { "x" : -682, "y" : 75, "trait" : "yardline" },
		/* 119 */ { "x" : -651, "y" : 95, "trait" : "yardline" },
		/* 120 */ { "x" : -651, "y" : 75, "trait" : "yardline" },
		/* 121 */ { "x" : -651, "y" : -75, "trait" : "yardline" },
		/* 122 */ { "x" : -651, "y" : -95, "trait" : "yardline", "_selected" : true },
		/* 123 */ { "x" : -527, "y" : 95, "trait" : "yardline" },
		/* 124 */ { "x" : -527, "y" : 75, "trait" : "yardline" },
		/* 125 */ { "x" : -527, "y" : -75, "trait" : "yardline" },
		/* 126 */ { "x" : -527, "y" : -95, "trait" : "yardline" },
		/* 127 */ { "x" : -496, "y" : -75, "trait" : "yardline" },
		/* 128 */ { "x" : -496, "y" : -95, "trait" : "yardline" },
		/* 129 */ { "x" : -496, "y" : 95, "trait" : "yardline" },
		/* 130 */ { "x" : -496, "y" : 75, "trait" : "yardline" },
		/* 131 */ { "x" : -372, "y" : -75, "trait" : "yardline" },
		/* 132 */ { "x" : -372, "y" : -95, "trait" : "yardline" },
		/* 133 */ { "x" : -372, "y" : 95, "trait" : "yardline" },
		/* 134 */ { "x" : -372, "y" : 75, "trait" : "yardline" },
		/* 135 */ { "x" : -341, "y" : 95, "trait" : "yardline" },
		/* 136 */ { "x" : -341, "y" : 75, "trait" : "yardline" },
		/* 137 */ { "x" : -341, "y" : -75, "trait" : "yardline" },
		/* 138 */ { "x" : -341, "y" : -95, "trait" : "yardline" },
		/* 139 */ { "x" : -217, "y" : 95, "trait" : "yardline" },
		/* 140 */ { "x" : -217, "y" : 75, "trait" : "yardline" },
		/* 141 */ { "x" : -186, "y" : 95, "trait" : "yardline" },
		/* 142 */ { "x" : -186, "y" : 75, "trait" : "yardline" },
		/* 143 */ { "x" : -217, "y" : -75, "trait" : "yardline" },
		/* 144 */ { "x" : -217, "y" : -95, "trait" : "yardline" },
		/* 145 */ { "x" : -186, "y" : -75, "trait" : "yardline" },
		/* 146 */ { "x" : -186, "y" : -95, "trait" : "yardline" },
		/* 147 */ { "x" : -62, "y" : 95, "trait" : "yardline" },
		/* 148 */ { "x" : -62, "y" : 75, "trait" : "yardline" },
		/* 149 */ { "x" : -31, "y" : 95, "trait" : "yardline" },
		/* 150 */ { "x" : -31, "y" : 75, "trait" : "yardline" },
		/* 151 */ { "x" : -62, "y" : -75, "trait" : "yardline" },
		/* 152 */ { "x" : -62, "y" : -95, "trait" : "yardline" },
		/* 153 */ { "x" : -31, "y" : -75, "trait" : "yardline" },
		/* 154 */ { "x" : -31, "y" : -95, "trait" : "yardline" },
		/* 155 */ { "x" : 93, "y" : -75, "trait" : "yardline" },
		/* 156 */ { "x" : 93, "y" : -95, "trait" : "yardline" },
		/* 157 */ { "x" : 93, "y" : 95, "trait" : "yardline" },
		/* 158 */ { "x" : 93, "y" : 75, "trait" : "yardline" },
		/* 159 */ { "x" : 124, "y" : 95, "trait" : "yardline" },
		/* 160 */ { "x" : 124, "y" : 75, "trait" : "yardline" },
		/* 161 */ { "x" : 124, "y" : -75, "trait" : "yardline" },
		/* 162 */ { "x" : 124, "y" : -95, "trait" : "yardline" },
		/* 163 */ { "x" : 248, "y" : 95, "trait" : "yardline" },
		/* 164 */ { "x" : 248, "y" : 75, "trait" : "yardline" },
		/* 165 */ { "x" : 248, "y" : -75, "trait" : "yardline" },
		/* 166 */ { "x" : 248, "y" : -95, "trait" : "yardline" },
		/* 167 */ { "x" : 279, "y" : -75, "trait" : "yardline" },
		/* 168 */ { "x" : 279, "y" : -95, "trait" : "yardline" },
		/* 169 */ { "x" : 279, "y" : 95, "trait" : "yardline" },
		/* 170 */ { "x" : 279, "y" : 75, "trait" : "yardline" },
		/* 171 */ { "x" : 341, "y" : 95, "trait" : "yardline" },
		/* 172 */ { "x" : 341, "y" : 75, "trait" : "yardline" },
		/* 173 */ { "x" : 403, "y" : -75, "trait" : "yardline" },
		/* 174 */ { "x" : 403, "y" : -95, "trait" : "yardline" },
		/* 175 */ { "x" : 434, "y" : -75, "trait" : "yardline" },
		/* 176 */ { "x" : 434, "y" : -95, "trait" : "yardline" },
		/* 177 */ { "x" : 434, "y" : 95, "trait" : "yardline" },
		/* 178 */ { "x" : 434, "y" : 75, "trait" : "yardline" },
		/* 179 */ { "x" : 558, "y" : 95, "trait" : "yardline" },
		/* 180 */ { "x" : 558, "y" : 75, "trait" : "yardline" },
		/* 181 */ { "x" : 558, "y" : -75, "trait" : "yardline" },
		/* 182 */ { "x" : 558, "y" : -95, "trait" : "yardline" },
		/* 183 */ { "x" : 589, "y" : -75, "trait" : "yardline" },
		/* 184 */ { "x" : 589, "y" : -95, "trait" : "yardline" },
		/* 185 */ { "x" : 589, "y" : 95, "trait" : "yardline" },
		/* 186 */ { "x" : 589, "y" : 75, "trait" : "yardline" },
		/* 187 */ { "x" : 713, "y" : -75, "trait" : "yardline" },
		/* 188 */ { "x" : 713, "y" : -95, "trait" : "yardline" },
		/* 189 */ { "x" : 744, "y" : -75, "trait" : "yardline" },
		/* 190 */ { "x" : 744, "y" : -95, "trait" : "yardline" },
		/* 191 */ { "x" : 744, "y" : 95, "trait" : "yardline" },
		/* 192 */ { "x" : 744, "y" : 75, "trait" : "yardline" },
		/* 193 */ { "x" : -465, "y" : -280, "trait" : "yardline", "color" : "c7e6bd" },
		/* 194 */ { "x" : -465, "y" : 280, "trait" : "yardline", "color" : "c7e6bd" },
		/* 195 */ { "x" : 465, "y" : 280, "trait" : "yardline", "color" : "c7e6bd" },
		/* 196 */ { "x" : -697.5, "y" : 280, "trait" : "yardline" },
		/* 197 */ { "x" : -697.5, "y" : 246, "trait" : "yardline" },
		/* 198 */ { "x" : -542.5, "y" : 280, "trait" : "yardline" },
		/* 199 */ { "x" : -542.5, "y" : 246, "trait" : "yardline" },
		/* 200 */ { "x" : -387.5, "y" : 280, "trait" : "yardline" },
		/* 201 */ { "x" : -387.5, "y" : 246, "trait" : "yardline" },
		/* 202 */ { "x" : -232.5, "y" : 280, "trait" : "yardline" },
		/* 203 */ { "x" : -232.5, "y" : 246, "trait" : "yardline" },
		/* 204 */ { "x" : -77.5, "y" : 280, "trait" : "yardline" },
		/* 205 */ { "x" : -77.5, "y" : 246, "trait" : "yardline" },
		/* 206 */ { "x" : 77.5, "y" : 280, "trait" : "yardline" },
		/* 207 */ { "x" : 77.5, "y" : 246, "trait" : "yardline" },
		/* 208 */ { "x" : 232.5, "y" : 280, "trait" : "yardline" },
		/* 209 */ { "x" : 232.5, "y" : 246, "trait" : "yardline" },
		/* 210 */ { "x" : 387.5, "y" : 280, "trait" : "yardline" },
		/* 211 */ { "x" : 387.5, "y" : 246, "trait" : "yardline" },
		/* 212 */ { "x" : 387.5, "y" : -246, "trait" : "yardline" },
		/* 213 */ { "x" : 387.5, "y" : -280, "trait" : "yardline" },
		/* 214 */ { "x" : 232.5, "y" : -246, "trait" : "yardline" },
		/* 215 */ { "x" : 232.5, "y" : -280, "trait" : "yardline" },
		/* 216 */ { "x" : 77.5, "y" : -246, "trait" : "yardline" },
		/* 217 */ { "x" : 77.5, "y" : -280, "trait" : "yardline" },
		/* 218 */ { "x" : 542.5, "y" : -246, "trait" : "yardline" },
		/* 219 */ { "x" : 542.5, "y" : -280, "trait" : "yardline" },
		/* 220 */ { "x" : 697.5, "y" : -246, "trait" : "yardline" },
		/* 221 */ { "x" : 697.5, "y" : -280, "trait" : "yardline" },
		/* 222 */ { "x" : -77.5, "y" : -246, "trait" : "yardline" },
		/* 223 */ { "x" : -77.5, "y" : -280, "trait" : "yardline" },
		/* 224 */ { "x" : -232.5, "y" : -246, "trait" : "yardline" },
		/* 225 */ { "x" : -232.5, "y" : -280, "trait" : "yardline" },
		/* 226 */ { "x" : -387.5, "y" : -246, "trait" : "yardline" },
		/* 227 */ { "x" : -387.5, "y" : -280, "trait" : "yardline" },
		/* 228 */ { "x" : -542.5, "y" : -246, "trait" : "yardline" },
		/* 229 */ { "x" : -542.5, "y" : -280, "trait" : "yardline" },
		/* 230 */ { "x" : -697.5, "y" : -246, "trait" : "yardline" },
		/* 231 */ { "x" : -697.5, "y" : -280, "trait" : "yardline" },
		/* 232 */ { "x" : 540.5, "y" : 264, "trait" : "yardline" },
		/* 233 */ { "x" : 540.5, "y" : 244, "trait" : "yardline" },
		/* 234 */ { "x" : 697.5, "y" : 280, "trait" : "yardline" },
		/* 235 */ { "x" : 697.5, "y" : 246, "trait" : "yardline" }

	],

	"segments" : [
		{ "v0" : 1, "v1" : 2, "trait" : "kickOffBarrier" },
		
		{ "v0" : 3, "v1" : 4, "trait" : "goalline", "x" : -775 },
		
		{ "v0" : 5, "v1" : 6, "trait" : "yardline", "x" : -620 },
		{ "v0" : 7, "v1" : 8, "trait" : "yardline", "x" : -310 },
		{ "v0" : 9, "v1" : 10, "trait" : "yardline", "x" : -155 },
		
		{ "v0" : 11, "v1" : 12, "trait" : "centerline" },
		
		{ "v0" : 13, "v1" : 14, "trait" : "yardline", "x" : 155 },
		{ "v0" : 15, "v1" : 16, "trait" : "yardline", "x" : 310 },
		{ "v0" : 17, "v1" : 18, "trait" : "yardline", "x" : 465 },
		{ "v0" : 19, "v1" : 20, "trait" : "yardline", "x" : 620 },
		
		{ "v0" : 21, "v1" : 22, "trait" : "goalline", "x" : 775 },
		
		{ "v0" : 23, "v1" : 24, "color" : "FF0000", "trait" : "goal", "x" : -1005 },
		{ "v0" : 25, "v1" : 26, "color" : "0000FF", "trait" : "goal", "x" : 1005 },
		
		{ "v0" : 27, "v1" : 28, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : -775 },
		{ "v0" : 29, "v1" : 30, "curve" : 0, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "x" : 775 },
		
		{ "v0" : 31, "v1" : 32, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -713 },
		{ "v0" : 33, "v1" : 34, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -744 },
		{ "v0" : 35, "v1" : 36, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -744 },
		{ "v0" : 37, "v1" : 38, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -713 },
		{ "v0" : 39, "v1" : 40, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 713 },
		{ "v0" : 41, "v1" : 42, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 62 },
		{ "v0" : 43, "v1" : 44, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 31 },
		{ "v0" : 45, "v1" : 46, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -93 },
		{ "v0" : 47, "v1" : 48, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -124 },
		{ "v0" : 49, "v1" : 50, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -248 },
		{ "v0" : 51, "v1" : 52, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -279 },
		{ "v0" : 53, "v1" : 54, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -403 },
		{ "v0" : 55, "v1" : 56, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -434 },
		{ "v0" : 57, "v1" : 58, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -558 },
		{ "v0" : 59, "v1" : 60, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -589 },
		{ "v0" : 61, "v1" : 62, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 186 },
		{ "v0" : 63, "v1" : 64, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 62 },
		{ "v0" : 65, "v1" : 66, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 31 },
		{ "v0" : 67, "v1" : 68, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -93 },
		{ "v0" : 69, "v1" : 70, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -124 },
		{ "v0" : 71, "v1" : 72, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -248 },
		{ "v0" : 73, "v1" : 74, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -279 },
		{ "v0" : 75, "v1" : 76, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -403 },
		{ "v0" : 77, "v1" : 78, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -434 },
		{ "v0" : 79, "v1" : 80, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -558 },
		{ "v0" : 81, "v1" : 82, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -589 },
		{ "v0" : 83, "v1" : 84, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 186 },
		{ "v0" : 85, "v1" : 86, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 651 },
		{ "v0" : 87, "v1" : 88, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 651 },
		{ "v0" : 89, "v1" : 90, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 682 },
		{ "v0" : 91, "v1" : 92, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 682 },
		{ "v0" : 93, "v1" : 94, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 527 },
		{ "v0" : 95, "v1" : 96, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 527 },
		{ "v0" : 97, "v1" : 98, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 496 },
		{ "v0" : 99, "v1" : 100, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 496 },
		{ "v0" : 101, "v1" : 102, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 372 },
		{ "v0" : 103, "v1" : 104, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 403 },
		{ "v0" : 105, "v1" : 106, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 372 },
		{ "v0" : 107, "v1" : 108, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 341 },
		{ "v0" : 109, "v1" : 110, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 217 },
		{ "v0" : 111, "v1" : 112, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 217 },
		{ "v0" : 115, "v1" : 116, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -682 },
		{ "v0" : 117, "v1" : 118, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -682 },
		{ "v0" : 119, "v1" : 120, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -651 },
		{ "v0" : 121, "v1" : 122, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -651 },
		{ "v0" : 123, "v1" : 124, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -527 },
		{ "v0" : 125, "v1" : 126, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -527 },
		{ "v0" : 127, "v1" : 128, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -496 },
		{ "v0" : 129, "v1" : 130, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -496 },
		{ "v0" : 131, "v1" : 132, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -372 },
		{ "v0" : 133, "v1" : 134, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -372 },
		{ "v0" : 135, "v1" : 136, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -341 },
		{ "v0" : 137, "v1" : 138, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -341 },
		{ "v0" : 139, "v1" : 140, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -217 },
		{ "v0" : 141, "v1" : 142, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -186 },
		{ "v0" : 143, "v1" : 144, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -217 },
		{ "v0" : 145, "v1" : 146, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -186 },
		{ "v0" : 147, "v1" : 148, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -62 },
		{ "v0" : 149, "v1" : 150, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -31 },
		{ "v0" : 151, "v1" : 152, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -62 },
		{ "v0" : 153, "v1" : 154, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -31 },
		{ "v0" : 155, "v1" : 156, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 93 },
		{ "v0" : 157, "v1" : 158, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 93 },
		{ "v0" : 159, "v1" : 160, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 124 },
		{ "v0" : 161, "v1" : 162, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 124 },
		{ "v0" : 163, "v1" : 164, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 248 },
		{ "v0" : 165, "v1" : 166, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 248 },
		{ "v0" : 167, "v1" : 168, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 279 },
		{ "v0" : 169, "v1" : 170, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 279 },
		{ "v0" : 171, "v1" : 172, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 341 },
		{ "v0" : 173, "v1" : 174, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 403 },
		{ "v0" : 175, "v1" : 176, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 434 },
		{ "v0" : 177, "v1" : 178, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 434 },
		{ "v0" : 179, "v1" : 180, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 558 },
		{ "v0" : 181, "v1" : 182, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 558 },
		{ "v0" : 183, "v1" : 184, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 589 },
		{ "v0" : 185, "v1" : 186, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 589 },
		{ "v0" : 187, "v1" : 188, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 713 },
		{ "v0" : 189, "v1" : 190, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 744 },
		{ "v0" : 191, "v1" : 192, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 744 },
		{ "v0" : 193, "v1" : 194, "color" : "c7e6bd", "trait" : "yardline", "x" : -465 },
		{ "v0" : 196, "v1" : 197, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -744 },
		{ "v0" : 198, "v1" : 199, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -542.5 },
		{ "v0" : 200, "v1" : 201, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -387.5 },
		{ "v0" : 202, "v1" : 203, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -232.5 },
		{ "v0" : 204, "v1" : 205, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -77.5 },
		{ "v0" : 206, "v1" : 207, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 77.5 },
		{ "v0" : 208, "v1" : 209, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 232.5 },
		{ "v0" : 210, "v1" : 211, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 387.5 },
		{ "v0" : 212, "v1" : 213, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 387.5 },
		{ "v0" : 214, "v1" : 215, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 232.5 },
		{ "v0" : 216, "v1" : 217, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 77.5 },
		{ "v0" : 218, "v1" : 219, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 542.5 },
		{ "v0" : 220, "v1" : 221, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 697.5 },
		{ "v0" : 222, "v1" : 223, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -77.5 },
		{ "v0" : 224, "v1" : 225, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -232.5 },
		{ "v0" : 226, "v1" : 227, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -387.5 },
		{ "v0" : 228, "v1" : 229, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -542.5 },
		{ "v0" : 230, "v1" : 231, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : -697.5 },
		{ "v0" : 232, "v1" : 233, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 542.5 },
		{ "v0" : 234, "v1" : 235, "vis" : true, "color" : "c7e6bd", "trait" : "yardline", "x" : 697.5 }

	],

	"goals" : [
		{ "p0" : [-1065,0 ], "p1" : [-1005,0 ], "team" : "blue" },
		{ "p0" : [1006.9833374023,1.6000061035156 ], "p1" : [1063.9833374023,1.6000061035156 ], "team" : "red" }

	],

	"discs" : [
		{ "pos" : [0,280 ], "trait" : "losmarker" },
		{ "pos" : [0,-280 ], "trait" : "losmarker" },
		
		{ "pos" : [10000,280 ], "trait" : "yardtogetmarker" },
		{ "pos" : [10000,-280 ], "trait" : "yardtogetmarker" },
		
		{ "pos" : [930,-60 ], "trait" : "goalPost" },
		{ "pos" : [-930,-60 ], "trait" : "goalPost" },
		{ "pos" : [-930,60 ], "trait" : "goalPost" },
		{ "pos" : [930,60 ], "trait" : "goalPost" },
		
		{ "pos" : [930,280 ], "trait" : "goalmarker" },
		{ "pos" : [775,-280 ], "trait" : "goalmarker" },
		{ "pos" : [-930,280 ], "trait" : "goalmarker" },
		{ "pos" : [-930,-280 ], "trait" : "goalmarker" },
		{ "pos" : [775,280 ], "trait" : "goalmarker" },
		{ "pos" : [930,-280 ], "trait" : "goalmarker" },
		{ "pos" : [-775,280 ], "trait" : "goalmarker" },
		{ "pos" : [-775,-280 ], "trait" : "goalmarker" },

		{ "pos" : [10000,0 ], "trait" : "teweight1" },
		{ "pos" : [10000,13 ], "trait" : "teweight" },
		{ "pos" : [9987,0 ], "trait" : "teweight" },
		{ "pos" : [10000,-13 ], "trait" : "teweight" },
		{ "pos" : [10013,0 ], "trait" : "teweight" },
		{ "pos" : [9960,280 ], "trait" : "crowdboxmarker" },
		{ "pos" : [9960,-280 ], "trait" : "crowdboxmarker" },
		{ "pos" : [9950,280 ], "trait" : "crowdboxmarker" },
		{ "pos" : [9950,-280 ], "trait" : "crowdboxmarker" },

	],

	"joints" : [
		{ "d0" : 1, "d1" : 2, "trait" : "losline" },
		{ "d0" : 3, "d1" : 4, "trait" : "yardtogetline" },

		{ "d0" : 17, "d1" : 18, "trait" : "joint" },
		{ "d0" : 17, "d1" : 19, "trait" : "joint" },
		{ "d0" : 17, "d1" : 20, "trait" : "joint" },
		{ "d0" : 17, "d1" : 21, "trait" : "joint" },
		{ "d0" : 18, "d1" : 19, "trait" : "joint" },
		{ "d0" : 19, "d1" : 20, "trait" : "joint" },
		{ "d0" : 20, "d1" : 21, "trait" : "joint" },
		{ "d0" : 21, "d1" : 18, "trait" : "joint" }

		// { "d0" : 22, "d1" : 23, "trait" : "crowdboxline" },
		// { "d0" : 23, "d1" : 24, "trait" : "crowdboxline" },
		// { "d0" : 24, "d1" : 25, "trait" : "crowdboxline" },
		// { "d0" : 25, "d1" : 22, "trait" : "crowdboxline" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -350, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -350, "bCoef" : 1, "trait" : "ballArea" },
		{ "normal" : [1,0 ], "dist" : -1065, "trait" : "ballArea" },
		{ "normal" : [-1,0 ], "dist" : -1065, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -375, "bCoef" : 0.9 },
		{ "normal" : [0,-1 ], "dist" : -375, "bCoef" : 0.9 },
		{ "normal" : [1,0 ], "dist" : -1090, "bCoef" : 0.9 },
		{ "normal" : [-1,0 ], "dist" : -1090, "bCoef" : 0.9 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"endline" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 4, "invMass" : 0, "bCoef" : 0.5, "color" : "FFFF00" },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue","c0" ] },
		"goalline" : { "vis" : true, "color" : "FFA500", "cMask" : ["c0","wall" ] },
		"yardline" : { "vis" : true, "color" : "c7e6bd", "cMask" : [ ] },
		"centerline" : { "vis" : true, "color" : "E0E0E0", "cMask" : [ ] },
		"goalmarker" : { "vis" : true, "color" : "FFA500", "cMask" : [ ], "radius" : 3 },
		"losmarker" : { "vis" : true, "color" : "273d6b", "cMask" : [ ], "radius" : 3 },
		"yardtogetmarker" : { "vis" : true, "color" : "8FE271", "cMask" : [ ], "radius" : 3 },
		"teweight" : { "vis" : false, "radius" : 0, "cMask" : ["red", "blue" ], "invMass" : 1.2 },
		"teweight1" : { "vis" : false, "radius" : 0, "cMask" : [], "invMass" : 1.2, "color" : "F2F2F2" },
		"losline" : { "vis" : true, "color" : "273d6b" },
		"yardtogetline" : { "color" : "8FE271" },
		"crowdboxline" : { "color" : "ff8164", "invMass" : 0.1 },
		"crowdboxmarker" : { "color" : "ff6242", "radius" : 3, "vis" : true, "cMask" : [ ], "invMass" : 0.1 },
		"goal" : { "vis" : true, "color" : "FFA500" }

	},

	"ballPhysics" : {
		"cMask" : [ "wall", "red", "blue"
		],
		"cGroup" : [ "ball"
		],
		"color" : "602323",
		"radius" : 7

	},

	"playerPhysics" : {
		"kickStrength" : 7.1,
        "kickback" : 0,
		"bCoef" : 0.75,
		"invMass" : 0.7,
		"radius" : 14.5,

	},

	"redSpawnPoints" : [
		

	],

	"blueSpawnPoints" : [
		

	]
}`;

// "bCoef" : 0.75,
/*
bCoef: 0.5
invMass: 0.5
Damping: 0.99
Kicking damping: 0.96
Acceleration: 0.1
Kicking acceleraton: 0.07
Kick Strength: 5
*/

export const MAP_POINTS = {
  PLAYER_RADIUS: 14.5,
  TE_PLAYER_RADIUS: 17,
  BALL_RADIUS: 7,
  DEF_DAMPING: 0.99,
  // =============
  KICKOFF: 0,
  HIDDEN: 10000,
  HALF_FIELD: 775,
  YARD: 15.5,
  TOP_SIDELINE: -280,
  BOT_SIDELINE: 280,
  RED_SIDELINE: -930,
  BLUE_SIDELINE: 930,
  RED_GOAL_LINE: -775,
  BLUE_GOAL_LINE: 775,
  RED_REDZONE: -465,
  BLUE_REDZONE: 465,
  RED_SCORE_LINE: -1040,
  BLUE_SCORE_LINE: 1040,
  RED_FIELD_GOAL_LINE: -930,
  BLUE_FIELD_GOAL_LINE: 930,
  ABOVE_HASH: -110,
  BELOW_HASH: 110,
  TOP_HASH: -95,
  BOT_HASH: 95,
  // TOP_HASH: -80,
  // BOT_HASH: 80,
  TOP_FG_POST: -60,
  BOTTOM_FG_POST: 60,
} as const;

export const DISC_IDS = {
  BALL: 0,
  LOS_TOP: 1,
  LOS_BOT: 2,
  LTG_TOP: 3,
  LTG_BOT: 4,
  TE: [17, 18, 19, 20, 21],
  CROWD_BOX: [22, 23, 24, 25],
};

export default HFL_MAP;

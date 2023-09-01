
Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,

			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//NKes-1 (M1)********************************************
				{
					id: 0,
					name: 'Jabba & Hutt Cartel',
					toons: ['gl_jabba', 'krrsantan', 'skiff_lando', 'boba_fett', 'boushh']
				},

				//NKes-2 (M2), NKes-3 (M3)********************************************
				{
					id: 1,
					name: 'JMK & Galactic Republic',
					toons: ['gl_kenobi', 'unknown', 'unknown', 'unknown', 'unknown'],

				},
				{
					id: 2,
					name: 'Rey & Ben +3',
					toons: ['gl_rey', 'ben_solo', 'unknown', 'unknown', 'unknown']

				},
				{
					id: 3,
					name: 'SLKR +4',
					toons: ['gl_kylo', 'unknown', 'unknown', 'unknown', 'unknown']

				},
				{
					id: 4,
					name: 'Dash led Scoundrels',
					toons: ['dash_rendar', 'mission_vao', 'zaalbar', 'vandor_chewbacca', 'unknown']

				},
				{
					id: 5,
					name: 'Trench & Sepratists',
					toons: ['admiral_trench', 'unknown', 'unknown', 'unknown', 'unknown']

				},

				//Qira SM-2 (M5)********************************************
				{
					id: 6,
					name: 'Rey & Scoundrels',
					toons: ['gl_rey', 'qi\'ra', 'l3-37', 'commander_ahsoka_tano', 'vandor_chewbacca']
				},
				{
					id: 7,
					name: 'Rey & Scoundrels',
					toons: ['gl_rey', 'qi\'ra', 'l3-37', 'han_solo', 'chewbacca']
				},

				//NKes-4 (M6)********************************************
				{
					id: 8,
					name: 'Executor',
					toons: ['executor', 'ghost', 'hound\'s_tooth', 'xanadu_blood', 'razor_crest', 'slave_i', 'ig-2000'],

				},

			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [
				{
					id: 0,
					missionId: 'M1',
					wave1: ['pykesentinel', 'pirate_spy', 'pykesentinel', 'pirate_leader', 'pykesentinel', 'pirate_saboteur'],
					wave2: ['qi\'ra', 'young_han_solo', 'young_lando_calrissian', 'vandor_chewbacca', 'l3-37', 'pirate_leader']
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['pykesentinel', 'pirate_spy', 'pykesentinel', 'pirate_leader', 'pykesentinel', 'pirate_saboteur'],
					wave2: ['pykesentinel', 'pirate_spy', 'pykesentinel', 'pirate_enforcer', 'pykesentinel', 'pirate_saboteur']
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['pykesentinel', 'pirate_spy', 'pykesentinel', 'pirate_leader', 'pykesentinel', 'pirate_saboteur'],
					wave2: ['pykesentinel', 'pirate_spy', 'pykesentinel', 'pirate_enforcer', 'pykesentinel', 'pirate_saboteur']
				},
				{
					id: 3,
					missionId: 'M5',
					wave1: ['pykesentinel', 'pirate_spy', 'pykesentinel', 'pirate_leader', 'pykesentinel', 'pirate_saboteur'],
					wave2: ['pykesentinel', 'pirate_spy', 'pykesentinel', 'pirate_enforcer', 'pykesentinel', 'pirate_saboteur']
				},
				{
					id: 4,
					missionId: 'M6',
					wave1: ['executor', 'hound\'s_tooth', 'xanadu_blood', 'razor_crest', 'slave_i', 'ig-2000']
				},
			],

		platoons: [
			"Whenever an ally uses a Special ability, grant them Stealth for 2 turns.\n\n",
			"Add Stealthed allies deal an additional 15% damage.\n\n",
			"Add Stealthed allies recieve 15% less damage from all sources."
		],

        modifiers:[
			"Whenever a character/ship uses a Special ability, they gain a stack of Confuse (max 3) until the end of the encounter.\n\n All characters/ships gain the granted ability Clear Head/Recompute at the start of battle, which can be used to dispel stacks of Confuse.\n\nConfuse:\n\n Detrimental effects build based on the cumulative number of stacks: Can't gain buffs; Can't counter, assist, or gain bonus Turn Meter (Raid bosses and Galactic Legends: -30% Counter Chance). When this unit uses their Basic ability, increase their cooldowns by 1."
		],

        notes:[
			"This Fleet mission can feel very difficult, but its mechanics are easily overlooked--resulting in failure. If you use Special abilities with non-capitol ships, stacks of Confuse (max 3) will be applied on them.\n\nIf you primarily use Basics only, and use Executor's Special 2 to buff Hound's Tooth with Taunt, then the odds of you succeeding here is vastly heightend!"
		],

        reqs:[
			'5x characters (Relic 8+) | Jabba the Hutt',
			"Ships (7⭐) | Ghost",
			'5x characters (Relic 8+) | Qi\'ra, L3-37',
			'5x characters (Relic 8+)'
        ],

		missionId: [
			'NKes-1 (M1)',
			'NKes-2 (M2)',
			'NKes-3 (M3)',
			'Qi\'ra SM-2 (M5)',
			'NKes-4 (M6)',
		],

		missions: [{
			//NKes-1
			id: 0,
			missionId: [0],
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(219,375 TP)',
			wave2Points: '\n(493,594 TP)',
			recommendedSquads: [0],//jabba
			enemyWaves: [0],
			modifiers: [0],
			reqs: [0],
			},
			//NKes-2
			{
			id: 1,
			missionId: [1],
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(219,375 TP)',
			wave2Points: '\n(493,594 TP)',
			recommendedSquads: [1, 2, 3, 4, 5],
			enemyWaves: [1],
			modifiers: [0],
            reqs: [3],
			}, 
			//NKes-3
            {
			id: 2,
			missionId: [2],
			name: 'M3',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(219,375 TP)',
			wave2Points: '\n(493,594 TP)',
			recommendedSquads: [1, 2, 3, 4, 5],
			enemyWaves: [2],
			modifiers: [0],
            reqs: [3],
			},
			//Qira SM-2
			{
			id: 3,
			missionId: [3],
			name: 'M5',
			type: 'special',
			position: 'right',
			rewards: [
				'20',
			],
			recommendedSquads: [6, 7],//special
			enemyWaves: [3],
			reqs: [2],
			modifiers: [0],
			},
			//NKes-4
			{
			id: 4,
			missionId: [4],
			name: 'M6',
			type: 'fleet',
			position: 'right',
			wave1Points: '\n(987,188 TP)',
			recommendedSquads: [8],//fleet
			enemyWaves: [4],
			reqs: [1],
			modifiers: [0],
			notes: [0],
			},
            {
			id: 5,
			name: 'DP',
			type: 'deploy',
			position: 'right',
            stars: [
               '⭐ 235,143,105',
               '⭐⭐ 400,243,583',
               '⭐⭐⭐ 500,304,479'
            ]
			}, 
			{
			id: 6,
			name: 'OP',
			type: 'kessel',
			position: 'right',
			preqs: ["Characters: Relic 8+", "Ships: 7⭐"],
			platoonAbility: [0],
			platzones: [0, 1, 2]
			}
			],

			defaultPath: '../media/map_ui/mission_',

		selectedMission: '',
		seen: false,
	}
	},
	template: '#mission',
	methods: {
		mq () {
			this.isMobile = window.matchMedia('(max-width: 600px)').matches;
		},	
        hide: function() {
			    this.seen = false;
		}
	},
})


let app = new Vue({
	el: '#app',
	data: {
		isVisible: false
	},
});

//Mission Selected functionality
$(document).ready(function () {

	$("img").click(function () {

		$('.selected').removeClass('selected');

		$(this).addClass('selected');
		$('.description').show();
	});

});

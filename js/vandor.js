
Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,

			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//DDat-2 (M1)********************************************
				{
					id: 0,
					name: "Aphra & Her droids (+DV/HK/IG88)+B2",
					toons: ['doctoraphra', 'bt1', 'triplezero', 'darth_vader', 'b2_super_battle_droid'],
				},

				//DDat-1 (M2)********************************************
				{
					id: 1,
					name: 'Darth Traya & SEE +3 Sith',
					toons: ['darth_traya', 'gl_palp', 'darth_nihilus', 'darth_malgus', 'darth_malak'],

				},
				{
					id: 2,
					name: 'Darth Revan & SEE +3 Sith',
					toons: ['darth_revan', 'gl_palp', 'darth_nihilus', 'darth_malgus', 'darth_malak'],

				},
				{
					id: 3,
					name: 'Reva led Inquisitors',
					toons: ['thirdsister', 'grand_inquisitor', 'seventh_sister', 'fifth_brother', 'eighth_brother']

				},

				//DDat-3 (M4)********************************************
				{
					id: 4,
					name: 'SLKR & Wat +3',
					toons: ['gl_kylo', 'wat_tambor', 'unknown', 'unknown', 'unknown'],
				},


				//DDat-4 (M3)********************************************
				{
					id: 5,
					name: 'Lord Vader & Empire',
					toons: ['gl_vader', 'darth_vader', 'admiral_piett', 'royal_guard', 'stormtrooper'],

				},

				//DDat-5 (M5)********************************************
				{
					id: 6,
					name: 'Nightsisters',
					toons: ['mother_talzin', 'merrin', 'old_daka', 'asajj_ventress', 'nightsister_zombie']
				},

			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [
				{
					id: 0,
					missionId: 'M1',
					wave1: ['nightsister_acolyte', 'nightsister_spirit', 'nightsister_initiate', 'nightsister_acolyte', 'nightsister_zombie'],
					wave2: ['mother_talzin', 'old_daka', 'nightsister_acolyte', 'nightsister_spirit', 'nightsister_zombie']
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['nightsister_acolyte', 'nightsister_spirit', 'nightsister_initiate', 'nightsister_acolyte', 'nightsister_zombie'],
					wave2: ['mother_talzin', 'old_daka', 'nightsister_acolyte', 'nightsister_spirit', 'nightsister_zombie']
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['nightsister_acolyte', 'nightsister_spirit', 'nightsister_initiate', 'nightsister_acolyte', 'nightsister_zombie'],
					wave2: ['mother_talzin', 'old_daka', 'nightsister_acolyte', 'nightsister_spirit', 'nightsister_zombie']
				},
				{
					id: 3,
					missionId: 'M4',
					wave1: ['nightsister_acolyte', 'nightsister_spirit', 'nightsister_initiate', 'nightsister_acolyte', 'nightsister_zombie'],
					wave2: ['mother_talzin', 'old_daka', 'nightsister_acolyte', 'nightsister_spirit', 'nightsister_zombie']
				},
				{
					id: 4,
					missionId: 'M5',
					wave1: ['hondo_ohnaka', 'ig-88', 'jabbasenforcer', 'weequaysaboteur', 'jabbasenforcer'],
					wave2: ['maul', 'qi\'ra', 'dash_rendar', 'cartel_spy', 'cartel_bruiser']
				},
			],
		
		platoons: [
			"Whenever an ally uses a Special abilty,they gain a stack of Profit for 2 turns.\n" +
			"\nProfit: +10% Critical Chance and Critical Damage per stack (max 50%)",
			"At the start of battle, grant all allies 2 stacks of Profit for 2 turns.",
			"At the start of battle, grant all allies 4 stacks of Profit for 2 turns."
		],

        modifiers:[
			"All ships have +100% counter chance. Whenever a ship uses a Special ability, a random enemy gains 15% Turn Meter.",
			"At the start of the encounter, all enemies are inflicted with Healing Immunity until the end of the battle, which can't be resisted. All enemies are inflicted with a Damage Over Time effect at the start of any enemy's turn, which can't be copied, dispelled, or prevented.",
			"At the start of the encounter, an indestructible Crate that is immune to debuffs is summoned to the ally slot if it is available. When an enemy damages the Crate, that enemy recovers 50% Health and Protection, which can't be prevented, and removes all of the Damage Over Time effects on them applied by this modifier.",
		],

        notes:[

			],

        reqs:[
			'5x characters (Relic 9+)',
			'5x characters (Relic 9+) | Young Han Solo, Vandor Chewbacca',
			'5x characters (Relic 9+) | Jabba the Hutt',
        ],

		missionId: [
			'DDat-1 (M2)',
			'DDat-2 (M1)',
			'DDat-3 (M4)',
			'DDat-4 (M3)',
			'Merrin SM-1 (M5)',
		],

		missions: [{
			id: 0,
			name: 'M1',
			type: 'fleet',
			position: 'right',
			wave1Points: '\n(1,443,488 TP)',
            recommendedSquads: [24],//fleet
			enemyWaves: [49],
            reqs: [21],
            modifiers: [4],
			},	{
			id: 1,
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(307,125 TP)',
			wave2Points: '\n(721,744 TP)',
			recommendedSquads: [24],//tr generic
			enemyWaves: [52,53],
			modifiers: [5,6],
            reqs: [22],
			}, {
			id: 2,
			name: 'M3',
			type: 'special',
			position: 'right',
			territoryPoints: [
				'20',
				],
            recommendedSquads: [24],//special
			enemyWaves: [34],
            reqs: [23],
            modifiers: [5,6],
			},
            {
			id: 5,
			name: 'M4',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(307,125 TP)',
			wave2Points: '\n(721,744 TP)',
			recommendedSquads: [24],//bl generic
			enemyWaves: [54,55],
			modifiers: [5,6],
            reqs: [22],
			},
			{
			id: 5,
			name: 'M6',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(307,125 TP)',
			wave2Points: '\n(721,744 TP)',
			recommendedSquads: [81],//mid r jabba
			enemyWaves: [50,51],
			modifiers: [5,6],
            reqs: [24],
			}, 
            {
			id: 6,
			name: 'DP',
			type: 'deploy',
			position: 'right',
            stars: [
				'⭐ 341,250,768',
                '⭐⭐ 620,455,942',
                '⭐⭐⭐ 729,948,167'
            ]
			}, 
			{
			id: 7,
			name: 'OP',
			type: 'vandor',
			position: 'right',
			preqs: ["Characters: Relic 9+", "Ships: 7⭐"],
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

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
			"The allied Capital Ship gains two abilities; Assault Formation and Defensive Formation. (Allied ships start in Defensive Formation).\n\n" +
			"Assault Formation:\n\n Reduce allied non-Capital ships' cooldowns by 2 and they gain 50% Turn Meter. This ship takes a bonus turn without reducing its cooldowns.This ability starts on cooldown and shares a cooldown with Defensive Formation. (Cooldown:2)\n\n" +
			"Defensive Formation:\n\n Until a new Formation is issued, allied Tanks Taunt at the start of each turn if they don't already have it. This ship takes a bonus turn without reducing its cooldowns. This ability starts on cooldown and shares a cooldown with Assault Formation. (Cooldown:2)\n\n",
			"Add to Defensive Formation: Allied non-Capital ships recover 25% of their Max Health and all of their Protection.\n\n",
			"Add to Assault Formation: Until a new Formation is issued, allied non-Capital ships deal 100% more damage."

		],

        modifiers:[
        'At the beginning of battle, each side summons a random Corellian Engineering Cargo Ship. At the start of their turn, Cargo Ships gain Protection Over Time (10%) for 1 turn.\n\n',
        'Coaxium:\n\n +25% Critical Damage and Speed; -15% Accuracy; will be critically hit if able; enemies can ignore Taunt to target this character; if this character is defeated by a status effect, Coaxium will not be granted to anyone.\n\n',
        "Every 10 turns, all defeated characters are revived at 50% Health."
			],

        notes:[
        "Do NOT use SEE as a leader; your allies will not revive after 10 turns when defeated!",

			],

        reqs:[
        'Dark Side Ships (7⭐)',
        "Dark Side or Neutral (Relic 7+)",
        "Dark Side or Neutral (Relic 7+) | Doctor Aphra",
        "Empire (Relic 7+)",
        "Nightsisters (Relic 7+) | Merrin"
        ],
		
		missionId: [
			'DDat-1 (M2)',
			'DDat-2 (M1)',
			'DDat-3 (M4)',
			'DDat-4 (M3)',
			'Merrin SM-1 (M5)',
		],

		missions: [{
			//DDat-2
			id: 0,
			missionId: [1],
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
            recommendedSquads: [0],//aphra
			enemyWaves: [0],
			modifiers: [2],
            reqs: [2],
		},
			{
			//DDat-1
			id: 1,
			missionId: [0],
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
			recommendedSquads: [1, 2, 3],//gen
			enemyWaves: [1],
			modifiers: [2],
            reqs: [1],
            notes: [0],
		},
			{
			//DDat-4
			id: 2,
			missionId: [3],
			name: 'M3',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
            recommendedSquads: [5],//empire
			enemyWaves: [2],
            reqs: [3],
            modifiers: [2],
		},
			{
			//DDat-3
			id: 3,
			missionId: [2],
			name: 'M4',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
			recommendedSquads: [4],//gen
			enemyWaves: [3],
			modifiers: [2],
            reqs: [1],
		}, 
			{
			//Merrin SM-1
			id: 4,
			missionId: [4],
			name: 'M5',
			type: 'special2',
			position: 'right',
			rewards: [
				'50',
			],
			recommendedSquads: [6],//ns
			enemyWaves: [4],
			modifiers: [2],
			reqs: [4],
		},
			{

			id: 5,
			name: 'DP',
			type: 'deploy',
			position: 'right',
            stars: [
               '⭐ 158,960,938',
               '⭐⭐ 254,337,500',
               '⭐⭐⭐ 339,116,667'             
            ]
		},  
			{

			id: 6,
			name: 'OP',
			type: 'dathomir',
			position: 'right',
			preqs: ["Characters: Relic 7+", "Ships: 7⭐"],
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

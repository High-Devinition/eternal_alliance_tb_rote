
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
			"At the start of the encounter, Stun all enemies for 1 turn and inflict Defense Down, Offense Down, Stagger and Tenacity Down for 2 turns which can't be resisted",
			"Instead Stun three random enemies; remove inflict Defense Down and Offense Down.",
			"Instead Stun one random enemy; remove inflict Stagger."
		],

        modifiers:[
        "At the start of the encounter, one random ally and enemy is secretly granted the Informant effect. Critical hits against the Informant reveal them. The first time an Informant is defeated, if there is an active Informant remaining, that Informant and their allies gain 50% Armor Penetration/Critical Chance, 25% Critical Damage, and 20 Speed. Then, Informant is dispelled from all characters.",
        "If there is an Empire ally in the Leader slot, they gain 30% Max Health/Protection, and the strongest ally Taunts for 2 turns at the start of the encounter. Whenever an Empire ally excluding summons) uses a Special Ability during their turn, all Empire allies increase the damage they deal by 10% until the end of the encounter, and then all other Empire allies are called to assist"
			],

        notes:[

			],

        reqs:[
        "Light Side Ships (7⭐)",
        "5x Light Side or Neutral (Relic 9+), Cassian Andor, K-2SO",
        "5x Light Side or Neutral (Relic 9+)"
        
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
            recommendedSquads: [75],//fleet
			enemyWaves: [49],
            reqs: [21],
			},	{
			id: 1,
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(307,125 TP)',
			wave2Points: '\n(721,744 TP)',
			recommendedSquads: [24],//tr
			enemyWaves: [34],
			modifiers: [4,2,5],
            reqs: [22],
			}, {
			id: 2,
			name: 'M3',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(307,125 TP)',
			wave2Points: '\n(721,744 TP)',
            recommendedSquads: [24],//special
			enemyWaves: [34],
            reqs: [23],
            modifiers: [4,2,5],
			},
            {
			id: 5,
			name: 'M4',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(307,125 TP)',
			wave2Points: '\n(721,744 TP)',
			recommendedSquads: [24],//br Jabba
			enemyWaves: [34],
			modifiers: [4,2,5],
            reqs: [23],
			},
			{
			id: 5,
			name: 'M6',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(307,125 TP)',
			wave2Points: '\n(721,744 TP)',
			recommendedSquads: [24],//tl
			enemyWaves: [34],
			modifiers: [4,2,5],
            reqs: [23],
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
			type: 'kafrene',
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

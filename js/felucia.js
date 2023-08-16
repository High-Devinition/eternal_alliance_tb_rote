Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,

			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//NFel-1 (M2)********************************************
				{
					id: 0,
					name: 'Lord Vader (Solo)',
					toons: ['gl_vader'],
					video: "https://youtu.be/S88QWy8_nMg?t=1899"
				},

				//NFel-2 (M1)********************************************
				{
					id: 1,
					name: 'SEE+Wat+3 Sith',
					toons: ['gl_palp', 'wat_tambor', 'unknown', 'unknown', 'unknown'],

				},

				//NFel-3 (M3)********************************************
				{
					id: 2,
					name: 'Reva led Inquisitors',
					toons: ['thirdsister', 'grand_inquisitor', 'seventh_sister', 'fifth_brother', 'eighth_brother']

				},
				{
					id: 3,
					name: 'Inquisitors',
					toons: ['grand_inquisitor', 'seventh_sister', 'ninth_sister', 'fifth_brother', 'eighth_brother'],
					video: "https://www.youtube.com/watch?v=-OFAp5BwpaA"
				},
				{
					id: 4,
					name: 'EP+Mara+SK+2 Empire/Sith',
					toons: ['emperor_palpatine', 'mara_jade', 'starkiller', 'unknown', 'unknown']
				},
				//NFel-4 (M5)********************************************
				{
					id: 5,
					name: 'SLKR & FO',
					toons: ['gl_kylo', 'first_order_officer', 'kylo_ren_(unmasked)', 'general_hux', 'sith_trooper']

				},

				//NFel-5 (M6)********************************************
				{
					id: 6,
					name: 'Executrix fleet',
					toons: ['executrix', 'scythe', 'tie_interceptor', 'palp_shuttle', 'tie_defender', 'imperial_tie_bomber', 'gauntlet_starfighter']
				},




			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [

				{
					id: 0,
					missionId: 'M1',
					wave1: ['commander_battle_droid', 'droideka', 'magnaguard', 'b1', 'b2', 'magnaguard'],
					wave2: ['wat_tambor', 'droideka', 'magnaguard', 'b1', 'b2', 'magnaguard'],
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['wat_tambor', 'nute_gunray', 'poggle_the_lesser'],
					wave2: ['gl_kenobi'],
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['commander_battle_droid', 'droideka', 'magnaguard', 'b1', 'b2', 'magnaguard'],
					wave2: ['nute_gunray', 'droideka', 'magnaguard', 'b1', 'b2', 'magnaguard'],
				},
				{
					id: 3,
					missionId: 'M5',
					wave1: ['commander_battle_droid', 'droideka', 'magnaguard', 'b1', 'b2', 'magnaguard'],
					wave2: ['geonosian_brood_alpha', 'geonosian_spy', 'geonosian_soldier', 'poggle_the_lesser', 'sun_fac'],
				},
				{
					id: 4,
					missionId: 'M6',
					wave1: ['malevolence', 'hyena_bomber', 'vulture_droid', 'geonosian_soldier_starfighter'],
				},
			],	
             
		platoons: [
			"Whenever an ally uses a Special abilty,they gain a stack of Profit for 2 turns.\n" +
			"\nProfit: +10% Critical Chance and Critical Damage per stack (max 50%)\n\n",
			"Add at the start of battle, grant all allies 2 stacks of Profit for 2 turns.\n\n",
			"At the start of battle, grant all allies 4 stacks of Profit for 2 turns."
			],

        modifiers:[
        'At the beginning of battle, each side summons a random Corellian Engineering Cargo Ship. At the start of their turn, Cargo Ships gain Protection Over Time (10%) for 1 turn.',
        'Coaxium: +25% Critical Damage and Speed; -15% Accuracy; will be critically hit if able; enemies can ignore Taunt to target this character; if this character is defeated by a status effect, Coaxium will not be granted to anyone'
			],

        notes:[
        "A variation of most GL lineups should also work",
			],

        reqs:[
        'Ships (7⭐)',
        '5x characters (Relic 6+)',
        "5x characters (Relic 6+), Young Lando Calrissian",
        "5x characters (Relic 6+), Hondo Ohnaka",
        "5x characters (Relic 6+), Jabba the Hutt",//15
        ],

		missions: [{
			id: 0,
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(125,000 TP)',
			wave2Points: '\n(250,000 TP)',
            recommendedSquads: [74],//jabba
			enemyWaves: [41,42],
            reqs: [4],
			},	{
			id: 1,
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(125,000 TP)',
			wave2Points: '\n(250,000 TP)',
			recommendedSquads: [78],//lando
			enemyWaves: [41,44],
            reqs: [2],
			}, {
			id: 2,
			name: 'M3',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(125,000 TP)',
			wave2Points: '\n(250,000 TP)',
            recommendedSquads: [44,82,83,80],//generic
			enemyWaves: [39,40],
            reqs: [1],
            notes: [3]
			},
			{
			id: 4,
			name: 'M5',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(125,000 TP)',
			wave2Points: '\n(250,000 TP)',
            recommendedSquads: [75,76],//hondo
			enemyWaves: [41,43],
            reqs: [3],
			}, 
			
			{
			id: 5,
			name: 'M6',
			type: 'fleet',
			position: 'right',
			wave1Points: '\n(500,000 TP)',
			recommendedSquads: [77,84,31],
			enemyWaves: [38],
            reqs: [0],
			}, 
            {
			id: 6,
			name: 'DP',
			type: 'deploy',
			position: 'right',
            stars: [
               '⭐ 148,125,000',
               '⭐⭐ 237,000,000',
               '⭐⭐⭐ 316,000,000'
            ]
			}, 
			{
			id: 30,
			name: 'OP',
			type: 'felucia',
			position: 'right',
			preqs: ["Characters: Relic 6", "Ships: 7⭐"],
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

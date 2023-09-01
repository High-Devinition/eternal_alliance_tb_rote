Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,

			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//NFel-1 (M1)********************************************
				{
					id: 0,
					name: 'Jabba & Hutt Cartel',
					toons: ['gl_jabba', 'krrsantan', 'skiff_lando', 'boba_fett', 'boushh']
				},	

				//NFel-2 (M2)********************************************
				{
					id: 1,
					name: 'Unknown team comp.',
					toons: ['unknown', 'young_lando_calrissian', 'unknown', 'unknown', 'unknown'],

				},

				//NFel-3 (M3)********************************************
				{
					id: 2,
					name: 'CLS',
					toons: ['commander_luke_skywalker', 'chewbacca', 'han_solo', 'threepio_&_chewie', 'c-3po'],
				},
				{
					id: 3,
					name: "Trench & Separatists",
					toons: ['admiral_trench', 'nute_gunray', 'count_dooku', 'jango_fett', 'geonosian_brood_alpha']
				},

				//NFel-4 (M5)********************************************
				{
					id: 4,
					name: 'Rey & Scoundrels (+Ben helps)',
					toons: ['gl_rey', 'hondo_ohnaka', 'ben_solo', 'beskar_mando', 'l3-37']

				},
				{
					id: 5,
					name: 'Rey & Scoundrels (No Ben)',
					toons: ['gl_rey', 'hondo_ohnaka', 'beskar_mando', 'dash_rendar', 'l3-37']

				},

				//NFel-5 (M6)********************************************
				{
					id: 6,
					name: 'Executor fleet',
					toons: ['executor', 'hound\'s_tooth', 'razor_crest', 'xanadu_blood', 'slave_i', 'ig-2000']
				},
				{
					id: 7,
					name: 'Profundity fleet',
					toons: ['profundity', 'rebel_y-wing', 'outrider', 'han\'s_millennium_falcon', 'biggs_darklighter\'s_x-wing', 'phantom_ii', 'ghost']

				},
				{
					id: 8,
					name: 'Leviathan fleet',
					toons: ['leviathan', 'b-28_bomber', 'fury_interceptor', 'tie_dagger', 'palp_shuttle', 'sith_fighter', 'markvi_interceptor']

				},




			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [

				{
					id: 0,
					missionId: 'M1',
					wave1: ['imperial_officer', 'stormtrooper_commander', 'stormtrooper', 'recon_stormtrooper', 'range_trooper'],
					wave2: ['imperial_officer', 'stormtrooper_commander', 'stormtrooper', 'recon_stormtrooper', 'range_trooper', 'scout_trooper'],
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['imperial_officer', 'stormtrooper_commander', 'stormtrooper', 'recon_stormtrooper', 'range_trooper'],
					wave2: ['iden_versio', 'imperial_officer', 'stormtrooper_commander', 'stormtrooper', 'recon_stormtrooper', 'range_trooper', 'scout_trooper']
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['pirate_leader', 'pirate_enforcer', 'pirate_saboteur', 'pirate_spy', 'pirate_bruiser'],
					wave2: ['hondo_ohnaka', 'pirate_enforcer', 'pirate_saboteur', 'pirate_spy', 'pirate_bruiser'],
				},
				{
					id: 3,
					missionId: 'M5',
					wave1: ['imperial_officer', 'stormtrooper_commander', 'stormtrooper', 'recon_stormtrooper', 'range_trooper'],
					wave2: ['grand_moff_tarkin','imperial_officer', 'stormtrooper_commander', 'stormtrooper', 'recon_stormtrooper', 'range_trooper'],
				},
				{
					id: 4,
					missionId: 'M6',
					wave1: ['chimaera', 'tie_advanced_x1', 'imperial_tie_bomber', 'imperial_tie_fighter', 'tie_interceptor'],
				},
			],	
             
		platoons: [
			"Whenever an ally uses a Special abilty,they gain a stack of Profit for 2 turns.\n" +
			"\nProfit: +10% Critical Chance and Critical Damage per stack (max 50%)\n\n",
			"Add at the start of battle, grant all allies 2 stacks of Profit for 2 turns.\n\n",
			"At the start of battle, grant all allies 4 stacks of Profit for 2 turns."
			],

		modifiers: [
			"At the start of each character's turn, they gain Heal Over Time (10%) for 2 turns. While a character has Heal Over Time, they have 25% Defense and are immune to Buff Immunity.\n\n Whenever a Heal Over Time expires, the character gains Offense Up for 1 turn. Recovery effects are increased by 20%.",
			"At the start of each ship's turn, they gain Protection Over Time (10%) for 2 turns. While a ship has Protection Over Time, they have 25% Defense and are immune to Buff Immunity.\n\n Whenever a Protection Over Time expires, the character gains Offense Up for 1 turn. Recovery effects are increased by 20%."
		],

        notes:[
			'Put Rey\'s Life-Blood onto L3-37. Use her Ultimate and her Whirlwind whenever possible. Use BAM\'s Special 2 to keep scoundrels alive.',
			'With great mods and high relics, this mission can be easily completed on auto.'
			],

        reqs:[
			'Ships (7⭐)',
			'5x characters (Relic 6+)',
			"5x characters (Relic 6+) | Young Lando Calrissian",
			"5x characters (Relic 6+) | Hondo Ohnaka",
			"5x characters (Relic 6+) | Jabba the Hutt",
			],

		missionId: [
			'NTat-1 (M2)',
			'NTat-2 (M3)',
			'NTat-3 (M5)',
			'NFel-4 (M6)',
			'NTat-5 (M1)',
		],

		missions: [{
			//NFel-5
			id: 0,
			missionId: [4],
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(125,000 TP)',
			wave2Points: '\n(250,000 TP)',
            recommendedSquads: [0],//jabba
			enemyWaves: [0],
			reqs: [4],
			modifiers: [0],
			notes: [1],

		}, //NFel-1
			{
			id: 1,
			missionId: [0],
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(125,000 TP)',
			wave2Points: '\n(250,000 TP)',
			recommendedSquads: [1],//lando
			enemyWaves: [1],
			reqs: [2],
			modifiers: [0],

		}, //NFel-2

			{
			id: 2,
			missionId: [1],
			name: 'M3',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(125,000 TP)',
			wave2Points: '\n(250,000 TP)',
            recommendedSquads: [2, 3],//generic
			enemyWaves: [2],
			reqs: [1],
			modifiers: [0],

			}, //NFel-3

			{
			id: 4,
			missionId: [2],
			name: 'M5',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(125,000 TP)',
			wave2Points: '\n(250,000 TP)',
            recommendedSquads: [4, 5],//hondo
			enemyWaves: [3],
			reqs: [3],
			modifiers: [0],
			notes: [0],

			}, //NFel-4
			
			{
			id: 5,
			missionId: [3],
			name: 'M6',
			type: 'fleet',
			position: 'right',
			wave1Points: '\n(500,000 TP)',
			recommendedSquads: [6, 7, 8],
			enemyWaves: [4],
			modifiers: [1],
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
			id: 6,
			name: 'OP',
			type: 'felucia',
			position: 'right',
			preqs: ["Characters: Relic 6+", "Ships: 7⭐"],
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

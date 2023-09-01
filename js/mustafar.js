
Vue.component('mission', {
	data: function () {
		return {
			isMobile: false,

			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//DMus-1 (M1)********************************************
				{
					id: 0,
					name: 'Lord Vader (Solo)',
					toons: ['gl_vader'],
					video: "https://youtu.be/S88QWy8_nMg?t=1899"
				},

				//DMus-2 (M2)********************************************
				{
					id: 1,
					name: 'SLKR & First Order',
					toons: ['gl_kylo', 'first_order_officer', 'kylo_ren_(unmasked)', 'general_hux', 'sith_trooper']

				},
				{
					id: 2,
					name: 'SEE & Wat +3 Sith',
					toons: ['gl_palp', 'wat_tambor', 'unknown', 'unknown', 'unknown'],

				},
				{
					id: 3,
					name: 'Reva led Inquisitors',
					toons: ['thirdsister', 'grand_inquisitor', 'seventh_sister', 'fifth_brother', 'eighth_brother']

				},
				{
					id: 4,
					name: 'EP, Mara & SK +2 Empire/Sith',
					toons: ['emperor_palpatine', 'mara_jade', 'starkiller', 'unknown', 'unknown']
				},
				{
					id: 5,
					name: 'EP & Empire',
					toons: ['emperor_palpatine', 'admiral_piett', 'grand_admiral_thrawn', 'royal_guard', 'stormtrooper']
				},
				{
					id: 6,
					name: "Trench & Separatists",
					toons: ['admiral_trench', 'nute_gunray', 'count_dooku', 'jango_fett', 'geonosian_brood_alpha']
				},


				//DMus-3 (M3)********************************************
				{
					id: 7,
					name: 'SLKR & First Order',
					toons: ['gl_kylo', 'first_order_officer', 'kylo_ren_(unmasked)', 'general_hux', 'sith_trooper']

				},
				{
					id: 8,
					name: 'SEE & Wat +3 Sith',
					toons: ['gl_palp', 'wat_tambor', 'unknown', 'unknown', 'unknown'],

				},
				{
					id: 9,
					name: 'Reva led Inquisitors',
					toons: ['thirdsister', 'grand_inquisitor', 'seventh_sister', 'fifth_brother', 'eighth_brother']

				},
				{
					id: 10,
					name: 'Inquisitors',
					toons: ['grand_inquisitor', 'seventh_sister', 'ninth_sister', 'fifth_brother', 'eighth_brother'],
					video: "https://www.youtube.com/watch?v=-OFAp5BwpaA"
				},
				{
					id: 11,
					name: 'EP, Mara & SK +2 Empire/Sith',
					toons: ['emperor_palpatine', 'mara_jade', 'starkiller', 'unknown', 'unknown']
				},
				{
					id: 12,
					name: 'EP & Empire',
					toons: ['emperor_palpatine', 'admiral_piett', 'grand_admiral_thrawn', 'royal_guard', 'stormtrooper']
				},
				{
					id: 13,
					name: "Trench & Separatists",
					toons: ['admiral_trench', 'nute_gunray', 'count_dooku', 'jango_fett', 'geonosian_brood_alpha']
				},

				//DMus-4 (M4)********************************************
				{	
					id: 14,
					name: 'SLKR & First Order',
					toons: ['gl_kylo', 'first_order_officer', 'kylo_ren_(unmasked)', 'general_hux', 'sith_trooper']

				},
				{
					id: 15,
					name: 'SEE & Wat +3 Sith',
					toons: ['gl_palp', 'wat_tambor', 'unknown', 'unknown', 'unknown'],

				},
				{
					id: 16,
					name: 'Reva led Inquisitors',
					toons: ['thirdsister', 'grand_inquisitor', 'seventh_sister', 'fifth_brother', 'eighth_brother']

				},
				{
					id: 17,
					name: 'EP, Mara & SK +2 Empire/Sith',
					toons: ['emperor_palpatine', 'mara_jade', 'starkiller', 'unknown', 'unknown']
				},
				{
					id: 18,
					name: 'EP & Empire',
					toons: ['emperor_palpatine', 'admiral_piett', 'grand_admiral_thrawn', 'royal_guard', 'stormtrooper']
				},
				{
					id: 19,
					name: "Trench & Separatists",
					toons: ['admiral_trench', 'nute_gunray', 'count_dooku', 'jango_fett', 'geonosian_brood_alpha']
				},

				//DMus-5 (M6)********************************************
				{
					id: 20,
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
				"Deal Physical damage to all enemies and inflict Ability Block for 1 turn.\n\n",
				"+35% Damage.\n\n",
				"+30 Cooldown Speed."
			],

			modifiers: [
				"Whenever a character/ship uses an ability, inflict Burning on them for 1 turn, which can't be evaded or resisted."
			],

			notes: [
				'With Lord Vader\'s ultimate ability, this can be done on full auto as long as his mods are good.'
			],

			reqs: [
				'Lord Vader (Relic 5+)',
				'5x Dark Side or Neutral (Relic 5+)',
				'Dark Side Ships (7⭐) | Scythe'
			],

			missionId: [
				'DMus-1 (M1)',
				'DMus-2 (M2)',
				'DMus-3 (M3)',
				'DMus-4 (M4)',
				'DMus-5 (M6)',
			],
	
			missions: [{	
			//DMus-2
				id: 1,
				missionId: [1],
				name: 'M1',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(100,000 TP)',
				wave2Points: '\n(200,000 TP)',
				recommendedSquads: [0],
				enemyWaves: [1],
				reqs: [0],
				notes: [0],
				modifiers: [0]
			},
			{
			//DMus-1
				id: 0,
				missionId: [0],
				name: 'M2',
				type: 'usual',
				position: 'right',
				wave1Points: '\n(100,000 TP)',
				wave2Points: '\n(200,000 TP)',
				recommendedSquads: [1, 2, 3, 4, 5, 6],
				enemyWaves: [0],
				reqs: [1],
				modifiers: [0]
			},
			{//DMus-3
				id: 2,
				missionId: [2],
				name: 'M3',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(100,000 TP)',
				wave2Points: '\n(200,000 TP)',
				recommendedSquads: [7, 8, 9, 10, 11, 12, 13],
				enemyWaves: [2],
				reqs: [1],
				modifiers: [0]
			},
			{//DMus-4
				id: 4,
				missionId: [3],
				name: 'M4',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(100,000 TP)',
				wave2Points: '\n(200,000 TP)',
				recommendedSquads: [14, 15, 16, 17, 18, 19],
				enemyWaves: [3],
				reqs: [1],
				modifiers: [0]
			},

			{//DMus-5
				id: 5,
				missionId: [4],
				name: 'M6',
				type: 'fleet',
				position: 'right',
				rewards: '',
				wave1Points: '\n(400,000 TP)',
				recommendedSquads: [20],
				enemyWaves: [4],
				reqs: [2],
				modifiers: [0]
			},
			{
				id: 6,
				name: 'DP',
				type: 'deploy',
				position: 'right',
				stars: [
					'⭐: 116,406,250',
					'⭐⭐: 186,250,000',
					'⭐⭐⭐: 248,333,333'
				]
			},
			{
				id: 7,
				name: 'OP',
				type: 'mustafar',
				position: 'right',
				preqs: ["Characters: Relic 5+", "Ships: 7⭐"],
				platoonAbility: [0],
				platzones: [0, 1, 2]
			}
			],

			defaultPath: '../media/map_ui/mission_',

			selectedMission: '',
			index: 0,
			seen: false,
		}
	},
	template: '#mission',

	methods: {
		mq() {
			this.isMobile = window.matchMedia('(max-width: 600px)').matches;
		},
		hide: function () {
			this.seen = false;
		},
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
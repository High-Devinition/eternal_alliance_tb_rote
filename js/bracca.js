/* Custom directive for detecting click outside of element */
/*Vue.directive('click-outside', {
	bind: function (el, binding, vnode) {
		this.event = function (event) {
		if (!(el == event.target || el.contains(event.target))) {
			vnode.context[binding.expression](event);
		}
	};
	document.body.addEventListener('click', this.event)
	},
	unbind: function (el) {
		document.body.removeEventListener('click', this.event)
	},
});
	*/
Vue.component('mission', {
	data: function () {
		return {
			isMobile: false,

			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//DMus-1 (M2)********************************************
				{
					id: 0,
					name: 'Lord Vader (Solo)',
					toons: ['gl_vader'],
					video: "https://youtu.be/S88QWy8_nMg?t=1899"
				},

				//DMus-2 (M1)********************************************
				{
					id: 1,
					name: 'SEE+Wat+3 Sith',
					toons: ['gl_palp', 'wat_tambor', 'unknown', 'unknown', 'unknown'],

				},

				//DMus-3 (M3)********************************************
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
				//DMus-4 (M5)********************************************
				{
					id: 5,
					name: 'SLKR & FO',
					toons: ['gl_kylo', 'first_order_officer', 'kylo_ren_(unmasked)', 'general_hux', 'sith_trooper']

				},

				{
					id: 81,
					name: 'Cere and Jedi Cal',
					toons: ['cere_junda', 'jedi_cal', 'noone', 'noone', 'noone']
				},

				//DMus-5 (M6)********************************************
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
				"Deal Physical damage to all enemies, Dispel all buffs on them and remove 30% Turn Meter. In addition, inflict Defense Down on target enemy for 3 turns.\n\n",
				"+35% Damage.\n\n",
				"+30 Cooldown Speed"
			],

			modifiers: [
				'At the beginning of battle, each side summons a random Corellian Engineering Cargo Ship. At the start of their turn, Cargo Ships gain Protection Over Time (10%) for 1 turn.',
				'Coaxium:\n\n +25% Critical Damage and Speed; -15% Accuracy; will be critically hit if able; enemies can ignore Taunt to target this character; if this character is defeated by a status effect, Coaxium will not be granted to anyone',
				'Enemies start with 5 stacks of Endless Ranks',
				"Summons probe droids whenever available."
			],

			notes: [
				"Rey is likely a 1/2. Rey 501st can also work.",
				"Ninth Sister's lead prevents speed limiting effects e.g. jkl",
				"This mission needs to be completed 30 times (throughout each event) in order to unlock the bonus planet, Zeffo."
			],

			reqs: [
				'Light Side Ships (7⭐)',
				"5x Jedi (Relic 6+)",
				"5x Light Side or Neutral (Relic 6+)",
				"Cere Junda (Relic 7+), Any Cal Kestis (Relic 7+)"
			],

			missions: [{
				id: 0,
				name: 'M1',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(125,000 TP)',
				wave2Points: '\n(250,000 TP)',
				recommendedSquads: [76, 79, 78, 77, 80],//generic
				enemyWaves: [39, 42],
				modifiers: [2, 3],
				reqs: [13],
			}, {
				id: 1,
				name: 'M2',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(125,000 TP)',
				wave2Points: '\n(250,000 TP)',
				recommendedSquads: [75],//jedi
				enemyWaves: [39, 40],
				modifiers: [2, 3],
				reqs: [12],
				notes: [5],
			}, {
				id: 2,
				name: 'M3',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(125,000 TP)',
				wave2Points: '\n(250,000 TP)',
				recommendedSquads: [76, 79, 78, 77, 80],//generic
				enemyWaves: [39, 41],
				reqs: [13],
				modifiers: [2, 3],
			},
			{
				id: 4,
				name: 'M4',
				type: 'special3',
				position: 'right',
				rewards: '',
				territoryPoints: [
					'Wave 1: 50 GET2',
				],
				recommendedSquads: [81],//special
				enemyWaves: [43, 44],
				modifiers: [2, 3],
				reqs: [14],
				notes: [6]
			},
			{
				id: 5,
				name: 'M6',
				type: 'fleet',
				position: 'right',
				rewards: '',
				wave1Points: '\n(500,000 TP)',
				recommendedSquads: [74],
				enemyWaves: [38],
				reqs: [11],
			},
			{
				id: 6,
				name: 'DP',
				type: 'deploy',
				position: 'right',
				stars: [
					'⭐: 142,265,625',
					'⭐⭐: 227,625,000',
					'⭐⭐⭐: 303,500,000'
            ]
			}, 
			{ id: 30, name: 'OP', type: 'bracca', position: 'right', preqs: ["Characters: Relic 6","Ships: 7⭐"], platoonAbility: [0], platzones: [0, 1 ,2]}
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

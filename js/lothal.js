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
				//LLot-1 (M1)********************************************
				{
					id: 0,
					name: 'JMK & Galactic Republic',
					toons: ['gl_kenobi', 'unknown', 'unknown', 'unknown', 'unknown'],
				},
				{
					id: 1,
					name: 'JML & JKL +3 Jedi',
					toons: ['gl_luke', 'jedi_knight_luke_skywalker', 'unknown', 'unknown', 'unknown'],
				},
				{
					id: 2,
					name: "Jedi Cal & JML +3 Jedi",
					toons: ['jedi_cal', 'gl_luke', 'unknown', 'unknown', 'unknown']
				},
				{
					id: 3,
					name: 'CLS',
					toons: ['commander_luke_skywalker', 'chewbacca', 'han_solo', 'threepio_&_chewie', 'c-3po'],
				},
				{
					id: 4,
					name: 'oRolo +4 Rebels',
					toons: ['rolo', 'unknown', 'unknown', 'unknown', 'unknown']
				},

				//LLot-2 (M2)********************************************

				{
					id: 5,
					name: 'JML & JKL +3 Jedi',
					toons: ['gl_luke', 'jedi_knight_luke_skywalker', 'unknown', 'unknown', 'unknown'],
				},
				{
					id: 6,
					name: "Jedi Cal & JML +3 Jedi",
					toons: ['jedi_cal', 'gl_luke', 'unknown', 'unknown', 'unknown']
				},

				//LLot-3 (M3)********************************************
				{
					id: 7,
					name: 'Phoenix',
					toons: ['hera_syndulla', 'captain_rex', 'ezra_bridger', 'sabine_wren', 'kanan_jarrus']
				},


				//LLot-4 (M6)********************************************
				{
					id: 8,
					name: 'Profundity fleet',
					toons: ['profundity', 'rebel_y-wing', 'outrider', 'han\'s_millennium_falcon', 'biggs_darklighter\'s_x-wing', 'phantom_ii', 'ghost', 'cassian\'s_u-wing']

				},
				{
					id: 9,
					name: 'Negotiator fleet',
					toons: ['negotiator', 'anakin\'s_eta-2_starfighter', 'BTL-B_Y-wing_Starfighter', 'umbaran_starfighter', 'ahsoka_tano\'s_jedi_starfighter', 'plo_koon\'s_jedi_starfighter', 'clone_sergeant\'s_arc-170', 'rex\'s_arc-170']
				},

			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [
				{
					id: 0,
					missionId: 'M1',
					wave1: ['stormtrooper_commander', 'recon_stormtrooper', 'scout_trooper', 'stormtrooper', 'scout_trooper'],
					wave2: ['imperial_officer', 'stormtrooper_commander', 'recon_stormtrooper', 'scout_trooper', 'stormtrooper', 'scout_trooper']
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['stormtrooper_commander', 'recon_stormtrooper', 'scout_trooper', 'stormtrooper', 'scout_trooper'],
					wave2: ['imperial_officer', 'stormtrooper_commander', 'recon_stormtrooper', 'scout_trooper', 'stormtrooper', 'scout_trooper']
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['stormtrooper_commander', 'recon_stormtrooper', 'scout_trooper', 'stormtrooper', 'scout_trooper'],
					wave2: ['grand_admiral_thrawn', 'death_trooper', 'stormtrooper_commander', 'death_trooper', 'stormtrooper']
				},
				{
					id: 3,
					missionId: 'M6',
					wave1: ['chimaera', 'tie_advanced_x1', 'imperial_tie_bomber', 'imperial_tie_fighter', 'tie_interceptor'],
				},

			],

		platoons: [
			"All allies have +30% Critical Chance and Critical Damage and a 35% chance to Daze the target with their first attack each turn\n\n",
			"Add allies gain Advantage for 2 turns at the start of their turn\n\n",
			"Add whenever an ally critically hits on their turn, call a random ally to assist"
		],

		modifiers: [
			'At the start of the battle, Imperial Troopers gain 1 stack of Endless Ranks for each Imperial Trooper ally.\n\nEndless Ranks:\n\n When defeated, remove 1 stack of Endless Ranks from all Imperial Trooper allies and they revive with 60% Health and Protection.\n\n',
			"Whenever an ally uses a special ability during their turn, call a random other ally to assist. Whenever a character attacks out of turn, they gain a stack of Rebellious, which can't be copied, dispelled, or prevented. At 20 stacks of Rebellious, they gain an additional 30% Offense.\n\nRebellious:\n\n +2 % Critical Chance and Critical Damage(stacking, max 20).",
			"Whenever a ship has 4 or more buffs, they are inflicted with Breach and Expose for 1 turn. These effects can't be resisted."
		],

        notes:[

		],

        reqs:[
			"5x Light Side or Neutral (Relic 8+)",
			"5x Jedi (Relic 8+)",
			'5x Pheonix (Relic 8+)',
			"Light Side Ships (7⭐)",
		],

		missionId: [
			'LLot-1 (M1)',
			'LLot-2 (M2)',
			'LLot-3 (M3)',
			'LLot-4 (M6)',
		],

		missions: [{
			//LLot-1
			id: 0,
			missionId: [0],
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(219,375 TP)',
			wave2Points: '\n(493,594 TP)',
            recommendedSquads: [0, 1, 2, 3, 4],//generic
			enemyWaves: [0],
            modifiers: [0, 1],
            reqs: [0],
			},
			//LLot-2
			{
			id: 1,
			missionId: [1],
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(219,375 TP)',
			wave2Points: '\n(493,594 TP)',
			recommendedSquads: [5, 6],//jedi
			enemyWaves: [1],
			modifiers: [0, 1],
            reqs: [1],
			},
			//LLot-3
			{
			id: 2,
			missionId: [2],
			name: 'M3',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(219,375 TP)',
			wave2Points: '\n(493,594 TP)',
            recommendedSquads: [7],//phoenix
			enemyWaves: [2],
            reqs: [2],
            modifiers: [0, 1],
			},
			//LLot-4
			{
			id: 5,
			missionId: [3],
			name: 'M6',
			type: 'fleet',
			position: 'right',
			wave1Points: '\n(987,188 TP)',
			recommendedSquads: [8, 9],//fleet
			enemyWaves: [3],
			reqs: [3],
			modifiers: [2],
			}, 
            {
			id: 6,
			name: 'DP',
			type: 'deploy',
			position: 'right',
            stars: [
               '⭐ 246,742,558',
               '⭐⭐ 419,987,333',
               '⭐⭐⭐ 524,984,167'              
            ]
			}, 
			{
			id: 7,
			name: 'OP',
			type: 'lothal',
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

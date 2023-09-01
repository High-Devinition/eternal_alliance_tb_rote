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
				//LBra-1 (M1)********************************************
				{
					id: 0,
					name: 'JML & JKL +3 Jedi',
					toons: ['gl_luke', 'jedi_knight_luke_skywalker', 'hermit_yoda', 'jedi_knight_revan', 'unknown'],
				},
				{
					id: 1,
					name: "Jedi Cal & JML +3 Jedi",
					toons: ['jedi_cal', 'gl_luke', 'unknown', 'unknown', 'unknown']
				},

				//LBra-2 (M2)********************************************
				{
					id: 2,
					name: 'JMK & CAT',
					toons: ['gl_kenobi', 'commander_ahsoka_tano', 'padmé_amidala', 'ahsoka_tano', 'general_kenobi']
				},
				{
					id: 3,
					name: "MM+Cara (+oKyle helps) +2 Rebels",
					toons: ['mon_mothma', 'cara_dune', 'kyle_katarn_o', 'unknown', 'unknown']
				},
				{
					id: 4,
					name: 'oRolo +4 Rebels',
					toons: ['rolo', 'unknown', 'unknown', 'unknown', 'unknown']
				},

				//LBra-3 (M3)********************************************
				{
					id: 5,
					name: 'JMK & CAT',
					toons: ['gl_kenobi', 'commander_ahsoka_tano', 'padmé_amidala', 'ahsoka_tano', 'general_kenobi']
				},
				{
					id: 6,
					name: "MM+Cara (+oKyle helps) +2 Rebels",
					toons: ['mon_mothma', 'cara_dune', 'kyle_katarn_o', 'unknown', 'unknown']
				},
				{
					id: 7,
					name: 'oRolo +4 Rebels',
					toons: ['rolo', 'unknown', 'unknown', 'unknown', 'unknown']
				},
				//LBra-4 (M4)********************************************

				{
					id: 8,
					name: 'Cere & Jedi Cal',
					toons: ['cere_junda', 'jedi_cal', 'noone', 'noone', 'noone']
				},

				//LBra-5 (M6)********************************************
				{
					id: 9,
					name: 'Profundity fleet',
					toons: ['profundity', 'rebel_y-wing', 'outrider', 'han\'s_millennium_falcon', 'biggs_darklighter\'s_x-wing', 'phantom_ii', 'ghost', 'cassian\'s_u-wing']
				},





			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [

				{
					id: 0,
					missionId: 'M1',
					wave1: ['stormtrooper_commander', 'purgetrooper', 'stormtrooper', 'purgetrooper', 'recon_stormtrooper'],
					wave2: ['secondsister_enemy', 'purgetrooper', 'stormtrooper', 'purgetrooper', 'purgetrooper'],
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['stormtrooper_commander', 'purgetrooper', 'stormtrooper', 'purgetrooper', 'recon_stormtrooper',],
					wave2: ['ninth_sister', 'purgetrooper', 'stormtrooper', 'purgetrooper', 'purgetrooper'],
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['stormtrooper_commander', 'purgetrooper', 'stormtrooper', 'purgetrooper', 'recon_stormtrooper'],
					wave2: ['crosshair', 'purgetrooper', 'stormtrooper_commander', 'stormtrooper', 'purgetrooper'],
				},
				{
					id: 3,
					missionId: 'M4',
					wave1: ['purgetrooper', 'purgetrooper'],
					wave2: ['secondsister_enemy', 'purgetrooper'],
				},
				{
					id: 4,
					missionId: 'M6',
					wave1: ['chimaera', 'tie_advanced_x1', 'scythe', 'imperial_tie_fighter', 'tie_interceptor'],
				},
			],	

			platoons: [
				"Deal Physical damage to all enemies, Dispel all buffs on them and remove 30% Turn Meter. In addition, inflict Defense Down on target enemy for 3 turns.\n\n",
				"+35% Damage.\n\n",
				"+30 Cooldown Speed"
			],

			modifiers: [
				'At the start of the battle, Imperial Troopers gain 1 stack of Endless Ranks for each Imperial Trooper ally.\n\nEndless Ranks:\n\n When defeated, remove 1 stack of Endless Ranks from all Imperial Trooper allies and they revive with 60% Health and Protection.\n\n',
				"Imperial Troopers will summon an Imperial Probe Droid with Taunt if the allied slot is available.",
				"The first time a ship is reduced to 1% Health (excluding summoned ships), it recovers 100% Health and Protection, and gains Decommissioned until the end of the encounter, which can't be dispelled or prevented.\n\n If a ship is inflicted with Decommisioned at the start of its turn, it is destroyed, and all other allies gain 20% Max Health, Max Protection, and Offense (stacking) until the end of the encounter.\n\nDecommissioned:\n\n -50% Speed; can't assist, counter attack, gain bonus Turn Meter or buffs.",
				"Whenever an ally defeats an enemy, all enemies are inflicted with 5 stacks of Fatigue. At 20 stacks of Fatigue, Inquisitorius allies gain Coup De Grâce, which can't be copied, dispelled, or prevented.\n\nFatigue:\n\n -2% Speed and -2% Tenacity\n\nCoup De Grâce:\n\n On the next Special attack, deal true damage equal to 100% of the target's Max Health and dispel Coup De Grâce from all Inquisitorius allies and dispel fatigue from all enemies.\n\n"
			],

			notes: [
				"This mission needs to be completed 30 times (throughout each event) in order to unlock the bonus planet, Zeffo."
			],

			reqs: [
				'Light Side Ships (7⭐)',
				"5x Jedi (Relic 6+)",
				"5x Light Side or Neutral (Relic 6+)",
				"Cere Junda (Relic 7+) | Cal Kestis or Jedi Cal (Relic 7+)"
			],

			missionId: [
				'LBra-1 (M2)',
				'LBra-2 (M1)',
				'LBra-3 (M3)',
				'Cal SM-1 (M4)',
				'LBra-4 (M6)',
			],

			missions: [{
				//LBra-2
				id: 0,
				missionId: [1],
				name: 'M1',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(125,000 TP)',
				wave2Points: '\n(250,000 TP)',
				recommendedSquads: [2, 3, 4],//generic
				enemyWaves: [0],
				modifiers: [0, 1],
				reqs: [0],

			}, //LBra-1

			{
				id: 1,
				missionId: [0],
				name: 'M2',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(125,000 TP)',
				wave2Points: '\n(250,000 TP)',
				recommendedSquads: [0, 1],//jedi
				enemyWaves: [1],
				modifiers: [0, 1],
				reqs: [1],

			}, //LBra-3

			{
				id: 2,
				missionId: [2],
				name: 'M3',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(125,000 TP)',
				wave2Points: '\n(250,000 TP)',
				recommendedSquads: [5, 6, 7],//generic
				enemyWaves: [2],
				reqs: [0],
				modifiers: [0, 1],

			}, //Cal SM-1

			{
				id: 4,
				missionId: [3],
				name: 'M4',
				type: 'special3',
				position: 'right',
				rewards: [
					'50',//GET2
				],
				recommendedSquads: [8],//special
				enemyWaves: [3],
				modifiers: [3, 1],
				reqs: [3],
				notes: [0],

			}, //LBra-4

			{
				id: 5,
				missionId: [4],
				name: 'M6',
				type: 'fleet',
				position: 'right',
				rewards: '',
				wave1Points: '\n(500,000 TP)',
				recommendedSquads: [9],
				enemyWaves: [4],
				reqs: [0],
				modifiers: [2],
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
			{
				id: 30,
				name: 'OP',
				type: 'bracca',
				position: 'right',
				preqs: ["Characters: Relic 6+", "Ships: 7⭐"],
				platoonAbility: [0],
				platzones: [0, 1, 2],
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

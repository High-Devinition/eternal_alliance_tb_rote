
Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,

			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//LKas-1 (M1)********************************************
				{
					id: 0,
					name: 'JML & JKL +3 Jedi',
					toons: ['gl_luke', 'jedi_knight_luke_skywalker', 'unknown', 'unknown', 'unknown'],
				},
				{
					id: 1,
					name: "Jedi Cal & JML +3 Jedi",
					toons: ['jedi_cal', 'gl_luke', 'unknown', 'unknown', 'unknown']
				},
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
				{
					id: 5,
					name: 'JTR & Resistance',
					toons: ['rey_(jedi_training)', 'c-3po', 'r2-d2', 'finn', 'bb-8'],
				},

				//LKas-2 (M2)********************************************
				{
					id: 6,
					name: 'JML & JKL +3 Jedi',
					toons: ['gl_luke', 'jedi_knight_luke_skywalker', 'unknown', 'unknown', 'unknown'],
				},
				{
					id: 7,
					name: "Jedi Cal & JML +3 Jedi",
					toons: ['jedi_cal', 'gl_luke', 'unknown', 'unknown', 'unknown']
				},
				{
					id: 8,
					name: 'JMK & CAT',
					toons: ['gl_kenobi', 'commander_ahsoka_tano', 'padmé_amidala', 'ahsoka_tano', 'general_kenobi']
				},
				{
					id: 9,
					name: "MM+Cara (+oKyle helps) +2 Rebels",
					toons: ['mon_mothma', 'cara_dune', 'kyle_katarn_o', 'unknown', 'unknown']
				},
				{
					id: 10,
					name: 'oRolo +4 Rebels',
					toons: ['rolo', 'unknown', 'unknown', 'unknown', 'unknown']
				},


				//LKas-3 (M3)********************************************
				{
					id: 11,
					name: 'Tarfful lead Wookies',
					toons: ['tarfful', 'chewbacca', 'vandor_chewbacca', 'threepio_&_chewie', 'zaalbar']
				},

				//Saw SM-1 (M4)********************************************

				{
					id: 12,
					name: 'Saw & Rebel Fighters',
					toons: ['saw_gerrera', 'unknown', 'unknown', 'unknown', 'unknown']
				},

				//LKas-4 (M6)********************************************
				{
					id: 13,
					name: 'Profundity fleet',
					toons: ['profundity', 'rebel_y-wing', 'outrider', 'han\'s_millennium_falcon', 'biggs_darklighter\'s_x-wing', 'phantom_ii', 'ghost', 'cassian\'s_u-wing']
				},


			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [

				{
					id: 0,
					missionId: 'M1',
					wave1: ['stormtrooper_commander', 'recon_stormtrooper', 'stormtrooper', 'scout_trooper'],
					wave2: ['imperial_officer', 'stormtrooper_commander', 'recon_stormtrooper', 'tie_fighter_pilot', 'stormtrooper', 'scout_trooper'],
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['stormtrooper_commander', 'recon_stormtrooper', 'stormtrooper', 'scout_trooper'],
					wave2: ['mara_jade', 'purgetrooper', 'stormtrooper_commander', 'purgetrooper', 'recon_stormtrooper', 'stormtrooper'],
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['stormtrooper_commander', 'stormtrooper', 'recon_stormtrooper', 'scout_trooper'],
					wave2: ['ninth_sister', 'purgetrooper', 'purgetrooper'],
				},
				{
					id: 3,
					missionId: 'M4',
					wave1: ['atst_driver', 'purgetrooper', 'purgetrooper', 'imperial_officer', 'recon_stormtrooper'],
					wave2: ['stormtrooper_commander', 'recon_stormtrooper', 'atst_driver', 'purgetrooper', 'imperial_officer'],
				},
				{
					id: 4,
					missionId: 'M6',
					wave1: ['executrix', 'tie_advanced_x1', 'scythe', 'imperial_tie_fighter', 'tie_interceptor'],
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
			"Whenever a unit takes damage, they gain 20% Critical Damage (stacking) until they score a critical hit.\n\n",
			"Whenever a unit is debuffed, they recover 10% Protection.\n\n",
			"Whenever a unit is defeated, another random ally takes a bonus turn.\n\n",
			"Imperial Troopers will summon an Imperial Probe Droid with Taunt if the allied slot is available.\n\n",
			"At the start of the encounter, increase the cooldown of Call Reinforcements by 1 on all Capital Ships."
			],

        notes:[

			],

        reqs:[
			"5x Light Side or Neutral (Relic 7+)",
			"5x Light Side Wookiees (Relic 7+)",
			"Light Side Ships (7⭐) | Profundity",
			"Rebel Fighter (Relic 7+) | Saw Gerrera",
			],

		missionId: [
			'LKas-1 (M1)',
			'LKas-2 (M2)',
			'LKas-3 (M3)',
			'Saw SM-1 (M4)',
			'LKas-4 (M6)',
		],

		missions: [{
			//LKas-1
			id: 1,
			missionId: [1],
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
			recommendedSquads: [0, 1, 2, 3, 4, 5],//gen
			enemyWaves: [0],
			modifiers: [0, 1, 2, 3],
			reqs: [0],
			}, 

			{
			//LKas-2
			id: 2,
			missionId: [1],
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
			recommendedSquads: [6, 7, 8, 9, 10],//mara
			enemyWaves: [1],
			modifiers: [0, 1, 2, 3],
            reqs: [0],
			},

			{
			//LKas-3
			id: 3,
			missionId: [1],
			name: 'M3',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
			recommendedSquads: [11],//wookies
			enemyWaves: [2],
            reqs: [1],
            modifiers: [0, 1, 2, 3],
			},

			{
			//Saw SM-1
			id: 4,
			missionId: [1],
			name: 'M4',
			type: 'special2',
			position: 'right',
			rewards: [
				'50',
			],
			recommendedSquads: [12],//saw
			enemyWaves: [3],
			modifiers: [0, 1, 2, 3],
			reqs: [3],
			}, 

			{
			//LKas-4
			id: 5,
			missionId: [1],
			name: 'M6',
			type: 'fleet',
			position: 'right',
			wave1Points: '\n(682,500 TP)',
			recommendedSquads: [13],
			enemyWaves: [4],
			reqs: [2],
			modifiers: [4],
			},

            {
			id: 6,
			name: 'DP',
			type: 'deploy',
			position: 'right',
            stars: [
               '⭐ 190,953,125',
               '⭐⭐ 305,525,000',
               '⭐⭐⭐ 407,366,667'
            ]
			}, 

			{
			id: 7,
			name: 'OP',
			type: 'kashyyyk',
			position: 'right',
			preqs: ["Characters: Relic 7", "Ships: 7⭐"],
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
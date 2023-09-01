
Vue.component('mission', {
	data: function () {
		return {
			isMobile: false,

			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//LCor-1 (M2)********************************************
				{
					id: 0,
					name: 'JML & JKL +3 Jedi',
					toons: ['gl_luke', 'jedi_knight_luke_skywalker', 'hermit_yoda', 'jedi_knight_revan', 'jolee_bindo'],
				},
				{
					id: 1,
					name: "Jedi Cal & JML +3 Jedi",
					toons: ['jedi_cal', 'gl_luke', 'unknown', 'unknown', 'unknown']
				},

				//LCor-2 (M1)********************************************
				{
					id: 2,
					name: "Mace Windu/Kit Fisto",
					toons: ['mace_windu', 'kit_fisto', 'shaak_ti', 'grand_master_yoda', 'ki-adi-mundi']

				},

				//LCor-3 (M3)********************************************
				{
					id: 3,
					name: 'JMK & CAT',
					toons: ['gl_kenobi', 'commander_ahsoka_tano', 'padmé_amidala', 'ahsoka_tano', 'general_kenobi']
				},
				{
					id: 4,
					name: "Rey & Ben +3 Scoundrels",
					toons: ['gl_rey', 'ben_solo', 'beskar_mando', 'dash_rendar', 'l3-37']
				},
				{
					id: 5,
					name: 'GAS 501st (+Ahsoka helps)',
					toons: ['general_skywalker', 'ahsoka_tano', 'arc_trooper', 'rex', 'fives']
				},
				{
					id: 6,
					name: "Mon Mothma & 4 Rebel Fighters (+oKyle helps)",
					toons: ['mon_mothma', 'cara_dune', 'kyle_katarn_o', 'unknown', 'unknown']
				},
				{
					id: 7,
					name: 'CLS',
					toons: ['commander_luke_skywalker', 'chewbacca', 'han_solo', 'threepio_&_chewie', 'c-3po'],
				},
				{
					id: 8,
					name: 'Padmé & Galactic Republic',
					toons: ['padmé_amidala', 'jedi_knight_anakin', 'ahsoka_tano', 'c-3po', 'general_kenobi'],
				},
				{
					id: 9,
					name: 'oRolo +4 Rebels',
					toons: ['rolo', 'unknown', 'unknown', 'unknown', 'unknown']
				},
				//LCor-4 (M5)********************************************
				{
					id: 10,
					name: 'JMK & CAT',
					toons: ['gl_kenobi', 'commander_ahsoka_tano', 'padmé_amidala', 'ahsoka_tano', 'general_kenobi']
				},
				{
					id: 11,
					name: "Rey & Ben +3 Scoundrels",
					toons: ['gl_rey', 'ben_solo', 'beskar_mando', 'dash_rendar', 'l3-37']
				},
				{
					id: 12,
					name: 'GAS 501st (+Ahsoka helps)',
					toons: ['general_skywalker', 'ahsoka_tano', 'arc_trooper', 'rex', 'fives']
				},
				{
					id: 13,
					name: "Mon Mothma & 4 Rebel Fighters (+oKyle helps)",
					toons: ['mon_mothma', 'cara_dune', 'kyle_katarn_o', 'unknown', 'unknown']
				},
				{
					id: 14,
					name: 'CLS',
					toons: ['commander_luke_skywalker', 'chewbacca', 'han_solo', 'threepio_&_chewie', 'c-3po'],
				},
				{
					id: 15,
					name: 'Padmé & Galactic Republic',
					toons: ['padmé_amidala', 'jedi_knight_anakin', 'ahsoka_tano', 'c-3po', 'general_kenobi'],
				},
				{
					id: 16,
					name: 'oRolo +4 Rebels',
					toons: ['rolo', 'unknown', 'unknown', 'unknown', 'unknown']
				},
				//LCor-5 (M6)********************************************
				{
					id: 17,
					name: 'Profundity fleet',
					toons: ['profundity', 'rebel_y-wing', 'outrider', 'han\'s_millennium_falcon', 'biggs_darklighter\'s_x-wing', 'phantom_ii', 'ghost', 'cassian\'s_u-wing']

				},
				{
					id: 18,
					name: 'Negotiator fleet',
					toons: ['negotiator', 'anakin\'s_eta-2_starfighter', 'BTL-B_Y-wing_Starfighter', 'umbaran_starfighter', 'ahsoka_tano\'s_jedi_starfighter', 'plo_koon\'s_jedi_starfighter', 'clone_sergeant\'s_arc-170', 'rex\'s_arc-170']
				},

			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [

				{
					id: 0,
					missionId: 'M1',
					wave1: ['clone_commander', 'clone_medic', 'royal_guard', 'clone_sharpshooter', 'royal_guard'],
					wave2: ['darth_sidious', 'anakin_fallen', 'royal_guard', 'clone_sharpshooter', 'clone_medic', 'royal_guard']
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['clone_commander', 'clone_arc', 'clone_medic', 'clone_trooper', 'clone_sharpshooter'],
					wave2: ['gl_vader', 'clone_commander', 'clone_arc', 'clone_medic', 'clone_sharpshooter']
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['clone_commander', 'clone_arc', 'clone_medic', 'clone_trooper', 'clone_sharpshooter'],
					wave2: ['clone_commander', 'clone_medic','clone_arc', 'clone_medic', 'clone_trooper', 'clone_sharpshooter']
				},
				{
					id: 3,
					missionId: 'M5',
					wave1: ['clone_commander', 'clone_arc', 'clone_medic', 'clone_trooper', 'clone_sharpshooter'],
					wave2: ['clone_commander', 'clone_medic', 'clone_arc', 'clone_medic', 'clone_trooper', 'clone_sharpshooter']
				},
				{
					id: 4,
					missionId: 'M6',
					wave1: ['endurance', 'BTL-B_Y-wing_Starfighter', 'rex\'s_arc-170', 'clone_sergeant\'s_arc-170'],
				},
			],
	
		platoons: [
			"Jedi allies have +40% Tenacity and a 40% chance to gain Foresight for 2 turns at the start of their turn.\n\n",
			"Add +25% Tenacity and +20% Critical Avoidance\n\n",
			"Add +25% Tenacity and +20% Critical Avoidance"
			],

        modifiers:[
			'If the allied Leader would be defeated, a random Clone Trooper ally is defeated instead.\n\n',
			"All characters gain the Democracy granted ability.\n\n" + "Democracy:\n\n Whenever an ally gains a buff or inflicts a debuff on an enemy, increase all ally's energy by 5%. At 100%, inflict 1 stack of No Confidence on the enemy Leader and Stun them for 1 turn. When the enemy Leader reaches 3 stacks of No Confidence, they are instantly defeated.\n\n",
			"At the start of battle, a random ship is inflicted with Marked until they receive damage. Whenever a ship is Marked, all other ships gain Taunt for the rest of the encounter. Whenever a ship inflicted with Marked is attacked (excluding the Capital Ship), the attacking ship is inflicted with Marked for the rest of the encounter.",//5
			],

        notes:[
			"Utilize the Democracy ability whenever possible to overwhelm the enemy team. Focus Clone Medic(s) to prevent revives!\n\n"
			],

        reqs:[
			'5x Light Side or Neutral (Relic 5+)',
			'5x Jedi (Relic 5+) | Mace Windu, Kit Fisto',
			'5x Jedi (Relic 5+)',
			'Light Side Ships (7⭐) | Outrider'
        ],

        missionId: [
			'LCor-1 (M2)',
            'LCor-2 (M1)',
            'LCor-3 (M3)',
            'LCor-4 (M5)',
            'LCor-5 (M6)',
            ],

		missions: [{
		//LCor-2
			id: 0,
			missionId: [1],
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(100,000 TP)',
			wave2Points: '\n(200,000 TP)',
            recommendedSquads: [2],//mace
			enemyWaves: [0],
			modifiers: [0,1],
            reqs: [1],
            notes: [0]
		},
		{//LCor-1
			id: 1,
			missionId: [0],
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(100,000 TP)',
			wave2Points: '\n(200,000 TP)',
			recommendedSquads: [0, 1],//jedi
			enemyWaves: [1],
			modifiers: [0,1],
            reqs: [2],
            notes: [0]
		},
		{//LCor-3
			id: 2,
			missionId: [2],
			name: 'M3',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(100,000 TP)',
			wave2Points: '\n(200,000 TP)',
            recommendedSquads: [3, 4, 5, 6, 7, 8, 9],//generic
			enemyWaves: [2],
            reqs: [0],
            modifiers: [0, 1],
            notes: [0]
		},
		{//LCor-4
			id: 4,
			missionId: [3],
			name: 'M5',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(100,000 TP)',
			wave2Points: '\n(200,000 TP)',
            recommendedSquads: [10, 11, 12, 13, 14, 15, 16],//generic
			enemyWaves: [3],
            reqs: [0],
            modifiers: [0,1],
            notes: [0]
		}, 			
		{//LCor-5
			id: 5,
			missionId: [4],
			name: 'M6',
			type: 'fleet',
			position: 'right',
			wave1Points: '\n(400,000 TP)',
			recommendedSquads: [17, 18],
			enemyWaves: [4],
			modifiers: [2],
            reqs: [3],
			}, 
            {
			id: 6,
			name: 'DP',
			type: 'deploy',
			position: 'right',
            stars: [
               '⭐ 116,406,250',
               '⭐⭐ 186,250,000',
               '⭐⭐⭐ 248,333,333'
            ]
			}, 
			{
			id: 6,
			name: 'OP',
			type: 'coruscant',
			position: 'right',
			preqs: ["Characters: Relic 5+", "Ships: 7⭐"],
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

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
				//LZef-1 (M1)********************************************
				{
					id: 0,
					name: 'Jedi Cal+4 Jedi',
					toons: ['jedi_cal', 'unknown', 'unknown', 'unknown', 'unknown'],
				},

				//LZef-2 (M2)********************************************
				{
					id: 1,
					name: 'Unaligned Force Users',
					toons: ['cere_junda', 'cal_kestis', 'ahsoka_tano_(fulcrum)', 'rey_(jedi_training)', 'commander_luke_skywalker']
				},

				//LZef-3 (M3)********************************************
				{
					id: 2,
					name: 'Phoenix',
					toons: ['hera_syndulla', 'captain_rex', 'garazeb__zeb__orrelios', 'chopper', 'sabine_wren']
				},
				
				//Clone SM-1 (M4)********************************************

				{
					id: 3,
					name: 'Clone Troopers',
					toons: ['hunter', 'echo', 'tech', 'omega', 'wrecker']
				},

				//LZef-5 (M6)********************************************
				{
					id: 4,
					name: 'Negotiator fleet',
					toons: ['negotiator', 'anakin\'s_eta-2_starfighter', 'BTL-B_Y-wing_Starfighter', 'umbaran_starfighter', 'ahsoka_tano\'s_jedi_starfighter', 'plo_koon\'s_jedi_starfighter', 'clone_sergeant\'s_arc-170', 'rex\'s_arc-170']
				},


			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [

				{
					id: 0,
					missionId: 'M1',
					wave1: ['purgetrooper', 'stormtrooper', 'kxseriesdroid', 'stormtrooper', 'kxseriesdroid', 'imperial_probe_droid'],
					wave2: ['secondsister_enemy', 'purgetrooper', 'purgetrooper'],
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['stormtrooper_commander', 'purgetrooper', 'kxseriesdroid', 'purgetrooper', 'kxseriesdroid', 'imperial_probe_droid'],
					wave2: ['at_st'],
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['miktrull_tomb_guardian', 'eilram_tomb_guardian', 'eilram_tomb_guardian'],
					wave2: ['jedi_general_chiata', 'padawan_marseph'],
				},
				{
					id: 3,
					missionId: 'M4',
					wave1: ['haxionbrooddroid_captain', 'bountyhunter_a', 'bountyhunter_b', 'haxionbroodbountydroid_orange','bountyhunter_b', 'haxionbroodbountydroid_blue'],
					wave2: ['miktrull_tomb_guardian', 'eilram_tomb_guardian', 'eilram_tomb_guardian'],
				},
				{
					id: 4,
					missionId: 'M6',
					wave1: ['malevolence', 'hyena_bomber', 'vulture_droid'],
				},
			],	
             
		platoons: [
			"Grant the target ally Boon of Eilram until the end of battle, which can't be dispelled. \n\nBoon of Eilram:\n\n Gain 10 % Mastery each time an ally uses a Special Ability (Maximum 100 %).\n\n",
			"If an ally already has Boon of Eilram, grant Boon of Eilram and Boon of Miktrull until the end of battle, which can't be dispelled.\n\nBoon of Miktrull:\n\n At the start of this character's turn, grant each ally every non-unique buff they have (excluding Stealth and Taunt) for 2 turns.\n\n",
			"If an ally already has Boon of Miktrull, grant Boon of Eilram, Boon of Miktrull, and Boon of Kujet. If an ally already has Boon of Kujet, grant all allies all three Boons. All Boons last until the end of battle and can't be dispelled. \n\nBoon of Kujet:\n\n At the start of this unit's turn, Stun all enemy units that are below 10% health for 1 turn. When using a basic ability, inflict Massive Damage if the target unit is Stunned.\n\n"
			],

        modifiers:[
			"When a character with Ancient Power Core is damaged by an attack, they lose it and the attacking character gains Ancient Power Core.\n\nAncient Power Core:\n\n Attacking this character Stuns them, which can't be prevented if this character has less than 10% health. The attacker then takes a Bonus Turn.\n\n",
			"Imperial Troopers will summon an Imperial Probe Droid with Taunt if the allied slot is available.\n\n",
			"Whenever a ship uses a Special Ability, (including Capital Ships), increase the cooldown of its other Special Abilities by 1.\n\nWhen a Capital Ship uses Call Reinforcement, the reinforcing ship is inflicted with Shield Disruption for 2 turns, which can't be avoided."
			],

        notes:[
			
			],

		planetNotes: [
			"The special mission on Bracca needs to be completed 30 times (throughout each event) in order to unlock this bonus planet.\n\n" +
			"The prize boxes for the first 2 tiers are treated as stars! If your guild cannot earn the ⭐ on Zeffo in a single phase, you must preload! If your guild earns a prize box in a phase, and nothing else, the zone will be closed in the next phase!"
		],

        reqs:[
			"5x Clone Troopers (Relic 7+)",
			"5x Light Side or Neutral (Relic 7+)",
			"Light Side Ships (7⭐) | Negotiator",
			"5x Light Side or Neutral (Relic 7+) | Jedi Knight Cal Kestis",
			"5x Unaligned Force Users (Relic 7+, Light side only)"
			],

			missionId: [
			'LZef-3 (M1)',
			'LZef-2 (M2)',
			'Clone SM-1 (M3)',
			'LZef-1 (M4)',
			'LZef-4 (M6)',
			],

		missions: [{
			//LZef-3			
			id: 0,
			missionId: [0],
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(487,500 TP)',
			wave2Points: '\n(1,023,750 TP)',
			recommendedSquads: [0],//jkck
			enemyWaves: [0],
			modifiers: [0, 1],
			reqs: [3],
			},
			{
			//LZef-2
			id: 1,
			missionId: [1],
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
			recommendedSquads: [1],//ufu
			enemyWaves: [1],
			modifiers: [0, 1],
            reqs: [4],
			},
			{
			//Clone SM-1
			id: 2,
			missionId: [2],
			name: 'M3',
			type: 'special2',
			position: 'right',
			rewards: [
				'50',
				],
            recommendedSquads: [3],//clone sm
			enemyWaves: [2],
            reqs: [0],
            modifiers: [0],
			},
			{
			//LZef-1
			id: 3,
			missionId: [3],
			name: 'M4',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
			recommendedSquads: [2],//phoenix
			enemyWaves: [3],
			modifiers: [0],
            reqs: [1],
			}, 
			{
			id: 4,
			missionId: [4],
			name: 'M6',
			type: 'fleet',
			position: 'right',
			wave1Points: '\n(682,500 TP)',
			recommendedSquads: [4],
			enemyWaves: [4],
			reqs: [2],
			modifiers: [2]
			},
            {
			id: 5,
			name: 'DP',
			type: 'deploy',
			position: 'right',
            stars: [
               'Tier 1: 143,589,583',
               'Tier 2: 229,743,333',
				'⭐: 287,179,167',
			
			],
			planetRewards1: ['150', '20\n\n'], //GET3 & Kyrotechs
			planetRewards2: ['300', '20'],
            planetNotes: [0]
			}, 

			{
			id: 6,
			name: 'OP',
			type: 'zeffo',
			position: 'right',
			preqs: ["Characters: Relic 7+", "Ships: 7⭐"],
			platoonAbility: [0],
			platzones: [0]
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


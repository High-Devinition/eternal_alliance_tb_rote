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
				//DMal-2 (M1)********************************************
				{
					id: 0,
					name: "Aphra & Her droids (+DV/HK/IG88)+B2",
					toons: ['doctoraphra', 'bt1', 'triplezero', 'darth_vader', 'b2_super_battle_droid'],
				},

				//DMal-1 (M2)********************************************
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

				//DMal-3 (M4)********************************************
				{
					id: 4,
					name: 'SLKR & Wat +3',
					toons: ['gl_kylo', 'wat_tambor', 'unknown', 'unknown', 'unknown'],
				},


				//DMal-4 (M3)********************************************
				{
					id: 5,
					name: 'Lord Vader & Empire',
					toons: ['gl_vader', 'darth_vader', 'admiral_piett', 'royal_guard', 'stormtrooper'],

				},

				//DMal-5 (M5)********************************************
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
			"At the start of battle,inflict Fear for 1 turn on a random enemy, which can't be evaded or resisted.",
			"Instead, inflict Fear on 3 random enemies.",
			"Instead, inflict Fear on all enemies."
		],

        modifiers:[
			"All other allies lose 25% Max Health/Protection. Gain 5% Offense per ally affected this way. Then, gain a bonus turn.",
			"Rebel allies gain 50% Health Steal and can't be countered. Whenever a Rebel's Health drops below 40%, they are inflicted with Cornered, which can't be copied, dispelled, or prevented. When a Rebel ally's Health is above 70%, Cornered is dispelled and they gain 10% Offense (stacking, max 50%) for the rest of the encounter.\n\nCornered:\n\n +30% Offense, calls a random Rebel ally to assist when using an ability, and can't attack out of turn."
		],

        notes:[

		],

        reqs:[
			"Dark Side or Neutral (Relic 9+)",
			"Dark Side or Neutral (Relic 9+) | 8th Brother, 5th Brother, 7th Sister",
        ],

		missionId: [
			'DMal-1 (M2)',
			'DMal-2 (M1)',
			'DMal-3 (M4)',
			'DMal-4 (M3)',
		],

		missions: [{
			id: 0,
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(307,125 TP)',
			wave2Points: '\n(721,744 TP)',
            recommendedSquads: [24],//bl generic
			enemyWaves: [51,52],
            reqs: [21],
            modifiers: [4],
			},	{
			id: 1,
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(307,125 TP)',
			wave2Points: '\n(721,744 TP)',
			recommendedSquads: [24],//tr generic
			enemyWaves: [34],
			modifiers: [4],
            reqs: [21],
			},
            {
			id: 5,
			name: 'M4',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(307,125 TP)',
			wave2Points: '\n(721,744 TP)',
			recommendedSquads: [83],//br inquisitors
			enemyWaves: [49,50],
			modifiers: [4],
            reqs: [22],
			},
			{
			id: 5,
			name: 'M6',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(307,125 TP)',
			wave2Points: '\n(721,744 TP)',
			recommendedSquads: [24],//tl generic
			enemyWaves: [34],
			modifiers: [4],
            reqs: [21],
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
			id: 30,
			name: 'OP',
			type: 'malachor',
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


Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,

			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//DHav-1 (M1), DHav-2 (M2), DHav-4 (M4)********************************************
				{
					id: 0,
					name: "Lord Vader (+Maul works too)",
					toons: ['gl_vader', 'admiral_piett', 'darth_vader', 'royal_guard', 'stormtrooper'],
				},
				{
					id: 1,
					name: "SLKR +4 tanks",
					toons: ['gl_kylo', 'unknown', 'unknown', 'unknown', 'unknown'],
				},
				{
					id: 2,
					name: "SEE, Sith tanks & Wampa +1",
					toons: ['gl_palp', 'darth_malgus', 'darth_malak', 'wampa', 'unknown'],
				},
				{
					id: 3,
					name: "Sith Empire & SEE",
					toons: ['darth_malgus', 'gl_palp', 'darth_revan', 'bastila_shan_(fallen)', 'darth_malak'],
				},
				{
					id: 4,
					name: "Jabba, Hutt Cartel & Sith tanks",
					toons: ['gl_jabba', 'boba_fett', 'krrsantan', 'darth_malgus', 'darth_malak'],
				},
				{
					id: 5,
					name: "Sith Trio & SEE",
					toons: ['darth_traya', 'gl_palp', 'darth_nihilus', 'darth_sion', 'darth_malak'],
				},

				//DHav-3 (M3)********************************************
				{
					id: 6,
					name: 'SEE & Sith Empire',
					toons: ['gl_palp', 'darth_revan', 'darth_malak', 'darth_malgus', 'sith_empire_trooper'],
				},

				//Inq SM-1 (M5)********************************************
				{
					id: 7,
					name: 'Inquisitors',
					toons: ['thirdsister', 'grand_inquisitor', 'seventh_sister', 'fifth_brother', 'ninth_sister']
				},

			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [
				{
					id: 0,
					missionId: 'M1',
					wave1: ['partisanfighter', 'rebel_spy', 'partisanfighter', 'rebel_spy', 'partisanfighter'],
					wave2: ['kanan_jarrus', 'ezra_bridger', 'chopper', 'captain_rex', 'partisanfighter']
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['partisanfighter', 'rebel_spy', 'partisanfighter', 'rebel_spy', 'partisanfighter'],
					wave2: ['kanan_jarrus', 'ezra_bridger', 'chopper', 'captain_rex', 'partisanfighter']
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['50RT', 'triplezero', 'bt1', 't3-m4', 'hk-47'],
					wave2: ['50RT', 'triplezero', 'bt1', 't3-m4', 'hk-47'],
				},
				{
					id: 3,
					missionId: 'M4',
					wave1: ['partisanfighter', 'rebel_spy', 'partisanfighter', 'rebel_spy', 'partisanfighter'],
					wave2: ['kanan_jarrus', 'ezra_bridger', 'chopper', 'captain_rex', 'partisanfighter']
				},
				{
					id: 4,
					missionId: 'M5',
					wave1: ['partisanfighter', 'rebel_spy', 'partisanfighter', 'rebel_spy', 'partisanfighter'],
					wave2: ['sabine_wren', 'ezra_bridger', 'chopper', 'garazeb__zeb__orrelios']
				},
			],

		platoons: [
			"At the start of encounter, grant all allies 100% Turn Meter and all Morale buffs for 2 turns.\n\nMorale I:\n\n +100% Defense Penetration \n\nMorale II:\n\n +25% Speed \n\nMorale III:\n\n +50% Critical Damage\n\n",
			"Instead, grant 50% Turn Meter and 2 random Morale buffs.\n\n",
			"Instead, grant 25% Turn Meter and 1 random Morale buff."
		],

        modifiers:[
			"At the start of battle, all characters are inflicted with a stack of Brain Worms until the end of battle, which can't be dispelled or prevented, and gain the granted ability Brain Freeze.\n\nBrain Worms:\n\n Lose 5 % Health per stack at the start of turn; is immune to allied dispels; this damage ignores Protection; inflict a stack of Brain Worms on target enemy when this character uses a Special ability, which can't be prevented",				
		],

        notes:[
			"This mission is different and more difficult. Focus getting 50-RT and 0-0-0 out of the way first!"
		],

		reqs: [
			'Dark Side or Neutral (Relic 8+)',
			"Inquisitorius (Relic 8+) | Third Sister",
		],

		missionId: [
			'DHav-1 (M1)',
			'DHav-2 (M2)',
			'DHav-3 (M3)',
			'DHav-4 (M4)',
			'Inq SM-1 (M5)',
		],

		missions: [{
			//DHav-1
			id: 1,
			missionId: [0],
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(219,375 TP)',
			wave2Points: '\n(493,594 TP)',
            recommendedSquads: [0, 1, 2, 3, 4, 5],
			enemyWaves: [0],
            reqs: [0],
            modifiers: [0],
			},
			{
			//DHav-2
			id: 2,
			missionId: [1],
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(219,375 TP)',
			wave2Points: '\n(493,594 TP)',
			recommendedSquads: [0, 1, 2, 3, 4, 5],
			enemyWaves: [1],
			modifiers: [0],
            reqs: [0],
			},
			{
			//DHav-3
			id: 3,
			missionId: [2],
			name: 'M3',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(219,375 TP)',
			wave2Points: '\n(493,594 TP)',
			recommendedSquads: [6],//50rt
			enemyWaves: [2],
			modifiers: [0],
			reqs: [0],
			notes: [0],
			}, 
			{
			//DHav-4
			id: 4,
			missionId: [3],
			name: 'M4',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(219,375 TP)',
			wave2Points: '\n(493,594 TP)',
			recommendedSquads: [0, 1, 2, 3, 4, 5],
			enemyWaves: [3],
			modifiers: [0],
            reqs: [0],
			}, 
			{
			//Inq SM-1
			id: 5,
			missionId: [4],
			name: 'M5',
			type: 'special',
			position: 'right',
			rewards: [
				'20'
			],
			recommendedSquads: [7],//inq
			enemyWaves: [4],
			reqs: [1],
			modifiers: [0],
			},
            {
			id: 6,
			name: 'DP',
			type: 'deploy',
			position: 'right',
            stars: [
               '⭐ 235,143,105',
               '⭐⭐ 400,243,583',
               '⭐⭐⭐ 500,304,479'
            ]
			}, 
			{
			id: 7,
			name: 'OP',
			type: 'haven',
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

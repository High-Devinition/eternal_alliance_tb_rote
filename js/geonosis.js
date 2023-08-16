


Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,


		
			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//DGeo-1 (M1)********************************************
				{
					id: 0,
					name: 'Geonosians',
					toons: ['geonosian_brood_alpha', 'geonosian_spy', 'geonosian_soldier', 'poggle_the_lesser', 'sun_fac'],
					video: ''
				},

				//DGeo-2 (M2)********************************************
				{
					id: 1,
					name: 'LV+Maul+3 Empire/Sith',
					toons: ['gl_vader', 'maul', 'unknown', 'unknown', 'unknown'],

				},

				//DGeo-3 (M3)********************************************
				{
					id: 2,
					name: 'SLKR & FO',
					toons: ['gl_kylo', 'first_order_officer', 'kylo_ren_(unmasked)', 'general_hux', 'sith_trooper']
				},
				{
					id: 3,
					name: 'Reva led Inquisitors',
					toons: ['thirdsister', 'grand_inquisitor', 'seventh_sister', 'fifth_brother', 'eighth_brother']

				},
				{
					id: 4,
					name: 'Inquisitors',
					toons: ['grand_inquisitor', 'seventh_sister', 'ninth_sister', 'fifth_brother', 'eighth_brother'],
					video: "https://www.youtube.com/watch?v=-OFAp5BwpaA"
				},
				
				//DGeo-4 (M5)********************************************
				{
					id: 5,
					name: 'SEE+Wat+3 Sith',
					toons: ['gl_palp', 'wat_tambor', 'unknown', 'unknown', 'unknown'],

				},
				{
					id: 6,
					name: 'Reva led Inquisitors',
					toons: ['thirdsister', 'grand_inquisitor', 'seventh_sister', 'fifth_brother', 'eighth_brother']
				},

				//DGeo-5 (M6)********************************************
				{
					id: 7,
					name: 'Currently Unknown',
					toons: ['unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown']
				},

			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [
				{
					id: 0,
					missionId: 'M1',
					wave1: ['partisanfighter', 'rebel_spy', 'partisanfighter', 'rebel_spy', 'partisanfighter'],
					wave2: ['kanan_jarrus', 'ezra_bridger', 'chopper', 'rex', 'partisanfighter']
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['geonosian_brood_alpha', 'geonosian_spy', 'geonosian_soldier', 'poggle_the_lesser', 'sun_fac'],
					wave2: ['nexu'],
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['acklay']
				},
				{
					id: 3,
					missionId: 'M5',
					wave1: ['reek', 'geonosian_brood_alpha', 'geonosian_soldier',],
				},
				{
					id: 4,
					missionId: 'M6',
					wave1: ['malevolence', 'hyena_bomber', 'vulture_droid', 'geonosian_soldier_starfighter'],
				},
			],

			platoons: [
				"Summon a BX-series Commando Droid to the ally slot if it is available. Dispell all buffs on all enemies, which can't be evaded.\n\n",
				"Add Empire allies gain 30% Turn Meter and the first time the BX-series Commando Droid is defeated, it revives with 50% Health and Protection.\n\n",
				"BX-series Commando Droid revives with 100% Health, Protection, and Turn Meter; add Droid allies reset their cooldowns at the start of their turn for 2 turns."
				],

			notes:[
				'This fleet mission is extremely difficult and is currently impossible. If for some god forsaken reason that you complete it, (lol) please share how the **** you did it!',
				'Do NOT try to use SEE for this mission; it won\'t go well. Given there is only one target, you will have trouble linking, which is essential to his kit!',
				'Reek can be killed without Wat when using SEE for this mission, but pay attention to the trample debuffs and dispel it from SEE to increase your chance of winning!',
				'With higher relic levels and greater mods on LV and his squad, this mission can be completed on auto; otherwise, play it safe.\n\n',
				'Nexu can easily one-shot non-GL characters!'

				],

			reqs:[
				'Dark Side Ships (7⭐)',
				'5x Dark Side or Neutral (Relic 6+)',//4
				'5x Geonosian (Relic 7+)',//5
				],

			missionId: [
				'DGeo-1 (M1)',
				'DGeo-2 (M2)',
				'DGeo-3 (M3)',
				'DGeo-4 (M5)',
				'DGeo-5 (M6)',
			],

			missions: [{
			//DGeo-4
				id: 0,
				missionId: [3],
				name: 'M5',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(250,000 TP)',
				recommendedSquads: [5, 6],
				enemyWaves: [3],//reek
				reqs: [1],
				notes: [2],
			},
			{//DGeo-2
				id: 1,
				missionId: [1],
				name: 'M2',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(125,000 TP)',
				wave2Points: '\n(250,000 TP)',
				recommendedSquads: [1],
				enemyWaves: [1],//nexu
				reqs: [1],
				notes:[3, 4],
			},
			{//DGeo-3
				id: 2,
				missionId: [2],
				name: 'M3',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(250,000 TP)',
				recommendedSquads: [2, 3, 4],
				enemyWaves: [2],//acklay
				reqs: [1],
				notes: [1],
			},
			{//DGeo-1
				id: 3,
				missionId: [0],
				name: 'M1',
				type: 'usual',
				position: 'right',
				rewards: '',
				wave1Points: '\n(125,000 TP)',
				wave2Points: '\n(250,000 TP)',
				recommendedSquads: [0],
				enemyWaves: [0],//geo
				reqs: [2],
			},			
			{//DGeo-5
				id: 4,
				missionId: [4],
				name: 'M6',
				type: 'fleet',
				position: 'right',
				rewards: '',
				wave1Points: '\n(500,000 TP)',
				recommendedSquads: [7],
				enemyWaves: [4],
				reqs: [0],
				notes: [0]
				}, 
				{
				id: 6,
				name: 'DP',
				type: 'deploy',
				position: 'right',
				stars: [
				   '⭐: 148,125,000',
				   '⭐⭐: 237,000,000',
				   '⭐⭐⭐: 316,000,000'
				]
			}, 
			{
				id: 30,
				name: 'OP',
				type: 'geonosis',
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
		isVisible: false,
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

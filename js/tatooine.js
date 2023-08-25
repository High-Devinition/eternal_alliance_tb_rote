
Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,

			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//NTat-2 (M1)********************************************
				{
					id: 0,
					name: 'CLS',
					toons: ['commander_luke_skywalker', 'chewbacca', 'han_solo', 'threepio_&_chewie', 'c-3po'],
				},
				{
					id: 1,
					name: "Trench & Separatists",
					toons: ['admiral_trench', 'nute_gunray', 'count_dooku', 'jango_fett', 'geonosian_brood_alpha']
				},
				{
					id: 2,
					name: 'EP+Mara+SK+2 Empire/Sith',
					toons: ['emperor_palpatine', 'mara_jade', 'starkiller', 'unknown', 'unknown']
				},

				//NTat-3 (M2)********************************************
				{
					id: 3,
					name: 'Jabba & Hutt Cartel',
					toons: ['gl_jabba', 'krrsantan', 'skiff_lando', 'boba_fett', 'boushh'],
					video: "https://www.youtube.com/embed/-OFAp5BwpaA?si=bm7AC6jiJlBQzvTW" 

				},

				//NTat-1 (M3)********************************************
				{
					id: 4,
					name: 'Bossk lead & Fennec +3 BH',
					toons: ['bossk', 'fennec_shand', 'unknown', 'unknown', 'unknown'],
				},

				//Reva SM (M4)********************************************
				{
					id: 5,
					name: 'Inquisitors',
					toons: ['grand_inquisitor', 'seventh_sister', 'fifth_brother', 'eighth_brother', 'ninth_sister'],
					video: "https://www.youtube.com/embed/kWZChbtYvZY?si=K93-NyADJltR2ad6",

				},

				//NTat-4 (M6)********************************************
				{
					id: 6,
					name: 'Executor fleet',
					toons: ['executor', 'hound\'s_tooth', 'razor_crest', 'xanadu_blood', 'slave_i', 'ig-2000']
				},

			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [

				{
					id: 0,
					missionId: 'M1',
					wave1: ['sandtrooper_commander', 'sandtrooper', 'sandtrooper_scout', 'sandtrooper', 'sandtrooper_scout'],
					wave2: ['imperial_officer', 'sandtrooper_commander', 'sandtrooper', 'sandtrooper_scout', 'sandtrooper', 'sandtrooper_scout'],
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['pirate_leader', 'pirate_enforcer', 'pirate_saboteur', 'pirate_spy', 'pirate_bruiser'],
					wave2: ['hondo_ohnaka', 'pirate_leader', 'pirate_enforcer', 'pirate_saboteur', 'pirate_spy', 'pirate_bruiser'],
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['tusken_elder', 'tusken_brute', 'tusken_raider', 'tusken_shaman', 'tusken_brute'],
					wave2: ['tusken_elder', 'tusken_brute', 'tusken_raider', 'tusken_shaman', 'tusken_brute'],
				},
				{
					id: 3,
					missionId: 'M4',
					wave1: ['chief_nebit', 'jawa_scavenger', 'jawa_engineer', 'jawa', 'dathcha'],
					wave2: ['gl_kenobi'],
				},
				{
					id: 4,
					missionId: 'M6',
					wave1: ['chimaera', 'tie_advanced_x1', 'imperial_tie_bomber', 'imperial_tie_fighter', 'tie_interceptor'],
				},
			],

		platoons: [
			"Remove whenever an ally is defeated (excluding summons), summon a random Pirate to take their place.\n\n",
			"Remove grant all allies 25% Turn Meter.\n\n",
			"At the start of the encounter, summon a random Pirate if the ally slot is available. Whenever an ally is defeated (excluding summons), summon a random Pirate to take their place if the ally slot is available and grant all allies 25% Turn Meter.\n\n (Wretched Hive disabled)"
		],

        modifiers:[
			"At the end of every other turn, all units are inflicted with Damage Over Time (DOT) until defeated, which can't be resisted.",
			"The first time a non-Capital Ship uses a Special ability each turn, it gains Ability Block for 1 turn, which cannot be prevented, and then takes a bonus turn."
			],

        notes:[
			"1). Dispel Nebit's taunt with 7th Sister's Special 1, or use it to ability block him so that he can’t taunt.\n\n",
			"2). Remove stealth from Scavenger with 5th Brother's Special 1.\n\n",
			"3). Use GI's Special 2 to apply torture to Scavenger; focus him down til' death.\n\n",
			"4). Continue to use basics along with 9th Sister/8th Brother specials; spread debuffs and heal with 7th Sister if necessary!\n\n",
			"5). Cleanse with GI's Special 1 around this point (6+ DOTs).\n\n",
			"6). Focus down Engineer, kill the other 2 Jawas, and leave Nebit for last.\n\n",
			"7). On the last wave, debuff Kenobi as much as you possibly can. Remember to dispel DOTs from yourself with GI's Special 1 to survive, and you shall be victorious!\n\n Good luck!"
			],

        reqs:[
        "Ships (7⭐) | Executor",
        "5x characters (Relic 7+) | Fennec Shand",
        "5x Inquisitorius (Relic 7+) | Grand Inquisitor",
        "5x characters (Relic 7+) | Jabba the Hutt",
        "5x characters (Relic 7+)"
        ],

		missionId: [
			'NTat-1 (M3)',
			'NTat-2 (M1)',
			'NTat-3 (M2)',
			'Reva SM (M4)',
			'NTat-4 (M6)',
		],

		missions: [{			
			//NTat-3
			id: 0,
			missionId: [2],
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
			recommendedSquads: [3],//jabba
			enemyWaves: [1],
			modifiers: [0],
            reqs: [3],
			},

			{
			//NTat-1
			id: 1,
			missionId: [0],
			name: 'M3',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
            recommendedSquads: [4],//fennec
			enemyWaves: [2],
            reqs: [1],
            modifiers: [0],
			},

			{
			//Reva SM
			id: 2,
			missionId: [3],
			name: 'M4',
			type: 'reva',
			position: 'right',
			rewards: [
				'1',
				],
            recommendedSquads: [5],//reva
			enemyWaves: [3],
            reqs: [2],
            modifiers: [0],
            notes: [0, 1, 2, 3, 4, 5, 6],
			},

			{
			//NTat-2
			id: 3,
			missionId: [1],
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(162,500 TP)',
			wave2Points: '\n(341,250 TP)',
			recommendedSquads: [0, 1, 2],//gen
			enemyWaves: [0],
			modifiers: [0],
            reqs: [4],
			}, 

			{
			//NTat-4
			id: 4,
			missionId: [4],
			name: 'M6',
			type: 'fleet',
			position: 'right',
			wave1Points: '\n(682,500 TP)',
			recommendedSquads: [6],
			enemyWaves: [4],
			reqs: [0],
			modifiers: [1],
			},

            {
			id: 5,
			name: 'DP',
			type: 'deploy',
			position: 'right',
            stars: [
               '⭐ 190,953,125',
               '⭐⭐ 305,525,000',
               '⭐⭐⭐ 407,366,667',
            ]
			}, 

			{
			id: 6,
			name: 'OP',
			type: 'tatooine',
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
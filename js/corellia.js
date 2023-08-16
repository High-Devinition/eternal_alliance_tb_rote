
Vue.component('mission', {
	data: function () {
		return {
			isMobile: false,

			playerSquads: [
				//*******************************************************PLAYER SQUADS*************************************************************************/
				//Ncor-1 (M3)********************************************
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

				//NCor-2 (M2)********************************************
				{
					id: 2,
					name: "Aphra & Her droids (+DV/HK/IG88)+B2",
					toons: ['doctoraphra', 'bt1', 'triplezero', 'darth_vader', 'b2_super_battle_droid']

				},

				//NCor-3 (M1)********************************************
				{
					id: 3,
					name: 'Jabba & Hutt Cartel',
					toons: ['gl_jabba', 'krrsantan', 'skiff_lando', 'boba_fett', 'boushh'],
					video: "https://youtu.be/g-5NNZKiEMM?t=18"
				},				

				//Qira SM-1 (M5)********************************************
				{
					id: 4,
					name: "Rey +2 scoundrels (Vandor/L3/Dash/BAM)",
					toons: ['qi\'ra', 'young_han_solo', 'gl_rey', 'dash_rendar', 'l3-37']
				},

				//NCor-5 (M6)********************************************
				{
					id: 5,
					name: 'Executor fleet',
					toons: ['executor', 'hound\'s_tooth', 'razor_crest', 'lando\'s_millennium_falcon', 'xanadu_blood', 'slave_i', 'ig-2000']
				},
				{
					id: 6,
					name: 'Profundity fleet',
					toons: ['profundity', 'rebel_y-wing', 'outrider', 'lando\'s_millennium_falcon', 'han\'s_millennium_falcon', 'biggs_darklighter\'s_x-wing', 'phantom_ii', 'ghost']

				},
				{
					id: 7,
					name: 'Leviathan fleet',
					toons: ['leviathan', 'lando\'s_millennium_falcon', 'b-28_bomber', 'fury_interceptor', 'tie_dagger', 'palp_shuttle', 'sith_fighter', 'markvi_interceptor']

				},




			],

			//***********************************************************ENEMY SQUADS***************************************************************************************/
			enemySquads: [

				{
					id: 0,
					missionId: 'M1',
					wave1: ['stormtrooper_commander', 'stormtrooper', 'tie_fighter_pilot', 'recon_stormtrooper', 'scout_trooper'],
					wave2: ['imperialofficer', 'stormtrooper_commander', 'stormtrooper', 'tie_fighter_pilot', 'recon_stormtrooper', 'scout_trooper']
				},
				{
					id: 1,
					missionId: 'M2',
					wave1: ['stormtrooper_commander', 'stormtrooper', 'tie_fighter_pilot', 'recon_stormtrooper', 'scout_trooper'],
					wave2: ['imperialofficer', 'stormtrooper_commander', 'stormtrooper', 'tie_fighter_pilot', 'recon_stormtrooper', 'scout_trooper']
				},
				{
					id: 2,
					missionId: 'M3',
					wave1: ['mob_enforcer', 'cartel_spy', 'cartel_bruiser', 'cartel_saboteur', 'cartel_bruiser'],
					wave2: ['qi\'ra', 'young_han_solo', 'cartel_spy', 'cartel_bruiser', 'cartel_saboteur']
				},
				{
					id: 3,
					missionId: 'M5',
					wave1: ['stormtrooper_commander', 'stormtrooper', 'tie_fighter_pilot', 'recon_stormtrooper', 'scout_trooper'],
					wave2: ['general_veers', 'colonel_starck', 'stormtrooper_commander', 'stormtrooper', 'stormtrooper', 'tie_fighter_pilot']
				},
				{
					id: 4,
					missionId: 'M6',
					wave1: ['executrix', 'tie_advanced_x1', 'imperial_tie_bomber', 'imperial_tie_fighter', 'tie_interceptor'],
				},
			],
             
		platoons: [
			"All enemy ships have +15% Max Health and Speed. At the start of battle, the cooldown of Call Reinforcement on the enemy Capital Ship is reduced by 1.\n\n",
			"-15% Max Health\n\n",
			"-15% Speed."
			],

        modifiers:[
        'At the beginning of battle, each side summons a random Corellian Engineering Cargo Ship. At the start of their turn, Cargo Ships gain Protection Over Time (10%) for 1 turn.',
        'Coaxium:\n\n +25% Critical Damage and Speed; -15% Accuracy; will be critically hit if able; enemies can ignore Taunt to target this character; if this character is defeated by a status effect, Coaxium will not be granted to anyone'
			],

        notes:[
		"Keep in mind that BT-1 and 0-0-0 are required as operation units!"
			],

        reqs:[
        '5x characters (Relic 5+)',
        '5x characters (Relic 5+), Doctor Aphra',
        '5x characters (Relic 5+), Jabba the Hutt',
        '5x characters (Relic 5+), Qi\'ra, Young Han Solo',
        'Lando\'s Millenium Falcon (7⭐)'//10
			],

		missionId: [
			'NCor-1 (M3)',
			'NCor-2 (M2)',
			'NCor-3 (M1)',
			'Qira SM-1 (M5)',
			'NCor-5 (M6)',
		],

		missions: [{
		//NCor-3
			id: 0,
			missionId: [2],
			name: 'M1',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(100,000 TP)',
			wave2Points: '\n(200,000 TP)',
            recommendedSquads: [3],
			enemyWaves: [0],
			modifiers: [1],
            reqs: [2],
		},
		{//NCor-2
			id: 1,
			missionId: [1],
			name: 'M2',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(100,000 TP)',
			wave2Points: '\n(200,000 TP)',
			recommendedSquads: [2],
			enemyWaves: [1],
			modifiers: [1],
            reqs: [1],
			notes: [0],
		},
		{//NCor-1
			id: 2,
			missionId: [0],
			name: 'M3',
			type: 'usual',
			position: 'right',
			wave1Points: '\n(100,000 TP)',
			wave2Points: '\n(200,000 TP)',
            recommendedSquads: [0, 1],
			enemyWaves: [2],
            reqs: [0],
            modifiers: [1],
		},
		{//Qira SM-1
			id: 4,
			missionId: [3],
			name: 'M5',
			type: 'special',
			position: 'right',
            rewards: [
                '15', //GET3
            ],
            recommendedSquads: [4],
			enemyWaves: [3],
            reqs: [3],
		}, 			
		{//NCor-5
			id: 5,
			missionId: [4],
			name: 'M6',
			type: 'fleet',
			position: 'right',
			wave1Points: '\n(400,000 TP)',
				recommendedSquads: [5, 6, 7],
				enemyWaves: [4],
				modifiers: [0],
            reqs: [4],
			}, 
            {
			id: 6,
			name: 'DP',
			type: 'deploy',
			position: 'right',
            stars: [
               '⭐ 111,718,750',
               '⭐⭐ 178,750,000',
               '⭐⭐⭐ 238,333,333'
            ]
			}, 
			{
			id: 30,
			name: 'OP',
			type: 'corellia',
			position: 'right',
			preqs: ["Characters: Relic 5", "Ships: 7⭐"],
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

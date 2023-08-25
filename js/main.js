
Vue.component('planet', {
	data: function () {
		return {
		isMobile: false,		

		planets: [

            {
			id: 1,
			name: 'P1',
			type: 'deathstar',
			zonepath: 'DS',
			position: 'right',
			planetlink: 'deathstar.html',
			rewards: [
				'⭐: 582,632,425',
                '⭐⭐: 1,059,331,682',
                '⭐⭐⭐: 1,246,272,567'
				],
		    planet: [
            'Deathstar'
            ],
            notes: [
            'Zone 6 | DS'
            ]
			},

            {
			id: 2,
			name: 'P2',
			type: 'malachor',
			zonepath: 'DS',
			position: 'right',
			planetlink: 'malachor.html',
			rewards: [
				'⭐: 341,250,768',
                '⭐⭐: 620,455,942',
                '⭐⭐⭐: 729,948,167'
				],
		    planet: [
            'Malachor'
            ],
            notes: [
            'Zone 5 | DS'
            ]
			},

            {
			id: 3,
			name: 'P3',
			type: 'haven',
			zonepath: 'DS',
			position: 'right',
			planetlink: 'haven.html',
			rewards: [
				'⭐: 235,143,105',
                '⭐⭐: 400,243,583',
                '⭐⭐⭐: 500,304,479'
				],
		    planet: [
				'Haven Station'
            ],
            notes: [
            'Zone 4 | DS'
            ]
			},

            {
			id: 4,
			name: 'P5',
			type: 'lothal',
			zonepath: 'LS',
			position: 'left',
			planetlink: 'lothal.html',
			rewards: [
				'⭐: 246,742,558',
                '⭐⭐: 419,987,333',
                '⭐⭐⭐: 524,984,167'
				],
		    planet: [
            'Lothal'
            ],
            notes: [
            'Zone 4 | LS'
            ]
			},

            {
			id: 5,
			name: 'P6',
			type: 'kessel',
			zonepath: 'Mixed',
			position: 'left',
			planetlink: 'kessel.html',
			rewards: [
				'⭐: 235,143,105',
                '⭐⭐: 400,243,583',
                '⭐⭐⭐: 500,304,479'
				],
		    planet: [
            'Kessel'
            ],
            notes: [
            'Zone 4 | Mixed'
            ]
			},

			{
			id: 6,
			name: 'P7',
			type: 'dathomir',
			zonepath: 'DS',
			position: 'right',
			planetlink: 'dathomir.html',
			rewards: [
				'⭐: 158,960,938',
                '⭐⭐: 254,337,500',
                '⭐⭐⭐: 339,116,667'
				],
		    planet: [
            'Dathomir'
            ],
            notes: [
            'Zone 3 | DS'
            ]
			},

			{
			id: 7,
			name: 'P8',
			type: 'geonosis',
			zonepath: 'DS',
			position: 'right',
			planetlink: 'geonosis.html',
			rewards: [
				'⭐: 148,125,000',
                '⭐⭐: 237,000,000',
                '⭐⭐⭐: 316,000,000'
				],
		    planet: [
            'Geonosis'
            ],
            notes: [
            'Zone 2 | DS'
            ]
			},

			{
			id: 8,
			name: 'P9',
			type: 'tatooine',
			zonepath: 'Mixed',
			position: 'right',
			planetlink: 'tatooine.html',
			rewards: [
				'⭐: 190,953,125',
                '⭐⭐: 305,525,000',
                '⭐⭐⭐: 407,366,667'
				],
		    planet: [
            'Tatooine'
            ],
            notes: [
            'Zone 3 | Mixed'
            ]
			},

			{
			id: 9,
			name: 'P10',
			type: 'mustafar',
			zonepath: 'DS',
			position: 'right',
			planetlink: 'mustafar.html',
			rewards: [
				'⭐: 116,406,250',
                '⭐⭐: 186,250,000',
                '⭐⭐⭐: 248,333,333'
				],
		    planet: [
            'Mustafar'
            ],
            notes: [
            'Zone 1 | DS'
            ]
			},

			{
			id: 10,
			name: 'P11',
			type: 'corellia',
			zonepath: 'Mixed',
			position: 'right',
            planetlink: 'corellia.html',
			rewards: [
				'⭐: 111,718,750',
                '⭐⭐: 178,750,000',
                '⭐⭐⭐: 238,333,333'
				],
		    planet: [
            'Corellia'
            ],
            notes: [
            'Zone 1 | Mixed'
            ]
			},

            {
			id: 11,
			name: 'P12',
			type: 'vandor',
			zonepath: 'Mixed',
			position: 'right',
			planetlink: 'vandor.html',
			rewards: [
				'⭐: 341,250,768',
                '⭐⭐: 620,455,942',
                '⭐⭐⭐: 729,948,167'
				],
		    planet: [
            'Vandor'
            ],
            notes: [
            'Zone 5 | Mixed'
            ]
			},

            {
			id: 12,
			name: 'P13',
			type: 'hoth',
			zonepath: 'Mixed',
			position: 'left',
			planetlink: 'hoth.html',
			rewards: [
				'⭐: 582,632,425',
                '⭐⭐: 1,059,331,682',
                '⭐⭐⭐: 1,246,272,567'
				],
		    planet: [
            'Hoth'
            ],
            notes: [
            'Zone 6 | Mixed'
            ]
			},

			{
            id: 13,
			name: 'P14',
			type: 'felucia',
			zonepath: 'Mixed',
			position: 'left',
			planetlink: 'felucia.html',
			rewards: [
				'⭐: 148,125,000',
                '⭐⭐: 237,000,000',
                '⭐⭐⭐: 316,000,000'
				],
		    planet: [
            'Felucia'
            ],
            notes: [
            'Zone 2 | Mixed'
            ]
			},

			{
			id: 14,
			name: 'P15',
			type: 'kashyyyk',
			zonepath: 'LS',
			position: 'left',
			planetlink: 'kashyyyk.html',
			rewards: [
				'⭐: 190,953,125',
                '⭐⭐: 305,525,000',
                '⭐⭐⭐: 407,366,667'
				],
		    planet: [
            'Kashyyyk'
            ],
            notes: [
            'Zone 3 | LS'
            ]
			},

			{
			id: 15,
			name: 'P16',
			type: 'coruscant',
			zonepath: 'LS',
			position: 'left',
			planetlink: 'coruscant.html',
			rewards: [
				'⭐: 116,406,250',
                '⭐⭐: 186,250,000',
                '⭐⭐⭐: 248,333,333'
				],
		    planet: [
            'Coruscant'
            ],
            notes: [
            'Zone 1 | LS'
            ]
			},

			{
			id: 16,
			name: 'P17',
			type: 'bracca',
			zonepath: 'LS',
			position: 'left',
			planetlink: 'bracca.html',
			rewards: [
				'⭐: 142,265,625',
                '⭐⭐: 227,625,000',
                '⭐⭐⭐: 303,500,000'
				],
		    planet: [
            'Bracca'
            ],
            notes: [
            'Zone 2 | LS'
            ]
			},

            {
			id: 17,
			name: 'P18',
			type: 'kafrene',
			zonepath: 'LS',
			position: 'left',
			planetlink: 'kafrene.html',
			rewards: [
				'⭐: 341,250,768',
                '⭐⭐: 620,455,942',
                '⭐⭐⭐: 729,948,167'
				],
		    planet: [
            'Ring of Kafrene'
            ],
            notes: [
            'Zone 5 | LS'
            ]
			},

            {
			id: 18,
			name: 'P4',
			type: 'scarif',
			zonepath: 'LS',
			position: 'left',
			planetlink: 'scarif.html',
			rewards: [
				'⭐: 555,710,999',
                '⭐⭐: 1,010,383,635',
                '⭐⭐⭐: 1,188,686,629'
				],
		    planet: [
            'Scarif'
            ],
            notes: [
            'Zone 6 | LS'
            ]
			},

            {
			id: 19,
			name: 'P19',
			type: 'zeffo',
			zonepath: 'LS',
			position: 'left',
			planetlink: 'zeffo.html',
			rewards: [
				'Tier 1: 143,589,583',
                'Tier 2: 229,743,333',
                '⭐: 287,179,167',
				],
		    planet: [
            'Zeffo'
            ],
            notes: [
			'Zone 3 | LS\n',
			'(Bonus Planet)',
            ]
		}
		],

		selecteP7lanet: '',
		seen: false,
		hide: function() {
			this.seen = false;
		}
	}
	},
	template: '#planet',
	methods: {
		mq () {
			this.isMobile = window.matchMedia('(max-width: 600px)').matches;
		},
		
	}
})

let app = new Vue({
	el: '#app',
	data: {
		isVisible: false
	},
});

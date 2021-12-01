module.exports = {
	mode: 'jit',
	purge: ['./resources/js/**/*.*', './resources/views/**/*.*'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				anyColorName: 'ff0000',
			},
			scale: {
				flip: '-1',
			},
		},
		screens: {
			xs: '375px',
			sm: '560px',
			md: '768px',
			lg: '1000px',
			xl: '1280px',
			400: '400px',
			1120: '1120px',
		},
		maxWidth: {
			...[...Array(1201)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
			xs: '375px',
			sm: '560px',
			md: '768px',
			lg: '1000px',
			none: 'none',
		},
		borderRadius: {
			...[...Array(32)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			'100vh': '100vh',
		},
		fontSize: {
			...[...Array(101)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}vw`] = `${i}vw`
				return m
			}, {}),
		},
		padding: {
			...[...Array(301)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(5)].reduce((m, _, i) => {
				m[`${i}em`] = `${i}em`
				return m
			}, {}),
		},
		margin: {
			...[...Array(201)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(201)].reduce((m, _, i) => {
				m[`minus-${i}`] = `-${i}px`
				return m
			}, {}),
			auto: 'auto',
		},
		width: {
			...[...Array(1001)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
		},
		height: {
			...[...Array(1001)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
		},
		lineHeight: {
			...[...Array(101)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
		},
		zIndex: {
			...[...Array(101)].reduce((m, _, i) => {
				m[i] = `${i}`
				return m
			}, {}),
			'minus-1': '-1',
			auto: 'auto',
		},
		translate: {
			...[...Array(1001)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(1001)].reduce((m, _, i) => {
				m[`minus-${i}`] = `-${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`minus-${i}p`] = `-${i}%`
				return m
			}, {}),
		},
		inset: {
			...[...Array(1001)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(1001)].reduce((m, _, i) => {
				m[`minus-${i}`] = `-${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`minus-${i}p`] = `-${i}%`
				return m
			}, {}),
			auto: 'auto',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

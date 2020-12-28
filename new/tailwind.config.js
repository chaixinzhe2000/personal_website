module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			backgroundColor: ['checked'],
			borderColor: ['checked'],
			borderWidth: ['first'],
			padding: ['hover'],
			maxHeight: ['focus'],
			backgroundColor: ['active'],
			divideColor: ['group-hover'],
			backgroundColor: ['group-focus'],
			scale: ['focus-within'],
			textDecoration: ['focus-visible'],
			opacity: ['disabled'],
			textColor: ['visited'],
			backgroundColor: ['checked'],
			borderColor: ['checked'],
		}
	},
	plugins: [],
}

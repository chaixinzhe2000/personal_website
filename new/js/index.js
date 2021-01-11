window.onload = init;

const onSetTheme = (themeId) => {
	var primary, primaryShadow1, primaryShadow2, heading, supplement_text;
	switch (themeId) {
		// dark grey
		case 0:
			primary = '#212529';
			primaryShadow1 = "#171a1d";
			primaryShadow2 = "#2b3035";
			heading = "#ffffff"
			supplement_text = "#9CA3AF"
			break;
		// navy blue
		case 1:
			primary = "#0E5A8A";
			primaryShadow1 = "#0c4d75";
			primaryShadow2 = "#10689f";
			heading = "#ffffff"
			supplement_text = "#ffffff"
			break;
		// green
		case 2:
			primary = "#13AC88";
			primaryShadow1 = "#109274";
			primaryShadow2 = "#16c69c";
			heading = "#ffffff"
			supplement_text = "#e9fdf8"
			break;
	}
	document.querySelector('body').style.setProperty('--primary', primary);
	document.querySelector('body').style.setProperty('--primary-shadow-1', primaryShadow1);
	document.querySelector('body').style.setProperty('--primary-shadow-2', primaryShadow2);
	document.querySelector('body').style.setProperty('--heading', heading);
	document.querySelector('body').style.setProperty('--supplement-text', supplement_text);
}

function init() {
	// $(".nav-button").on('mouseenter', function () {
	//     $(".nav-button").addClass("shadow-md");
	// });

	// $(".nav-button").on('mouseleave', function () {
	//     $(".nav-button").removeClass("shadow-md");
	// });
	var themeId = Math.floor(Math.random() * 100) % 3;
	onSetTheme(themeId);
}
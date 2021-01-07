window.onload = init;

const onSetTheme = (themeId) => {
	var primary, primaryShadow1, primaryShadow2, contrast;
	switch (themeId) {
		// dark grey
		case 0:
			primary = '#212529';
			primaryShadow1 = "#171a1d";
			primaryShadow2 = "#2b3035";
			contrast = "#ffffff"
			break;
		// navy blue
		case 1:
			primary = "#0E5A8A";
			primaryShadow1 = "#0c4d75";
			primaryShadow2 = "#10689f";
			contrast = "#ffffff"
			break;
		// green
		case 2:
			primary = "#13AC88";
			primaryShadow1 = "#109274";
			primaryShadow2 = "#16c69c";
			contrast = "#ffffff"
			break;
	}
	document.querySelector('body').style.setProperty('--primary', primary);
	document.querySelector('body').style.setProperty('--primary-shadow-1', primaryShadow1);
	document.querySelector('body').style.setProperty('--primary-shadow-2', primaryShadow2);
	document.querySelector('body').style.setProperty('--contrast', contrast);
}

function init() {
	// $(".nav-button").on('mouseenter', function () {
	//     $(".nav-button").addClass("shadow-md");
	// });

	// $(".nav-button").on('mouseleave', function () {
	//     $(".nav-button").removeClass("shadow-md");
	// });
	console.log("hello");
	var themeId = Math.floor(Math.random() * 100) % 3;
	console.log(themeId);
	onSetTheme(themeId);
}
$(document).ready(function () {
	$("html, body").animate({scrollTop: 0}, 1000, 'swing');
	//Dynamic Sticky footer
	$("body > div.container-fluid").first().css("min-height","calc(100vh - "+($("nav").outerHeight()+$("footer").outerHeight())+"px)");
});
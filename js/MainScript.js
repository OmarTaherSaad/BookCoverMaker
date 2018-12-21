$(document).ready(function () {
	$("html, body").animate({scrollTop: 0}, 1000, 'swing');
	//Add .active to current navbar button
	var url = window.location.href;
	if (url.includes('?')) {
		url = url.substr(0,url.indexOf('?'));
	}
	$('ul.navbar-nav a').filter(function() {
		 return this.href == url;
	}).addClass("active").closest(".nav-item").addClass("active");
	//Dynamic Sticky footer
	$("body > div.container-fluid").first().css("min-height","calc(100vh - "+($("nav").outerHeight()+$("footer").outerHeight())+"px)");
});
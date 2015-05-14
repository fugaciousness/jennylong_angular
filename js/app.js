
function scrollToEl(el) {
	
	var sTop = el.offset().top;
	console.log ('sTop is:'+sTop);	
	x = el.css('padding-top');
	console.log(x);
	if(x.length > 0) {
		x = x.replace(/px/g, "");
		sTop = Math.round(sTop - (parseInt(x)/3));
		console.log("sTop::" + sTop);
	}
	$('html, body').animate({
	    scrollTop: sTop
	}, 1000);
}


angular.module("app", ["ui.router"])

	.config( function ($stateProvider, $urlRouterProvider, $locationProvider){

		$stateProvider.state("hero", {
			url:"/home",
			controller: "HeroCtrl as hero",
			templateUrl: "templates/hero.html"
		})

		$stateProvider.state("descriptions", {
			url:"/descriptions",
			controller: "DescriptionsCtrl as descriptions",
			templateUrl: "templates/descriptions.html"
		})

		$stateProvider.state("schedule", {
			url:"/schedule",
			controller: "ScheduleCtrl as schedule",
			templateUrl: "templates/schedule.html"
		})

		$stateProvider.state("about", {
			url:"/about",
			controller: "AboutCtrl as about",
			templateUrl: "templates/about.html"
		})

		$urlRouterProvider.otherwise("/home");
	})

	/*Will be using this later*/
	.service("greeting", function Greeting(){
		var greeting = this;
		greeting.message = "Default";
	})

	.controller("HeroCtrl", function HeroCtrl(  ){
    	var hero = this;
	})

	.controller("AboutCtrl", function AboutCtrl( greeting ){
    	var about = this;   
    	about.greeting = greeting;
	})

	.controller("ScheduleCtrl", function ScheduleCtrl(  ){
    	var schedule = this;
	})
	
	.controller("DescriptionsCtrl", function DescriptionsCtrl(  ){
    	var descriptions = this;
	})

	

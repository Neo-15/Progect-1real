$(function(){
var header=$("#header"),
introH = $("#intro").innerHeight(),
scrollOffset =$(window).scrollTop();

/* Fixed Header */	
checkScroll(scrollOffset);
	
	
$(window).on("scroll", function(){
scrollOffset = $(this).scrollTop();
checkScroll(scrollOffset);
});

	function checkScroll(scrollOffset){
if(scrollOffset>=introH){
header.addClass("header--fixed");
} else{
header.removeClass("header--fixed");
}
	}
	
/* Smooth scroll */
$("[data-scroll]").on("click", function(event) {
event.preventDefault();
var blockid = $(this).data("scroll"),
blockOffset = $(blockid).offset().top;

$("html, body").animate({
scrollTop: blockOffset
},500);
	
});
	
/* menu nav togle */
$("#nav-togle").on("click", function(event){
event.preventDefault();

	$("#nav").toggleClass("active");
	$("#header").toggleClass("active");
	
});
	
	
	
});
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
   } 
   else{
     header.removeClass("header--fixed");
   }
  }
	
 /* Smooth scroll */
 $("[data-scroll]").on("click", function(event) {
   event.preventDefault();
   var blockid = $(this).data("scroll"),
   blockOffset = $(blockid).offset().top;

 $("html, body").animate({
   scrollTop: blockOffset},500);
 });
	
 /* menu nav togle */
 $("#nav-togle ").on("click", function(event){
   event.preventDefault();
   $("#nav").toggleClass("active");
   $("#header").toggleClass("active");	
 });

 /*slider*/
 $("[data-slider]").slick({
   slidesToShow: 2,  
   slidesToScroll: 2,
   responsive: [
    {
      breakpoint: 500,
      	settings: {
      	slidesToShow: 1,
      	slidesToScroll: 1,
	  	arrows:false,
	  	dots:true,
	  	fade:true,
	  	infinite:true,
	  	draggable:true,
	  	swipe:true
      }
     }
   ]     
 })	
});

$('.intro, .block-about, .work, .our-work, .reviev, .clients, .contacts, .footer, footer').click(function() {
    $('.nav').removeClass('active');
	$("#header").removeClass("active");
 });
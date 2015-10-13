$(document).ready(function(){
	// I'm not sure I'm understanding the correct syntax usage for "callbacks" as I would like all to return to original state. 
	// I keep runing into trouble. For example, I'm trying to get the "opacity" on the animations to return to 100% when it's done animating.
	$("h1").fadeOut(5000);
	$("h1").fadeIn(5000);


	$(".my-element").animate( 
		{opacity: 0.50, width: "100%"}, 4000);
	$(".my-element").show(6000);

	$(".updown").slideUp(2000, function() {
  $(".updown").slideDown(2000);

	$(".clickalert").click(function() {
    alert("CLICKKKKKK");
  
  });

	
});

var animateMenu = function(){
		$(".topbar").animate( {opacity: .50}, 4000);}
		$(".topbar").show(animateMenu)
})
$(document).ready(function(){

	$("li").on("click",function(){
		
		$(this).animate({
                left: '+=1500px', 
                display: "hidden"
            }, slow, linear);
	});
			
})
function onScroll(){
	var d = document.body;	
	if (d.scrollTop>250)		
			$(".menu-main").addClass("fixed-menu");		
		else
			$(".menu-main").removeClass("fixed-menu");	
			
	if (d.scrollTop>1240&&$(".sub-1").attr("data-hidden")=="false"){
			$(".sub-1").removeClass("display-none");	
	}			
	
	if (d.scrollTop<1240) {
			$(".sub-1").addClass("display-none");
			$(".sub-1").attr({"data-hidden":"false"});
			$(".section-catalog").addClass("display-none");
			}
			
	if (d.scrollTop>2650&&$(".sub-2").attr("data-hidden")=="false") {
		$(".sub-2").removeClass("display-none");
	
	}
	
	if (d.scrollTop<2650) {
			$(".sub-2").addClass("display-none");
			$(".sub-2").attr({"data-hidden":"false"});
				$(".section-material").addClass("display-none");
			}
			
	if (d.scrollTop>2880) 
			$(".section-partner").removeClass("display-none");
	else
		$(".section-partner").addClass("display-none");
		
	if (d.scrollTop>1600&&d.scrollTop<2800){
		$(".menu-main ul li").each(function(arg1,arg2){
				$(this).removeClass("active");
			});

		$(".menu-main ul li:nth-of-type(2)").addClass("active");

	}		
	
	if (d.scrollTop<1600) {
		$(".menu-main ul li").each(function(arg1,arg2){
				$(this).removeClass("active");
			});
			$(".menu-main ul li:nth-of-type(1)").addClass("active");
	}		
	
	if (d.scrollTop>2800) {
	$(".menu-main ul li").each(function(arg1,arg2){
			$(this).removeClass("active");
		});
		$(".menu-main ul li:nth-of-type(3)").addClass("active");
	}		
	
	
			//$('.menu-main').html(d.scrollTop);
		
}

$(window).load(function() {
		$('#featured').orbit({
			'bullets': true,
			'timer' : true,
			'animation' : 'horizontal-slide'
		});
});

$(document).ready(function(){
		$('.bg-change').click(function(){
			var index = parseInt($(this).attr("data-change"));
			switch(index){
				case 1:$("body").css({"background-image":"url('img/bg-1.jpg')"});break;
				case 2:$("body").css({"background-image":"url('img/bg-2.jpg')"});break;
				case 3:$("body").css({"background-image":"url('img/bg-3.jpg')"});break;
			}
			
		});
		
		$('.sub-1').click(function(){
			$(".section-catalog").removeClass("display-none");
			
			$(".sub-1").attr({"data-hidden":"true"});
			$(".sub-1").addClass("display-none");
			
		});
		
			
		$('.sub-2').click(function(){
			$(".section-material").removeClass("display-none");
			$(".sub-2").addClass("display-none");	
			$(".sub-2").attr({"data-hidden":"true"});
		});
		
	
		
		$(".prew").click(function(){

			var marginLeft = $(".slider-material ul li:nth-of-type(1)").css("margin-left");
			
		marginLeft = parseInt(marginLeft.replace("px",""));

			$(".slider-material ul li:nth-of-type(1)").css({"margin-left":(marginLeft-300)+"px","transition":"1s"});
		});
		
		$(".next").click(function(){

			var marginLeft = $(".slider-material ul li:nth-of-type(1)").css("margin-left");
			marginLeft = parseInt(marginLeft.replace("px",""));

			$(".slider-material ul li:nth-of-type(1)").css({"margin-left":(marginLeft+300)+"px","transition":"1s"});
		});
		
		 $('.material-slider-2').slick({
			  infinite: true,
			  centerMode: true,
			  variableWidth: true
			});
			
		  $('.material-slider').slick({
			  infinite: true,
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  slidesToShow: 1,
			  centerMode: true,
			  variableWidth: true
			});
			
			$(".left-menu a").click(function(){
			var index = $(this).attr("data-link");
			$(".left-menu a").each(function(a1,a2){
				$(a2).removeClass("active-material");
			});
			$(this).addClass("active-material");
			
					
			$(".material-section").each(function(a1,a2){
				
				if (index!=$(a2).attr("data-item"))
					$(a2).addClass("display-none-material");
				else
					$(a2).removeClass("display-none-material");
			});
			
			$(".right-content-part").animate({
				   scrollTop:$("body,html").scrollTop()}, 1000);

		});
		
		$(".catalog-item").click(function(){
			var k = $(this);
			$(".catalog-item").each(function(a,b){
				
					$(b).addClass("catalog-item-zip");
			});
		
			
			$(".catalog-menu").css({"opacity":"0","transition":"1s"});
			setTimeout(function(){
					$(".catalog-menu").css({"display":"none"});
					//$(".c1").css({"display":"block","margin-left":"-20000px"});
			},2000);
			
			$(".c1").css({"transition":"2s","margin-left":"20px"});
			setTimeout(function(){
				$(".c1").css({"opacity":"1"});
			},1000);
		});
	
	});
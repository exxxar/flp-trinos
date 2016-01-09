var fullSite = false;

var myCenter=new google.maps.LatLng(48.0038615,37.7479408,18);


function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:17,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  icon:'arrow.png',
  left:200
 // animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

function onScroll(){
	var d = document.body;	
	if (d.scrollTop>250)		
			$(".menu-main").addClass("fixed-menu");		
		else
			$(".menu-main").removeClass("fixed-menu");	
			
	if (fullSite==false) {
	
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
				
		
			
			
	}
	else
	{
		$(".section-catalog").removeClass("display-none");
		$(".section-material").removeClass("display-none");
		$(".section-partner").removeClass("display-none");
	}
	
	
	if (d.scrollTop>1600&&d.scrollTop<4400){
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
			
	if (d.scrollTop>4400&&d.scrollTop<5470) {
	$(".menu-main ul li").each(function(arg1,arg2){
			$(this).removeClass("active");
		});
		$(".menu-main ul li:nth-of-type(3)").addClass("active");
	}		
	
	if (d.scrollTop>5200) {
	$(".menu-main ul li").each(function(arg1,arg2){
			$(this).removeClass("active");
		});
		$(".menu-main ul li:nth-of-type(4)").addClass("active");
	}		
	/*
	if (d.scrollTop>5700) {
	$(".menu-main ul li").each(function(arg1,arg2){
			$(this).removeClass("active");
		});
		$(".menu-main ul li:nth-of-type(5)").addClass("active");
	}	
*/

if (fullSite==false&&d.scrollTop>1830) {
		$(".menu-main ul li").each(function(arg1,arg2){
			$(this).removeClass("active");
		});
		$(".menu-main ul li:nth-of-type(4)").addClass("active");
	}		
	
	//$('.menu-main').html(d.scrollTop);
		
}
var mainPartIndex = 1;
/*
setTimeout(function(){
	$(".title").removeClass("hide-title"); 
	setTimeout(function(){$(".title").addClass("hide-title");
	},5000);},1000);
setInterval(function(){
	$(".title").removeClass("hide-title");
	mainPartIndex++;
	if (mainPartIndex>5)
		mainPartIndex = 1;
	var marginTop = "250px";
	var textH2 = "";
	var textP  = "";
	switch(mainPartIndex){
		case 2:
			textH2 = "Гостинные";
			textP = "Для создания гостинных мы используем современные материалы от проверенных производителей. Наша команда трудится над созданием уюта в Вашем доме.";
			break;
		case 4:
			textH2 = "Кухни";
			textP = "Мы создадим кухню, которая независимо от размера будет стильной и функциональной, а также отразит превосходный вкус хозяйки.";
			break;
		case 1:
			textH2 = "Спальни";
			textP = "Наши спальные гарнитуры придутся по вкусу тем, кто ценит в своем доме комфорт и уют. Мы создаем качественные и долговечные спальни.";
			break;
		case 3:
			textH2 = "Гардеробные";
			textP = "Мы изготовим гардеробные и шкафы-купе любой сложности, которые позволят грамотно и рационально использовать площадь Вашего жилища.";
			break;
		case 5:
			textH2 = "Ванные команты";
			textP = "При разработке мебели для Вашей ванной комнаты мы используем современный подход к проектированию и опираемся на самые перспективные направления в дизайне.";
			marginTop = "220px";
			break;
	}
	
	setTimeout(function(){$(".title").addClass("hide-title");},6000);
	$(".title").css({"margin-top":marginTop});
	$(".title h2").html(textH2);
	$(".title p").html(textP);
	$(".section-test-2 .main-part").css({ "background": "url('img/main-slider/"+mainPartIndex+".jpg') center no-repeat","background-size":"1300px 700px","transition":"5s"});
},10000);
*/
$(window).load(function() {
		$('#featured').orbit({
			'bullets': true,
			'timer' : true,
			'animation' : 'horizontal-slide'
		});
});

$(document).ready(function(){
		$('body').on('contextmenu', 'img', function(e){
			  return false;
			});

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
			fullSite = true;
		});
		
			
		$('.sub-2').click(function(){
			$(".section-material").removeClass("display-none");
			$(".sub-2").addClass("display-none");	
			$(".sub-2").attr({"data-hidden":"true"});
			fullSite = true;
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
			  //slidesToShow: 1,
			  slidesToScroll: 1,
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
		
			$("body,html").animate({
				   scrollTop:$("body,html").scrollTop()+4450}, 500);

		});
		
		$(".section-test-2 .button-show, .nav").click(function(){
			var menuIndex = $(this).attr("data-menu");
			fullSite = true;
			var offset = 0;
			switch(menuIndex){
			case '0':
					offset = 255;
				break;
			case '1':
					
					$(".catalog-item").each(function(a,b){				
					$(b).removeClass("catalog-item-zip");	
					});
					$(".catalog-menu").css({"display":"block"});
					setTimeout(function(){
							$(".catalog-menu").css({"opacity":"1","transition":"1s"});
					},1000);
				
					
					$(".catalog-selected").each(function(a,b){
						$(b).css({"display":"none"});
						});
					offset = 2300;				
					
				break;
			case '2':
					offset = 4800;
					
				break;
			case '3':
					offset = 5680;
				break;
			case '4':
					offset = 5850;
				break;
			}
			
				$(".sub-1").addClass("display-none");
				$(".sub-2").addClass("display-none");					
				$("body,html").animate({
				   scrollTop:$("body,html").scrollTop()+offset}, 1000);
		});
		$(".back-to-catalog").click(function(){
		
			$(".catalog-item").each(function(a,b){		
				if ($(b).hasClass("catalog-item-zip"))
					$(b).removeClass("catalog-item-zip");	
			});
			$(".catalog-menu").css({"display":"block"});
			setTimeout(function(){
					$(".catalog-menu").css({"opacity":"1","transition":"1s"});
			},1000);
		
			
			$(".catalog-selected").each(function(a,b){
				$(b).css({"display":"none"});
				
			});
			
			$("body,html").animate({
				   scrollTop:$("body,html").scrollTop()+2000}, 1000);
				   
					
			
		});
		
		$(".slider-part ul li").click(function(){
			fullSite = true;
			var k = $(this);
			var index = k.attr("data-item");
			var el = ".c"+index;	
	
			$(".catalog-selected").each(function(a,b){
				$(b).css({"display":"none"});				
			});
			
			$(".catalog-item").each(function(a,b){			
					if (!$(b).hasClass("catalog-item-zip"))
						$(b).addClass("catalog-item-zip");
			});
		
			
			$(".catalog-menu").css({"opacity":"0","transition":"1s"});
			$(el).css({"display":"block"});
			setTimeout(function(){
					$(".catalog-menu").css({"display":"none"});													
					$(el).css({"transition":"2s","margin-left":"20px"});					
			},1000);
			
			setTimeout(function(){
				$(el).css({"opacity":"1"});
			},2000);
			
			$("body,html").animate({
				   scrollTop:$("body,html").scrollTop()+2000}, 1000);
		
			$(".catalog-selected").animate({
				   scrollTop:$("body,html").scrollTop()}, 1000);
			
		
			
		});
		$(".catalog-item").click(function(){
			var k = $(this);
			var index = k.attr("data-item");
			var el = ".c"+index;	

			$(".catalog-selected").each(function(a,b){
				$(b).css({"display":"none"});				
			});
			
			$(".catalog-item").each(function(a,b){
				if (!$(b).hasClass("catalog-item-zip"))
					$(b).addClass("catalog-item-zip");
			});
			
			
			$(".catalog-menu").css({"opacity":"0","transition":"1s"});
			
			$(el).css({"display":"block"});
			setTimeout(function(){
					$(".catalog-menu").css({"display":"none"});													
					$(el).css({"transition":"2s","margin-left":"20px"});					
			},1000);
			
			setTimeout(function(){
				$(el).css({"opacity":"1"});
			},2000);
			
			$("body,html").animate({
				   scrollTop:$("body,html").scrollTop()+2000}, 1000);
		
			$(".catalog-selected").animate({
				   scrollTop:$("body,html").scrollTop()}, 1000);
		});
		
		$(".csm").click(function(){
		
			var k = $(this);
			var index = k.attr("data-item");
			var currEl =  k.attr("data-current"); 			
			var el = ".c"+index;	
			$(".c"+currEl).css({"transition":"2s","margin-left":"2000px"});
			$(".c"+currEl).css({"display":"none"});
			$(el).css({"display":"block"});															
			$(el).css({"transition":"2s","margin-left":"20px"});
			$(el).css({"opacity":"1"});	
			$("body,html").animate({
				   scrollTop:$("body,html").scrollTop()+2000}, 1000);
			$(".catalog-selected").scrollTop($("body,html").scrollTop()-1000);				
		});
		/*
		$(window).resize(function() {
          if(parseInt($(window).width())>1600)    
				$("body").css({"zoom":"1.25"});
				else
					$("body").css({"zoom":"1"});
		});
	*/
	});
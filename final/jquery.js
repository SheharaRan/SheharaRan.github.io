 var numpics, sldWd, tb;

$(document).ready(function(){
        console.log('The Document is ready!')
		
		numpics = $('#albumcovers').innerWidth();
		tb = $('#inside');
		sldWd = tb.outerWidth();
		
		$('#albumcovers').mousemove(function(e)
		{
			tb.css({left: ((numpics - sldWd)*((e.pageX / numpics).toFixed(3))).toFixed(1) +"px" });
 		});


$(function(){
$('#albumpage').hover(
	function() {	$("audio")[0].play();},
	function() {	$("audio")[0].pause();}
	)
});

var numpics1;
var slfWd1;
var tb1;
$(function(){
		
		numpics1 = $('#merch').innerWidth();
		tb1 = $('#inside');
		sldWd1 = tb1.outerWidth();
		
		$('#merch').mousemove(function(e)
		{
			tb1.css({left: ((numpics1 - sldWd1)*((e.pageX / numpics1).toFixed(3))).toFixed(1) +"px" });
 		});
});
    

    
$('#pic').mouseover(
    function(){     $('#pic').fadeOut();
});
$('iframe').mouseout(
    function(){     $('#pic').fadeIn();
});

    
$('#pic2').mouseover(
    function(){     $('#pic2').fadeOut();
});
$('iframe').mouseout(
    function(){     $('#pic2').fadeIn();
});


    
 });
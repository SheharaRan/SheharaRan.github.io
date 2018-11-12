
var SNum= document.getElementById('square-button');
SNum.addEventListener("click", squareNumber);


function squareNumber(){
    var num = document.getElementById('square-input').value;
    var squarenum = num * num;
    
    var solutionDiv = document.getElementById("solution");
    solutionDiv.innerHTML = "The result of squaring the number " + num + " is " + squarenum;
}




var HNum= document.getElementById('half-button');
HNum.addEventListener("click", halfNumber);


function halfNumber(){
    var hnum = document.getElementById('half-input').value;
    var halfnum = hnum / 2;
    
    var solutionDiv = document.getElementById("solution");
    solutionDiv.innerHTML = "Half of " +  hnum + " is " + halfnum;

}



var PNum= document.getElementById('percent-button');
PNum.addEventListener("click", percentOf);


function percentOf(){
    var pnum1 = document.getElementById('percent1-input').value;
    var pnum2 = document.getElementById('percent2-input').value;
    var percentnum = (pnum1 / pnum2 * 100).toFixed(2);
    
    var solutionDiv = document.getElementById("solution");
    solutionDiv.innerHTML = pnum1 + " is " + percentnum +"% of " + pnum2;

}




var ANum= document.getElementById('area-button');
ANum.addEventListener("click", areaOfCircle);


function areaOfCircle(){
    var radiusn = document.getElementById('area-input').value;
    var areanum = (Math.PI * radiusn * radiusn).toFixed(2);
    
    var solutionDiv = document.getElementById("solution");
    solutionDiv.innerHTML = "The area for a circle with radius " + radiusn +" is " + areanum;

}

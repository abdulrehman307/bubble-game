//function for create bubbles 
function makebubble() {
    var bubbles= "";
    
    for( var i = 1 ; i<=190; i++){
    
        var random  = Math.floor(Math.random()*10)
    bubbles += ` <div class="bubbles">${random}</div>`;
    
    }
    document.querySelector("#bottom").innerHTML=bubbles
    }
    makebubble() ;
    // variables declare and intialize 
    var timer = 60;
    var score= 0;
    var hitrn ; 
    //run timer function .....
    function runtimer (){
    
      setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timervalue").innerHTML=timer;
    }
    else{
    document.querySelector("#bottom").innerHTML=`<h1>Game Over &#128512;  </h1>`
}

},1000);
}
runtimer ();

// function for new hit .....
function getnewhit(){

hitrn = Math.floor(Math.random()*10);

document.querySelector("#hit").innerHTML=hitrn;
}
getnewhit()
// function for new score......
function increasescore(){

score += 0;
score++;
document.querySelector("#score").innerHTML=score;
}
increasescore();
// event listener on bubbles  

document.querySelector("#bottom").addEventListener("click", function(details){
var clickednum = Number(details.target.textContent);
if ( clickednum === hitrn){

  makebubble() ;
  getnewhit();
  increasescore();
} })    
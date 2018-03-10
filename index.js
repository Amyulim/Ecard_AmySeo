var title = document.getElementById("title");
var mainP = document.getElementById("main");
var myWindow = document.getElementById("window");

function closeDiv(id) {
    document.getElementById(id).style.display="none";
}
function stopAnim(id) {
    document.getElementById(id).style.animation="none";
}
title.addEventListener("click", function (){
    document.getElementById("blood").style.backgroundPosition="left -100px";
    
    title.style.color="#c63932"; 
    title.style.textShadow ="4px 3px black";
    stopAnim("title")
    
    document.getElementById("laugh").play()
    
    myWindow.style.animation = "Opa 3s infinite";
    myWindow.style.opacity = "0";
    document.getElementById("start").style.display = "block"
});

document.getElementById("start").addEventListener("click", function (){
    mainP.style.display="block";
    document.getElementById("wrapper").style.display="none";
});

/*=========================== Second Page =========================== */

var secondPage = document.getElementById("secondPage");
var lastPage = document.getElementById("lastPage");
var rightB = document.getElementById("right");
var leftB = document.getElementById("left");


rightB.addEventListener("click", function (){
    mainP.style.backgroundPosition = "right";
    leftB .style.display = "block"
    rightB.style.display = "none"
    secondPage.style.left = "-100%";
    lastPage.style.left ="0%";
});

leftB.addEventListener("click", function (){
    mainP.style.backgroundPosition = "left";
    leftB .style.display = "none"
    rightB.style.display = "block";
    secondPage.style.left = "0";
    lastPage.style.left ="100%"; 
});

var pumkin = document.getElementById("pumkin");
var pumkinS = document.getElementById("pumS");
var owl = document.getElementById("owl");
var factCount =  document.getElementById("factN");
var x = 10;
var a = 0, b=0, c=0, d=0, e=0, f=0, g=0, h=0, i=0, j=0;

function finish() {
    if(x==0){setTimeout(function() { 
        document.getElementById("finished").style.display="block";
    },2000);
    } else {false}   
}
pumkin.addEventListener("mouseenter", function () {
    pumkin.style.animation ="jump 2s infinite";
    pumkinS.style.animation ="Pshadow 2s infinite"
});

pumkin.addEventListener("click", function () {
    document.getElementById("fact1").style.display = "block";
    
    a++;
    if(a == 1){
        factCount.innerHTML = x - 1;
        x--;
        finish();
    }
});

document.getElementById("fact1C").addEventListener("click", function () {
    closeDiv("fact1");
    stopAnim("pumkin")
    stopAnim("pumS")
});

owl.addEventListener("click", function (){
    document.getElementById("fact2").style.display = "block";
    owl.style.top = "3%";
    owl.style.transform = "rotate(-7deg)";
   
    b++;
    if(b == 1){
        factCount.innerHTML = x - 1;
        x--;
      finish();
    
    }
});

document.getElementById("fact2C").addEventListener("click", function () {
    closeDiv("fact2");
});

var spider = document.getElementById("spider");
var spider2 = document.getElementById("spider2");

spider.addEventListener("mouseenter", function () {
    spider2.style.backgroundPosition ="0"
});

spider.addEventListener("mouseleave", function () {
    spider2.style.backgroundPosition = "left -220px";
})

var candy = document.getElementById("candy");
candy.addEventListener("mouseenter", function () {
    candy.style.animation ="Cjump 2s infinite";
});

candy.addEventListener("click", function () {
    document.getElementById("fact3").style.display="block" ;
    
    c++;
    if(c == 1){
        factCount.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact3C").addEventListener("click", function () {
    closeDiv("fact3");
    stopAnim("candy")
});

document.getElementById("pot").addEventListener("click", function () {
    document.getElementById("pot").innerHTML = "<img src='img/poison.svg' id='poison'/>"
});

var skull = document.getElementById("skull");
skull.addEventListener("mouseenter", function () {
    skull.style.animation="skullR 3s infinite";
});

document.getElementById("calender").addEventListener("click", function () {
    document.getElementById("calender").innerHTML = "<img src='img/Sblood1.svg' id='b1'/><img src='img/Sblood2.svg' id='b2'/>"
    document.getElementById("fact4").style.display = "block";
    
    d++;
    if(d == 1){
        factCount.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact4C").addEventListener("click", function () {
    closeDiv("fact4");
});

function make3CandyS () {
        makeItCandyS();
        makeItCandyS();
        makeItCandyS();
    }
function makeItCandyS(){
    var pop = document.createElement("img");
    var mleft = Math.round(Math.random()*95);
    var mrotate = Math.round(Math.random()*180);
    pop.src = "img/pop.svg";
    pop.className = "pops";
    pop.style.left = mleft + "%";
    pop.style.transform = "rotate" + "(" +mrotate+"deg)";
    lastPage.appendChild(pop)
    
    if(mleft >30){
        pop.style.transition = "top 3s";
    }else if(mleft>60){
        pop.style.transition = "top 5s";
    }else if(mleft>80){
        pop.style.transition = "top 2s";
    } else {
        pop.style.transition = "top 4s";
    }
    setTimeout(function(){
        pop.style.top = "85%";
        setTimeout(function(){lastPage.removeChild(pop);},10000);
        
    }, 10);

    
};

document.getElementById("basket").addEventListener("click", function () { 
//    console.log("click")
    make3CandyS()
    document.getElementById("fact5").style.display="block";
    
    e++;
    if(e == 1){
        factCount.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact5C").addEventListener("click", function () {
    closeDiv("fact5");
});

document.getElementById("witch").addEventListener("click", function () {
    console.log("click")
    document.getElementById("witch").style.backgroundPosition="-70px 120px";
    document.getElementById("fact6").style.display="block";
    
    f++;
    if(f == 1){
        factCount.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact6C").addEventListener("click", function () {
   closeDiv("fact6");
   document.getElementById("witch").style.transform="rotateY(180deg)"
   document.getElementById("witch").style.backgroundPosition="300px 20px";
});

document.getElementById("spray").addEventListener("click", function () {
    document.getElementById("lid").style.bottom = "36%";
    document.getElementById("string").style.opacity = "1";
    document.getElementById("fact7").style.display = "block";
    
    g++;
    if(g == 1){
        factCount.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact7C").addEventListener("click", function () {
   closeDiv("fact7");
});

document.getElementById("candyCone").addEventListener("click", function() {
    document.getElementById("fact8").style.display = "block";
    document.getElementById("candyCone").style.animation = "rotate 2s infinite";
    
    h++;
    if(h == 1){
        factCount.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact8C").addEventListener("click", function () {
    closeDiv("fact8");
    stopAnim("candyCone");

});

document.getElementById("ghost").addEventListener("click", function () {
    document.getElementById("fact9").style.display = "block";
    document.getElementById("ghost").style.animation = "move 4s infinite";
    
    i++;
    if(i == 1){
        factCount.innerHTML = x - 1;
        x--;
        finish();
    
    }
})

document.getElementById("fact9C").addEventListener("click", function () {
    closeDiv("fact9");
    stopAnim("ghost")
});

document.getElementById("candle").addEventListener("mouseenter", function () {
   document.getElementById("light").style.animation = "candleO 2s infinite"; 
})
document.getElementById("candle").addEventListener("click", function () {
    document.getElementById("fact10").style.display = "block";
    
    j++;
    if(j == 1){
        factCount.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact10C").addEventListener("click", function () {
    closeDiv("fact10");
    stopAnim("light");
 
});




let option=document.querySelectorAll(".option");
let scoreboard=document.querySelector(".score-board");
let gamesec=document.querySelectorAll(".game-sec");
let pc=document.querySelectorAll(".pc");
let lines=document.querySelector(".lines");
let random=Math.floor(Math.random()*3);
let user=document.querySelector(".user");
let nextbtn=document.querySelector( ".nextbtn");
let celebration=document.querySelector(".celebration");
let rulebtn=document.querySelector(".rulebtn");
let rulepop=document.querySelector(".rule-pop");
let gamerules=document.querySelector(".game-rules");
let close=document.querySelector(".close");
let computer=document.querySelector(".pc-user");
let gamewin=document.querySelector(".game-win");
let winner=document.querySelector(".winner");
let gamelost=document.querySelector( ".game-lost" );
let tieup=document.querySelector( ".tie-up" ) ;
let playagain=document.querySelector( ".play-again" );
let playagainceleb=document.querySelector(".play-again-celeb");
let score=JSON.parse(localStorage.getItem( "pc-score" ))
let pcscore=document.querySelector(".pcscore");
let userscore=document.querySelector(".userscore");
let uscore=JSON.parse(localStorage.getItem("user-score"));
let count=0;
if(score){
    pcscore.innerHTML=score;
}
if(uscore) {
    userscore.innerHTML = uscore;
}          



option.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        user.style.opacity="1";
        lines.style.display = "none";
        option.forEach(item =>{
            item.style.display = "none";
        })
        element.style.display="block";
        element.classList.add("option-show");
        setTimeout(() => {
            computer.style.opacity="1";
            setTimeout(() => {
                pc[random].style.display="block";
                pc[random].classList.add("pc-select")
            }, 1000);
            setTimeout(() => {
                if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
                    gamewin.style.display="grid";
                    winner.innerHTML="<h1>YOU WIN</h1><h2>AGAINST PC</h2>";
                    nextbtn.style.display= "flex";
                    // element.style.border = "50px solid green";
                    // element.style.borderRadius = "50%";
                    // element.style.padding = "10px";
                    element.classList.add("green-animation");
                    count=uscore;
                    count++;
                    userscore.innerHTML=uscore;
                    localStorage.setItem("user-score", JSON.stringify(count));
                }else if(index==0 && random==0 || index==1 && random==1 || index==2 && random==2){
                    gamewin.style.display="grid";
                    winner.innerHTML="TIE-UP";
                    
                }else{
                    gamewin.style.display="grid";
                    winner.innerHTML="<h1>YOU LOST</h1><h2>AGAINST PC</h2>";
                    pc[random].classList.add("green-animation");
                    count=score;
                    count++;
                    pcscore.innerHTML=score;
                    localStorage.setItem("pc-score", JSON.stringify(count));
                }
            }, 1500);
        }, 500);
    })
}) 
playagain.addEventListener('click', function(){ 
    window.location.reload();
});

rulebtn.addEventListener("click", ()=>{
    rulepop.style.display= "flex";
    gamerules.style.transform="translateY(0)";
})

close.addEventListener("click", ()=>{
    rulepop.style.display = "none";
    gamerules.style.transform="translate(-200%)";
})

  nextbtn.addEventListener('click', () => {
    user.style.display = "none";
    lines.style.display = "none";
    option.forEach(item => {
        item.style.display = "none";
    });
    computer.style.display = "none";
    pc[random].style.display = "none";
    gamewin.style.display = "none";
    nextbtn.style.display = "none";
    scoreboard.style.display = "none" ;
    celebration.style.display = "block";
});

playagainceleb.addEventListener('click', () => {
    window.location.reload();
});

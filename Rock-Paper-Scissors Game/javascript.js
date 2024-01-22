let userscore=0;
let compscore=0;
let choices=document.querySelectorAll("img");
let result1=document.querySelector("#result1");
const userScorePara = document.querySelector("#yourscore1");
const compScorePara = document.querySelector("#yourscore2");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})
const comp=()=>{
    let option=["rock","paper","scissors"]
    let randomidx=Math.floor(Math.random()*3);
    return option[randomidx];
}
const draw=()=>{
    result1.innerText="Game Was Drawn, Play Again!";
    result1.style.backgroundColor="#081b31";
}
const showwinner=(userwin, userchoice , compchoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText=userscore;
        result1.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        result1.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorePara.innerText=compscore;
        result1.innerText=`You lost. ${compchoice} beats your ${userchoice}`;
        result1.style.backgroundColor = "red";
    }
}
const playgame=(userchoice)=>{
    let compchoice=comp();
    // console.log(userchoice);
    // console.log(compchoice);

    if(userchoice===compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin= compchoice==="paper" ? false:true;

        }
        else if(userchoice==="paper"){
            userwin= compchoice==="rock" ? true:false;
        }
        else{
            userwin= compchoice==="rock" ? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

}
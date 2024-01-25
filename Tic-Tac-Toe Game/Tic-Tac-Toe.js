let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msgcontainer");
let newbtn=document.querySelector("#newbtn");
const winning=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let trueO=true;
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trueO){
            box.innerText="O";
            box.style.color="black"
            trueO=false;
        }
        else{
            box.innerText="X";
            box.style.color="grey"
            trueO=true;
        }
        box.disabled=true;
        count++;
        checkwinner();
        if(count>8){
            draw();
        }
    })
})
const draw =()=>{
    msg.innerText=(`The Match is Drawn :`);
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const resetgame=()=>{
    turnO=true;
    count=0;
    msgcontainer.classList.add("hide");
    enableboxes();
}

const checkwinner=()=>{
    for (let pattern of winning) {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                    // console.log(`winner is ${pos1}`);
                    showwinner(pos1);
            }
        }
    }
}

const showwinner=(winner1)=>{
    msg.innerText=(`Congratulations, The Winner is '${winner1}' :`);
    msgcontainer.classList.remove("hide");
    disabledboxes();
}
const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled=true;
    }
}
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
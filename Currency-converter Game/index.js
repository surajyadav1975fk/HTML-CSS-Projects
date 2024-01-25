const BASEURL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg = document.querySelector(".msg");
window.addEventListener("load",()=>{
    update();
})
for (let select of dropdowns) {
    for (code in countryList) {
        let options=document.createElement("option")
        options.innerText=code;
        options.value=code;
        if(select.name==="from" && options.value==="USD"){
            options.selected="selected";
        }
        else if(select.name==="to" && options.value==="INR"){
            options.selected="selected";
        }
        select.append(options);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })
}
const updateflag=(element)=>{
    let val=element.value;
    let countrycode= countryList[val];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img= element.parentElement.querySelector("img");
    img.src=newsrc;
}
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    update();
})
const update = async ()=>{
    let amt=document.querySelector(".amount input");
    let amtval=amt.value;
    if(amtval==="" || amtval<1){
        amtval=1;
        amt.value="1";
    }
    
    const URL=`${BASEURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let finalAmount = amtval * rate;
    msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}
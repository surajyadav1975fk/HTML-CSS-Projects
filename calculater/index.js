let string="";
let val=0;
let buttons=document.querySelectorAll('.but');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string)
            document.querySelector('#input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('#input').value=string;
        }
        else if(e.target.innerHTML=='X'){
            string=string.slice(0, string.length-1); ;
            document.querySelector('#input').value=string;
        }
        else if(e.target.innerHTML=='M+'){
            val+=parseInt(document.querySelector('#input').value);
            console.log(val);
            string="";
            document.querySelector('#input').value=string;
        }
        else if(e.target.innerHTML=='M-'){
            val-=parseInt(document.querySelector('#input').value);
            console.log(val);
            string="";
            document.querySelector('#input').value=string;
        }
        else if(e.target.innerHTML=='MC'){
            document.querySelector('#input').value=val;
            val=0;
        }
        else{
            string+=e.target.innerHTML;
            document.querySelector('#input').value=string;
        }
    })
})
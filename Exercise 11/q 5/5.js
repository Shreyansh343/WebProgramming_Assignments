let but = document.createElement("button");
let inp = document.createElement("input");
let x = 0;
inp.readonly = true;
but.innerText = "CLICK ME!!"
but.addEventListener("click",function(){
    x = x+1;
    inp.value = x;
} )
document.body.appendChild(but);
document.body.appendChild(inp);
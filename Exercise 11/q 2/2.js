let but = document.createElement("button");
but.innerText = "hover me";
but.style.backgroundColor = "red";

but.onmouseover = function(){
    but.style.backgroundColor="green";
}
but.onmouseout = function(){
    but.style.backgroundColor="red";
}

document.body.appendChild(but);
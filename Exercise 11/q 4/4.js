let inp = document.createElement("input");
let but = document.createElement("button");

but.innerText = "add";
let ul = document.createElement("ul");

function add(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);
}

but.addEventListener("dblclick",add)
document.body.appendChild(but);
document.body.appendChild(inp);
document.body.appendChild(ul);
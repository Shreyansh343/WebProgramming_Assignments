let inp = document.createElement("input");
inp.type = "text";
inp.style.backgroundColor = "green";

inp.addEventListener("focus",function(){
    inp.style.backgroundColor = "yellow";
});
inp.addEventListener("blur", function() {
    inp.style.backgroundColor = "green";
});
inp.addEventListener("change", function() {
    alert("Hello! You changed the text.");
});

document.body.appendChild(inp);
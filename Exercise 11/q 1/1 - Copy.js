let but = document.createElement("button");
but.textContent = "Start";

but.onclick = function() {
    let a = document.getElementById("1").value;
    let b = document.getElementById("2").value;

    let tab = document.createElement("table");
    tab.border = "1";
    for(let i=0;i<a;i++){
    let r = document.createElement("tr");
    for(let j=0;j<b;j++){
    let c = document.createElement("td");
    c.innerText = `${i+1},${j+1}`;
    r.appendChild(c);
    }
    tab.appendChild(r);
    }
    document.body.appendChild(tab);
}

document.body.appendChild(but);
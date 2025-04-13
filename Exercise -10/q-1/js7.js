const ar = []
let i = 0;
function add(){
    let pid = parseInt(document.getElementById("pid").value);
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    ar[i] = {Pid : pid, Name : name,Age : age};
    
   
    i = i+1;
}

function display() {
    d = '<table>'
    let d = `Pid: ${ar[i-1].Pid} Name: ${ar[i-1].Name} Age: ${ar[i-1].Age}`;
    document.getElementById("output").innerHTML = d;
  }
  
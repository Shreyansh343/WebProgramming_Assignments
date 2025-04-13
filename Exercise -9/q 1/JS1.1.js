/*Your JavaScript program should count and print the number of HOT days (High 
    Temperature: 85 or higher), the number of PLEASANT days (High temperature: 60-84) 
    and the number of COLD days (High temperature<60) in the city. It should also display 
    the category of each temperature in an HTML Table. */
let hot = 0;
let pleasant = 0;
let cold = 0;
function weather(){
let x = document.getElementById("temp").value;
if(x>85){
    hot = hot+1;
}
else if(x>=60 || x<=84){
    pleasant = pleasant+1;
}
else if(x<60){
    cold = cold + 1;
}

document.getElementById("hot").value = hot;
document.getElementById("cold").value = pleasant;
document.getElementById("pleasant").value = cold;
}
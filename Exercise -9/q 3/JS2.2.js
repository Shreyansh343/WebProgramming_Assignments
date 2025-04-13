function calculate(){
    let x = document.getElementById("gender").value;
    let y = parseFloat(document.getElementById("weight").value);
    let z = parseFloat(document.getElementById("feet").value);
    let p = parseFloat(document.getElementById("inch").value);
     z = z*12;
    let h = (z)+p;
    let bmi = (703*y)/(h*h);
    bmi = bmi.toFixed(2);

    if(x==="male"){
        if(bmi<17.50){
            alert("Anorexia");
            document.getElementById("result").value = bmi;
        }
        if(bmi<20.70 && bmi>17.501){
            alert("Underweight");
            document.getElementById("result").value = bmi;
        }
        if(bmi<26.40 && bmi>20.71){
            alert("Ideal Range");
            document.getElementById("result").value = bmi;
        }
        if(bmi<27.80 && bmi>26.41){
            alert("Marginally Overweight");
            document.getElementById("result").value = bmi;
        }
        if(bmi<31.10 && bmi>27.81){
            alert("Overweight Range");
            document.getElementById("result").value = bmi;
        }
        if(bmi>31.10){
            alert("Very Overweight Range");
            document.getElementById("result").value = bmi;
        }
    }
    else if(x==="female"){
        if(bmi<17.50){
            alert("Anorexia");
            document.getElementById("result").value = bmi;
        }
        if(bmi<19.10 && bmi>17.51){
            alert("Underweight");
            document.getElementById("result").value = bmi;
        }
        if(bmi<25.80 && bmi>19.11){
            alert("Ideal Range");
            document.getElementById("result").value = bmi;
        }
        if(bmi<27.30 && bmi>25.81){
            alert("Marginally Overweight");
            document.getElementById("result").value = bmi;
        }
        if(bmi<32.30 && bmi>27.31){
            alert("Overweight Range");
            document.getElementById("result").value = bmi;
        }
        if(bmi>32.30){
            alert("Very Overweight Range");
            document.getElementById("result").value = bmi;
        }
    }
}
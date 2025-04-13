let seat1 = new Array(5).fill(0);
let seat2 = new Array(5).fill(0);
let count = 0;
let count1 = 0;

function assign() {
    let x = document.getElementById("name").value;
    let y = parseInt(document.getElementById("class").value);

    if(y===1){
        firstclass(x);
    }else if(y===2){
        economy(x);
    }else{
        alert("Enter a valid choice");
    }
}

function firstclass(x){
    if(count == 4){
    let sw = confirm("Switch to Economy ?");
    if(sw){
       economy(x);
    }else{
        alert("Next flight departs after 3 hours");
    }
    return;

    }
    seat1[count] = 1;
    count++;
    let seatnumber = count;
    let seatclass = "1st class";
    boardingpass(x,seatnumber,seatclass);
}
function economy(x){
    if(count1== 4){
   
        console.log("Next flight departs after 3 hours");
        return;
    }

    seat2[count1] = 1;
    count1++;
    let seatnumber = count1+6;
    let seatclass = "Economy class";
    boardingpass(x,seatnumber,seatclass);
}

function boardingpass(x,seatnumber,seatclass){
    

    let text = `Name: ${x}<br>Seat Number: ${seatnumber}<br>Seat Class: ${seatclass}`;

    document.getElementById("output").innerHTML = text;

}





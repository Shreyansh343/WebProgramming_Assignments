// Seat arrays (0 means empty, 1 means occupied)
let seat1 = new Array(5).fill(0); // First-Class seats (1-5)
let seat2 = new Array(5).fill(0); // Economy seats (6-10)

// Counters for tracking assigned seats
let count1 = 0; // First-Class seat counter
let count2 = 0; // Economy seat counter

function assign() {
    let name = document.getElementById("name").value;
    let seatClass = parseInt(document.getElementById("class").value); // Convert input to number

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    if (seatClass === 1) {
        firstClass(name);
    } else if (seatClass === 2) {
        economy(name);
    } else {
        alert("Enter a valid choice (1 for First-Class, 2 for Economy).");
    }
}

function firstClass(name) {
    if (count1 >= 5) {
        let sw = confirm("First-Class is full. Switch to Economy?");
        if (sw) {
            economy(name);
        } else {
            alert("Next flight departs after 3 hours.");
        }
        return;
    }

    seat1[count1] = 1; // Mark seat as taken
    let seatNumber = count1 + 1;
    count1++;

    printBoardingPass(name, seatNumber, "First-Class");
}

function economy(name) {
    if (count2 >= 5) {
        let sw = confirm("Economy is full. Switch to First-Class?");
        if (sw) {
            firstClass(name);
        } else {
            alert("Next flight departs after 3 hours.");
        }
        return;
    }

    seat2[count2] = 1; // Mark seat as taken
    let seatNumber = count2 + 6;
    count2++;

    printBoardingPass(name, seatNumber, "Economy Class");
}

function printBoardingPass(name, seatNumber, seatClass) {
    let text = `Name: ${name}<br>Seat Number: ${seatNumber}<br>Seat Class: ${seatClass}`;
    document.getElementById("output").innerHTML = text; // Use innerHTML for line breaks
}

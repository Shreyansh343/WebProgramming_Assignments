function CalculateTotal(){
    let adultTickets = document.getElementById("adults").value;
    let childrenTickets = document.getElementById("children").value;

    let totalAmount = (adultTickets*10)+(childrenTickets*5);

    document.getElementById("total").value="Rs."+totalAmount;
}
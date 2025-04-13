document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;

    
    let products = [];
    document.querySelectorAll(".product-checkbox").forEach((checkbox) => {
        if (checkbox.checked) {
            let quantityInput = document.getElementById(checkbox.id + "Qty").value;
            if (quantityInput > 0) {
                products.push({
                    name: checkbox.value,
                    quantity: quantityInput
                });
            }
        }
    });

    
    let orderDetails = {
        firstName,
        lastName,
        phoneNumber,
        email,
        products
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    
    window.location.href = "receipt.html";
});

function sendOrder() {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let address = document.getElementById("address").value;
    let gasType = document.getElementById("gasType").value;
    let customGas = document.getElementById("customGas").value;

    let selectedGas = gasType === "custom" ? customGas : gasType;

    if (gasType === "custom" && customGas.trim() === "") {
        alert("Please enter the gas name or type.");
        return;
    }

    let orderMessage = `New LPG Gas Order:%0A🚀 Name: ${name}%0A📞 Contact: ${contact}%0A📍 Address: ${address}%0A🔥 Gas Type: ${selectedGas}%0A🚚 Free Delivery Included!`;
    
    // Send order to WhatsApp
    let whatsappURL = `https://wa.me/256780539217?text=${orderMessage}`;
    window.open(whatsappURL, "_blank");
}

function sendEmail() {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let address = document.getElementById("address").value;
    let gasType = document.getElementById("gasType").value;
    let customGas = document.getElementById("customGas").value;

    let selectedGas = gasType === "custom" ? customGas : gasType;

    if (gasType === "custom" && customGas.trim() === "") {
        alert("Please enter the gas name or type.");
        return;
    }

    let orderMessage = `New LPG Gas Order:\n🚀 Name: ${name}\n📞 Contact: ${contact}\n📍 Address: ${address}\n🔥 Gas Type: ${selectedGas}\n🚚 Free Delivery Included!`;
    
    let emailURL = `mailto:lpggasuganda@gmail.com?subject=New LPG Order&body=${encodeURIComponent(orderMessage)}`;
    window.open(emailURL, "_blank");
}

function makeCall() {
    let phone1 = "tel:0747278208";
    let phone2 = "tel:0780539217";
    
    function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let addressField = document.getElementById("address");
    addressField.value = `Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`;
}

function showError(error) {
    alert("Error getting location. Please enter address manually.");
}
window.addEventListener("load", function() {
    if (localStorage.getItem("order")) {
        document.getElementById("orderForm").innerHTML = localStorage.getItem("order");
    }
});

function saveOrderOffline() {
    localStorage.setItem("order", document.getElementById("orderForm").innerHTML);
    alert("Order saved! It will be sent when online.");
}

    // Opens call dialog with the first number
    window.location.href = phone1;
}
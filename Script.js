// Function to send order on WhatsApp
function sendOrder() {
    // Get the user input values from the form
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const gasType = document.getElementById('gasType').value;
    const customGas = document.getElementById('customGas').value;

    // Prepare the WhatsApp message
    let message = `Hello, I would like to order LPG gas.\nName: ${name}\nPhone: ${contact}\nAddress: ${address}\nGas Type: ${gasType}`;

    if (gasType === "custom") {
        message += `\nCustom Gas Type: ${customGas}`;
    }

    // Open WhatsApp with the prepared message (replace with your own WhatsApp number)
    const whatsappLink = `https://wa.me/256780539217?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

// Function to send order via Email
function sendEmail() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const gasType = document.getElementById('gasType').value;
    const customGas = document.getElementById('customGas').value;

    let emailSubject = `LPG Gas Order: ${name}`;
    let emailBody = `Hello,\n\nI would like to order LPG gas.\nName: ${name}\nPhone: ${contact}\nAddress: ${address}\nGas Type: ${gasType}`;

    if (gasType === "custom") {
        emailBody += `\nCustom Gas Type: ${customGas}`;
    }

    // Open email client with pre-filled details
    const mailtoLink = `mailto:lpggasuganda@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
}

// Function to make a phone call
function makeCall() {
    const contact = document.getElementById('contact').value;
    const phoneNumber = `tel:${contact}`;
    window.location.href = phoneNumber;
                                                            }

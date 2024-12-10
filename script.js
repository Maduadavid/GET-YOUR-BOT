// Array of dynamic messages to display
const messages = [
    "Get instant assistance anytime!",
    "Your AI assistant is just a click away.",
    "Experience personalized support 24/7!",
    "Join thousands of users already using the bot!"
];

let messageIndex = 0;
const dynamicMessage = document.getElementById("dynamic-message");

// Function to change the message every few seconds
function changeMessage() {
    dynamicMessage.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

// Update the message every 3 seconds
setInterval(changeMessage, 3000);
let roles = [
    "Aspiring Full Stack Developer",
    "Frontend Developer",
    "JavaScript Enthusiast",
    "Future Software Engineer"
];

let index = 0;

/* function changeRole() {
    index = (index + 1) % roles.length;
    document.getElementById("role").textContent = roles[index];
} */

function changeRole() {
    debugger;
    let currentName = document.getElementById("role").innerText ;
    // 1. Ask the user for their new role using a prompt
    let newRole = prompt("What is your new professional role?", currentName );

    // 2. Check if the user entered something (and didn't hit cancel)
    if (newRole !== null && newRole !== "") {
        
        // 3. Update the HTML element with the id 'role'
        document.getElementById("role").innerText = newRole;
        document.getElementById("role").style.fontSize = "50px";
        // 4. Show a success message using an alert
        alert("Role updated successfully to: " + newRole);
    } else {
        alert("No changes were made.");
    }
}
// script.js

// 1. Select the search input and all the project cards
const searchInput = document.getElementById('project-search');
const cards = document.querySelectorAll('.card');

// 2. Add an "Event Listener" to detect typing
searchInput.addEventListener('keyup', function(event) {
    const searchTerm = event.target.value.toLowerCase();

    cards.forEach(card => {
        // Get the title text from the h3 inside the card
        const projectTitle = card.querySelector('h3').textContent.toLowerCase();

        // 3. Logic: If the title includes the search term, show it; otherwise, hide it
        if (projectTitle.includes(searchTerm)) {
            card.style.display = "block"; // Show
        } else {
            card.style.display = "none";  // Hide
        }
    });
});

function startAuth() {
    const SECRET_PIN = "1234";
    let inputPin = "";
    let attempts = 0;
    const maxAttempts = 3;
    let messageElement = document.getElementById("access-message");

    // 1. DO...WHILE LOOP 
    // This runs at least once to get the first attempt from the user.
    do {
        inputPin = prompt("Please enter the 4-digit Secret PIN:");
        attempts++;

        if (inputPin === SECRET_PIN) {
            break; // Exit immediately if correct
        }

        alert("Incorrect PIN. Attempt " + attempts + " of " + maxAttempts);

    } while (attempts < 1 && inputPin !== SECRET_PIN);

    // 2. WHILE LOOP
    // If the first attempt was wrong, this handles the remaining limited tries.
    while (inputPin !== SECRET_PIN && attempts < maxAttempts) {
        inputPin = prompt("Access Denied. Try again:");
        attempts++;
        
        if (inputPin !== SECRET_PIN && attempts < maxAttempts) {
            alert("Remaining tries: " + (maxAttempts - attempts));
        }
    }

    // Final Validation
    if (inputPin === SECRET_PIN) {
        messageElement.innerHTML = "✅ ACCESS GRANTED. Welcome back!";
        messageElement.className = "success";
    } else {
        messageElement.innerHTML = "❌ SYSTEM LOCKED. Too many failed attempts.";
        messageElement.className = "denied";
    }
}

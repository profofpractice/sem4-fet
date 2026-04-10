let roles = [
    "Aspiring Full Stack Developer",
    "Frontend Developer",
    "JavaScript Enthusiast",
    "Future Software Engineer"
];

let index = 0;

function changeRole() {
    index = (index + 1) % roles.length;
    document.getElementById("role").textContent = roles[index];
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

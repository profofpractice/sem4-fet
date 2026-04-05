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

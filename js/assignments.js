const assignments = [
    {
        title: "Assignment 1: HTML Basics",
        description: "Create headings, paragraphs, and lists.",
        link: "assignments/one.html"
    },
    {
        title: "Assignment 2: CSS Styling",
        description: "Apply colors, fonts, and layouts.",
        link: "assignments/two.html"
    },
    {
        title: "Assignment 3: JavaScript Basics",
        description: "Build interactive elements.",
        link: "assignments/three.html"
    }
];

const container = document.getElementById("assignment-container");

assignments.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <br>
        <a href="${item.link}" class="btn">Open</a>
    `;

    container.appendChild(card);
});

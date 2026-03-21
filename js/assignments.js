const assignments = [
    {
        title: "Assignment 1: Introduction",
        description: "Build a simple personal introduction page",
        link: "assignments/one.html"
    },
    {
        title: "Assignment 2: Blog Post",
        description: "Apply colors, fonts, and layouts.",
        link: "assignments/two.html"
    },
    {
        title: "Assignment 3: Image and Frames",
        description: "Use of image, anchor and frame tags",
        link: "assignments/three.html"
    }
     {
        title: "Assignment 4: Embedding using Iframes",
        description: "Embed a website and a youube video",
        link: "assignments/four.html"
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

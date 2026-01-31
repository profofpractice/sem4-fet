document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Greeting Interaction
    const greetBtn = document.getElementById('greet-btn');
    greetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const hours = new Date().getHours();
        let msg = hours < 12 ? "Good Morning!" : hours < 18 ? "Good Afternoon!" : "Good Evening!";
        alert(`${msg} Welcome to the Front-End Technologies module.`);
    });

    // 2. Smooth Scroll for the "Explore" button
    const exploreBtn = document.querySelector('.btn');
    exploreBtn.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

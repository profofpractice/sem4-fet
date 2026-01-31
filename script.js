document.getElementById('greet-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const time = new Date().getHours();
    let greeting;

    if (time < 12) {
        greeting = "Good Morning!";
    } else if (time < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting + " Welcome to the Front-End Technologies Module.");
});

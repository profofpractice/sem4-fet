function handleCalculation(type) {
    let radius;
    let isValid = false;
    let inputElement = document.getElementById("radiusInput");
    let outputElement = document.getElementById("output");

    // Get initial value
    radius = parseFloat(inputElement.value);

    // Validation using a do...while logic (simulated for input check)
    // In a real app, we use this loop if we were prompting via prompt()
    if (isNaN(radius) || radius <= 0) {
        do {
            let retry = prompt("Invalid Input. Please enter a positive number for the radius:");
            radius = parseFloat(retry);
        } while (isNaN(radius) || radius <= 0);
        
        // Sync the corrected value back to the UI input
        inputElement.value = radius;
    }

    if (type === 'area') {
        let area = Math.PI * Math.pow(radius, 2);
        outputElement.innerHTML = `Area: ${area.toFixed(2)} units²`;
    } else {
        let circumference = 2 * Math.PI * radius;
        outputElement.innerHTML = `Circumference: ${circumference.toFixed(2)} units`;
    }
}

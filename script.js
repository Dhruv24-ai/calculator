function appendToScreen(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function deleteLast() {
    let screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.substring(0, screen.length - 1);
}

function calculate() {
    let screen = document.getElementById("screen").value;
    try {
        document.getElementById("screen").value = eval(screen);
    } catch (e) {
        document.getElementById("screen").value = "Error";
    }
}

// Dark Mode Toggle
const toggleDarkMode = document.getElementById('toggle-dark-mode');
toggleDarkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    const calculator = document.querySelector('.calculator');
    calculator.classList.toggle('dark-mode');
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.toggle('dark-mode');
    });
    const operators = document.querySelectorAll('.btn-operator');
    operators.forEach(button => {
        button.classList.toggle('dark-mode');
    });
    const equalButton = document.querySelector('.btn-equal');
    equalButton.classList.toggle('dark-mode');
});


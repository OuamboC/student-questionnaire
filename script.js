// Add console.log at the beginning for debugging
console.log("JavaScript file is loaded correctly.");

// Ensure Feather icons are initialized
document.addEventListener("DOMContentLoaded", () => {
    feather.replace();
});
// Enable toggling between light and dark modes
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const body = document.body;
    
    toggleDarkModeButton.addEventListener('click', function () {
        console.log("Toggle button clicked");
        
        body.classList.toggle('dark-mode'); // Toggle dark mode class on body
        
        // Toggle dark mode classes on all necessary elements
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('.logo').classList.toggle('dark-mode');
        document.querySelectorAll('h1, h2, #timer, .link-card a, .nav-links nav ul li a').forEach(el => {
            el.classList.toggle('dark-mode');
        });
    });
});
// Countdown Timer
function countdown(endDate) {
    let days, hours, minutes, seconds;
    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) return;

    setInterval(calculate, 1000);

    function calculate() {
        let startDate = new Date().getTime();
        let timeRemaining = parseInt((endDate - startDate) / 1000);

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);

            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            minutes = parseInt(timeRemaining / 60);
            seconds = parseInt(timeRemaining % 60);

            document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById("timer").innerHTML = "The semester has ended!";
        }
    }
}

countdown("June 6, 2025 00:00:00");

// Quiz Form Submission
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form before collecting answers
    if (!document.querySelector('input[name="q1"]:checked') || 
        !document.querySelector('input[name="q2"]:checked')) {
        alert("Please answer all questions before submitting.");
        return;
    }

    const answers = {
        q1: 'Hyper Text Markup Language',
        q2: 'JavaScript'
    };

    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value
    };

    let score = 0;
    for (let question in answers) {
        if (answers[question] === userAnswers[question]) {
            score++;
        }
    }

    document.getElementById('quiz-result').innerText = `You scored ${score}/2!`;
});



// Burger Menu Toggle
document.getElementById('burger-menu').addEventListener('click', function () {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
    this.classList.toggle('open'); // Add or remove 'open' class

    // Change burger icon to cross when menu is open
    if (this.classList.contains('open')) {
        this.innerHTML = `<div class="bar cross"></div><div class="bar cross"></div><div class="bar cross"></div>`;
    } else {
        this.innerHTML = `<div class="bar"></div><div class="bar"></div><div class="bar"></div>`;
    }
});

// Smooth scroll for Useful Links section
document.addEventListener("DOMContentLoaded", function () {
    const usefulLinksSection = document.getElementById('Useful-links');
    usefulLinksSection.scrollTop = 0; // Start at the top of the Useful Links section

    // Ensure each div is scrolled into view sequentially
    const linkCards = usefulLinksSection.querySelectorAll('.link-card');
    linkCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});





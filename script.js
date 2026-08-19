const greetingElement = document.getElementById("greeting");

const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour < 17) {
    greeting = "Good Afternoon";
} else if (currentHour < 21) {
    greeting = "Good Evening";
} else {
    greeting = "Good Night";
}

greetingElement.textContent = greeting + ", Anna Maria!";
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    if (email === "") {
        formMessage.textContent = "Please enter your email.";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent = "Please enter a valid email.";
        return;
    }

    if (message === "") {
        formMessage.textContent = "Please enter your message.";
        return;
    }

    formMessage.textContent = `Thank you, ${name}! Your message has been submitted.`;

    contactForm.reset();
});

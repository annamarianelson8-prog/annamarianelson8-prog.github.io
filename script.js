// ==========================================
// PHASE 2 - PERSONAL PORTFOLIO JAVASCRIPT
// ==========================================


// ==========================================
// 1. DYNAMIC GREETING
// ==========================================

const greetingElement = document.getElementById("greeting");

const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = "Good Morning";
} 
else if (currentHour < 17) {
    greeting = "Good Afternoon";
} 
else if (currentHour < 21) {
    greeting = "Good Evening";
} 
else {
    greeting = "Good Night";
}

if (greetingElement) {
    greetingElement.textContent = greeting + ", Anna Maria!";
}


// ==========================================
// 2. DOM ACCESS USING querySelector()
// ==========================================

const mainHeading = document.querySelector("h1");

if (mainHeading) {

    mainHeading.addEventListener("mouseover", () => {
        mainHeading.style.transform = "scale(1.05)";
    });

    mainHeading.addEventListener("mouseout", () => {
        mainHeading.style.transform = "scale(1)";
    });
}


// ==========================================
// 3. CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

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

            formMessage.textContent = "Please enter a valid email address.";
            return;

        }

        if (message === "") {

            formMessage.textContent = "Please enter your message.";
            return;

        }

        formMessage.textContent =
            `Thank you, ${name}! Your message has been submitted successfully.`;

        contactForm.reset();

    });

}


// ==========================================
// 4. PROJECTS / ACTIVITIES GALLERY
//    USING jQuery
// ==========================================

$(".project-thumb").click(function() {

    const image = $(this).attr("src");

    const title = $(this).data("title");

    const description = $(this).data("description");


    $("#mainProjectImage").attr("src", image);

    $("#mainProjectTitle").text(title);

    $("#mainProjectDescription").text(description);

});


// ==========================================
// 5. DEV.to ARTICLES USING FETCH()
// ==========================================

const articlesList = document.getElementById("articlesList");

if (articlesList) {

    fetch("https://dev.to/api/articles?tag=javascript&per_page=5")

        .then(response => {

            if (!response.ok) {
                throw new Error("Unable to fetch articles.");
            }

            return response.json();

        })

        .then(articles => {

            articlesList.innerHTML = "";

            articles.forEach(article => {

                const articleElement = document.createElement("p");

                articleElement.innerHTML = `
                    <a href="${article.url}" target="_blank">
                        ${article.title}
                    </a>
                `;

                articlesList.appendChild(articleElement);

            });

        })

        .catch(error => {

            articlesList.textContent =
                "Unable to load articles. Please try again later.";

            console.error(error);

        });

}


// ==========================================
// 6. LIVE WEATHER
//    OPENWEATHERMAP API
// ==========================================

const weatherButton = document.getElementById("weatherButton");

if (weatherButton) {

    weatherButton.addEventListener("click", () => {

        const city = document
            .getElementById("cityInput")
            .value
            .trim();

        const weatherResult =
            document.getElementById("weatherResult");


        // Check empty city

        if (city === "") {

            weatherResult.textContent =
                "Please enter a city name.";

            return;
        }


        // ------------------------------------------
        // PUT YOUR OPENWEATHERMAP API KEY HERE
        // ------------------------------------------

        const apiKey = "YOUR_API_KEY";


        // Create API URL

        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


        weatherResult.textContent =
            "Loading weather...";


        // Get weather data

        fetch(url)

            .then(response => {

                if (!response.ok) {
                    throw new Error("City not found.");
                }

                return response.json();

            })

            .then(data => {

                const temperature =
                    data.main.temp;

                const description =
                    data.weather[0].description;

                const icon =
                    data.weather[0].icon;

                const cityName =
                    data.name;


                // Display weather

                weatherResult.innerHTML = `

                    <h3>${cityName}</h3>

                    <p>
                        Temperature:
                        ${temperature}°C
                    </p>

                    <p>
                        Weather:
                        ${description}
                    </p>

                    <img
                        src="https://openweathermap.org/img/wn/${icon}@2x.png"
                        alt="${description}"
                    >

                `;

            })

            .catch(error => {

                weatherResult.textContent =
                    "Unable to find the city or load weather data.";

                console.error(error);

            });

    });

}


// ==========================================
// 7. SIMPLE BUTTON CLICK EVENT
// ==========================================

const weatherInput = document.getElementById("cityInput");

if (weatherInput) {

    weatherInput.addEventListener("change", () => {

        console.log(
            "City entered:",
            weatherInput.value
        );

    });

}


// ==========================================
// END OF PHASE 2 JAVASCRIPT
// ==========================================

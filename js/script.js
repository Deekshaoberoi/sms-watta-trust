/*=========================================
SMS Watta Jivan Jagriti Trust
script.js
=========================================*/

// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true
});

// ===============================
// Sticky Navbar
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".stats h2");

const speed = 150;

function startCounter() {

    counters.forEach(counter => {

        const target = counter.innerText.replace(/\D/g, "");

        let count = 0;

        const update = () => {

            const increment = Math.ceil(target / speed);

            if (count < target) {

                count += increment;

                counter.innerText = count + "+";

                requestAnimationFrame(update);

            } else {

                if (counter.innerText.includes("100")) {

                    counter.innerText = "100%";

                }

                else {

                    counter.innerText = target + "+";

                }

            }

        };

        update();

    });

}

const stats = document.querySelector(".stats");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter();

            observer.disconnect();

        }

    });

});

observer.observe(stats);

// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Fade Body on Load
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ===============================
// Console Message
// ===============================

console.log("SMS Watta Jivan Jagriti Trust Website Loaded Successfully");
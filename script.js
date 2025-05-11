// Initialize particles.js with default settings
particlesJS("particles-js", {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 40,
                size_min: 0,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            push: {
                particles_nb: 4
            },
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    },
    retina_detect: true
});

// Theme switching function
function switchTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark", "theme-frogie", "theme-szvy");
    document.body.classList.add(theme);

    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
}

// Check localStorage for saved theme preference and apply it
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        // Default to light theme
        document.body.classList.add("theme-light");
    }
});

// Start search and redirect to Ultraviolet proxy
function startSearch() {
    const searchQuery = document.getElementById("search-input").value.trim();
    if (searchQuery) {
        const encoded = encodeURIComponent(searchQuery);
        window.location.href = `http://localhost:8080/service/${encoded}`;  // Replace with your UV backend URL
    }
}

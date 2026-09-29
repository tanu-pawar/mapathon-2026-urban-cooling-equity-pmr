/* =========================================
   MAPATHON 2026
   URBAN COOLING EQUITY INDEX
========================================= */


/* =========================================
   GEE APP CONFIGURATION
========================================= */

/*
    IMPORTANT:

    Later replace this with your actual
    Google Earth Engine App URL.

    Example:

    const GEE_APP_URL =
        "https://ee-projects....";

*/

const GEE_APP_URL = "https://tanu-p-483509.projects.earthengine.app/view/urban-cooling-equity-index--pune-metropolitan-region";


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");


document.addEventListener("mousemove", (event) => {

    cursorDot.style.left =
        `${event.clientX}px`;

    cursorDot.style.top =
        `${event.clientY}px`;

    cursorRing.style.left =
        `${event.clientX}px`;

    cursorRing.style.top =
        `${event.clientY}px`;

});


/* Cursor hover */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .map-card, .tool-track span"
    );


interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        document.body.classList.add(
            "cursor-hover"
        );

    });

    element.addEventListener("mouseleave", () => {

        document.body.classList.remove(
            "cursor-hover"
        );

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   MAP MODAL
========================================= */

const mapCards =
    document.querySelectorAll(".map-card");

const modal =
    document.getElementById("mapModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const closeModal =
    document.getElementById("closeModal");


mapCards.forEach(card => {

    card.addEventListener("click", () => {

        const image =
            card.dataset.map;

        const title =
            card.dataset.title;

        modalImage.src = image;

        modalImage.alt = title;

        modalTitle.textContent = title;

        modal.classList.add("active");

        document.body.style.overflow =
            "hidden";

    });

});


/* Close */

closeModal.addEventListener(
    "click",
    closeMapModal
);


function closeMapModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


/* Close when clicking outside */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeMapModal();

    }

});


/* Escape key */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMapModal();

    }

});


/* =========================================
   GEE APP
========================================= */

const loadGeeBtn =
    document.getElementById("loadGeeBtn");


loadGeeBtn.addEventListener("click", () => {

    if (!GEE_APP_URL) {

        alert(
            "Your Google Earth Engine App URL has not been added yet. Replace GEE_APP_URL in script.js."
        );

        return;

    }


    const viewer =
        document.querySelector(
            ".gee-placeholder"
        );


    viewer.innerHTML = `

        <iframe
            src="${GEE_APP_URL}"
            style="
                width:100%;
                height:600px;
                border:0;
            "
            loading="lazy">
        </iframe>

    `;

});


/* =========================================
   GLOSSARY ACCORDION
========================================= */

const accordionItems =
    document.querySelectorAll(
        ".accordion-item"
    );


accordionItems.forEach(item => {

    const button =
        item.querySelector("button");

    const content =
        item.querySelector(
            ".accordion-content"
        );


    button.addEventListener("click", () => {

        const isOpen =
            item.classList.contains("open");


        /* Close all */

        accordionItems.forEach(other => {

            other.classList.remove("open");

            other.querySelector(
                ".accordion-content"
            ).style.maxHeight = null;

        });


        /* Open selected */

        if (!isOpen) {

            item.classList.add("open");

            content.style.maxHeight =
                content.scrollHeight + "px";

        }

    });

});


/* =========================================
   LAYER BUTTONS
========================================= */

const layers =
    document.querySelectorAll(".layer");


layers.forEach(layer => {

    layer.addEventListener("click", () => {

        layers.forEach(item => {

            item.classList.remove(
                "active"
            );

        });

        layer.classList.add("active");

        console.log(
            "Selected layer:",
            layer.textContent.trim()
        );

    });

});


/* =========================================
   SMOOTH NAVIGATION
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        function(event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
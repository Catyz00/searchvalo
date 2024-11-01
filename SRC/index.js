function showNavBar() {
    const getHamburguerFromHtml = document.getElementById("Hamburguer");
    const getNavBarFromHtml = document.getElementById("navbar");

    getHamburguerFromHtml.addEventListener("click", () => {
        if (getNavBarFromHtml.classList.contains("navbarOn")) {
            getNavBarFromHtml.classList.remove("navbarOn");
            getNavBarFromHtml.classList.add("navbarOff");
        } else {
            getNavBarFromHtml.classList.remove("navbarOff");
            getNavBarFromHtml.classList.add("navbarOn");
        }
    });
}

function transformHamburguerToLineX() {
    const getHamburguerFromHtml = document.getElementById("Hamburguer");
    const getLinesFromHamburguer = document.querySelectorAll(".linha");

    getHamburguerFromHtml.addEventListener("click", () => {
        getLinesFromHamburguer.forEach(line => {
            if (line.classList.contains("linha")) {
                line.classList.remove("linha");
                line.classList.add("linhaX");
            } else {
                line.classList.remove("linhaX");
                line.classList.add("linha");
            }
        });
    });
}

showNavBar();
transformHamburguerToLineX();

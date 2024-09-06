let boutonStart = document.getElementById("start")

boutonStart.addEventListener("click", () => {
    let logo = document.getElementById("logo")
    let highScore = document.querySelector("h1")

    let score = document.querySelector("h2")
    let grille = document.getElementById("grille")

    start.style.display = "none"
    logo.style.display = "none"
    highScore.style.display = "none"

    score.style.display = "flex"
    grille.style.display = "block"
})



////////////////
// Code Chat GPT
////////////////



// let boutonStart = document.getElementById("start");

// boutonStart.addEventListener("click", () => {
//     // Sélection des éléments à masquer et afficher
//     const elementsToHide = [document.getElementById("start"), document.getElementById("logo"), document.querySelector("h1")];
//     const elementsToShow = [document.querySelector("h2"), document.getElementById("grille")];

//     // Masquer les éléments
//     elementsToHide.forEach(el => el.style.display = "none");

//     // Afficher les éléments
//     elementsToShow.forEach(el => el.style.display = "block");
// });
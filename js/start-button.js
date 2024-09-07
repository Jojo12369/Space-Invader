import { grid } from "./grille.js"
import { ennemies } from "./ennemies.js"

let boutonStart = document.getElementById("start")

boutonStart.addEventListener("click", () => {
    const elementsToHide = [boutonStart, document.getElementById("logo"), document.querySelector("h1")]

    let score = document.querySelector("h2")
    let grille = document.getElementById("grille")

    elementsToHide.forEach(el => el.style.display = "none")

    score.style.display = "flex"
    grille.style = "display: flex; flex-wrap: wrap;"

    grid()

    setInterval(() => {
        ennemies() // Appelle la fonction ennemies toutes les 500 ms
    }, 500)
})
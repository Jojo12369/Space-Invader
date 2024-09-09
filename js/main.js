import { grid } from "./grille.js"
import { ennemies } from "./ennemies.js"
import { deplacement } from "./joueur.js"
import { lazerEnnemies } from "./lazer-ennemies.js"

let fine = 0

function jeu() {
    let boutonStart = document.getElementById("start")

    boutonStart.addEventListener("click", () => {
        const elementsToHide = [boutonStart, document.getElementById("logo")]

        let score = document.querySelector("h2")
        let grille = document.getElementById("grille")

        elementsToHide.forEach(el => el.style.display = "none")

        score.style.display = "flex"
        grille.style = "display: flex; flex-wrap: wrap;"

        grid()

        setInterval(() => {
            ennemies() // Appelle la fonction ennemies toutes les 500 ms
        }, 300)

        deplacement()

        setInterval(() => {
            lazerEnnemies()
        }, 1000)

        setInterval(() => {
            if (fine == 0) {
                fin()
            }
        }, 1)
    })
}

function fin() {
    let listeCase = []
    for (let a = 1; a <= 20; a++) {
        for (let b = 1; b <= 20; b++) {
            let alien = document.getElementById(`div-${a}-${b}`)
            if (alien.classList.contains("ennemies")) {
                listeCase.push([a, b])

                if (alien.classList.contains("joueur")) {
                    console.log("hey gros ")
                    alien.classList.remove("joueur")
                    let gameOver = document.getElementById("game-over")
                    gameOver.style.display = "block"
                    fine++
                    return
                }
            }
            
        }
    }
    if (listeCase.length == 0) {
        let win = document.getElementById("win")
        win.style.display = "block"
        return
    }
}

jeu()

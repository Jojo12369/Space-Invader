let x = 11
let y = 20

export function deplacement() {
    document.addEventListener("keydown", (event) => {

        const touche = {
            "z": { dx: 0, dy: -1}, // Haut
            "s": { dx: 0, dy: +1}, // Bas
            "q": { dx: -1, dy: 0}, // Gauche
            "d": { dx: +1, dy: 0}  // Droite
        }

        if (touche[event.key]) {
            let {dx, dy} = touche[event.key]

            if((dx + x >= 1 && dx + x <= 20) && (dy + y >= 18 && dy + y <= 20))
                deplacerJoueur(dx, dy)
        }
    })
}

function deplacerJoueur(dx, dy) {
    let joueur = document.getElementById(`div-${x}-${y}`)
    joueur.classList.remove("joueur")

    x += dx
    y += dy

    let newDiv = document.getElementById(`div-${x}-${y}`)
    newDiv.classList.add("joueur")
}
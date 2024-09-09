let coté = 0
let gauche = 0
let droite = 0

export function ennemies() {
    let listeCase = []
    for (let a = 1; a <= 20; a++) {
        for (let b = 1; b <= 20; b++) {
            let joueur = document.getElementById(`div-${a}-${b}`)
            if (joueur.classList.contains("joueur")) {
                listeCase.push([a, b])
            }
        }
    }
    if (listeCase.length == 0) {
        let gameOver = document.getElementById("game-over")
        gameOver.style.display = "block"
        return
    }

    let listeEnnemies = liste()

    for (let z = 0; z < listeEnnemies.length; z++) {
        let liste = listeEnnemies[z]

        // Gestion du game over
        if (liste[1] == 20) { 
            let gameOver = document.getElementById("game-over")
            gameOver.style.display = "block"
            return
        }

        if (liste[0] == 1 && gauche == 0) {
            coté = 1
            decalag(listeEnnemies)
            gauche = 1
            return
        }

        if (liste[0] == 20 && droite == 0) {
            coté = 0
            decalag(listeEnnemies)
            droite = 1
            return
        }
    }

    // Calcul du décalage basé sur le côté
    let decalage = coté === 0 ? -1 : 1

    // Parcourir la liste des ennemis (inversée si coté == 1)
    let ennemiesList = coté === 1 ? listeEnnemies.slice().reverse() : listeEnnemies // ".slice()" pour ne pas affecter le reste du code

    // Appliquer les changements de position aux ennemis
    for (let z = 0; z < ennemiesList.length; z++) {
        let [x, y] = ennemiesList[z]

        // Retirer la classe "ennemies" de la position actuelle
        let currentDiv = document.getElementById(`div-${x}-${y}`)
        currentDiv.classList.remove("ennemies")

        // Ajouter la classe "ennemies" à la nouvelle position
        let newDiv = document.getElementById(`div-${x + decalage}-${y}`)
        newDiv.classList.add("ennemies")
    }
    gauche = 0
    droite = 0
}

export function liste() {
    let listeEnnemies = []

    for (let j = 1; j <= 20; j++) {
        for (let i = 1; i <= 20; i++) {
            let div = document.getElementById(`div-${i}-${j}`)

            if (div.classList == "ennemies") {
                listeEnnemies.push([i, j])
            }

        } 
    }
    return listeEnnemies
}

function decalag(listeEnnemies) {
    for (let z = listeEnnemies.length - 1; z >= 0; z--) {
        let [x, y] = listeEnnemies[z]

        let currentDiv = document.getElementById(`div-${x}-${y}`)
        currentDiv.classList.remove("ennemies")

        let newDiv = document.getElementById(`div-${x}-${y + 1}`)
        newDiv.classList.add("ennemies")
    }
}
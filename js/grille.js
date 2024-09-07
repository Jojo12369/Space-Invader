export function grid() {
    let grille = document.getElementById("grille")

    for (let y = 1; y <= 20; y++) { // "y" pour l'axe verticale
        for (let x = 1; x <= 20; x++) { // "x" pour l'axe horizontale
            let nouvelElement = document.createElement("div")
            nouvelElement.id = `div-${x}-${y}` // Nomme l'élément en fonction de x et y
            grille.appendChild(nouvelElement)  
        }
    }

    // Initialisation de la grille
    for (let j = 1; j <= 3; j++) {
        for (let i = 5; i <= 16; i++) {
            let ennemies = document.getElementById(`div-${i}-${j}`)
            ennemies.classList.add("ennemies")
        } 
    }

    let joueur = document.getElementById("div-11-20")

    joueur.classList.add("joueur")
}
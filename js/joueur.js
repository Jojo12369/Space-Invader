import { recursive } from "./bullet.js";

let x = 11
let y = 20

let cooldown = false // Cooldown général
const cooldownTime = 500
const delay = 50

export function deplacement() {
    
    
    document.addEventListener("keydown", (event) => {
        for (let z = 1; z <= 20; z++) {
            let alien = document.getElementById(`div-${z}-20`)
            if (alien.classList.contains("ennemies")) {
                return
            }
        }
        
        let joueur = document.getElementById(`div-${x}-${y}`)
        if (joueur.classList.contains("joueur")) {
            if (event.key == " ") {
            
                if (cooldown) return
                
                const tir = x
                recursive(1, tir, y, delay)
    
                cooldown = true;
    
                // Désactive le cooldown après un délai (cooldownTime)
                setTimeout(() => {
                    cooldown = false
                }, cooldownTime)
            }
    
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
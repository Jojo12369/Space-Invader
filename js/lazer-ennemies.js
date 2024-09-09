import { liste } from "./ennemies.js"

export function lazerEnnemies() {
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
        return
    }

    let listeEnnemies = liste()
    let listeLazer = listeEnnemies.slice()

    for (let i = listeEnnemies.length - 1; i >= 0; i--) {
        let [x, y] = listeEnnemies[i]
        let li = listeLazer[i]
        
        for (let j = listeEnnemies.length - 1; j >= 0; j--) {
            let [a, b] = listeEnnemies[j]
            

            if ((x == a && y + 1 == b) || (x == a && y + 2 == b)) {
                
                if (li[0] == x && li[1] == y) {
                    listeLazer.splice(i, 1)
                    break
                }
                break
            } 
        }
    }
    const indexAleatoire = Math.floor(Math.random() * listeLazer.length)

    // Sélectionne l'élément à cet index
    const elementAleatoire = listeLazer[indexAleatoire]
    recursive(1, elementAleatoire)

    return listeLazer
}

const delay = 50 // Rajouter le "delay" dans ma fonction "recurcive(step, delay)" et "recurcive(step + 1, delay)"

export function recursive(step, elementAleatoire) { 
    if (step <= 20) {
        let lazer = document.getElementById(`div-${elementAleatoire[0]}-${elementAleatoire[1] + step}`)
        if (lazer.id === `div-${elementAleatoire[0]}-20`) {
            lazer.classList.add("alien-lazer")

            setTimeout(() => {
                lazer.classList.remove("alien-lazer")
            }, delay)
            return
        }

        if (lazer.classList.contains("joueur")) {
            lazer.classList.remove("joueur")

            return
        }

        lazer.classList.add("alien-lazer")

        setTimeout(() => {
            lazer.classList.remove("alien-lazer")
            recursive(step + 1, elementAleatoire)
        }, delay)
    }
}
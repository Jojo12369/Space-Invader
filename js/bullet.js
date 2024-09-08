let scorePlus = 1

export function recursive(step, tir, y, delay) { 
    if (step <= 20) {
        let lazer = document.getElementById(`div-${tir}-${y - step}`)
        if (lazer.id === `div-${tir}-1`) {
            lazer.classList.add("lazer")

            setTimeout(() => {
                lazer.classList.remove("lazer")
            }, delay)
            return
        }

        if (lazer.classList.contains("ennemies")) {
            lazer.classList.remove("ennemies")
            let score = document.getElementById("score")
            score.innerHTML = scorePlus
            scorePlus++

            return
        }
        lazer.classList.add("lazer")

        setTimeout(() => {
            lazer.classList.remove("lazer")
            recursive(step + 1, tir, y, delay)
        }, delay)
    }
}
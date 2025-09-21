let mensajes = [
    "Gracias por tanto, eres la mejor. ❤️",
    "Eres una obra de arte :3",
    "Eres fuerte e inteligente, eso me encanta de ti.",
    "Te amo mucho. 🫶",
    "Mi diosa. 🛐",
    "Mereces todo lo bonito de este mundo. ✨",
    "Eres la mejor bailarina del mundo ^^ ",
    "Nunca olvides de lo que eres capaz y no te rindas. 😇",
    "Estaré siempre que me necesites. 👫",
    "¡ERES MUY HERMOSA! 😻",
    "Amo tu voz 🤌"
]

document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("load",()=>{
        miAudio.play()
    })
    const tocar = document.getElementById("tocar")
    const miAudio = document.getElementById("miAudio")
    const flor = document.getElementById("flor")
    const p = document.getElementById("texto")

    // miAudio.play()
    
    flor.addEventListener("click", ()=>{
        tocar.style.display = "none"
        p.textContent = mensajes[Math.floor(Math.random() * 11)]

        p.classList.remove("desaparecer")
        p.classList.remove("aparecer")

        setTimeout(()=>{
            p.classList.add("aparecer")

            setTimeout(()=>{
            p.classList.remove("aparecer")
            p.classList.add("desaparecer")
            }, 2000)
        },10)        
    })
})
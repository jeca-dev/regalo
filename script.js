let mensajes = [
    "Gracias por tanto, eres la mejor. ❤️",
    "Eres una obra de arte :3",
    "Eres fuerte e inteligente, eso me encanta de ti.",
    "Te amo mucho. 🫶",
    "Mi diosa. 🛐"
]

console.log()

document.addEventListener("DOMContentLoaded", ()=>{
    const tocar = document.getElementById("tocar")
    const miAudio = document.getElementById("miAudio")
    const flor = document.getElementById("flor")
    const p = document.getElementById("texto")
    
    flor.addEventListener("click", ()=>{
        tocar.style.display = "none"
        p.textContent = mensajes[Math.floor(Math.random() * 5)]
        setTimeout(()=>{},1000)  
        p.style.animation()    
    })
})
const sectionseleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionseleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipego = document.getElementById('capipego')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/hipodoge fire.png',5)

let capipego = new Mokepon('Capipego','./assets/capipego water.png',5)

let ratigueya = new Mokepon('Ratigueya','./assets/ratigueya earth.png',5)

hipodoge.ataques.push(
    {nombre:'💦',id:'boton-agua'},
    {nombre:'💦',id:'boton-agua'},
    {nombre:'💦',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🪨',id:'boton-tierra'},
)

capipego.ataques.push(
    {nombre:'🪨',id:'boton-tierra'},
    {nombre:'🪨',id:'boton-tierra'},
    {nombre:'🪨',id:'boton-tierra'},
    {nombre:'💦',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💦',id:'boton-agua'},
    {nombre:'🪨',id:'boton-tierra'},
)

function iniciarJuego(){
    
    sectionseleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador(){

    sectionseleccionarMascota.style.display = 'none'
    sectionseleccionarAtaque.style.display = 'flex'

    console.log(4)    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipego.checked){
        spanMascotaJugador.innerHTML = 'capipego'
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'ratigueya'
    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
}
console.log(5)
function seleccionarMascotaEnemigo(){
    let MascotaAleatoria = aleatorio(1,3)
    
    if (MascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (MascotaAleatoria ==2) {
        spanMascotaEnemigo.innerHTML = 'Capipego'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}
console.log(6)

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

console.log(7)
function ataqueAleatorioEnemigo (){
    let ataqueAleatorio = aleatorio (1,3)
    let spanAtaqueEnemigo = document.getElementById('ataque-enemigo')

    if (ataqueAleatorio ==1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio ==2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }
    combate ()
}

function combate (){
    
    if (ataqueJugador == ataqueEnemigo){
        crearMensaje ("Empataste!")
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'|| ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego' || ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje ("Ganaste! 🏆")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje ("Perdiste! 😩")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
     }
    
    revisarVidas ()
}

console.log(8)

function revisarVidas (){
    if (vidasEnemigo == 0) {
    crearMensajeFinal(" Felicitaciones! Ganaste 🏆!")
    } else if (vidasJugador == 0) {
            crearMensajeFinal(" Lo siento Perdiste! 😢!")
    }
}
function crearMensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML= resultadoFinal    
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego (){
    location.reload()
}

console.log(9)
function aleatorio(min, max) {
        return Math.floor(Math.random()*(max-min + 1) + min)
}
console.log(10)
window.addEventListener('load',iniciarJuego)
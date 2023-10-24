let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
}
console.log(3)
function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipego = document.getElementById('capipego')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

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
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

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
    crearMensaje()
}

function combate (ataqueJugador, ataqueEnemigo){
    let partida = ""
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueJugador == ataqueEnemigo){
        partida = "Empataste!"
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'|| ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego' || ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        partida = "Ganaste! 🏆"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        partida = "Perdiste! 😩"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
     }
    revisarVidas ()
    return partida

}

function revisarVidas (){
    if (vidasEnemigo == 0) {
    crearMensajeFinal(" Felicitaciones! Ganaste 🏆!")
    } else if (vidasJugador == 0) {
            crearMensajeFinal(" Lo siento Perdiste! 😢!")
    }
}

console.log(8)

function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML= 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ", "+combate(ataqueJugador,ataqueEnemigo)

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML= resultadoFinal
    sectionMensajes.appendChild(parrafo)
}

console.log(9)
function aleatorio(min, max) {
        return Math.floor(Math.random()*(max-min + 1) + min)
}
console.log(10)
window.addEventListener('load',iniciarJuego)
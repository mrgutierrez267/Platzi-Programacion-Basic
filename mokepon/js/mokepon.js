const sectionseleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

const sectionseleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipego
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botonReiniciar
let botones = []

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

let hipodoge = new Mokepon('Hipodoge','./assets/hipodogeFire.png',5)

let capipego = new Mokepon('Capipego','./assets/capipegoWater.png',5)

let ratigueya = new Mokepon('Ratigueya','./assets/ratigueyaEarth.png',5)

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

mokepones.push(hipodoge,capipego,ratigueya)

function iniciarJuego(){

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <P>${mokepon.nombre}</P>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones 
    
    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipego = document.getElementById('Capipego')
    inputRatigueya = document.getElementById('Ratigueya')

    })
    
    sectionseleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){

    sectionseleccionarMascota.style.display = 'none'
    sectionseleccionarAtaque.style.display = 'flex'
   
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipego.checked){
        spanMascotaJugador.innerHTML = inputCapipego.id
        mascotaJugador = inputCapipego.id
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert("Selecciona una mascota")
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}
function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else if(e.target.textContent === '💦'){
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else {
                    ataqueJugador.push('Tierra')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'
            }
            ataqueAleatorioEnemigo()
        })
    })
}


function seleccionarMascotaEnemigo(){
    let MascotaAleatoria = aleatorio(0, mokepones.length -1)
    
    spanMascotaEnemigo.innerHTML = mokepones[MascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[MascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo (){
    let ataqueAleatorio = aleatorio (0, ataquesMokeponEnemigo.length -1)
    let spanAtaqueEnemigo = document.getElementById('ataque-enemigo')

    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('Fuego')
    } else if (ataqueAleatorio ==3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('Agua')
    } else {
        ataqueEnemigo.push('Tierra')
    }
    console.log(ataqueEnemigo)
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

function aleatorio(min, max) {
        return Math.floor(Math.random()*(max-min + 1) + min)
}
window.addEventListener('load',iniciarJuego)
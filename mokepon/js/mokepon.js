const sectionseleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

const sectionseleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanImgMascotaJugador = document.getElementById('img-mascota-jugador')
const spanImgMascotaEnemigo = document.getElementById('img-mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipego
let inputRatigueya
let inputDragon
let inputPicachu
let mascotaJugador
let imgMascotaJugador
let imgMascotaEnemigo
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botonReiniciar
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x =20
        this.y =30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/hipodogeFire.png',5)

let capipego = new Mokepon('Capipego','./assets/capipegoWater.png',5)

let ratigueya = new Mokepon('Ratigueya','./assets/ratigueyaEarth.png',5)

let dragon = new Mokepon('Dragon','./assets/dragonElectric.png',5)

let picachu = new Mokepon('Picachu','./assets/picachuRayo.png',5)

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

dragon.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💦',id:'boton-agua'},
    {nombre:'💦',id:'boton-agua'},
    {nombre:'🪨',id:'boton-tierra'},
)

picachu.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🪨',id:'boton-tierra'},
    {nombre:'💦',id:'boton-agua'},
    {nombre:'🪨',id:'boton-tierra'},
)

mokepones.push(hipodoge,capipego,ratigueya,dragon,picachu)

function iniciarJuego(){

   
    sectionseleccionarAtaque.style.display ='none'
    sectionVerMapa.style.display ='none'
    sectionReiniciar.style.display = 'none'

    
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
    inputDragon = document.getElementById('Dragon')
    inputPicachu = document.getElementById('Picachu')

    })
    
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

}

function seleccionarMascotaJugador(){

    sectionseleccionarMascota.style.display = 'none'
    sectionVerMapa.style.display ='flex'
  
    


    //sectionseleccionarAtaque.style.display = 'flex'
   
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipego.checked){
        spanMascotaJugador.innerHTML = inputCapipego.id
        mascotaJugador = inputCapipego.id
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputDragon.checked){
        spanMascotaJugador.innerHTML = inputDragon.id
        mascotaJugador = inputDragon.id
    } else if (inputPicachu.checked){
        spanMascotaJugador.innerHTML = inputPicachu.id
        mascotaJugador = inputPicachu.id
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
                boton.disabled = true
            } else if(e.target.textContent === '💦'){
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                    ataqueJugador.push('Tierra')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'
                    boton.disabled = true
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
    iniciarPelea()
}

function iniciarPelea(){
 if (ataqueJugador.length === 5) {
    combate ()
    
 }   
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador= ataqueJugador[jugador]
    indexAtaqueEnemigo= ataqueEnemigo[enemigo]
}

function combate (){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje ("Empataste!")
    } else if (ataqueJugador[index] === 'Fuego' && ataqueEnemigo[index] === 'Tierra'){
            indexAmbosOponentes(index,index)
            crearMensaje ("Ganaste! 🏆")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataqueJugador[index] === 'Agua' && ataqueEnemigo[index] === 'Fuego'){
            indexAmbosOponentes(index,index)
            crearMensaje ("Ganaste! 🏆")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'Tierra' && ataqueEnemigo[index] === 'Agua'){
            indexAmbosOponentes(index,index)
            crearMensaje ("Ganaste! 🏆")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
    } else {
            indexAmbosOponentes(index, index)
            crearMensaje ("Perdiste! 😩")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
     }
    }

    revisarVidas ()
}

function revisarVidas () {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal(" Esto fue un empate!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal(" Felicidades Ganaste!")
    } else {
        crearMensajeFinal("Lo siento perdiste!")
    }
}

function crearMensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    let resultadoJugador = ""
    let resultadoEnemigo = ""

    if (resultado =="Empataste!"){
        resultadoJugador = "🟡"
        resultadoEnemigo = "🟡"
    } else if (resultado == "Ganaste! 🏆"){
        resultadoJugador = "✅"
        resultadoEnemigo = "❌"
    } else {
        resultadoJugador = "❌"
        resultadoEnemigo = "✅"
    }


    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML =  indexAtaqueJugador + " " + resultadoJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo + " " + resultadoEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML= resultadoFinal    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego (){
    location.reload()
}

function aleatorio(min, max) {
        return Math.floor(Math.random()*(max-min + 1) + min)
}

function moverCapipego(){
    capipego.x = capipego.x + 5
    pintarPersonaje()
}

function pintarPersonaje(){
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        capipego.mapaFoto,
        capipego.x,
        capipego.y,
        capipego.ancho,
        capipego.alto)
}
window.addEventListener('load',iniciarJuego)
let parrafo = document.querySelector("p");
let NumeroMaximo = 10;
parrafo.innerHTML = `Indica un numero del 1 al ${NumeroMaximo}`;

let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];



function AsignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function VerificarIntento(){
    let NumerosDeUsuario = parseInt(document.getElementById("Valorusuario").value);
   
    
    if(NumerosDeUsuario === numeroSecreto ){
        AsignarTextoElemento("p",`acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        //el usuario no acerto
        if(NumerosDeUsuario > numeroSecreto){
            AsignarTextoElemento("p","el numero secreto es menor");
        }else{
            AsignarTextoElemento("p","el numero secreto es mayor");
        }
        intentos++;
        LimpiarCaja();
    }
    return;
}

function LimpiarCaja(){
    document.querySelector("#Valorusuario").value ="";
    
}

function GenerarNumeroSecreto() {
   let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
   console.log(NumeroGenerado);
   console.log(listaNumeroSorteados);
    //si ya sorteamos todos los numeros 
    if(listaNumeroSorteados.length == NumeroMaximo){
        AsignarTextoElemento("P","Ya se sortearon todos los numeros posibles");

    } else{

    //si el nuemro generado esta incluido en a lista 
        if(listaNumeroSorteados.includes(NumeroGenerado)){
            return GenerarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(NumeroGenerado);
            return NumeroGenerado;
        }
    }
}
function CondicionesIniciales(){
    AsignarTextoElemento("h1", "Juego del numero secreto!" );
    AsignarTextoElemento("p", `Indica un numero del 1 al ${NumeroMaximo}!` );
    numeroSecreto = GenerarNumeroSecreto();
    intentos = 1;
}

function ReiniciarJuego(){
    //limpiar la caja
    LimpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio
     //inicializar el numero intentos
     CondicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

CondicionesIniciales();





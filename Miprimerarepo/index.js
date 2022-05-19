var z = 0;
function suma(x, y){
   z = x + y;
   console.log(z);
}
function saludar() {
    alert("Hola, mundo");
}
//DOM
var btnSumar = document.getElementById("btnSumar");
var btnSaludar = document.getElementById("btnSaludar");
var ejemploTxt = document.getElementById("ejemploTxt");

var texto = "";
/*
btnSaludar.addEventListener("click", function(){
   // console.log("holaaaaaa -- Event Listener");
  //btnSaludar.style.backgroundColor = "red";
  if (btnSaludar.classList.contains("bgRojo") ) {
      btnSaludar.classList.remove("bgRojo");
  }else {
      btnSaludar.classList.add("bgRojo");
  }
});
ejemploTxt.addEventListener("focus", function(){
    console.log("A escribir...");
});
ejemploTxt.addEventListener("keypress" , function(){
    texto = ejemploTxt.value;
    console.log(texto);
});*/

function testImprimir(){
    console.log("Escribiendo....")
}
function imprimirTexto() {
    var texto = ejemploTxt.value;
    console.log(texto);
}



//------------
var articuloTxt = document.getElementById("articulo");
var precioTxt = document.getElementById("precio");

var parrafoTotal = document.getElementById("parrafoTotal");

var precio = precioTxt.value;
var total = 0;

function calcularTotal() {
    precio = parseInt(precioTxt.value);
    total = total + precio;
    //console.log(total);

    parrafoTotal.innerText = "Total: " + total ;

    limpiarTextos();
}

function limpiarTextos() {
    articuloTxt.value = "";
    precioTxt.value = "";
}

var seguirBtn = document.getElementById("seguir-btn");
seguirBtn.addEventListener("click", function(){
    if(this.innerHTML == "Seguir") {
        this.innerHTML = "Dejar de Seguir";
    } else {
        this.innerHTML = "Seguir";
    }
});

var mensajeBtn = document.getElementById("mensaje-btn");
var mensajeContainer = document.getElementById("mensaje-container");

mensajeContainer.style.display = "none";
var editando = false;

function toggleEditar(){

    if(editando) {
        mensajeContainer.style.display= "none";
    } else {
        mensajeContainer.style.display = "block";
    }
    editando = !editando;
}
mensajeBtn.addEventListener("click", function(){
    toggleEditar();
});

//Galeria 
var imagenes  = [
    'img/p1.jpg',
    'img/fd.jpg',
    'img/a.jpg',
    'img/sf.jpg',
    'img/n.jpg',
    
];
//For
var galeria = document.getElementById("galeria");
for(var i = 0; i < imagenes.length ; i++) {
    var col = document.createElement("ion-col");
    col.size= "4";
    var imagen = document.createElement("img");

    imagen.src = imagenes[i];

    col.appendChild(imagen);

    galeria.appendChild(col);
}
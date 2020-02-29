var texto = document.getElementById("text_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var ancho_menos1 = ancho - 1;

function dibujo_Estrella(){

    var lineas = parseInt(texto.value);
    var espacio = (ancho / lineas) / 2;
    var y_positivo;
    var x_negativo;
    var x_positivo;
    var y_negativo;


    for(l = 0; l < lineas; l++){
        y_positivo = l * espacio;
        y_negativo = 300 - (l * espacio);
        x_negativo = 145 - (l * espacio);
        x_positivo = 155 + (l * espacio);
        
        dibujarLinea("blue", 150, y_positivo, x_negativo, 150);
        dibujarLinea("blue", 150, y_positivo, x_positivo, 150);
        dibujarLinea("blue", x_negativo, 150, 150, y_negativo);
        dibujarLinea("blue", x_positivo, 150, 150, y_negativo)

        if(l == lineas - 1){
            dibujarLinea("blue", 150, 0, 150, 300);
            dibujarLinea("blue", 0, 150, 300, 150);
        }
    }

}


function dibujoPorClick(){

    var lineas = parseInt(texto.value);
    var espacio = ancho / lineas;
    var yi;
    var xf;

    for(l = 0; l < lineas; l++){
        yi = l * espacio;
        xf = espacio * (l + 1);
        dibujarLinea("white", 0, yi, xf, 500);
        dibujarLinea("white", 500, xf, yi, 0); 
    }

    var lineas = parseInt(texto.value);
    var espacio = (ancho / lineas) / 2;
    var y_positivo;
    var x_negativo;
    var x_positivo;
    var y_negativo;

    for(l = 0; l < lineas; l++) 
    {
        y_positivo = l * espacio;
        y_negativo = 500 - (l * espacio);
        x_negativo = 245 - (l * espacio);
        x_positivo = 255 + (l * espacio);
        
        dibujarLinea("blue", 250, y_positivo, x_negativo, 250);
        dibujarLinea("blue", 250, y_positivo, x_positivo, 250);
        dibujarLinea("blue", x_negativo, 250, 250, y_negativo);
        dibujarLinea("blue", x_positivo, 250, 250, y_negativo)
    }

}

dibujarLinea("white", 1, 1, 1, ancho_menos1) ;
dibujarLinea("white", 1, ancho_menos1 , ancho_menos1, ancho_menos1);
dibujarLinea("white", ancho_menos1, 1, ancho_menos1, ancho_menos1);
dibujarLinea("white", ancho_menos1, 1, 1, 1);

function dibujarLinea(color, xinicio, yinicio, xfinal, yfinal){

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicio, yinicio);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();

}

var canvas = document.getElementById('area_de_dibujo');
var papel = canvas. getContext('2d');
var xi, xf, yi, yf, click;
var color = "white";
document.addEventListener("mousedown", iniciar);
document.addEventListener("mousemove", mover);
document.addEventListener("mouseup", final);

function iniciar(evento) 
{
    click = true;
    xi = evento.layerX;
    yi = evento.layerY;
}

function mover(evento) 
{
    if (click) {
        xf = evento.layerX;
        yf = evento.layerY;
        dibujarLinea(color, xi, yi, xf, yf, papel);
        xi = xf;
        yi = yf;
    }
}

function final()
{
    click = false;
}

dibujarLinea(color, 1, 1, 1, 499, papel)
dibujarLinea(color, 1, 1, 499, 1, papel)
dibujarLinea(color, 499, 1, 499, 499, papel)
dibujarLinea(color, 1, 499, 499, 499, papel)


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) 
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = { url:"tile.png", cargarOk: false};
var vaca = { url: "vaca.png", cargarOk: false};
var cerdo = { url: "cerdo.png", cargarOk: false};
var pollo = { url: "pollo.png", cargarOk: false};

var cantidad = aleatorio(1, 50);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{ fondo.cargarOk = true; //solo se ejecuta cuando se carga la var fondo
  dibujar();
}

function cargarVacas()
{ vaca.cargarOk = true; dibujar();}

function cargarCerdos()
{ cerdo.cargarOk = true; dibujar();}

function cargarPollos()
{ pollo.cargarOk = true; dibujar();}

/*
La siguiente linea de codigo fue quitada, ya que algunas imagenes salian
detras del fondo. Por eso se creo las variables mas arriba con {url:} y
luego se coloca (.) y un nombre de objeto, en este caso vaca.imagen.

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", cargarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", cargarPollos);
*/
function dibujar()
{
  //papel.drawImage(fondo, 0, 0); cambiamos esto del viejo codigo.
  if(fondo.cargarOk) {papel.drawImage(fondo.imagen, 0, 0);}
  if(vaca.cargarOk)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++) // para hacer que aparezcan 10 vacas
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80; //agregado para que las vacas no se vean tan juntas.
      var y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  //if(cerdo.cargarOk) {papel.drawImage(cerdo.imagen, 0, 0);}
  //if(pollo.cargarOk){papel.drawImage(pollo.imagen, )}
}


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

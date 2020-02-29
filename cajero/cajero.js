//reto: en vez de mostrar resultado en texto, motrarlo en imagenes. 

class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for (var bi of caja)
  {

    if (dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      //console.log(div); para ver is funciona la division
      if (div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push(new Billete(bi.valor,papeles) );
      dinero = dinero - (bi.valor * papeles);
      //dinero -= (bi.valor * papeles);
    }
    //console.log(bi); para ver si bi esta llamando los diferentes (3), Billetes.
  }

  if(dinero > 0)
  {
    //document.write("Fondos insuficientes para esta transaccion");
    resultado.innerHTML = "cantidad no puede ser dispensada";
  }
  else
  {
    for (var e of entregado)
    {
      if (e.cantidad > 0) // para que no muestre si da 0 el resultado.
      {
        resultado.innerHTML += e.cantidad + " billetes de RD$ " + e.valor + ".00 <br />";
        //el += indica que la variable es igual a su valor mas lo que alla mas alla del operador.
        //*nota de codigo
      }
    }
  }

}

var caja = [];
var entregado = [];
caja.push( new Billete(100,5) ); //agregado para mas billetes
caja.push( new Billete(50,10) ); //push agrega datos en var caja (0)
caja.push( new Billete(20,5) ); // var caja(1)
caja.push( new Billete(10,10) ); //var caja(2)
caja.push( new Billete(5,5) ); //agregando para mas billetes
var div = 0; //resultado de la division.
var papeles = 0;
var dinero = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);

var numeros = 100;

for(var i = 1; i <= 100; i++)
{
  if(esDivisible(i,3))
  {
    document.write("Fizz"); // ++ al caso 2
  }
  if (esDivisible(i,5)) /* aqui podria usar else if y funciona pero, en este
  caso cuando llegara al 15 no me podria FizzBuzz, por ende quitamos
  el else para que el codigo no este encadenado (conectado) y lo vea el if como
  un codigo independiente del if de arriba.*/
  {
    document.write("Buzz");
  }
  if(!esDivisible(i,3) && !esDivisible(i,5)) // agregado caso 2 ++
  {
    document.write(i);
  }
  document.write("<br />");
}

function esDivisible(num, divisor)
{
  if(num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

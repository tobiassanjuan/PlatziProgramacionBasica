class Pakiman {
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src= imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    //document.write("<p>"); cuando quito <p> los datos pasa abajo de imagen
    document.body.appendChild(this.imagen); // "appendChild" agregando un hijo.
    document.write("<br /><strong> Nombre: " + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
    //document.write("<p>");
  }
}

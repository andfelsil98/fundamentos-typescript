(() => {

  let myDinamicVar: any; //any es un tipo de dato que puede ser cualquier dato. en este caso es basicamente desactivar el analisis de tipos de datos que tiene typescript volviendo a la flexibilidad que tiene js. EN LO POSIBLE NO USAR EL ANY.

  myDinamicVar = 'Hola';// cuando el tipo de dato es any las ayudas de ts para autocompletar los metodos desaparece ya que no sabe que metodos recomendar si el tipo de dato puede ser cualquiera.
  const rta = (myDinamicVar as string).toLowerCase(); //para poder volver a tener las ayudas con los metodos se puede hacer lo que se llama cast que basicamente es convertir mi variable a un tipo de dato en especifico (en este caso a string) y meterlo en una nueva variable.
  console.log(rta);

  myDinamicVar = 1212;
  const rta2 = (<number> myDinamicVar).toFixed(); //segunda forma de hacer un cast en este caso la fuerza a volverse un numero.
  console.log(rta2);

})();

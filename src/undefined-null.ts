(()=> {
  // let myNumber: number = undefined;
  // let myString: string = null; //ni null ni undefined se puede asignar a estas variables ya que son otro tipo de datos.
  let myNull: null = null;//por defecto si no asigno el tipo de dato queda como any . si quiero que el null sea null debo forzar el tipo de dato a null o a undefined
  let myUndefined: undefined = undefined;
  let myNumber: number | null = null;
  myNumber = 12;
  let myString: string | undefined = undefined;
  myString = 'hola';

  function hi(name: string | null){
    let hello = 'Hello ';
    if (name) {
      hello += name;
    } else {
      hello += 'Nobody';
    }
    console.log(hello);
  }

  hi('Andres');
  hi(null);
//funcion que mejora la funcion anterior para no usar ifs sino optional chaining
  function hiV2(name: string | null){
    let hello = 'Hello ';
    hello += name?.toLowerCase() || 'nobody'; // en esta linea decimos: concatene con hello name si este es un string o con 'nobody' si es null.

    console.log(hello);

  }

  hiV2('Andres');
  hiV2(null);
})();

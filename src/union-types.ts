//
(() => {

  let userId: string | number;//una solucion para tratar con mas de un tipo de dato una variable es con union types que basicamente es unir tipos de datos por medio del simbolo | y de esta forma acotar los tipos de datos que quiero que esa variable pueda recibir.
  userId = 1212;
  userId = 'andres';

  function greeting(myText: string | number ) {
    if( typeof myText === 'string'){ //dentro de las bondades de los union types teniendo en cuenta que se puede enviar un numero o un texto internamente en la funcion se puede pregunatr que tipo de dato viene. ts identifica que es un string o un numero y de esta forma automaticamente habilita los metodos de cada tipo de dato sea el caso. por ejemplo si este if es true habilita automaticamente los metodos de string (tipado dinamico).
      console.log(`string: ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`number: ${myText.toFixed(1)}`);
    };
  };

  greeting('Hola');
  greeting(1.234);
})();

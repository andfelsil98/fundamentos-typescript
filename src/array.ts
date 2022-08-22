(() => {

  let prices = [1,2,2,1,1,212];
  prices.push(1070926361); //solo puedo introducir numeros porque asi se definio
  prices = [1,2,2]; // se puede reasignar la matriz pero solo con numeros

  let morePrices = [1,2,3,4,5,6, 'hola', true]; // en este caso la matriz se define no solo de numeros sino de strings y booleans tambien
  morePrices.push('adios'); // para este caso si puedo introducir numeros, strings y booleans

  let mixed: (number |string | boolean | object)[] = ['hola', true];// tambien se puede definir que tipos de datos quiero en mi array sin tener que definir su valor desde el comienzo
  mixed.push(12);
  mixed.push({});

  let numbers = [1,2,2,1,1,212];// definiendo el tipo de datos en la matriz tambien los metodos de ese tipo de datos son los que van a recomendar
  numbers.map(item => item*2);






})();

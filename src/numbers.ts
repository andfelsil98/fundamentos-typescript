(() => {
  //inferida
  let productPrice = 100;
  productPrice = 12;
  console.log(`product price: ${productPrice}`);

  //explicita
  let customerAge: number = 28;
  // customerAge = customerAge + '1'; //resultado 281, ts nos alertara ya que quiero sumar un number con un string
  customerAge = customerAge + 1;
  console.log(`customer age: ${customerAge}`);
  let productInStock: number; //declarando de forma explicita pero no inicializando
  console.log(`product in stock: ${productInStock}`); // me sale una alerta pues quiero imprimir un elemento que no ha sido inicializado
  if (productInStock > 10){ //nuevamente me sale una alerta pues la variable aun no esta inicializada
    console.log('is greater');
  };

  let discount = parseInt('123'); //parseint me sirve para transformar el string en number
  console.log(`discount: ${discount}`);

  let hex = 0xfff;
  console.log(`hex: ${hex}`);
  let bin = 0b1010; //10
  console.log(`bin: ${bin}`);

  const myNumber: number = 20; //no usar para definir el tipo de datos Number usar number en minuscula
})();

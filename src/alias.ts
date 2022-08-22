(()=> {
  //alias
  type UserID = string | number | boolean;// se pueden crear tipos de datos personalizados a lo que yo necesite con la palabra type y poniendole un alias a ese tipo de datos. de esta forma en vez de poner la union de los datos se pone el alias.
  let userId: UserID;

  //literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes; //de esta forma defino que valores quiero que mi variable pueda tomar en este caso solo los 4 mencionados si pongo uno diferente saldra error.
  shirtSize = 'S'; //no hay error pues esta dentro de los valores que yo asigne
  // shirtSize = 'XS'; // me saldra error ya que no es un valor que yo haya definido

  function greeting(userId: UserID, size: Sizes ) {
    if( typeof userId === 'string'){
      console.log(`string: ${userId.toLocaleLowerCase()}`);
    };
  };
  greeting(1234, 'S');
  greeting('1234', 'M');

})();

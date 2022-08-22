const age_inf = 20; //inferida
const age_exp: number = 20; // explicita
//declaracion de una variable:  declaracion: tipado (type annotation) = valor;
let myProductName = 'Product 1'; //el motor de inferencia detecta automaticamente que tipo de dato se anoto
let myProductPrice = 123;
//sin embargo a diferencia de javascript, typescript lanzara una alerta si por ejemplo reasigno por ejemplo la variable myProductName en vez de string como un number. en dicho caso esta variable si se puede reasignar pero como otro string su tipo de dato no debe cambiar
//Dentro de las ventajas de que no permita cambiar el tipo de dato es que los metodos que me ofrece para cada variable son exclusivos de ese tipo de dato
// cuando se habla de las const este no me permite modificar ni el valor ni el tipo de dato este guarda solo el valor y ese valor sera siempre el mismo

// si trato de usar el mismo nombre de variables en otro documento me saldra un error esto se debe a que el scope no esta preconfigurado para limitar el scope de mis variables se puede hacer una funcion autoejecutada de la siguiente forma

(()=> {
  let myProductName2 = 'Product 1';
  let myProductPrice2 = 123;
})();
//de esta forma ya puedo usar el mismo nombre de variables en otro archivo teniendo en cuenta que encapsule las variables en una arrow function su scope es function scope.

let reinicio = true;
while (reinicio){

alert ("🍭¡Bienvenido a la paleteria!🍭 \n ¡Donde solo te damos el menu dependiendo de cuanto traigas tu!😹");
let MenuNombres = parseInt(prompt("[1] Luis\n[2] Bianca\n[3] Valeska")) - 1;
if (MenuNombres === 0 || MenuNombres === 1 || MenuNombres === 2){
let cantidad =  parseInt (prompt("😻¡¿Cuantó dinero tienes?!😻"));
const Sabores={
"$15 MXN Uva" : 15,
"$15 MXN Fresa" : 15,
"$25 MXN Crema" : 25,
"$45 MXN Yogur" : 45,
"$45 MXN Fresa" : 45,
"$50 MXN Napolitano" : 50,
};

let arrNombres= ["Luis", "Bianca", "Valeska"];
let ElecNombre = arrNombres[MenuNombres];
let mensaje = `Puedes comprar los siguientes helados: \n\n`;
let heladosPosibles = []; /*arreglo vacio que almacena los helados mas caros*/
let precioMasCaro = 0;

for (let sabor in Sabores) { /*sabor es una variable que recorre el arreglo*/
  if (Sabores[sabor] <= cantidad) { /*si sabor es menor que la cantidad ingresada */
    if (Sabores[sabor] > precioMasCaro) {
      heladosPosibles = []; /*Almacena el nombre del helado mas caro*/
      precioMasCaro = Sabores[sabor]; /*la variable precio pasa a tener el precio de sabor, si se cumple el if*/
    }
    heladosPosibles.push(sabor); /*almacena el nombre del sabor de helado que cumple con las condiciones*/
  }}

if (precioMasCaro <=14) {
  alert("💰❌Lamento que no te alcanza para comprar ni una paleta😿🙀.\n ¡Vuelve mas tarde!😺");
} else {
//Este for es para mostrar el o los helados al usuario
  for (let i = 0; i < heladosPosibles.length; i++) { /* heladosPosibles.length No. de elementos que hay en ese arreglo */
    mensaje += `${i + 1}. ${heladosPosibles[i]} \n`; /* Agrega "1.(Helado)" y reinicia el for en caso de aver otra opcion */
  }

  let eleccion = parseInt(prompt(mensaje + "\nIngresa el número de la paleta que quieres comprar:")) - 1;
  //-1 Porque se cuanta desde el 0
  let heladoElegido = heladosPosibles[eleccion]; //De lo que eligio del "menu" se guarda ahora en heladoElegido
  let cambio = cantidad - precioMasCaro; //precioMasCaro Guardo el helado mas caro y ahora lo resta a la cantidad
  alert(`🍭Disfruta de tu paleta ${ElecNombre} de ${heladoElegido}😋.\n Tu cambio es de $${cambio} MXN.`)}

}else {alert("Error vuelve a intentarlo")};

let inicio = parseInt(prompt("[1] Volver al inicio \n [2] Salir"))
if (inicio === 1){
    continue;
}else{
    reinicio = false;
}}
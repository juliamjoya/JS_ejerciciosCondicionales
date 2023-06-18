/***
1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
responder: “No te creo”.
***/

let preguntaUsuario = prompt("¿Eres bellisimo/a?");

if(preguntaUsuario === "si"){
    console.log('Ciertamente.');
}else if(preguntaUsuario === "no"){
    console.log('No te creo.');
}

/***
2. Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x
núm
***/

let preguntaNumeroUsuario = prompt("¿Ingrese numero a evaluar?");
let convertirPreguntaAnumero = parseInt(preguntaNumeroUsuario);

if(convertirPreguntaAnumero % 2 === 0){
    alert("El numero " + convertirPreguntaAnumero + " es divisible entre 2");
} else {
    alert("El numero " + convertirPreguntaAnumero + " NO divisible entre 2");
}

/***
3. Crear un programa que determine si un número introducido en un Prompt
es par o no, la respuesta será mostrada en un Alert.
***/

let numeroDigitado = paserInt (prompt("¿Es par o impar?"));

if(numeroDigitado % 2 === 0){
    alert("El numero " + numeroDigitado + " es par");
} else {
    alert("El numero " + numeroDigitado + " es impar");
}

/***
4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
"Ganaste un premio", en caso contrario mostrar el número y el mensaje
“Lo sentimos, sigue participando”.
***/

let numCliente = parseInt(prompt("Digite un número:"));

if(numCliente === 1000){
    alert("Ganaste un premio");
}else{
    alert("Lo sentimos, sigue participando");
}

/***
5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
menor. No considerar el caso en que ambos números son iguales.
***/

let numUno = parseInt(prompt("Digite número UNO:"));
let numDos = parseInt(prompt("Digite número DOS:"));

if(numUno > numDos){
    alert("El número " + numUno + " es mayor que el número " + numDos);
}else{
    alert("El número " + numDos + " es mayor que el número " + numUno);
}

/***
6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
el número mayor. Considerar el caso en que 2 números sean iguales.
***/

let numCompararUno = parseInt(prompt("Digite número UNO:"));
let numCompararDos = parseInt(prompt("Digite número DOS:"));
let numCompararTres = parseInt(prompt("Digite número Tres:"));

if(numCompararUno > numCompararDos && numCompararUno > numCompararTres){
    alert("El numero UNO es el mayor");
}else if(numCompararDos > numCompararUno && numCompararDos > numCompararTres){
    alert("El numero DOS es el mayor");
}else if(numCompararTres > numCompararUno && numCompararTres > numCompararDos){
    alert("El numero TRES es el mayor");
}else if(numCompararUno == numCompararDos && numCompararTres > numCompararDos){
    alert("El numero TRES es el mayor");
}else if(numCompararDos == numCompararTres && numCompararUno > numCompararTres){
    alert("El numero UNO es el mayor");
}else if(numCompararUno == numCompararTres && numCompararDos > numCompararTres){
    alert("El numero DOS es el mayor");
}

/***
7. Requerir al usuario que ingrese un día de la semana e imprimir un
mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
diferente si es sábado o domingo. Si el día ingresado no es ninguno de
esos, imprimir otro mensaje.
***/

let diaSemana = prompt("Digite un dia de la semana. Ej: lunes, martes, miercoles, etc.");

let diaSemanaFormateado = diaSemana.toLowerCase();

if(diaSemanaFormateado == "lunes"){
    alert("Es lunes, apenas empieza la semana");
}else if(diaSemanaFormateado == "martes"){
    alert("Apenas es martes, aun falta mucho para fin de semana");
}else if(diaSemanaFormateado == "miercoles"){
    alert("Increible ya es miercoles, animo que falta mitad de camino :)");
}else if(diaSemanaFormateado == "jueves"){
    alert("Yupi ya es jueves, un paso mas cerca del fin de semana");
}else if(diaSemanaFormateado == "viernes"){
    alert("Siii por fin viernes, adios semana eterna");
}else if(diaSemanaFormateado == "sabado" || diaSemanaFormateado == "domingo"){
    alert("Por fin es FIN DE SEMANA");
}else{
    alert("No digito un dia de la semana, intentelo de nuevo");
}

/***
8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe
comprobar que el número efectivamente esté en ese rango, si no lo está
imprima un mensaje de error. Si lo está, imprima “reprobado” si la
calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por
último, “excelente” si es 10.
***/

let calificacion = parseInt(prompt("Por favor digite una calificacion entre 1 y 10."));

if(calificacion >= 1 && calificacion <= 10){
    if(calificacion < 6){
        alert("Reprobado");
    }else if(calificacion >= 6 && calificacion <= 8){
        alert("Regular");
    }else if(calificacion == 9){
        alert("Bien");
    }else if(calificacion == 10){
        alert("Excelente");
    }
}else{
    alert("Error, la calificación no esta dentro del rango permitido.");
}

/***
9. Escribe un programa que responda a un usuario que quiere comprar un
helado en una conocida marca de comida rápida cuánto le costará en
función del topping que elija.
● El helado sin topping cuesta 50 MXN.
● El topping de oreo cuesta 10 MXN.
● El topping de KitKat cuesta 15 MXN.
● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa
le indicará “no tenemos este topping, lo sentimos.” y a continuación le
informará el precio del helado sin ningún topping.
***/

let seleccionUsuario = parseInt(prompt("Si desea saber el costo de un helado dependiendo del topping que elija entonces digite una de las siguientes opciones:\n 1. Helado con topping Oreo\n 2. Helado con topping KitKat\n 3. Helado con topping Brownie"));

if(seleccionUsuario == 1){
    alert("El helado con topping Oreo cuesta 10 MXN");
}else if(seleccionUsuario == 2){
    alert("El helado con topping KitKat cuesta 15 MXN");
}else if(seleccionUsuario == 3){
    alert("El helado con topping brownie cuesta 20 MXN");
}else{
    alert("No tenemos este topping, lo sentimos.\n El helado sin topping cuesta 50 MXN");
}

/***
10. Un conocido portal de educación en tecnología está ofreciendo
programas para aprender a desarrollar aplicaciones. Escribe un programa
que le indique a la persona interesada cuánto deberá pagar
mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su
costo mensual:
● Course: $4999 MXN
● Carrera $3999 MXN
● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el
descuento correspondiente al precio final.
● Beca Facebook: 20% de descuento.
● Beca Google: 15% de descuento.
● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario
cuánto gastaría en total por el curso elegido, tomando en cuenta las
siguientes duraciones:
● Course: 2 meses
● Carrera 6 meses
● Master: 12 meses
***/

let opcElegida = parseInt(prompt("Escoja uno de los niveles al que le interesaria acceder:\n 1. Course: $4999 MXN\n 2. Carrera: $3999 MXN\n 3. Master: $2999 MXN"));

let opcBeca = parseInt(prompt("Escoja uno de los niveles al que le interesaria acceder:\n 1. SI\n 2. NO"));

let valorNivel = 0;
let valorDescuento = 0;

if(opcElegida == 1 && opcBeca == 1){
    valorDescuento = 4999 * 0.20;
    valorNivel = (4999 - valorDescuento) * 2;
    alert("El nivel Course con descuento del 20% y duración de 2 meses tiene valor de $"+valorNivel);
}else{
    valorNivel = 4999 * 2; //9998
    alert("El nivel Course sin descuento y duración de 2 meses tiene valor de $"+valorNivel);
}

if(opcElegida == 2 && opcBeca == 2){
    valorDescuento = 3999 * 0.15;
    valorNivel = (3999 - valorDescuento) * 6;
    alert("El nivel Carrera con descuento del 15% y duración de 6 meses tiene valor de $"+valorNivel);
}else{
    valorNivel = 3999 * 6;
    alert("El nivel Carrera sin descuento y duración de 6 meses tiene valor de $"+valorNivel);
}

if(opcElegida == 3 && opcBeca == 3){
    valorDescuento = 2999 * 0.20;
    valorNivel = (2999 - valorDescuento) * 12;
    alert("El nivel Master con descuento del 50% y duración de 12 meses tiene valor de $"+valorNivel);
}else{
    valorNivel = 2999 * 12;
    alert("El nivel Master sin descuento y duración de 12 meses tiene valor de $"+valorNivel);
}

if(opcElegida < 1 || opcElegida > 3){
    alert("Opcion INCORRECTA, elija otra opcion.");
}

/***
11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros
consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto”
ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo
total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al
total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros
consumidos.
***/

let vehiculo = parseInt(prompt("Digite el numero que corresponde al vehiculo:\n 1. Coche\n 2. Moto\n 3. Autobús"));
let totalPagar = 0;
let precioKM = 0;
let litrosExtra = 0;

if(vehiculo > 3 || vehiculo < 1){
    alert("Opcion INCORRECTA. Por favor, intentelo de nuevo seleccionando una de las opciones indicadas en la pantalla");
}else if(vehiculo == 1){
    precioKM = 0.20;
    let kmRecorrido = parseInt(prompt("Digite la cantidad de kilometros recorridos"));
    if(kmRecorrido >= 0 && kmRecorrido <= 100){
        litrosExtra = 5;
        totalPagar = (precioKM * kmRecorrido) + litrosExtra;
        alert("El vehiculo seleccionado fue: Coche\n La cantidad de kilometros digitados fue: "+kmRecorrido+"\n\n Total a pagar: $"+totalPagar);
    }else if(kmRecorrido >= 101){
        litrosExtra = 10;
        totalPagar = (precioKM * kmRecorrido) + litrosExtra;
        alert("El vehiculo seleccionado fue: Coche\n La cantidad de kilometros digitados fue: "+kmRecorrido+"\n\n Total a pagar: $"+totalPagar);
    }
}else if(vehiculo == 2){
    precioKM = 0.10;
    let kmRecorrido = parseInt(prompt("Digite la cantidad de kilometros recorridos"));
    if(kmRecorrido >= 0 && kmRecorrido <= 100){
        litrosExtra = 5;
        totalPagar = (precioKM * kmRecorrido) + litrosExtra;
        alert("El vehiculo seleccionado fue: Moto\n La cantidad de kilometros digitados fue: "+kmRecorrido+"\n\n Total a pagar: $"+totalPagar);
    }else if(kmRecorrido >= 101){
        litrosExtra = 10;
        totalPagar = (precioKM * kmRecorrido) + litrosExtra;
        alert("El vehiculo seleccionado fue: Moto\n La cantidad de kilometros digitados fue: "+kmRecorrido+"\n\n Total a pagar: $"+totalPagar);
    }
}else if(vehiculo == 3){
    precioKM = 0.5;
    let kmRecorrido = parseInt(prompt("Digite la cantidad de kilometros recorridos"));
    if(kmRecorrido >= 0 && kmRecorrido <= 100){
        litrosExtra = 5;
        totalPagar = (precioKM * kmRecorrido) + litrosExtra;
        alert("El vehiculo seleccionado fue: Autobús\n La cantidad de kilometros digitados fue: "+kmRecorrido+"\n\n Total a pagar: $"+totalPagar);
    }else if(kmRecorrido >= 101){
        litrosExtra = 10;
        totalPagar = (precioKM * kmRecorrido) + litrosExtra;
        alert("El vehiculo seleccionado fue: Autobús\n La cantidad de kilometros digitados fue: "+kmRecorrido+"\n\n Total a pagar: $"+totalPagar);
    }
}
/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombre;
	let lugar;
	let temporada;
	let cantidad;
	let seguir = "s";
	let acumBariloche = 0;
	let acumCataratas = 0;
	let acumSalta = 0;
	let lugarMasElegido;
	let nombreMasPasajeros;
	let promedio;
	let cantPersonas = 0;
	let acumViajesInvierno = 0;
	let totalPersonas = 0;


	do{
		nombre = prompt("Ingrese el nombre del titular");

		lugar = prompt("Ingrese el lugar de destino(bariloche, cataratas o salta)").toLowerCase();
		while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta"){
			lugar = prompt("Error.Ingrese el lugar de destino(bariloche, cataratas o salta)").toLowerCase();
		}

		temporada = prompt("Ingrese una temporada(otoño, invierno, verano o primavera)").toLowerCase();
		while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera"){
			temporada = prompt("Error.Ingrese una temporada(otoño, invierno, verano o primavera)").toLowerCase();
		}

		cantidad = parseInt(prompt("Ingrese la cantidad de personas qui viajen"));
		while(cantidad < 1 || isNaN(cantidad)){
			cantidad = parseInt(prompt("Error.Ingrese la cantidad de personas qui viajen"));
		}

		switch(lugar){
			case "bariloche":
				acumBariloche++;
				break;

			case "cataratas":
				acumCataratas++;
				break;
				
			case "salta":
				acumSalta++;
				break;			
		}

		if(temporada == "invierno"){
			acumViajesInvierno++;
			cantPersonas = cantPersonas + cantidad;
		}

		if(cantidad > totalPersonas){
			totalPersonas = cantidad;
			nombreMasPasajeros = nombre;
		}


		seguir = prompt("Desea ingresar mas datos?");
	}while(seguir == "s");

	if(acumBariloche > acumCataratas && acumBariloche > acumSalta){
		lugarMasElegido = "BARILOCHE";
	}else if(acumCataratas >= acumBariloche && acumCataratas > acumSalta){
		lugarMasElegido = "CATARATAS";
	}else{
		lugarMasElegido = "SALTA";
	}

	promedio = cantPersonas / acumViajesInvierno;;


	console.log("El lugar mas elegido es: " + lugarMasElegido);
	console.log("El que lleva mas pasajeros es: " + nombreMasPasajeros);
	console.log("El promedio de personas que viajan en invierno es: " + promedio);
}

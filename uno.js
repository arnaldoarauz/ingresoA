/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let cantHombres = 0;
	let cantMujeres = 0;
	let acumEdad = 0;
	let contPersonas = 0;
	let promedio;
	let flagMujerMayorTemp = 0;
	let mayorTemperatura;
	let nombreMujerMayorTemp;
	let mensaje = "No se ingreso mujeres";

	for(let i = 0; i < 5; i++){

		nombre = prompt("Ingrese un nombre").toLowerCase();

		temperatura = parseFloat(prompt("Ingrese una temperatura corporal"));
		while(temperatura < 36 || temperatura > 40 || isNaN(temperatura)){
			temperatura = parseFloat(prompt("Error.Ingrese una temperatura corporal"));
		}

		sexo = prompt("Ingrese sexo (f o m)").toLowerCase();
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Error.Ingrese sexo (f o m)").toLowerCase();
		}

		edad = parseInt(prompt("Ingrese una edad valida"));
		while(edad <= 0 || edad > 100 || isNaN(edad)){
			edad = parseInt(prompt("Error.Ingrese una edad valida"));
		}


		switch(sexo){
			case "f":
				cantMujeres++;
				contPersonas++;
				acumEdad = acumEdad + edad;
				if(flagMujerMayorTemp == 0 || temperatura > mayorTemperatura){
					mayorTemperatura = temperatura;
					nombreMujerMayorTemp = nombre;
					flagMujerMayorTemp = 1;
					mensaje = "La mujer con mayor temperatura es: " + nombreMujerMayorTemp;
				}
				break;

			case "m":
				cantHombres++;
				contPersonas++;
				acumEdad = acumEdad + edad;
				break;	
		}

	}
	
	promedio = acumEdad / contPersonas;
	
	console.log("A. La cantidad de hombres es: " + cantHombres + " y la cantidad de mujeres es: " + cantMujeres);
	console.log("B. El promedio en total es: " + promedio);
	console.log("C. " + mensaje);
}
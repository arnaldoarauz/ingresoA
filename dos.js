/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let pesoTotal = 0;
  let marcaLiquidoCaro;
  let marcaMasLivianoSolido;
  let mayorPrecio = 0;
  let acumSolido = 0;
  let seguir = "s";

  do{
    marca = prompt("Ingrese una marca");

    precio = parseInt(prompt("Ingrese un precio valido"));
    while(precio <= 0 || isNaN(precio)){
      precio = parseInt(prompt("Error.Ingrese un precio valido"));
    }

    peso = parseFloat(prompt("Ingrese un peso valido"));
    while(peso <= 0 || isNaN(peso)){
      peso = parseFloat(prompt("Error.Ingrese un peso valido"));
    }

    tipo = prompt("Ingrese un tipo (solido o liquido)").toLowerCase();
    while(tipo != "solido" && tipo != "liquido"){
      tipo = prompt("Error.Ingrese un tipo valido (solido o liquido)").toLowerCase();
    }

    switch(tipo){
      case "solido":
        acumSolido = acumSolido + peso;
        pesoTotal = pesoTotal + peso;
        if(acumSolido > peso){
          marcaMasLivianoSolido = marca;
        }
        break;

      case "liquido":
        pesoTotal = pesoTotal + peso;
        if(precio > mayorPrecio){
          mayorPrecio = precio;
          marcaLiquidoCaro = marca;
        }
        break;

      }seguir = prompt("¿quiere ingresar mas datos?");
  }while(seguir == "s");

  console.log("El peso total es: " + pesoTotal);
  console.log("La marca del liquido mas caro es: " + marcaLiquidoCaro);
  console.log("La marca del mas liviano de los solidos es: " + marcaMasLivianoSolido);
} 
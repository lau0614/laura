let fecha = Date.now ();
let fecha1 = new Date (fecha);
let numdia = fecha1.getDay ();
let dia = "";

switch (numdia) {

case 1: dia= "domingo"
break;
case 2: dia= "lunes"
break;
case 3: dia= "martes"
break;
case 4: dia= "miercoles"
break;
case 5: dia= "jueves"
break;
case 6: dia= "viernes"
break;
case 7: dia= "sabado"
break;

default: console.log ("ese numero no corresponde");
}
console.log(dia)

/* switch (dia) {
    case "domingo":
        dia = "primero"

} */

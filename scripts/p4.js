let hours=parseInt(prompt("cuantas horas ha usado el parqueadero?"))
let minutes=parseInt(prompt("cuantos minutos mas de la hora utilizo el parqueadero"))
if (minutes>0) {
    hours=(hours+1)
}

let hused=(5000)

let charge=(hours * hused )
alert("el valor de su uso del parqueadero es: " + charge)
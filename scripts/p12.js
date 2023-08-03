let price=parseFloat(prompt("Valor a pagar"))
let cuots=parseInt(prompt("seleccione el numero de cuotas en que desea pagar (1, 2 o 6)"))

let vpagar=0

if (cuots===1){
    vpagar=price
} else
if (cuots===2){
    vpagar=(((price*(0.05))+(price))/2)
} else
if (cuots===6) {
    vpagar=(((price*(0.40))+(price))/6)
}

alert("El valor total (mensual) a pagar es: " + vpagar );
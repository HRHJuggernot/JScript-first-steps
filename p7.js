let pinicial=parseFloat(prompt("ingrese valor del producto"))

let piva=((pinicial)+((pinicial)*(0.15)))
alert("el valor del producto con IVA incluido es: " + piva)
let pdesc=((piva)-((piva)*(0.20)))
alert("el valor del producto con 20% de dscto es: "+ pdesc)

alert("el precio final, con descuento y con iva es: " + pdesc)
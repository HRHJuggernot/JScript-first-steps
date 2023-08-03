//Una empresa desea determinar el monto de un cheque que debe
//proporcionar a uno de sus empleados que tendrá que viajar durante un
//determinado número de días. Los gastos que cubre la empresa son: hotel,
//comida y 200 pesos diarios para otros gastos. El monto debe estar
//desglosado para cada concepto. Realiza un algoritmo que determine el
//monto del cheque.

let vhotel=parseInt(prompt("Ingrese el valor del hotel"));
let vfood=parseInt(prompt("Ingrese el gasto de alientacion"));
let otros=parseInt(200);
let vcheck=(vhotel+vfood+otros)
let check=prompt("el monto del cheque es: "+ vcheck +" distribuidos asi: "  + vhotel + "por concepto de hotel , " + vfood + "por concepto de alimentacion; " + otros+ " para gastos generales");
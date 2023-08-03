//Realiza el algoritmo para determinar el promedio que obtendrá un alumno,
//considerando que realiza tres exámenes, de los cuales el primero y el
//segundo tienen una ponderación de 25%, mientras que el tercero de 50%.

let nota1=parseFloat(prompt("Ingrese la nota del primer examen"));
percentage1=(nota1*(0.25));
let nota2= parseFloat(prompt("Ingrese la nota del segundo"));
percentage2=(nota2*(0.25))
let nota3= parseFloat(prompt("Ingrese la tercera nota"));
percentage3=(nota3*(0.50));
let notafinal=(percentage1+percentage2+percentage3);
alert("El promedio de las notas es: " + notafinal);
let numeroBase = 3
function imprimirNombre(n1, n2, op) {
    if(op == "suma"){
        console.log("La suma entre los dos numeros: " + (n1 + n2));
    }else if(op == "resta"){
        console.log("La resta entre los dos numeros es: " + (n1 - n2));
    }else{
        console.log("todo mal");
    }
}
imprimirNombre (numeroBase , 6, "suma")
imprimirNombre (10, 43, "resta")
imprimirNombre (12, 5, "arroz")





function suma(n1, n2) {
    let resultado = n1 + n2
    let mensaje;
    if(resultado >= 4){
        mensaje = "OKAY"
    }else{
        mensaje = "ERROR"
    }
    return mensaje;
}
console.log("El mensaje es: " + suma(1, 2));
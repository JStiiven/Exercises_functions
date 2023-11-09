function calcularPromedio(arr){
    let suma = 0;
    for(let i = 0; i < arr.length; i++){
        suma = suma + arr[i]
    }
    let division = suma / (arr.length-1)
    return division
}
const numeros = [2, 4, 6]
const promedio = calcularPromedio(numeros)
console.log("El promedio es: " + promedio);

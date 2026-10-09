// Função que recebe um array e retorna apenas os números ímpares
function obterImpares(numeros) {
    const impares = [];
    
    for (let num of numeros) {
        if (num % 2 !== 0) { 
            impares.push(num); 
        }
    }
    
    return impares;
}

// Testes 
const listaTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = obterImpares(listaTeste);

console.log("Array original:", listaTeste);
console.log("Apenas ímpares:", resultado); 

// Função para verificar se um número é primo
function ehPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// Entrada da quantidade de números 
const n = parseInt(prompt("Quantos números deseja introduzir?"));
let somaPrimos = 0;
let contador = 0;

// Loop para ler N números e somar os primos 
while (contador < n) {
    const num = parseInt(prompt(`Digite o ${contador + 1}º número:`));
    
    if (ehPrimo(num)) {
        somaPrimos += num; // Soma o número se for primo
    }
    
    contador++;
}

// Exibe o resultado
alert(`A soma dos números primos introduzidos é: ${somaPrimos}`);
console.log(`Soma dos números primos: ${somaPrimos}`););

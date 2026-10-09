// Função da calculadora 
function calcular(num1, num2, operacao) {
    switch (operacao) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Erro: Divisão por zero não é permitida!";
            }
            return num1 / num2;
        default:
            return "Operação inválida!";
    }
}

// Entradas dos números 
const n1 = parseFloat(prompt("Digite o primeiro número:"));
const n2 = parseFloat(prompt("Digite o segundo número:"));
const op = prompt("Digite a operação (+, -, *, /):");

// Resultado
const resultado = calcular(n1, n2, op);
alert(`Resultado: ${resultado}`);
console.log(`${n1} ${op} ${n2} = ${resultado}`);

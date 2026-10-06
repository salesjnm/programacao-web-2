// Solicita o raio do círculo
const raio = parseFloat(prompt("Digite o valor do raio do círculo:"));

// Valida se é um número válido 
if (isNaN(raio) || raio <= 0) {
    alert("Por favor, informe um valor de raio válido e maior que zero.");
} else {
    // Calcula o perímetro
    const perimetro = 2 * Math.PI * raio;

    // Exibe o resultado 
    alert(`O perímetro do círculo com raio ${raio} é: ${perimetro.toFixed(2)}`);
    console.log(`Raio: ${raio} | Perímetro: ${perimetro.toFixed(2)}`);
}

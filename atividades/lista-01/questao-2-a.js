// Solicita os dados ao usuário 
const valorReais = parseFloat(prompt("Digite o valor em R$ (Reais):"));
const cotacaoDolar = parseFloat(prompt("Digite a cotação atual do Dólar (US$):"));

// Validação dos dados 
if (isNaN(valorReais) || isNaN(cotacaoDolar) || cotacaoDolar <= 0) {
    alert("Por favor, digite números válidos para o valor e a cotação.");
} else {
    // Realiza a conversão
    const valorDolar = valorReais / cotacaoDolar;

    // Resultado na tela e no console do navegador
    alert(`R$ ${valorReais.toFixed(2)} equivalem a US$ ${valorDolar.toFixed(2)}`);
    console.log(`Conversão realizada: R$ ${valorReais.toFixed(2)} -> US$ ${valorDolar.toFixed(2)}`);
}

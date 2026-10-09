// Solicita as duas notas
const n1 = parseFloat(prompt("Digite a nota da N1:"));
const n2 = parseFloat(prompt("Digite a nota da N2:"));

// Valida se as notas estão entre 0 e 10
if (isNaN(n1) || isNaN(n2) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
    alert("Por favor, insira notas válidas entre 0.0 e 10.0.");
} else {
    // Cálculo da média ponderada
    const mediaFinal = (n1 * 2 + n2 * 3) / 5;

    // O aluno está aprovado ou reprovado (nota mínima 7.0)
    const situacao = mediaFinal >= 7.0 ? "APROVADO(A)" : "REPROVADO(A)";

    // Exibe o resultado
    alert(`Sua nota final é: ${mediaFinal.toFixed(1)}\nSituação: ${situacao}`);
    console.log(`N1: ${n1} | N2: ${n2} | Nota Final: ${mediaFinal.toFixed(1)} | Situação: ${situacao}`);
}

// Função para e-commerce
function calcularTotal(valorUnitario, quantidade, desconto = 0) {
    const subtotal = valorUnitario * quantidade;
    const total = subtotal - desconto;
    
    // Garante que o total não seja negativo caso o desconto seja maior que o subtotal
    return total < 0 ? 0 : total;
}

// Testes no console

 Sem desconto 
const compra1 = calcularTotal(50, 2); 
console.log("Compra 1 (R$ 50 x 2, sem desconto):", compra1); 

 Com desconto 
const compra2 = calcularTotal(50, 2, 15); 
console.log("Compra 2 (R$ 50 x 2, com R$ 15 de desconto):", compra2); 

 Outro produto sem desconto
const compra3 = calcularTotal(29.90, 3);
console.log("Compra 3 (R$ 29.90 x 3, sem desconto):", compra3); 

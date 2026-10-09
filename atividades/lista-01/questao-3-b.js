// Função para calcular o produtório de N números 
function produtorio(...numeros) {
    let resultado = 1;
    
    for (let num of numeros) {
        resultado *= num;
    }
  
    return resultado;
// Testes 
console.log("Produtório (2, 3, 4):", produtorio(2, 3, 4));        

// Função fatorial
function fatorial(n) {
  
    if (n <= 1) {
        return 1;
    }
  
    return n * fatorial(n - 1);
}

// Testes
console.log("Fatorial de 5 (5!):", fatorial(5)); 
console.log("Fatorial de 0 (0!):", fatorial(0)); 
console.log("Fatorial de 3 (3!):", fatorial(3)); 

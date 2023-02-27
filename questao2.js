while (true) {
    let numero = parseInt(prompt("Informe um número inteiro:"));
    let a = 0;
    let b = 1;
    let c;
  
    while (b < numero) {
      c = a + b;
      a = b;
      b = c;
    }
  
    if (b === numero) {
      console.log(numero + " pertence à sequência de Fibonacci.");
    } else {
      console.log(numero + " não pertence à sequência de Fibonacci.");
    }
  
    let repetir = prompt("Deseja verificar outro número? (s/n)").toLowerCase();
    if (repetir === "n") {
      break;
    }
  }
  
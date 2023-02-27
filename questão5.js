while (true) {
    let string = prompt("Digite uma palavra para inverter:");
  
    if (string === null) {
      break; // caso o usuário cancele o prompt, o loop é interrompido
    }
  
    let stringAoContrario = "";
    for (let i = string.length - 1; i >= 0; i--) {
      stringAoContrario += string[i]; // concatenando cada caractere na ordem inversa
    }
  
    alert(`A palavra invertida é: ${stringAoContrario}`);
  }
  
// Criação de um objeto com os valores de faturamento por estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  
  // Calculo do valor total do faturamento mensal
  const valorTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor);
  
  // Calculo e exibição do percentual de representação de cada estado
  for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / valorTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
  
// Importando o arquivo JSON
const dadosFaturamento = require('./dadosFaturamento.json');

// Calculando o menor e o maior valor de faturamento diário
const valoresFaturamento = dadosFaturamento.map(dia => dia.valor);
const menorValor = Math.min(...valoresFaturamento);
const maiorValor = Math.max(...valoresFaturamento);
const faturamentoSemZeros = dadosFaturamento.filter(dia => dia.valor !== 0);
const menorFaturamento = faturamentoSemZeros.reduce((acc, dia) => dia.valor < acc.valor ? dia : acc, faturamentoSemZeros[0]);


// Calculando a média mensal de faturamento diário (ignorando dias sem faturamento)
const diasComFaturamento = dadosFaturamento.filter(dia => dia.valor > 0);
const totalFaturamento = diasComFaturamento.reduce((acumulador, dia) => acumulador + dia.valor, 0);
const mediaMensal = totalFaturamento / diasComFaturamento.length;

// Calculando o número de dias no mês em que o valor de faturamento diário foi superior à média mensal
const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal);
const numeroDiasAcimaDaMedia = diasAcimaDaMedia.length;

// Imprimindo os resultados no console
console.log(`Menor valor de faturamento diário: R$ ${menorValor.toFixed(2)}`);
console.log(`Ignorando os dias sem faturamento, o dia de menor faturamento foi o dia ${menorFaturamento.dia} com o valor de R$ ${menorFaturamento.valor.toFixed(2)}`);
console.log(`Maior valor de faturamento diário: R$ ${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média mensal: ${numeroDiasAcimaDaMedia}`);

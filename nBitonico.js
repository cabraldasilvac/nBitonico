function maiorSubconjuntoBitonico(arr) {
  const n = arr.length;

  // dpCrescente[i] armazena o comprimento da maior subsequência crescente que termina em arr[i]
  const dpCrescente = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dpCrescente[i] = Math.max(dpCrescente[i], dpCrescente[j] + 1);
      }
    }
  }

  // dpDecrescente[i] armazena o comprimento da maior subsequência decrescente que começa em arr[i]
  const dpDecrescente = Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        dpDecrescente[i] = Math.max(dpDecrescente[i], dpDecrescente[j] + 1);
      }
    }
  }

  // Encontrar o comprimento máximo do subconjunto bitônico
  let maxComprimento = 0;
  for (let i = 0; i < n; i++) {
    const comprimentoAtual = dpCrescente[i] + dpDecrescente[i] - 1;
    maxComprimento = Math.max(maxComprimento, comprimentoAtual);
  }

  return maxComprimento;
}

// Exemplo de uso:
const arr = [10, 8, 9, 15, 12, 6, 7];
const resultado = maiorSubconjuntoBitonico(arr);
console.log(`O comprimento do maior subconjunto bitônico é: ${resultado}`); // Saída: 5


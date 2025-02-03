# Encontrando o maior subconjunto bitônico


<p>Uma sequência bitônica é uma sequência de números que primeiro aumenta (não decrescente) e depois diminui (não crescente). 
Dado um conjunto de números inteiros, o objetivo é encontrar o comprimento do maior subconjunto que seja bitônico.
</p>

***Exemplo:***

***Entrada: [10, 8, 9, 15, 12, 6, 7]***

***Saída: 5 (o subconjunto 8, 9, 15, 12, 7)***

### Abordagem:

    1. Encontrar as maiores subsequências crescentes: Para cada elemento do array, encontre o comprimento da maior subsequência 
        crescente que termina nesse elemento. Isso pode ser feito usando programação dinâmica.

    2. Encontrar as maiores subsequências decrescentes: Para cada elemento do array, encontre o comprimento da maior subsequência 
        decrescente que começa nesse elemento. Novamente, a programação dinâmica pode ser usada aqui.

    3. Combinar as subsequências: Para cada elemento, some o comprimento da maior subsequência crescente que termina nele e o 
        comprimento da maior subsequência decrescente que começa nele. Subtraia 1 (porque o elemento está contado duas vezes)
        para obter o comprimento do subconjunto bitônico centrado nesse elemento.

    4. Encontrar o máximo: O comprimento do maior subconjunto bitônico será o máximo dos comprimentos calculados no passo anterior.

#

### Explicação do código JavaScript:


maiorSubconjuntoBitonico(arr): Função que recebe o array de inteiros arr como entrada.

dpCrescente e dpDecrescente: Arrays inicializados com 1s. dpCrescente[i] armazena o comprimento da maior subsequência crescente que termina em arr[i]. dpDecrescente[i] armazena o comprimento da maior subsequência decrescente que começa em arr[i].

Cálculo de dpCrescente: Dois loops aninhados iteram pelo array. O loop externo ( i) itera do segundo elemento até o último. O loop interno (j) itera de 0 até o elemento anterior a i. Se arr[i] for maior que arr[j],  dpCrescente[i] é atualizado com o máximo entre o seu valor atual e dpCrescente[j] + 1.

Cálculo de dpDecrescente: Similar ao cálculo de dpCrescente, mas itera-se do penúltimo elemento até o primeiro, e a comparação é se arr[i] é maior que arr[j] (para subsequências decrescentes).

Cálculo do comprimento máximo: Itera-se pelo array, e para cada elemento i, calcula-se o comprimento do subconjunto bitônico centrado em arr[i] como dpCrescente[i] + dpDecrescente[i] - 1 (subtrai-se 1 porque o elemento central é contado duas vezes). O comprimento máximo é armazenado em maxComprimento.

Retorno do resultado: A função retorna maxComprimento.


***Como executar o código no Node.js:***

Clone do projeto.

Abra o terminal, navegue até o diretório onde você salvou o projeto.

Execute o comando node nBitonico.js.

```node
node nBitonico.js
```
O código imprimirá o comprimento do maior subconjunto bitônico para o exemplo fornecido.


A Resposta espera é o número 5.


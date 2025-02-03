def maior_subconjunto_bitonico(arr):
    n = len(arr)

    # dp_crescente[i] armazena o comprimento da maior subsequência crescente que termina em arr[i]
    dp_crescente = [1] * n
    for i in range(1, n):
        for j in range(i):
            if arr[i] > arr[j]:
                dp_crescente[i] = max(dp_crescente[i], dp_crescente[j] + 1)

    # dp_decrescente[i] armazena o comprimento da maior subsequência decrescente que começa em arr[i]
    dp_decrescente = [1] * n
    for i in range(n - 2, -1, -1):
        for j in range(i + 1, n):
            if arr[i] > arr[j]:
                dp_decrescente[i] = max(dp_decrescente[i], dp_decrescente[j] + 1)

    # Encontrar o comprimento máximo do subconjunto bitônico
    max_comprimento = 0
    for i in range(n):
        comprimento_atual = dp_crescente[i] + dp_decrescente[i] - 1
        max_comprimento = max(max_comprimento, comprimento_atual)

    return max_comprimento

# Exemplo de uso:
 arr = [10, 8, 9, 15, 12, 6, 7]
resultado = maior_subconjunto_bitonico(arr)

print(f"----------------------------------------------------------")
print(f"O valor do array é: {arr}")
print(f"")
print(f"----------------------------------------------------------")
print(f"O comprimento do maior subconjunto bitônico é: {resultado}")
print(f"")
print(f"----------------------------------------------------------")





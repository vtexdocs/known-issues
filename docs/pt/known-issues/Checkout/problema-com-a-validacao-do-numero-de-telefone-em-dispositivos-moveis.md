---
title: 'Problema com a validação do número de telefone em dispositivos móveis'
slug: problema-com-a-validacao-do-numero-de-telefone-em-dispositivos-moveis
status: PUBLISHED
createdAt: 2024-01-11T17:35:18.000Z
updatedAt: 2024-01-12T14:24:20.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: problem-with-phone-validation-on-mobile-devices
locale: pt
kiStatus: Backlog
internalReference: 964802
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A validação do campo de telefone em dispositivos móveis não está funcionando conforme o esperado. Quando o número esperado de caracteres é atingido, a validação marca corretamente o campo com um sinal de visto. No entanto, quando caracteres adicionais são inseridos e depois removidos um por um, a validação não reconhece que a contagem de caracteres ainda é maior do que o esperado, marcando incorretamente a entrada como válida. A validação também marca como válidas as entradas com menos caracteres do que o esperado.

## Simulação

1. Acesse a página de checkout comprando qualquer item aleatório.
2. Durante a etapa de perfil, insira um número de telefone até que o campo seja validado e marcado com uma marca de seleção.
3. Experimente adicionar mais caracteres ao número de telefone e, em seguida, removê-los um por um, observando como o campo mantém a marca de seleção mesmo com um número reduzido de caracteres em comparação com a validação inicial.

## Workaround

N/A
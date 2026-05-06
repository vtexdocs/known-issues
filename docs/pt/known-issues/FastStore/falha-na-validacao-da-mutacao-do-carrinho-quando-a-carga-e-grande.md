---
title: 'Falha na validação da mutação do carrinho quando a carga é grande'
slug: falha-na-validacao-da-mutacao-do-carrinho-quando-a-carga-e-grande
status: PUBLISHED
createdAt: 2024-02-21T15:23:28.000Z
updatedAt: 2024-02-21T15:23:28.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: validatecartmutation-failing-when-large-payload
locale: pt
kiStatus: Backlog
internalReference: 985867
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao adicionar vários produtos ao minicart, dependendo das informações associadas a esses produtos, se recebermos um erro `payloadTooLarge`, o produto será adicionado ao carrinho, mas não será transferido corretamente para o `orderForm`

## Simulação

- Adicione produtos ao carrinho até receber um erro 413 Payload Too Large

## Workaround

N/A
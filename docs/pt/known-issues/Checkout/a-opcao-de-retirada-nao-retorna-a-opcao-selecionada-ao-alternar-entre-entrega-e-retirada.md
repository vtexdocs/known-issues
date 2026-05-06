---
title: 'A opção de retirada não retorna a opção selecionada ao alternar entre entrega e retirada'
slug: a-opcao-de-retirada-nao-retorna-a-opcao-selecionada-ao-alternar-entre-entrega-e-retirada
status: PUBLISHED
createdAt: 2022-05-30T18:33:47.000Z
updatedAt: 2023-03-27T12:38:17.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-option-does-not-return-selected-option-if-switching-between-delivery-and-pickup
locale: pt
kiStatus: Backlog
internalReference: 588394
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o cliente seleciona uma loja para retirada, alterna para entrega e adiciona um novo endereço indisponível para entrega ao voltar para a opção de retirada, outra loja é exibida como selecionada. Se alternarmos entre entrega e retirada, às vezes a loja selecionada inicialmente aparece intercalada com outra loja.

## Simulação

- Adicione ao carrinho um item que tenha estoque apenas para retirada na loja;
- Na opção de retirada, pesquise um endereço e selecione qualquer loja;
- Mude para entrega e altere o endereço;
- Volte para a opção de retirada.

## Workaround

N/A
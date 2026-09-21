---
title: 'O algoritmo de seleção de vendedores não leva em consideração a disponibilidade real do item para escolher a melhor opção.'
slug: o-algoritmo-de-selecao-de-vendedores-nao-leva-em-consideracao-a-disponibilidade-real-do-item-para-escolher-a-melhor-opcao
status: PUBLISHED
createdAt: 2021-04-23T23:03:37.000Z
updatedAt: 2026-09-21T17:24:17.000Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: seller-selection-algorithm-doesnt-consider-the-real-availability-of-the-item-to-choose-the-best-option
locale: pt
kiStatus: Fixed
internalReference: 360097
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O algoritmo de seleção de vendedores considera o estoque dos itens para selecionar o melhor vendedor whitelabel para um determinado contexto.

O problema é que esta API não leva em conta se a quantidade provém de um armazém válido para o canal de vendas, com uma estratégia de envio válida, e nem mesmo se o armazém está habilitado. Portanto, o contexto é inadequado para selecionar o melhor vendedor.

Em um segundo momento, o checkout realiza uma solicitação de

## Simulação

completa no vendedor selecionado e somente então descobre que, na verdade, o item não está disponível. Mas, nesse momento, um vendedor whitelabel alternativo não pode mais ser aplicado.

## **Simulação**

- Ter uma loja com vendedores de marca branca
- Ter mais de um vendedor:

- Vendedor A com alto estoque, mas com o armazém desativado
- Vendedor B com baixo estoque, mas com o armazém ativado e com uma estratégia de envio válida

- Realizar uma simulação e observar que o checkout selecionará o vendedor A em vez do vendedor B

## Workaround

A loja precisa garantir que, se um vendedor estiver ativado, ele tenha uma estratégia de envio válida para todos os armazéns. Se algum armazém não for usado, seu saldo deve ser zerado. Caso contrário, há o risco de selecionar um vendedor que não possa entregar o item.
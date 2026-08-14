---
title: 'A pré-visualização do frete entra em loop quando um item possui várias opções de entrega e o preço do frete muda entre as simulações.'
slug: a-previsualizacao-do-frete-entra-em-loop-quando-um-item-possui-varias-opcoes-de-entrega-e-o-preco-do-frete-muda-entre-as-simulacoes
status: PUBLISHED
createdAt: 2026-08-14T22:40:27.000Z
updatedAt: 2026-08-14T22:40:27.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-loops-when-an-item-has-multiple-delivery-options-and-the-freight-price-changes-between-simulations
locale: pt
kiStatus: Backlog
internalReference: 1448353
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A pré-visualização do frete entra em um loop infinito de requisições imediatamente após o CEP ser carregado no formulário de pedido. Como o Lean Shipping seleciona automaticamente a opção mais econômica, ele salva o novo SLA por meio do `shippingData`. O total do pedido é alterado, o `paymentData` é reenviado para sincronizar o valor e o `orderForm` resultante aciona uma nova

## Simulação

que aponta para o SLA mais barato.

Como o preço do frete varia para o mesmo SLA com base no tamanho do pacote, a interface de finalização da compra nunca seleciona o SLA mais barato.

## **Simulação**
O carrinho deve conter:

- Mais de um item
- Vários vendedores - especialmente um vendedor para cada item
- As transportadoras de cada vendedor têm preços mais baixos para pacotes maiores. (Por exemplo, a transportadora "rápida" do vendedor X tem um preço baixo para entregar um pacote com 3 itens, mas um preço mais alto para um pacote com um item)

## Workaround

N/A
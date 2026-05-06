---
title: 'O `UseSessionRegionAtCheckout` não funciona corretamente ao adicionar o primeiro item ao carrinho'
slug: o-usesessionregionatcheckout-nao-funciona-corretamente-ao-adicionar-o-primeiro-item-ao-carrinho
status: PUBLISHED
createdAt: 2023-10-24T22:51:12.000Z
updatedAt: 2023-10-26T10:55:13.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: usesessionregionatcheckout-doesnt-work-properly-when-adding-the-first-item-to-the-cart
locale: pt
kiStatus: Backlog
internalReference: 925049
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Se uma conta tiver a opção 'UseSessionRegionAtCheckout' configurada, ao adicionar um item e o formulário de pedido não tiver 'shippingData', o vendedor não será definido, exibindo preços e disponibilidade diferentes.

## Simulação

- A conta deve estar usando UseSessionRegionAtCheckout;
- Defina um regionId na sessão;
- Adicione um item ao carrinho; ele pode exibir preços e disponibilidade diferentes.

## Workaround

Atualize o formulário de pedido (API Get atual ou crie um novo carrinho) usando o parâmetro `?refreshOutdatedData=true`.
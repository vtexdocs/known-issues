---
title: 'O comprador vê uma mensagem de erro genérica em vez da tela de confirmação do pedido, e o pedido foi criado.'
slug: o-comprador-ve-uma-mensagem-de-erro-generica-em-vez-da-tela-de-confirmacao-do-pedido-e-o-pedido-foi-criado
status: PUBLISHED
createdAt: 2021-09-03T18:50:10.000Z
updatedAt: 2026-09-17T16:09:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: buyer-sees-a-generic-error-instead-of-the-order-confirmation-screen-and-the-order-was-created
locale: pt
kiStatus: No Fix
internalReference: 425142
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Intermitentemente, a última etapa da compra falha e o comprador vê uma tela de erro genérica em vez da tela de confirmação do pedido, mesmo que o pedido tenha sido criado com sucesso.

Como a tela de confirmação nunca é exibida, o comprador tende a voltar uma página. O carrinho já está vazio e, como o comprador não sabe que o pedido existe, há o risco de criar um novo carrinho e comprar o mesmo item novamente.

## Simulação

Não reproduzível — o cenário é intermitente.

Para confirmar um caso, verifique se:

1. O comprador viu uma tela de erro genérica ao final da compra.

2. O pedido foi criado com sucesso.

3. O carrinho estava vazio quando o comprador voltou.

## Workaround

N/A
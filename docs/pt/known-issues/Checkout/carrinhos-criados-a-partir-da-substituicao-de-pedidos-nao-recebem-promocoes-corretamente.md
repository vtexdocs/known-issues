---
title: 'Carrinhos criados a partir da substituição de pedidos não recebem promoções corretamente.'
slug: carrinhos-criados-a-partir-da-substituicao-de-pedidos-nao-recebem-promocoes-corretamente
status: PUBLISHED
createdAt: 2021-11-22T23:31:57.000Z
updatedAt: 2026-06-24T23:48:41.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: carts-created-from-order-replacement-do-not-receive-promotions-correctly
locale: pt
kiStatus: Backlog
internalReference: 473424
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os carrinhos criados através da opção "Substituir Pedido" na página "Meus Pedidos" permanecem vinculados à promoção do pedido original. No entanto, o sistema não reavalia a elegibilidade da promoção quando o cliente altera a forma de pagamento ou o endereço de entrega, mesmo que as regras da promoção variem com base nesses fatores.

Isso foi observado durante o fluxo de substituição de pedidos quando os clientes atualizam seu endereço ou forma de pagamento. Como resultado, o desconto desaparece do carrinho.

## Simulação

- Existe uma promoção para métodos de pagamento ou frete grátis
- O cliente fecha o pedido, que deve ter um desconto dessas promoções
- Na tela "Meus Pedidos", o cliente escolhe alterar o pedido
- De volta ao carrinho, o cliente escolhe pagar com um método de pagamento diferente ou altera o endereço de entrega ou o SLA (Sítio de Entrega Padrão)
- O desconto não será exibido

## Workaround

N/A
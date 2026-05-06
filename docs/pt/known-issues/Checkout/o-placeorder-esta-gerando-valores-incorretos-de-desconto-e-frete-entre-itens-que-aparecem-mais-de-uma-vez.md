---
title: 'O PlaceOrder está gerando valores incorretos de desconto e frete entre itens que aparecem mais de uma vez'
slug: o-placeorder-esta-gerando-valores-incorretos-de-desconto-e-frete-entre-itens-que-aparecem-mais-de-uma-vez
status: PUBLISHED
createdAt: 2023-01-12T19:11:51.000Z
updatedAt: 2023-02-13T20:27:39.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: placeorder-generating-wrong-discount-and-shipping-values-between-items-that-appear-more-than-once
locale: pt
kiStatus: Backlog
internalReference: 732529
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a solicitação de criação de pedido inclui o mesmo item mais de uma vez, sendo necessário definir preços ou valores de desconto diferentes para as várias unidades do item, o serviço de checkout somará todas as quantidades de um único item e aplicará apenas as condições do primeiro item a todas elas. Isso resultará em um preço total/desconto incorreto e até mesmo em custos de envio errados.

Um exemplo rápido desse cenário é ao aplicar uma promoção do tipo “mais por menos” em uma solicitação de pedido externo, ou mesmo quando essa condição ocorre no nível do marketplace para um cenário de estoque omnicanal multinível (MOI).

## Simulação

- Acesse uma conta de marketplace que tenha vendedores regulares usando a relação multinível (MOI)
- Adicione um produto que tenha uma promoção “mais por menos” e faça o pedido
- Verifique o preço total (descontos e frete) no vendedor

Essa é apenas uma maneira mais fácil de simular, mas você também pode usar a API Place Order

## Workaround

N/A
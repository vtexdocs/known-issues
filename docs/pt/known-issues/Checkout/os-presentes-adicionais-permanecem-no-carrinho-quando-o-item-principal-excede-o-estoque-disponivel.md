---
title: 'Os presentes adicionais permanecem no carrinho quando o item principal excede o estoque disponível'
slug: os-presentes-adicionais-permanecem-no-carrinho-quando-o-item-principal-excede-o-estoque-disponivel
status: PUBLISHED
createdAt: 2026-05-09T00:29:32.000Z
updatedAt: 2026-05-09T00:29:32.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: extra-gifts-remain-in-cart-when-main-item-exceeds-available-stock
locale: pt
kiStatus: Backlog
internalReference: 1404248
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um cliente adiciona uma quantidade de um SKU elegível para brinde que excede o estoque disponível, o fluxo de checkout inicialmente adiciona brindes para a quantidade total solicitada, mas apenas a quantidade em estoque do item principal é mantida. Como resultado, itens de brinde extras permanecem no formulário de pedido além do que a quantidade final do item principal justifica.

Os cenários afetados envolvem promoções de brinde configuradas como “1 brinde por item elegível”.

## Simulação

- Pré-requisitos:
  - Uma promoção de brinde que adiciona 1 SKU de brinde por unidade de um SKU principal elegível.
  - O SKU principal elegível deve ter disponibilidade limitada (por exemplo, estoque total disponível = 3).

- Etapas:
  - Crie um novo carrinho (por meio da interface de checkout ou da API Create New Cart (`forceNewCart=true`)).
  - Adicione uma quantidade do SKU principal elegível maior do que seu estoque disponível (por exemplo, solicite 5 unidades quando existem apenas 3).
  - Observe que o Checkout adiciona presentes correspondentes à quantidade solicitada (por exemplo, 5 unidades de presente) ao orderForm, mesmo que apenas parte do item principal persista (por exemplo, 3 unidades). Os presentes extras permanecem até que outra ação que acione o pipeline seja realizada.

## Workaround

Execute outra atualização do formulário de pedido que acione o pipeline de checkout, como enviar `/clientProfileData` ou `/shippingData`, para remover os brindes extras. Como novas solicitações que acionam o pipeline sempre removem os brindes extras e a própria solicitação de "Fazer pedido" aciona o pipeline, não é possível fazer um pedido com os brindes extras.
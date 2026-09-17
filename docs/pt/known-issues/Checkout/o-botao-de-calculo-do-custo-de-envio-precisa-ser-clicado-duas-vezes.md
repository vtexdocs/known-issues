---
title: 'O botão de cálculo do custo de envio precisa ser clicado duas vezes.'
slug: o-botao-de-calculo-do-custo-de-envio-precisa-ser-clicado-duas-vezes
status: PUBLISHED
createdAt: 2021-05-24T16:04:02.000Z
updatedAt: 2026-09-17T16:11:54.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-cost-calculation-button-has-to-be-clicked-twice
locale: pt
kiStatus: No Fix
internalReference: 372268
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No checkout, o cálculo do custo de envio às vezes não é executado quando o comprador clica no botão pela primeira vez — o clique apenas destaca o botão, e o cálculo é executado no segundo clique. Intermitente. O comportamento esperado é que o cálculo ocorra automaticamente após a inserção do endereço.

## Simulação

1. Abra um carrinho com produtos.

2. Vá para a etapa de endereço e insira um endereço (ex.: "Avenida la Marina, 2400, San Miguel, Peru").

3. Clique no botão de cálculo do custo de envio — nada é calculado, o botão apenas fica destacado.

4. Clique no botão novamente — o cálculo é executado.

Se o botão funcionar no primeiro clique, saia do fluxo de checkout e retorne: o botão então para de realizar a validação que estava fazendo antes.

## Workaround

N/A
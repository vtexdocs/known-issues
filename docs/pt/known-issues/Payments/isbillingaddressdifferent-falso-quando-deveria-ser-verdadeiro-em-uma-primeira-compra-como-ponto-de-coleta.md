---
title: '"isBillingAddressDifferent": falso quando deveria ser verdadeiro em uma primeira compra como ponto de coleta'
slug: isbillingaddressdifferent-falso-quando-deveria-ser-verdadeiro-em-uma-primeira-compra-como-ponto-de-coleta
status: PUBLISHED
createdAt: 2025-10-16T20:38:03.685Z
updatedAt: 2025-10-16T20:38:03.685Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: isbillingaddressdifferent-false-when-it-should-be-true-in-a-first-buy-as-pickup-point
locale: pt
kiStatus: Backlog
internalReference: 1183699
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Às vezes, quando uma primeira compra é feita como pick-up, o objeto `shippingData` dentro da transação recebe o endereço de cobrança, mesmo que os dois sejam diferentes. Além disso, o `"isBillingAddressDifferent"` nos detalhes do pagamento recebe false, quando deveria receber true.
## Simulação


Não há como reproduzir o erro de forma assertiva, pois ele é intermitente.


## Workaround


Não há solução alternativa para esse bug.



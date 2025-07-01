---
title: alation Incomplete billingAddress despite isBillingAddressDifferent: false
slug: alation-incomplete-billingaddress-despite-isbillingaddressdifferent-false
status: PUBLISHED
createdAt: 2025-07-01T13:41:58.853Z
updatedAt: 2025-07-01T13:41:58.853Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: alation-incomplete-billingaddress-despite-isbillingaddressdifferent-false
locale: pt
kiStatus: Backlog
internalReference: 1252301
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O `billingAddress` está incompleto, faltando campos como `street`, `number`, `neighborhood` e `postalCode`. Em alguns cenários pouco claros, mesmo quando o campo `isBillingAddressDifferent` é definido como `false` (indicando que o `billingAddress` deve ser o mesmo que o `shippingAddress`), o `billingAddress` acaba sendo diferente e, muitas vezes, uma versão incompleta do `shippingAddress`.
## Simulação


Esse problema não pode ser reproduzido de forma confiável.



## Workaround


Não há nenhuma solução alternativa conhecida.




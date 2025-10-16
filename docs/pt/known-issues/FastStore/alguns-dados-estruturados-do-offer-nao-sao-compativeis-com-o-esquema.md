---
title: Alguns dados estruturados do Offer não são compatíveis com o esquema
slug: alguns-dados-estruturados-do-offer-nao-sao-compativeis-com-o-esquema
status: PUBLISHED
createdAt: 2025-10-16T19:30:15.481Z
updatedAt: 2025-10-16T19:30:15.481Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: some-structured-data-from-offer-are-not-supported-by-the-schema
locale: pt
kiStatus: Backlog
internalReference: 1244839
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Alguns campos do tipo Oferta não estão sendo validados corretamente pelo schema.org. Algumas propriedades com esse problema são:

- **listPriceWithTaxes**
- **priceWithTaxes**
- **quantidade**
## Simulação


Você pode ver esse comportamento em nossa loja padrão https://www.fast.store/ verificando se há algum PDP no schema.org, por exemplo:
https://validator.schema.org/#url=https%3A%2F%2Fwww.fast.store%2Fwireless-controller-white-10000000%2Fp
 ![](https://vtexhelp.zendesk.com/attachments/token/2O5AHNwwktZmy2LXC8isSVWpt/?name=image.png
## Workaround


N/A




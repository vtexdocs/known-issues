---
title: 'O desconto nominal calculado com base na fórmula não está funcionando como esperado nas operações de subtração'
slug: o-desconto-nominal-calculado-com-base-na-formula-nao-esta-funcionando-como-esperado-nas-operacoes-de-subtracao
status: PUBLISHED
createdAt: 2023-08-24T13:30:21.000Z
updatedAt: 2023-08-28T20:32:12.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: nominal-discount-based-on-formula-not-working-as-expected-with-subtraction-operations
locale: pt
kiStatus: Backlog
internalReference: 886980
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao criar uma promoção usando o desconto nominal com base em fórmula, o comerciante pode utilizar as seguintes operações, conforme esta documentação: https://help.vtex.com/en/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV
 ![](https://vtexhelp.zendesk.com/attachments/token/1EhryrRZDsiXZ31kaSV2VcegW/?name=image.png)

No entanto, ao usar a operação de subtração, o valor do desconto é substituído pelo valor total do pedido.

## Simulação

Crie uma promoção usando o desconto nominal baseado em fórmula e utilize uma operação de subtração, assim:
 ![](https://vtexhelp.zendesk.com/attachments/token/3wIEiPGtF9oX2daeQ3F3AZqCk/?name=image.png)

Verifique no checkout se o desconto foi substituído pelo que deveria ser o valor total do pedido:
 ![](https://vtexhelp.zendesk.com/attachments/token/r2bWktL4reNcVnnhSqr4hT0FC/?name=image.png)

## Workaround

N/A
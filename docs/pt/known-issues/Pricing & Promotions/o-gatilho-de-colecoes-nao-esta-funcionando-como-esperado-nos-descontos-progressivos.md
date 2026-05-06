---
title: 'O gatilho de coleções não está funcionando como esperado nos descontos progressivos'
slug: o-gatilho-de-colecoes-nao-esta-funcionando-como-esperado-nos-descontos-progressivos
status: PUBLISHED
createdAt: 2023-11-06T16:40:39.000Z
updatedAt: 2023-11-06T16:42:40.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: collections-trigger-not-working-as-expected-on-progressive-discounts
locale: pt
kiStatus: Backlog
internalReference: 930849
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao criar uma promoção de desconto progressivo, o cliente pode definir o gatilho por coleção, por uma lista de SKUs ou por ambos.

No entanto, quando ambos estão configurados na promoção, a condição de que o gatilho deve ser a coleção ou a lista de SKUs está, na prática, funcionando como se apenas a lista de SKUs fosse o gatilho.

## Simulação

1. Crie uma promoção de desconto progressivo;
2. Nos gatilhos da promoção, selecione uma coleção e uma lista de SKUs com um SKU que não pertença à coleção;
3. Verifique no carrinho se a promoção só está ativa quando o SKU que pertence à lista de SKUs está presente.

## Workaround

Não há solução alternativa para ativar ambos os gatilhos ao mesmo tempo.
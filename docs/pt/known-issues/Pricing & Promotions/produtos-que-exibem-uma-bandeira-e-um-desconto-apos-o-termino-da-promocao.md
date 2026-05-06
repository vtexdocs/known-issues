---
title: 'Produtos que exibem uma bandeira e um desconto após o término da promoção'
slug: produtos-que-exibem-uma-bandeira-e-um-desconto-apos-o-termino-da-promocao
status: PUBLISHED
createdAt: 2021-06-18T19:26:09.000Z
updatedAt: 2025-07-01T16:17:55.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: products-showing-flag-and-discount-after-promotion-ended
locale: pt
kiStatus: Backlog
internalReference: 383911
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Às vezes, os indicadores de promoção e os descontos continuam sendo exibidos na PLP e na PDP após a data de validade da promoção. Isso ocorre porque a promoção não aciona a reindexação do produto, resultando na exibição incorreta do desconto.

## Simulação

1- Crie uma promoção com um sinalizador
2- Defina uma data de validade
3- Verifique se a promoção continua ativa nas páginas PLP e PDP

## Workaround

Reindexe os produtos incluídos na promoção.
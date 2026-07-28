---
title: 'Mercado Livre Anúncios recriados incorretamente como cross-docking para SKUs completos com estoque zero'
slug: mercado-livre-anuncios-recriados-incorretamente-como-crossdocking-para-skus-completos-com-estoque-zero
status: PUBLISHED
createdAt: 2026-07-28T23:42:34.000Z
updatedAt: 2026-07-28T23:42:34.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-ads-incorrectly-recreated-as-crossdocking-for-full-skus-with-zero-stock
locale: pt
kiStatus: Backlog
internalReference: 1440697
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os anúncios do marketplace são recriados incorretamente como "Drop-off/Cross-docking" para produtos vendidos no modelo Full (fulfillment) quando o estoque no centro de distribuição do marketplace se esgota.

## Simulação

- Registre um SKU na operação Full, com o tipo de logística definido pelo marketplace como Full (fulfillment).

- Defina o estoque físico desse produto no centro de distribuição do marketplace como zero.

- Aguarde o próximo ciclo de atualização/exportação do produto.

- Observe que um novo anúncio é criado para o mesmo produto, agora classificado como "Cross-docking", com uma quantidade em estoque muito acima da quantidade real.

- Pause ou remova esse anúncio incorreto no painel do vendedor do marketplace.

- Aguarde o próximo ciclo; o anúncio "Cross-docking" será recriado novamente, repetindo o ciclo.

## Workaround

Não há solução alternativa disponível. Pausar ou remover o anúncio incorreto não resolve o problema, pois ele é recriado automaticamente.
---
title: 'SKUs rejeitados nos SKUs recebidos após limitação no catálogo do marketplace'
slug: skus-rejeitados-nos-skus-recebidos-apos-limitacao-no-catalogo-do-marketplace
status: PUBLISHED
createdAt: 2024-01-23T12:50:03.000Z
updatedAt: 2024-01-23T12:50:03.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: sku-denied-on-received-skus-after-throttling-on-marketplace-catalog
locale: pt
kiStatus: Backlog
internalReference: 970208
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao aprovar um novo produto em SKUs recebidos (automaticamente ou manualmente), o módulo de sugestões se comunica com o catálogo do Marketplace para realizar a ação.
Se, nesse momento, o módulo de catálogo retornar um erro de limitação de acesso, o SKU acaba sendo rejeitado pelo comparador, apesar de todas as informações estarem corretas.

## Simulação

Este não é um cenário fácil (ou comum) de replicar, pois depende de outro sistema não funcionar como deveria e retornar um erro de limitação.

## Workaround

Aprove o SKU manualmente a partir da área de itens rejeitados dos SKUs recebidos.
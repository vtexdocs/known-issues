---
title: 'Na guia "Revisão" dos SKUs recebidos, faltam produtos'
slug: na-guia-revisao-dos-skus-recebidos-faltam-produtos
status: PUBLISHED
createdAt: 2023-11-21T20:46:24.000Z
updatedAt: 2024-02-01T12:54:06.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: received-skus-review-tab-missing-products
locale: pt
kiStatus: Fixed
internalReference: 939877
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As ofertas enviadas pelos vendedores podem acabar indo para a aba “Revisão” dos SKUs recebidos do Marketplace, dependendo se foram ou não aprovadas pelas regras de qualidade das ofertas.

Uma vez nessa aba, o vendedor pode atualizar seus SKUs com as informações corretas (ou quaisquer novas informações).

No entanto, quando isso acontece, o SKU muda seu status de “Aguardando Revisão” para “Revisado”, desaparecendo da aba Revisão e de todos os SKUs Recebidos.

## Simulação

1. Configure uma regra de “Requisitos opcionais” no módulo de Qualidade da Oferta no lado do marketplace;
2. Aguarde até que um SKU vá para a aba Revisão por não ter passado na regra;
3. Aguarde uma atualização do SKU no lado do vendedor;
4. Verifique se o SKU não está mais na aba Revisão

## Workaround

Aprove o produto via API: https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerskuid-/versions/-version-/matches/-matchid-
---
title: 'Fragmentos enriquecidos de productos que no utilizan el formato «AggregateOffer» para ofertas con más de un vendedor'
slug: fragmentos-enriquecidos-de-productos-que-no-utilizan-el-formato-aggregateoffer-para-ofertas-con-mas-de-un-vendedor
status: PUBLISHED
createdAt: 2023-02-14T12:44:44.000Z
updatedAt: 2023-02-14T12:44:44.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: product-rich-snippets-not-using-aggregateoffer-format-for-offers-with-more-than-one-seller
locale: es
kiStatus: Backlog
internalReference: 753505
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un mismo producto está asociado a varias ofertas (por ejemplo, el mismo par de zapatos lo ofrecen diferentes comerciantes), se puede utilizar AggregateOffer para enviar esta información a Google de tal forma que su rastreador no rechace la oferta por precios incorrectos.

Actualmente, VTEX utiliza únicamente el formato Offer.

Esto provoca que algunas ofertas sean rechazadas debido a precios erróneos al comparar la información enviada con la que se muestra en la interfaz de la tienda.

Referencia de la documentación: https://schema.org/AggregateOffer

## Simulación

1. Disponer de una oferta asociada a varios vendedores;
2. Utilizar los fragmentos enriquecidos de productos de VTEX;
3. Comprueba que solo se envían los precios del vendedor 1;
4. Comprueba que algunas ofertas podrían ser rechazadas en la cuenta de Google Merchant de la tienda.

## Workaround

provisional**
No hay solución provisional.
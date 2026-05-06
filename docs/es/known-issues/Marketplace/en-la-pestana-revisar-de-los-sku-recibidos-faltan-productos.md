---
title: 'En la pestaña «Revisar» de los SKU recibidos faltan productos'
slug: en-la-pestana-revisar-de-los-sku-recibidos-faltan-productos
status: PUBLISHED
createdAt: 2023-11-21T20:46:24.000Z
updatedAt: 2024-02-01T12:54:06.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: received-skus-review-tab-missing-products
locale: es
kiStatus: Fixed
internalReference: 939877
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las ofertas enviadas por los vendedores pueden acabar en la pestaña «Revisión» de los SKU recibidos del Marketplace, dependiendo de si han cumplido o no las normas de calidad de las ofertas.

Una vez que se encuentran en esta pestaña, el vendedor puede actualizar sus SKU con la información correcta (o cualquier información nueva).

Sin embargo, cuando esto ocurre, el SKU cambia su estado de «En espera de revisión» a «Revisado», desapareciendo de la pestaña «Revisión» y de todos los SKU recibidos.

## Simulación

1. Configure una regla de «Requisitos opcionales» en el módulo de Calidad de la oferta en el lado del marketplace;
2. Espere a que un SKU pase a la pestaña Revisión por no cumplir la regla;
3. Espere a que se actualice el SKU por parte del vendedor;
4. Compruebe que el SKU ya no aparece en la pestaña Revisión

## Workaround

Apruebe el producto a través de la API: https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerskuid-/versions/-version-/matches/-matchid-
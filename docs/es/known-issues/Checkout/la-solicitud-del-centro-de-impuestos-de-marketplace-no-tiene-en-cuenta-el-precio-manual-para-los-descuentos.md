---
title: 'La solicitud del centro de impuestos de Marketplace no tiene en cuenta el precio manual para los descuentos'
slug: la-solicitud-del-centro-de-impuestos-de-marketplace-no-tiene-en-cuenta-el-precio-manual-para-los-descuentos
status: PUBLISHED
createdAt: 2023-11-08T17:59:26.000Z
updatedAt: 2023-12-06T19:27:36.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-tax-hub-request-doesnt-consider-manual-price-for-discounts
locale: es
kiStatus: Fixed
internalReference: 932657
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la cuenta tiene configurado el parámetro `isMarketplaceResponsibleForTaxes`, la solicitud al centro de impuestos no tiene en cuenta los precios manuales para los descuentos en los artículos.

## Simulación

- Configura `taxConfiguration.isMarketplaceResponsibleForTaxes` en la configuración de `orderForm`;
- Establece un precio manual para un artículo;
- La solicitud al centro de impuestos no aplicará la diferencia como descuento.

## Workaround

N/A
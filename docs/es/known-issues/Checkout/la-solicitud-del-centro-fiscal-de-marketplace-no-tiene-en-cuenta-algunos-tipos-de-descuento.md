---
title: 'La solicitud del centro fiscal de Marketplace no tiene en cuenta algunos tipos de descuento'
slug: la-solicitud-del-centro-fiscal-de-marketplace-no-tiene-en-cuenta-algunos-tipos-de-descuento
status: PUBLISHED
createdAt: 2023-11-30T21:13:56.000Z
updatedAt: 2023-12-06T19:26:49.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-tax-hub-request-doesnt-consider-some-discount-types
locale: es
kiStatus: Fixed
internalReference: 945580
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la cuenta tiene configurado el parámetro `isMarketplaceResponsibleForTaxes`, la solicitud al centro de impuestos no tiene en cuenta algunos tipos de descuento: nominal, porcentual y precio máximo por artículo. Esto afecta al cálculo de los impuestos, y el precio final es más alto de lo esperado.

## Simulación

- Configure taxConfiguration.isMarketplaceResponsibleForTaxes en la configuración de orderForm;
- Configure uno de los tipos de descuento (Nominal, Porcentaje o Precio máximo por artículo) de una promoción habitual;
- La solicitud del centro de impuestos no aplicará el descuento.

## Workaround

N/A
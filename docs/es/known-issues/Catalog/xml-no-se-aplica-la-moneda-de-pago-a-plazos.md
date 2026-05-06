---
title: 'XML - No se aplica la moneda de pago a plazos'
slug: xml-no-se-aplica-la-moneda-de-pago-a-plazos
status: PUBLISHED
createdAt: 2024-02-02T19:16:24.000Z
updatedAt: 2024-02-02T19:16:24.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-installment-currency-does-not-apply
locale: es
kiStatus: Backlog
internalReference: 976295
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al configurar una moneda en un XML, esta se aplica a todos los campos excepto al campo «Plazo».

El campo «Plazo» siempre muestra la moneda como «R$», independientemente de la moneda configurada.

## Simulación

1. Crea o actualiza un XML con una moneda distinta de «R$» y activa el campo «Plazo».
2. Compruebe que todos los campos de precio del XML muestran correctamente la moneda, excepto el de «Plazo».

## Workaround

provisional**
N/A
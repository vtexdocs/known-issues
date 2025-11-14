---
title: 'XML - No se aplica la moneda a plazos'
slug: xml-no-se-aplica-la-moneda-a-plazos
status: PUBLISHED
createdAt: 2025-11-14T19:15:36.810Z
updatedAt: 2025-11-14T19:15:36.810Z
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


Cuando se configura una moneda en un XML, se aplica a todos los campos excepto al campo "Cuota".

El campo "Cuota" siempre muestra la moneda como "R$", independientemente de la moneda configurada.

## Simulación



1. Cree/Actualice un XML con una moneda diferente a "R$" y habilite el campo Cuota.
2. 2. Compruebe que todos los campos de precio en el XML devuelven correctamente la moneda, excepto la cuota.

## Workaround


N/A




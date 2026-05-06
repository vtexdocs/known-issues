---
title: 'Enlace de texto creado con « » en Marketplace tras su aprobación - Repetición'
slug: enlace-de-texto-creado-con-en-marketplace-tras-su-aprobacion-repeticion
status: PUBLISHED
createdAt: 2023-04-24T19:35:34.000Z
updatedAt: 2023-07-13T15:25:27.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: textlink-created-with-on-marketplace-upon-approvals-reoccurence
locale: es
kiStatus: Fixed
internalReference: 795900
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, al aprobar un producto en un Marketplace, en la aplicación «SKU recibidos», la solicitud no consigue introducir los datos en el catálogo y, al volver a intentarlo, los campos de enlace de texto sustituyen los caracteres «-» por « », lo que altera el comportamiento deseado.

El SKU se devuelve para su aprobación en el módulo «SKU recibidos», pero no es posible volver a aprobarlo, ya que ya habrá un producto con un enlace de texto igual.

## Simulación

1) Suele producirse con un error genérico de «SKU recibidos» al intentar aprobar (esto no ocurre en todos los casos).

2) Se creará un producto en el catálogo del marketplace con los enlaces de texto defectuosos.

3) El producto en cuestión seguirá apareciendo en los SKU recibidos, pendiente de aprobación.

4) Al intentar aprobarlo de nuevo, aparecerá un error.

## Workaround

Actualizar manualmente o mediante API los enlaces de texto del producto en este escenario.
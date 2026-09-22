---
title: 'Los campos de texto de dimensión se deseleccionan durante la creación de SKU.'
slug: los-campos-de-texto-de-dimension-se-deseleccionan-durante-la-creacion-de-sku
status: PUBLISHED
createdAt: 2023-04-06T20:29:15.000Z
updatedAt: 2026-09-22T22:23:01.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: dimension-text-fields-being-unselected-during-sku-creation
locale: es
kiStatus: Fixed
internalReference: 786048
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al crear un SKU desde el panel de administración, es necesario registrar las dimensiones de envío y las dimensiones reales. Sin embargo, al completar un campo de texto y hacer clic (o usar la tecla Tab) para completar otro, este campo se deselecciona y es necesario volver a hacer clic en el campo de texto para poder insertar o editar el valor.

## Simulación

- Vaya al catálogo y cree un nuevo SKU en un producto.
- Complete el primer campo: "Peso de envío".

- Haga clic en el siguiente campo o use la tecla Tab.
- Observe que, tras un breve instante, el campo se deselecciona, por lo que no se puede editar.

## Workaround

Vuelva a hacer clic en el campo de texto.
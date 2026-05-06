---
title: 'Se ha rechazado el SKU en los SKU recibidos tras la limitación del catálogo del mercado'
slug: se-ha-rechazado-el-sku-en-los-sku-recibidos-tras-la-limitacion-del-catalogo-del-mercado
status: PUBLISHED
createdAt: 2024-01-23T12:50:03.000Z
updatedAt: 2024-01-23T12:50:03.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: sku-denied-on-received-skus-after-throttling-on-marketplace-catalog
locale: es
kiStatus: Backlog
internalReference: 970208
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al aprobar un nuevo producto en «SKU recibidos» (ya sea de forma automática o manual), el módulo de sugerencias se comunica con el catálogo del Marketplace para llevar a cabo la acción.
Si en ese momento el módulo del catálogo devuelve un error de limitación de solicitudes, el SKU acaba siendo rechazado por el comparador a pesar de que toda la información sea correcta.

## Simulación

No se trata de un escenario fácil (ni habitual) de reproducir, ya que depende de que otro sistema no funcione como debería y devuelva un error de limitación.

## Workaround

Aprueba el SKU manualmente desde el área de productos rechazados de «SKU recibidos».
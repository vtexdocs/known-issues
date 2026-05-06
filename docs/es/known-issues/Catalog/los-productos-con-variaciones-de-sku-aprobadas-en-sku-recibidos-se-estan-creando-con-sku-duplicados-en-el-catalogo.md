---
title: 'Los productos con variaciones de SKU aprobadas en «SKU recibidos» se están creando con SKU duplicados en el catálogo.'
slug: los-productos-con-variaciones-de-sku-aprobadas-en-sku-recibidos-se-estan-creando-con-sku-duplicados-en-el-catalogo
status: PUBLISHED
createdAt: 2023-08-29T15:50:27.000Z
updatedAt: 2023-08-29T15:50:27.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-with-sku-variations-approved-on-received-skus-are-being-created-with-duplicated-skus-on-the-catalog
locale: es
kiStatus: Backlog
internalReference: 889676
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El vendedor puede enviar un producto con varias variaciones de SKU.
En el módulo «SKU recibidos» del marketplace, estas SKU aparecerán por separado para su aprobación.
El comerciante puede aprobar estas SKU manualmente.

Lo que ocurre es que algunas de las SKU se están creando por duplicado en el catálogo del marketplace debido a un fallo en la comunicación con el catálogo.

## Simulación

Aprueba SKU del mismo producto en el área de SKU recibidos pendientes en un intervalo de tiempo breve.
Comprueba en el catálogo si se ha creado algún SKU duplicado.

## Workaround

provisional**
Aprueba poco a poco los SKU del mismo producto para evitar errores en el catálogo.
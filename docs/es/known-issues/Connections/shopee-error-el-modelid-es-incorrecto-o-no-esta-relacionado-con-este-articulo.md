---
title: 'Shopee Error "El model_id es incorrecto o no está relacionado con este artículo"'
slug: shopee-error-el-modelid-es-incorrecto-o-no-esta-relacionado-con-este-articulo
status: PUBLISHED
createdAt: 2025-09-15T17:42:23.822Z
updatedAt: 2025-09-15T17:42:23.822Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-error-the-modelid-is-wrong-or-not-related-to-this-item
locale: es
kiStatus: Backlog
internalReference: 1292317
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Después de migrar algunas cuentas desde la versión anterior del conector Shopee, los usuarios se encuentran con el siguiente error al intentar actualizar SKUs:
`El model_id es incorrecto o no corresponde a este artículo`.


#### Simulación


Esto depende de la vinculación producto-modelo de Shopee y puede no ser consistentemente reproducible. Cuando ocurre, el patrón observado fue:

- En Bridge > Productos para Shopee, las actualizaciones de una o más SKU fallan con "El model_id es incorrecto o no está relacionado con este artículo".
- Las SKU afectadas son variaciones bajo un producto Shopee (artículo) en el que la plataforma espera una vinculación model_id específica; las SKU VTEX asignadas a ese artículo Shopee provocan el error durante los intentos de actualización.

## Workaround


N/A




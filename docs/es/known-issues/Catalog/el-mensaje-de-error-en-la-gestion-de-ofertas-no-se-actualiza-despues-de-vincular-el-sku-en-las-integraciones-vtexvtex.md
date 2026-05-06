---
title: 'El mensaje de error en la gestión de ofertas no se actualiza después de vincular el SKU en las integraciones VTEX<>VTEX'
slug: el-mensaje-de-error-en-la-gestion-de-ofertas-no-se-actualiza-despues-de-vincular-el-sku-en-las-integraciones-vtexvtex
status: PUBLISHED
createdAt: 2022-12-08T14:01:41.000Z
updatedAt: 2022-12-08T14:03:13.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: error-message-on-offers-management-does-not-update-after-sku-is-binded-on-vtexvtex-integrations
locale: es
kiStatus: Backlog
internalReference: 712956
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se envía el SKU al marketplace y se produce un error en el proceso, se abre una interacción como error en la interfaz de gestión de ofertas. De este modo, la oferta pasa a tener el estado de error.

Sin embargo, si el error se corrige por parte del vendedor y el SKU se envía de nuevo al marketplace, esta vez con éxito, el mensaje de error no se actualiza a «correcto», lo que da al vendedor la impresión errónea de que el SKU sigue teniendo problemas.

Este comportamiento se produce en integraciones VTEX<>VTEX (tanto el vendedor como el marketplace son cuentas de VTEX).

## Simulación

1. En una cuenta del portal del vendedor (o cualquier cuenta con interfaz de gestión de ofertas), envía un SKU con un error al marketplace;
2. Comprueba en la gestión de ofertas que hay un mensaje de error en este SKU;
3. Corrija el SKU y envíelo de nuevo al marketplace;
4. Compruebe en el marketplace que el SKU está correctamente vinculado;
5. Compruebe que el mensaje de error no ha desaparecido en la interfaz de gestión de ofertas del vendedor.

## Workaround

provisional**
No hay solución provisional, pero esto no afecta a las ventas, ya que el SKU ya está correctamente vinculado al marketplace;
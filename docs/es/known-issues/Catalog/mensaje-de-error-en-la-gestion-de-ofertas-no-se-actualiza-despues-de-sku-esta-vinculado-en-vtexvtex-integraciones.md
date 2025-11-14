---
title: 'Mensaje de error en la gestión de ofertas no se actualiza después de sku está vinculado en VTEX<>VTEX integraciones'
slug: mensaje-de-error-en-la-gestion-de-ofertas-no-se-actualiza-despues-de-sku-esta-vinculado-en-vtexvtex-integraciones
status: PUBLISHED
createdAt: 2025-11-14T18:11:00.474Z
updatedAt: 2025-11-14T18:11:00.474Z
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



Cuando el sku es enviado al marketplace y hay un error en el proceso se abrirá una interacción como error en la UI de gestión de ofertas. De esta manera la oferta se establecerá como estado de error.

Sin embargo, si el error se corrige en el lado del vendedor y el sku se envía de nuevo al mercado, esta vez con éxito, el mensaje de error no se actualiza a éxito, dando la impresión equivocada al vendedor de que el sku todavía tiene problemas.

Este comportamiento ocurre en las integraciones VTEX<>VTEX (el vendedor y el mercado son cuentas VTEX).


#### Simulación




1. En una cuenta del portal del vendedor (o cualquier cuenta con interfaz de gestión de ofertas) envía un sku con un error al marketplace;
2. Comprueba en la gestión de ofertas que hay un mensaje de error en este sku;
3. Corrige el sku y envíalo de nuevo al marketplace;
4. Comprobar en el marketplace que el sku está correctamente vinculado;
5. 5. Compruebe que el mensaje de error no ha desaparecido de la interfaz de gestión de ofertas de sku del vendedor.

## Workaround


No hay solución, pero esto no afecta a las ventas, el sku ya está correctamente vinculado al mercado;
---
title: 'Los mensajes de error de Minicart solo aparecen tras un segundo intento'
slug: los-mensajes-de-error-de-minicart-solo-aparecen-tras-un-segundo-intento
status: PUBLISHED
createdAt: 2023-11-17T17:42:42.000Z
updatedAt: 2023-12-18T16:21:49.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: minicart-coupon-error-messages-only-appear-after-a-second-try
locale: es
kiStatus: No Fix
internalReference: 938379
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los mensajes de error de cupón en el minicarrito no aparecerán la primera vez que se intente canjear un cupón, aunque este no exista.

## Simulación

1. Añade el producto al carrito.
2. Abre el minicart.
3. Introduce un cupón aleatorio en el minicart.
4. No aparecerá el mensaje de error.
5. Introduce otro cupón falso.
6. Aparecerá el error.

## Workaround

provisional**
No hay ninguna solución provisional disponible. Sin embargo, si introduces el código en cualquier momento después del primer intento, el mensaje de error se mostrará correctamente.
---
title: Duplicación del número de teléfono en la interfaz de pago para direcciones internacionales
slug: duplicacion-del-numero-de-telefono-en-la-interfaz-de-pago-para-direcciones-internacionales
status: PUBLISHED
createdAt: 2025-10-16T19:21:49.924Z
updatedAt: 2025-10-16T19:21:49.924Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: phone-number-duplication-in-checkout-ui-for-international-addresses
locale: es
kiStatus: Backlog
internalReference: 1259047
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Se ha identificado que en la tienda ARG, cuando un número de teléfono internacional (por ejemplo, 3454 15402807) se introduce en la caja, el campo de número de teléfono se muestra duplicado en la interfaz de usuario de la caja después de completar el paso de información personal. La duplicación sólo aparece en la interfaz de usuario de la caja; el valor almacenado en el formulario de pedido sigue siendo correcto, sin duplicación. El problema se observó para números argentinos, pero puede ocurrir en casos internacionales similares.

## Simulación



1. Añade artículos aleatorios a la cesta y pasa por caja.
2. En el paso de información personal, introduce un número de teléfono internacional, como 3454 15402807.
3. Continúa con el paso de envío.
4. Observa que el número de teléfono aparece duplicado en la pantalla de pago.
5. Si recargas la página, el número vuelve a mostrarse correctamente.
6. En el formulario de pedido, el número almacenado no aparece duplicado.

## Workaround


N/A




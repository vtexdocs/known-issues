---
title: 'La aplicación de ventas redirige a /payment tras introducir el código del comercial (sin tener en cuenta el paso actual del proceso de pago)'
slug: la-aplicacion-de-ventas-redirige-a-payment-tras-introducir-el-codigo-del-comercial-sin-tener-en-cuenta-el-paso-actual-del-proceso-de-pago
status: PUBLISHED
createdAt: 2026-05-15T19:37:16.000Z
updatedAt: 2026-05-15T19:37:16.000Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: sales-app-redirects-to-payment-after-entering-salesperson-code-ignores-current-step-in-checkout
locale: es
kiStatus: Backlog
internalReference: 1407771
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En la aplicación de ventas, tras introducir el código del vendedor, el flujo se redirige incorrectamente directamente al paso de pago, omitiendo el paso previsto de información del cliente. El síntoma visible es una navegación abrupta a `/payment`, independientemente de la página en la que se encuentre el usuario (por ejemplo, desde el carrito).

## Simulación

- Crea un carrito en la aplicación de ventas.
- Haz clic en «Añadir» para el código de proveedor. Se abrirá un panel lateral donde podrás introducir el código del vendedor.
- Haz clic en «Aplicar».


Observa que la aplicación navega directamente a la página de pago Checkout (/payment), saltándose el paso de información del cliente, incluso si no te encontrabas en un paso que debiera dar paso al pago.

## Workaround

provisional**
No introduzcas el código de vendedor en el paso `/cart`. Espera hasta llegar a la página `/order-summary`.
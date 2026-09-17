---
title: 'El cuadro de inicio de sesión de VTEX ID apenas es visible en la página de pago cuando se desplaza hacia abajo.'
slug: el-cuadro-de-inicio-de-sesion-de-vtex-id-apenas-es-visible-en-la-pagina-de-pago-cuando-se-desplaza-hacia-abajo
status: PUBLISHED
createdAt: 2020-10-16T02:26:44.000Z
updatedAt: 2026-09-17T16:02:18.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: vtex-id-login-box-is-barely-visible-in-checkout-when-the-page-is-scrolled-down
locale: es
kiStatus: No Fix
internalReference: 296905
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El cuadro de inicio de sesión de VTEX ID dentro del proceso de pago permanece fijo cerca de la parte superior de la página. Cuando el comprador se desplaza hacia abajo, el cuadro se oculta en la parte superior y solo se ve el indicador de carga, por lo que el comprador no se da cuenta de que se requiere iniciar sesión.

Esto es especialmente crítico cuando se solicita el inicio de sesión después de tres intentos de pago fallidos, ya que el comprador generalmente se encuentra por debajo de la parte superior de la página en ese momento.

## Simulación

1. Bloquear a un comprador después de 3 intentos de pago fallidos (generalmente con tarjeta de crédito).

2. Intentar pagar de nuevo, de modo que se solicite el inicio de sesión antes de que se pueda completar la compra.

3. Desplazarse hacia abajo en la página, en una ventana gráfica de tamaño reducido.

4. El cuadro de inicio de sesión no es visible; solo se muestra el indicador de carga.

## Workaround

La tienda debe implementar su propio CSS para que el cuadro de inicio de sesión siga el desplazamiento de la página.
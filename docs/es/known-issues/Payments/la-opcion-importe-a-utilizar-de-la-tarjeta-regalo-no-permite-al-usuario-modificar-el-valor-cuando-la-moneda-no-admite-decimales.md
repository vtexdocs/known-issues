---
title: 'La opción «Importe a utilizar» de la tarjeta regalo no permite al usuario modificar el valor cuando la moneda no admite decimales'
slug: la-opcion-importe-a-utilizar-de-la-tarjeta-regalo-no-permite-al-usuario-modificar-el-valor-cuando-la-moneda-no-admite-decimales
status: PUBLISHED
createdAt: 2021-03-02T17:07:27.000Z
updatedAt: 2025-05-14T16:17:31.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: amount-to-use-from-gift-card-does-not-allow-user-to-change-the-value-when-the-currency-doesnt-have-decimals
locale: es
kiStatus: Backlog
internalReference: 339664
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el usuario se encuentra en el proceso de pago, pasa a la sesión de pago y decide utilizar el crédito, no es posible modificar el importe. El usuario solo puede utilizar el importe total.

## Simulación

- Establece el valor «Número de decimales a tener en cuenta» en 0 en la configuración general de pedidos;
- Intenta modificar el «Importe a utilizar» en el paso de pago.

## Workaround

provisional**
N/A
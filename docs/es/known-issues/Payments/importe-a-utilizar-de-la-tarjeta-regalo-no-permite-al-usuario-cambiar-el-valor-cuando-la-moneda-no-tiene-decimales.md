---
title: "Importe a utilizar" de la tarjeta regalo no permite al usuario cambiar el valor cuando la moneda no tiene decimales
slug: importe-a-utilizar-de-la-tarjeta-regalo-no-permite-al-usuario-cambiar-el-valor-cuando-la-moneda-no-tiene-decimales
status: PUBLISHED
createdAt: 2025-10-16T20:52:47.362Z
updatedAt: 2025-10-16T20:52:47.362Z
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


Cuando el usuario está en checkout, va a la sesión de pago, y elige usar el crédito, el valor no puede ser cambiado. El usuario puede utilizar el importe total.


#### Simulación



- Ajuste el "Número de dígitos decimales a considerar" a 0 en la Configuración General de Pedidos;
- Pruebe a cambiar el "Importe a utilizar" en el paso de pago.

## Workaround


N/A



---
title: 'No se ha añadido el valor de la recompensa o se ha añadido un valor diferente a la tarjeta regalo'
slug: no-se-ha-anadido-el-valor-de-la-recompensa-o-se-ha-anadido-un-valor-diferente-a-la-tarjeta-regalo
status: PUBLISHED
createdAt: 2023-06-14T16:06:20.000Z
updatedAt: 2023-06-27T12:44:41.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: reward-value-not-added-or-have-a-different-value-added-to-gift-card
locale: es
kiStatus: Backlog
internalReference: 844079
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Es posible que el valor de la recompensa no se añada, o que se añada un valor diferente, a la tarjeta regalo del comprador cuando la promoción esté configurada para aplicar el importe de la recompensa al cambiar el estado del pedido a «pago aprobado».

## Simulación

- Crea una promoción con un valor de recompensa que se aplique cuando el estado del pedido cambie a «pago aprobado»;
- Finaliza una compra;
- Comprueba las interacciones en los «Detalles del pedido» en el panel de administración; no aparecerá el mensaje «_XX añadido al programa de fidelidad del usuario_».

## Workaround

- Selecciona en el panel de administración la opción «Tarjetas regalo» en el menú, selecciona la tarjeta regalo del comprador y haz clic en «Extracto» en la columna Acciones para añadir el valor correspondiente;
- Configura la promoción de valor de recompensa para que se aplique cuando el estado del pedido cambie a «facturado».
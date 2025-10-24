---
title: 'La información no coincidente en la interfaz de usuario del proceso de pago provoca una visualización incorrecta de los paquetes.'
slug: la-informacion-no-coincidente-en-la-interfaz-de-usuario-del-proceso-de-pago-provoca-una-visualizacion-incorrecta-de-los-paquetes
status: PUBLISHED
createdAt: 2025-10-16T20:33:16.655Z
updatedAt: 2025-10-16T20:33:16.655Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: mismatched-information-in-checkouts-ui-leads-to-incorrect-packages-visualization
locale: es
kiStatus: Backlog
internalReference: 1170509
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El componente UI omnishipping de Checkout espera la misma ordenación para el objeto orderForm `items` y el objeto orderForm `shippingData.logisticsInfo`.

Cuando esta ordenación no coincide entre ambos objetos, la información del paquete del pedido puede presentar artículos y paquetes no coincidentes.


#### Simulación


No existe un proceso directo paso a paso para replicar este escenario, pero se puede comprobar en el orderForm vía API.

## Workaround


N/A




---
title: 'La interfaz de usuario utiliza un SLA incorrecto cuando se seleccionan diferentes vendedores para la entrega y la recogida'
slug: la-interfaz-de-usuario-utiliza-un-sla-incorrecto-cuando-se-seleccionan-diferentes-vendedores-para-la-entrega-y-la-recogida
status: PUBLISHED
createdAt: 2023-04-25T21:51:44.000Z
updatedAt: 2023-04-25T21:51:44.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-uses-the-wrong-sla-when-different-sellers-is-selected-for-delivery-and-pickup
locale: es
kiStatus: Backlog
internalReference: 797023
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se pueden seleccionar diferentes marcas blancas de vendedores para gestionar los productos cuando se utilizan direcciones distintas para la entrega y la recogida. La interfaz de usuario tiene en cuenta el SLA incorrecto al cambiar entre entrega y recogida.
Por ejemplo, al cambiar de entrega a recogida en el carrito, la interfaz de usuario aplicará la dirección de recogida y seleccionará el ID de SLA de recogida que estaba disponible para la dirección de entrega, el cual ya no está disponible y no mostrará ni seleccionará las nuevas recogidas.

## Simulación

- Configura dos marcas blancas de vendedor para direcciones diferentes;
- Añade productos que estén disponibles para ambos vendedores;
- Añade una dirección de entrega en el carrito;
- Cambie a recogida y añada una dirección diferente;
- Vaya a entrega y vuelva de nuevo a recogida;
- No se seleccionará ninguna recogida y aparecerá el mensaje «Envío no disponible para su ubicación».

## Workaround

N/A
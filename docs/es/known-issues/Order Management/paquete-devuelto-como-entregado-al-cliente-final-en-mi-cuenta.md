---
title: 'Paquete devuelto como entregado al cliente final en mi cuenta.'
slug: paquete-devuelto-como-entregado-al-cliente-final-en-mi-cuenta
status: PUBLISHED
createdAt: 2021-08-18T22:25:39.000Z
updatedAt: 2026-09-14T22:56:04.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: returned-package-as-delivering-to-final-customer-on-my-account
locale: es
kiStatus: Fixed
internalReference: 415482
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Existe un escenario en el que el paquete devuelto aparece como entregado en la página **Mi cuenta > Mis pedidos**. Parece que se van a entregar varios paquetes al cliente, en lugar de mostrar que el paquete ya se entregó y que se generó un nuevo paquete que simboliza la devolución.

Esto puede generar confusión en el cliente final, ya que parece que recibe más productos y no se muestra como entregado por completo en el flujo de **Mis pedidos**.

## Simulación

- Realice un pedido con un producto/paquete.

- Complete el flujo del pedido y márquelo como entregado.

- Intente devolver ese artículo.

- Se generará un nuevo paquete que representa la devolución del producto.

- Por lo tanto, en la página de Mis pedidos, el paquete devuelto aparece como uno más.

- El cliente y el administrador de la tienda pueden confundirse con el estado del pedido y los detalles del flujo.

## Workaround

No hay ninguna solución alternativa disponible.
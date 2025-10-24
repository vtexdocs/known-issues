---
title: 'La caja muestra métodos de pago sin opciones de pago a plazos elegibles'
slug: la-caja-muestra-metodos-de-pago-sin-opciones-de-pago-a-plazos-elegibles
status: PUBLISHED
createdAt: 2025-10-08T23:17:41.509Z
updatedAt: 2025-10-08T23:17:41.509Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-shows-payment-methods-without-eligible-installment-options
locale: es
kiStatus: Backlog
internalReference: 1305022
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El proceso de pago puede mostrar un método de pago aunque no haya reglas de pago ni opciones de pago a plazos disponibles para él en el contexto actual del carro (es decir, las condiciones comerciales de SKU no coinciden con ninguna de las reglas). Esto provoca un bloqueo del flujo y un mensaje de error "Seleccione el número de plazos deseado" atascado al intentar realizar el pedido.

Esto ocurre porque, en el proceso de pago, la solicitud a la lista de sistemas de pago activos no tiene en cuenta el contexto completo del carro (como las condiciones comerciales del artículo), mientras que las reglas seleccionadas y sus respectivas opciones de pago a plazos son devueltas por una segunda solicitud, que se realiza más tarde y tiene en cuenta el contexto del carro (incluidas las condiciones comerciales del artículo).

Después de eso, la lista de sistemas de pago activos no se filtra por las opciones de pago a plazos reales devueltas para el carro, lo que puede causar un desajuste entre los sistemas de pago disponibles y los pagos a plazos disponibles.


#### Simulación



- Requisitos previos:
  - Configurar un método de pago que sólo tenga reglas de pago restringidas por el porcentaje de SKUs de una determinada condición comercial en el carrito (por ejemplo, aplicar sólo cuando el porcentaje de SKU > 70%).

- Pasos:
  - Cree un carro que no cumpla la condición de porcentaje de SKU para ninguna de las reglas disponibles para el método configurado.
  - Proceda al pago. Verá que, aunque no se cumplan las condiciones, el método de pago estará disponible.
  - Seleccione el método de pago
  - Comportamiento observado: El proceso de pago enumera el método, pero no se presentan opciones de pago a plazos; el modal permanece atascado solicitando "Seleccione el número de plazos deseado." si intenta realizar el pedido.

## Workaround



- Los compradores deben elegir otro método de pago elegible y seguir el flujo de compra.
- Los comerciantes podrían implementar una personalización del frontend para ocultar o desactivar los métodos de pago que no tengan installmentOptions para el contexto actual del carrito.



%0A
---
title: 'La interfaz de pago no aplica automáticamente la opción «envío económico» a los artículos que no tienen métodos de envío comunes'
slug: la-interfaz-de-pago-no-aplica-automaticamente-la-opcion-envio-economico-a-los-articulos-que-no-tienen-metodos-de-envio-comunes
status: PUBLISHED
createdAt: 2021-02-01T19:11:48.000Z
updatedAt: 2026-06-10T00:10:56.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-is-not-automatically-using-lean-shipping-for-items-with-no-common-shipping-methods
locale: es
kiStatus: Backlog
internalReference: 329846
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La configuración de la interfaz de usuario del proceso de pago te permite desactivar el envío optimizado (optimizaciones del modo de entrega), pero esto solo es posible si todos los artículos del carrito tienen en común los mismos métodos de entrega. De lo contrario, el envío optimizado aparecerá de forma obligatoria en el carrito, incluso con la opción desactivada.
Sin embargo, en algunos casos, el comportamiento descrito anteriormente no se produce y todos los métodos de entrega disponibles se presentan individualmente al comprador.

Como resultado, al no haber forma de seleccionar un método de entrega diferente para cada artículo, ninguna de las entregas mostradas se corresponde con una única opción de entrega para todo el carrito, presentándose opciones y paquetes sin sentido.

## Simulación

- Desactiva las **Opciones de envío optimizadas****;**
- Crea un carrito en el que no todos los artículos tengan el mismo método de envío;
- También es necesario que la tienda tenga habilitada la opción «allowMultipleDeliveries»;
- El escenario descrito mostrará las opciones de forma abierta en lugar de ofrecer envíos optimizados.

## Workaround

provisional**
N/A
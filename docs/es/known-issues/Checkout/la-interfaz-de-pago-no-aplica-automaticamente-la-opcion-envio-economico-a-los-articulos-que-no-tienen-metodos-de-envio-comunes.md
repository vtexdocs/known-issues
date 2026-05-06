---
title: 'La interfaz de pago no aplica automáticamente la opción «envío económico» a los artículos que no tienen métodos de envío comunes'
slug: la-interfaz-de-pago-no-aplica-automaticamente-la-opcion-envio-economico-a-los-articulos-que-no-tienen-metodos-de-envio-comunes
status: PUBLISHED
createdAt: 2021-02-01T16:11:48.000Z
updatedAt: 2024-04-02T15:27:09.000Z
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

La configuración de la interfaz de pago permite desactivar el envío optimizado (optimizaciones del modo de entrega), pero esto solo es posible si todos los artículos del carrito comparten los mismos métodos de entrega. De lo contrario, el envío optimizado aparecerá de forma obligatoria en el carrito, incluso con la opción desactivada.
Sin embargo, en algunos casos, el comportamiento descrito anteriormente no se produce y todos los métodos de entrega disponibles se muestran individualmente al comprador.

Como resultado, al no haber forma de seleccionar un método de entrega diferente para cada artículo, ninguna de las entregas mostradas se corresponde con una única opción de entrega para todo el carrito, por lo que se presentan opciones y paquetes sin sentido.

## Simulación

- Desactive las **Opciones de envío optimizadas****;**
- Cree un carrito en el que no todos los artículos tengan el mismo método de entrega;
- También es necesario que la tienda tenga habilitada la opción «allowMultipleDeliveries»;
- En el escenario descrito, se mostrarán las opciones de forma abierta en lugar del envío optimizado.

## Workaround

N/A
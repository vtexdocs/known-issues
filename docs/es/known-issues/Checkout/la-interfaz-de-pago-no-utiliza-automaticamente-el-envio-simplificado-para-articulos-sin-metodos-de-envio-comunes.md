---
title: 'La interfaz de pago no utiliza automáticamente el "envío simplificado" para artículos sin métodos de envío comunes.'
slug: la-interfaz-de-pago-no-utiliza-automaticamente-el-envio-simplificado-para-articulos-sin-metodos-de-envio-comunes
status: PUBLISHED
createdAt: 2021-02-01T19:11:48.000Z
updatedAt: 2026-10-08T01:21:54.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-is-not-automatically-using-lean-shipping-for-items-with-no-common-shipping-methods
locale: es
kiStatus: Fixed
internalReference: 329846
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La configuración de la interfaz de pago permite desactivar el envío optimizado (optimización del modo de entrega), pero esto solo es posible si todos los artículos del carrito comparten el mismo método de entrega. De lo contrario, el envío optimizado aparecerá automáticamente en el carrito, incluso con la opción desactivada.

Sin embargo, en algunos casos, el comportamiento descrito no se produce y todos los métodos de entrega disponibles se muestran individualmente al comprador.

Como resultado, al no ser posible seleccionar un método de entrega diferente para cada artículo, ninguna de las opciones de entrega mostradas corresponde a una única opción de entrega para todo el carrito, lo que genera opciones y paquetes sin sentido.

## Simulación

- Desactive las **Opciones de envío optimizadas**;
- Cree un carrito donde no todos los artículos tengan el mismo método de entrega;

- También es necesario que la tienda tenga habilitada la opción "permitir múltiples entregas";

- El escenario descrito mostrará las opciones de forma abierta en lugar del envío optimizado.

## Workaround

N/A
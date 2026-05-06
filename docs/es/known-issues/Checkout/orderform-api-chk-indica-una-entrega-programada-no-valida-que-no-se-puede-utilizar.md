---
title: 'orderForm (API Chk) indica una entrega programada no válida que no se puede utilizar'
slug: orderform-api-chk-indica-una-entrega-programada-no-valida-que-no-se-puede-utilizar
status: PUBLISHED
createdAt: 2020-10-21T23:23:00.000Z
updatedAt: 2023-12-01T13:10:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-chk-api-suggesting-invalid-scheduled-delivery-that-cant-be-used
locale: es
kiStatus: Backlog
internalReference: 298665
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un carrito o un formulario de pedido contiene varios artículos con entrega programada del mismo vendedor, las opciones de entrega programadas con el mismo ID (consideradas como el mismo método de envío) deben tener los mismos intervalos de entrega entre ellas. Si no hay coincidencia, el método de envío se descartará para algunos artículos.

El problema es que, en algunos flujos, como la API «GET orderForm», este comportamiento de filtrado no se aplica, lo que da lugar a una entrega programada no válida (sin coincidencia). En otros flujos, como en la «

## Simulación

de formulario de pedido» o al seleccionar el método de envío, la opción ofrecida se filtrará o eliminará correctamente.

Efecto secundario: la interfaz de usuario de Chk intentará utilizar/simular la opción no válida y puede quedarse bloqueada en un **bucle de solicitudes** porque el método de envío está disponible en un primer momento pero no se puede utilizar en un segundo momento, y la interfaz de usuario vuelve a intentar el primer paso mientras revisa las opciones disponibles en el formulario de pedido.


## **Simulación**

- Para el mismo vendedor, configura dos políticas de envío diferentes (transportistas) con el mismo «tipo de flete» (que define el «slaId»);
- Ambas son entregas programadas, pero con un intervalo de entrega diferente entre ellas;
- Añade 2 artículos al carrito, uno de cada política de envío.

La interfaz de usuario puede quedarse bloqueada en un bucle debido a la divergencia entre el «GET orderForm» y la «simulación del formulario de pedido».

## Workaround

Es necesario ajustar el intervalo de entrega entre los métodos de envío con el mismo ID (para que tengan los mismos intervalos de entrega), o tratarlos como métodos de envío diferentes, utilizando así ID distintos.
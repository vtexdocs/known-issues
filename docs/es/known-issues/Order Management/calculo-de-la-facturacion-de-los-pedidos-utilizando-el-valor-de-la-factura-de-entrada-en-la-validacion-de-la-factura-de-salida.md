---
title: 'Cálculo de la facturación de los pedidos utilizando el valor de la factura de entrada en la validación de la factura de salida'
slug: calculo-de-la-facturacion-de-los-pedidos-utilizando-el-valor-de-la-factura-de-entrada-en-la-validacion-de-la-factura-de-salida
status: PUBLISHED
createdAt: 2023-11-06T11:39:07.000Z
updatedAt: 2023-11-09T20:47:40.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-invoicing-calculation-using-input-invoice-value-in-output-invoice-validation
locale: es
kiStatus: Fixed
internalReference: 930491
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Durante el proceso de emisión de facturas, el usuario puede emitir facturas de salida y de entrada; sin embargo, si se emiten dos facturas parciales para un mismo pedido —una de salida y otra de entrada—, el sistema suma estos valores para validar si el pedido puede recibir una nueva factura, lo que hace imposible que los pedidos cuyos artículos se hayan facturado y posteriormente devuelto no vean facturado su valor total.

Esto se debe a que la API de Pedidos realiza actualmente una validación de valor para determinar si debe permitir que se emita una nueva factura de salida para el pedido, pero el cálculo tiene en cuenta la suma de todas las facturas independientemente de su tipo (de entrada o de salida), lo que hace que el sistema entienda que no hay más valor que facturar.

## Simulación

1- Crea un pedido con dos unidades del mismo SKU
2- Factura solo una de estas unidades
3- Ahora crea una nueva factura de entrada para la unidad facturada en el paso anterior.
4- Ahora intenta facturar la unidad restante del pedido.
5- En este punto, recibirás un mensaje genérico en la interfaz de usuario indicando que no es posible facturar el artículo.

## Workaround

No hay ninguna solución alternativa disponible.
---
title: 'La factura introducida no activa el proceso de reembolso en la pasarela'
slug: la-factura-introducida-no-activa-el-proceso-de-reembolso-en-la-pasarela
status: PUBLISHED
createdAt: 2025-10-16T20:43:01.213Z
updatedAt: 2025-10-16T20:43:01.213Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: input-invoice-is-not-triggering-the-refund-process-at-the-gateway
locale: es
kiStatus: Backlog
internalReference: 1198829
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Se ha identificado que la API de facturación (facturas y devoluciones) no permite especificar los diferentes precios de venta que puede tener una SKU de la misma forma que se especifica en el pedido. Esto significa que el comerciante no necesita "duplicar" explícitamente la misma SKU en las facturas/devoluciones para representar todos estos precios de venta.

Ejemplo:
SKU-1 con cantidad 2, con un valor total de $101.

Para resolver el problema de redondeo, se especifican 2 precios de venta diferentes: 1 de 51 $ y otro de 50 $.

Lo que sucede es que cuando la cuenta va a facturar el pedido, SKU-1 se duplica para informar los valores contenidos en el sellingPrice.

SOS valida los artículos duplicados y si se identifican, no será posible hacer un "reembolso".


#### Simulación


Es posible simular este escenario creando un pedido con un artículo y una cantidad superior a dos, y haciendo que los valores de PrecioDeVenta se redondeen para que sean diferentes entre los artículos, por ejemplo
Pedido con dos unidades de SKU-10, con un valor total de $101, y en el sellingPrice, tenemos 1 artículo con un valor de $51 y el otro con un valor de $50.
Al ingresar una factura, la cuenta duplica el ítem, informando los valores de sellingprice.
Cuando se introduce la factura, hace la misma duplicación.
En ese momento, el SOS comprobará los artículos duplicados y no se solicitará el reembolso.

## Workaround


Introduzca sólo un SKU en la factura, especificando la cantidad y el valor total.




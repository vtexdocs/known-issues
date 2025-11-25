---
title: 'La descripción de los elementos de la factura en los paquetes se sobrescribe en función de la regla invoiceValue (reconstrucción de pedidos/OMS GET Order)'
slug: la-descripcion-de-los-elementos-de-la-factura-en-los-paquetes-se-sobrescribe-en-funcion-de-la-regla-invoicevalue-reconstruccion-de-pedidosoms-get-order
status: PUBLISHED
createdAt: 2025-11-25T12:52:55.529Z
updatedAt: 2025-11-25T12:52:55.529Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: invoice-items-description-in-packages-overwritten-based-on-invoicevalue-rule-ordersoms-get-order-reconstruction
locale: es
kiStatus: Backlog
internalReference: 1330069
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al enviar una factura a través de la API de notificación de facturas de pedidos con items[].description personalizados, es posible que la descripción mostrada posteriormente en GET Order (packages.items[].description) se sustituya por el nombre del producto. El síntoma visible es que algunos pedidos muestran el nombre del producto en lugar de la descripción personalizada proporcionada en la carga útil de la factura. Esto afecta a los consumidores de OMS/pedidos que dependen de las descripciones de packages.items para la conciliación logística, fiscal o ERP, especialmente cuando invoiceValue es igual o superior al valor total del pedido. El departamento de ingeniería ha confirmado que se trata de un comportamiento antiguo relacionado con la reconstrucción de pedidos GET, no de una interrupción transitoria.

## Simulación



- Requisitos previos:
  - Un pedido listo para recibir una factura.
  - Posibilidad de enviar la factura por POST a la API de notificación de facturas de pedidos y posteriormente obtener el pedido de la API de OMS.
-

Pasos:

1) Enviar una factura POST con artículos y una descripción personalizada por artículo (por ejemplo, items[].description = "1010").



2) Caso A: Establecer invoiceValue mayor o igual que el valor total del pedido. Una vez procesada la factura, llame a GET /api/oms/pvt/orders/{orderId}. Observe que packages.items[].description se reconstruye como el nombre del artículo (sobrescribe la descripción personalizada).



3) Caso B: Establecer invoiceValue menor que el valor total del pedido. Tras el procesamiento, llame a GET /api/oms/pvt/orders/{orderId}. Observe que se conservan los elementos originales de la factura enviada, incluida la descripción personalizada que envió.



4) Si omite la descripción por completo en los artículos de la factura, GET Order mostrará packages.items[].description autocompletado con el nombre del producto.



- Notas:
  - La ingeniería destacó que esta reconstrucción ocurre en cada GET Order y está respaldada por pruebas existentes que validan el comportamiento replace-when-invoiceValue>=order.Value.

## Workaround

 provisional
N/A



%0A
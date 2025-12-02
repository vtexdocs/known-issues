---
title: 'Checkout UI permite el pago con dirección de factura incompleta en el flujo de recogida (invoiceData inconsistente)'
slug: checkout-ui-permite-el-pago-con-direccion-de-factura-incompleta-en-el-flujo-de-recogida-invoicedata-inconsistente
status: PUBLISHED
createdAt: 2025-12-02T14:38:44.530Z
updatedAt: 2025-12-02T14:38:44.530Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: checkout-ui-allows-payment-with-incomplete-invoice-address-in-pickup-flow-inconsistent-invoicedata
locale: es
kiStatus: Backlog
internalReference: 1333831
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El proceso de pago puede pasar al paso Pago con una dirección de factura (invoiceData) incompleta cuando el método de envío es la recogida. El síntoma visible es una dirección de factura a la que le faltan campos obligatorios (p. ej., el número), lo que provoca posteriormente un fallo en el Anti-Fraude o en el procesamiento del pago.

La prueba en la transacción es:

    ClearSale devuelve una RestServiceException: {"Message": "La solicitud no es válida.", "ModelState":{"[0].billing.address.number":["Tipo inválido. Se esperaba cadena pero resultó nula."],"[0].shipping.address.number":["Tipo inválido. Se esperaba cadena pero resultó nula."]}}
Esto afecta a los compradores en escenarios de recogida, cuando existe una dirección de tipo factura sin número de calle, y se ha observado incluso cuando la interfaz de usuario de la tienda debería requerir el campo de número.


#### Simulación

## Workaround


---
title: La plantilla vtexcommerce-order-changed-v2 no puede enviar el campo reason, como en la versión 1 de changeOrders.
slug: la-plantilla-vtexcommerceorderchangedv2-no-puede-enviar-el-campo-reason-como-en-la-version-1-de-changeorders
status: PUBLISHED
createdAt: 2025-09-11T19:29:07.446Z
updatedAt: 2025-09-11T19:29:07.446Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-vtexcommerceorderchangedv2-template-cannot-send-the-reason-field-as-in-version-1-of-changeorders
locale: es
kiStatus: Backlog
internalReference: 1290946
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


No es posible enviar el email transaccional "vtexcommerce-order-changed-v2", con el campo "reason", como se hacía en la plantilla "vtexcommerce-order-changed", esto ocurre porque el campo "reason" está disponible en la API "OrderModification" y no en la API "GetOrder" como ocurría en el cambio V1..


#### Simulación


Para simular este escenario, debe configurar la plantilla vtexcommerce-order-changed-v2 y mostrar el campo reason. Verá que el campo estará en blanco.

## Workaround


Actualmente no tenemos ninguna solución para esta situación.




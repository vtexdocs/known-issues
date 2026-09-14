---
title: 'La autorización de pedidos de menos de 100 va con la corriente.'
slug: la-autorizacion-de-pedidos-de-menos-de-100-va-con-la-corriente
status: PUBLISHED
createdAt: 2024-02-16T16:43:49.000Z
updatedAt: 2026-09-14T22:48:29.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-authorization-lessthan-100-goes-with-the-flow
locale: es
kiStatus: Fixed
internalReference: 983031
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hemos detectado que cuando el sistema de autorización de pedidos (OrderAuth) se configura con el valor "menor que: 100" en "Rules-list.CreateDoEffect", no puede interpretar si el descuento es menor o igual al 100%, sino solo si es menor que el 100%. Cuando el pedido tiene un descuento del 100%, el sistema autoriza el pedido para que siga el flujo normal.

## Simulación

Para simular, es necesario configurar orderAuth:
Acceso: https://.myvtex.com/admin/order-auth
Configurar divergencia de precios > insertar los siguientes valores en la regla:
Rules-list.denyEffect: 0 a 60%

Rules-list.CreateDoEffect: 61 a 100%

Al configurar la regla "Rules-list.CreateDoEffect" al 100%, no puede distinguir entre valores menores o iguales, solo que es menor, y por lo tanto autoriza la solicitud para que siga el flujo normal cuando sea igual al 100%.

## Workaround

No aplica.
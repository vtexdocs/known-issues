---
title: 'La autorización de pedidos inferiores a 100 se adapta a las circunstancias'
slug: la-autorizacion-de-pedidos-inferiores-a-100-se-adapta-a-las-circunstancias
status: PUBLISHED
createdAt: 2024-02-16T13:43:49.000Z
updatedAt: 2024-02-16T13:43:48.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-authorization-lessthan-100-goes-with-the-flow
locale: es
kiStatus: Backlog
internalReference: 983031
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hemos detectado que cuando el sistema de autorización de pedidos (OrderAuth) se configura con el valor «lessThan: 100» en «Rules-list.CreateDoEffect», no interpreta que sea inferior o igual al 100 %, sino solo que es inferior al 100 %; y cuando el pedido tiene un descuento del 100 %, el sistema autoriza el pedido para que siga el flujo normal.

## Simulación

Para simularlo, es necesario configurar orderAuth:
Acceso: https://.myvtex.com/admin/order-auth
Configurar la divergencia de precios > introducir los siguientes valores en la regla:
Rules-list.denyEffect :0 a 60 %

Rules-list.CreateDoEffect: 61 a 100 %

Al configurar la regla «Rules-list.CreateDoEffect» al 100 %, no puede interpretar que es menor o igual, solo que es menor y, por lo tanto, autoriza la solicitud a seguir el flujo normal cuando es igual al 100 %.

## Workaround

N/A.
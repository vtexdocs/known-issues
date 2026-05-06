---
title: 'Los campos de la configuración del formulario de pedido se ponen a nulo cuando se produce algún cambio en la configuración de la gestión de pedidos'
slug: los-campos-de-la-configuracion-del-formulario-de-pedido-se-ponen-a-nulo-cuando-se-produce-algun-cambio-en-la-configuracion-de-la-gestion-de-pedidos
status: PUBLISHED
createdAt: 2023-02-06T20:59:56.000Z
updatedAt: 2024-05-09T12:44:37.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: fields-in-the-orderform-configuration-are-updated-to-null-when-there-is-any-change-in-order-management-settings
locale: es
kiStatus: Fixed
internalReference: 748404
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al actualizar cualquier dato en la configuración de gestión de pedidos (en el panel de administración), los campos `paymentSystemToCheckFirstInstallment` y `defaultPaymentSystemToApplyOnUserOrderForm` se establecen como `null` en la configuración de orderForm

## Simulación

- Configura los campos `paymentSystemToCheckFirstInstallment` y `defaultPaymentSystemToApplyOnUserOrderForm` en la configuración de orderForm a través de la API
- Realiza cualquier cambio en la configuración de gestión de pedidos (administrador)
- Al obtener la configuración de orderForm, verás que esos campos aparecen como `null`

## Workaround

Guarde la configuración de orderForm con los valores correctos para los campos `paymentSystemToCheckFirstInstallment` y `defaultPaymentSystemToApplyOnUserOrderForm` tras el cambio en la configuración de gestión de pedidos
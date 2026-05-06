---
title: 'El enlace «Modificar pedido» en la página de pago o en «Pedido realizado» redirige a «Mi cuenta» en lugar de a la página del pedido'
slug: el-enlace-modificar-pedido-en-la-pagina-de-pago-o-en-pedido-realizado-redirige-a-mi-cuenta-en-lugar-de-a-la-pagina-del-pedido
status: PUBLISHED
createdAt: 2023-06-15T16:12:50.000Z
updatedAt: 2023-06-15T16:12:50.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: change-order-link-on-checkoutorderplaced-is-leading-to-myaccount-instead-of-the-order-page
locale: es
kiStatus: Backlog
internalReference: 844893
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la cuenta tiene configurada la opción de que el comprador pueda modificar el pedido por sí mismo, aparecerá el enlace para modificar el pedido en la plantilla de finalización de compra/pedido realizado.

Sin embargo, este enlace no redirige al cliente a la página de edición, sino a la página «Mi cuenta», que aparece vacía.

## Simulación

Active la opción «Permitir a los clientes realizar cambios en los pedidos» en Admin -> Configuración -> Configuración de pedidos
 ![](https://vtexhelp.zendesk.com/attachments/token/GqrSJ7cBhZc844LR3kXH7WMlX/?name=image.png)

El comprador realiza un pedido y pasa a la página de pago/pedido realizado

Comprueba que el enlace no le redirija al área de edición de pedidos.

## Workaround

1. El comprador debe hacer clic en «Mis pedidos» en la sección «miCuenta»;
2. Seleccionar de nuevo el pedido que desea modificar;
3. Hacer clic en «modificar pedido».
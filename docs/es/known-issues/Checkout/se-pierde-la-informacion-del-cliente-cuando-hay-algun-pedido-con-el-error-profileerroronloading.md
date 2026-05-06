---
title: 'Se pierde la información del cliente cuando hay algún pedido con el error «profileErrorOnLoading»'
slug: se-pierde-la-informacion-del-cliente-cuando-hay-algun-pedido-con-el-error-profileerroronloading
status: PUBLISHED
createdAt: 2021-03-02T22:21:33.000Z
updatedAt: 2023-06-27T12:51:19.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: customer-information-being-lost-when-it-has-some-order-with-profileerroronloading
locale: es
kiStatus: Backlog
internalReference: 340036
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el pedido tiene «profileErrorOnLoading=true», el comportamiento esperado es que el perfil del cliente, la dirección y la tarjeta de crédito no se guarden ni se actualicen en el sistema de perfiles.

El problema es que el proceso de pago sigue realizando algunas solicitudes para registrar el correo electrónico del comprador, lógicamente sin enviar otros campos como el nombre y el teléfono. Por lo tanto, si el cliente ya está registrado en la tienda, estos campos se borran y se pierden los datos del cliente.

## Simulación

No podemos simular el comportamiento, ya que «profileErrorOnLoading» solo se utiliza para excepciones inesperadas.

## Workaround

N/A
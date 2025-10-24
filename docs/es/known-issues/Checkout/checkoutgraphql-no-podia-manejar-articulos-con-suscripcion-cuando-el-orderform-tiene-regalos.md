---
title: 'checkout-graphql no podía manejar artículos con suscripción cuando el orderForm tiene regalos'
slug: checkoutgraphql-no-podia-manejar-articulos-con-suscripcion-cuando-el-orderform-tiene-regalos
status: PUBLISHED
createdAt: 2025-10-16T19:16:02.257Z
updatedAt: 2025-10-16T19:16:02.257Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkoutgraphql-could-not-handle-items-with-subscription-when-the-orderform-has-gifts
locale: es
kiStatus: Backlog
internalReference: 1293912
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al añadir varios artículos de suscripción desde PDP a través de Store Framework (flujo gestionado por la aplicación vtex.checkout-graphql), la aplicación crea y envía subscriptionData de forma incorrecta cuando el carro también contiene regalos.

Como resultado, sólo el primer artículo recibe el contexto de suscripción que necesita Promociones (RnB), y los artículos subsiguientes aptos para suscripción se simulan sin suscripción, lo que lleva a una selección de promoción incorrecta o a que no haya promoción de suscripción para esos artículos.

## Simulación


Crear con dos o más artículos con suscripción.
Cree promociones para los artículos con suscripción y una promoción que inserte un regalo en el carrito.

## Workaround


Instale la versión beta de la aplicación vtex.checkout-graphql@0.67.2-beta.1




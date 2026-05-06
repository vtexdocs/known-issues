---
title: 'En la página «Pedido realizado», DataLayer solo recoge la información del primer pago de la transacción (transactionPaymentType)'
slug: en-la-pagina-pedido-realizado-datalayer-solo-recoge-la-informacion-del-primer-pago-de-la-transaccion-transactionpaymenttype
status: PUBLISHED
createdAt: 2023-01-04T20:11:01.000Z
updatedAt: 2023-01-10T17:46:58.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: on-the-order-placed-page-the-datalayer-only-captures-the-information-of-the-first-payment-within-the-transaction-transactionpaymenttype
locale: es
kiStatus: Fixed
internalReference: 727339
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Una vez completada la compra, el cliente accede a la página denominada **Pedido realizado**. En esta página, recibimos un **evento de captura de solicitud** *(`RequestType:"orderPlaced"`) de nuestra plataforma que recoge algunos datos del pedido y sirve para alimentar el **DataLayer** con dicha información.

El problema que tenemos en este momento es que, en el objeto «**transactionPaymentType**», **en el caso de pedidos con más de un pago**, solo mostramos el primero, lo que deja la información incompleta para quienes utilizan este tipo de datos.


*_Podemos ver este evento (_`RequestType:"orderPlaced"`_) abriendo el inspector del navegador, buscando la pestaña «**Red**» y filtrando por «**eventos**»; es posible ver este detalle en la sección **Carga útil**._

    *Encabezados*URL de la solicitud: https://rc.vtex.com.br/api/eventsRequest Método: POST*Carga útil* Objeto con todos los detalles

## Simulación

1. Realiza pedidos con más de un pago
2. Cuando llegues a la página de confirmación del pedido (**Pedido realizado**), abre el inspector en la pestaña **Red** y valida el evento `RequestType:"orderPlaced"`
3. Dentro de esos detalles, busca el objeto transactionPaymentType. Allí verás que solo aparecerá un elemento. Lo correcto sería mostrar todos los detalles relativos a los demás pagos

## Workaround

En este momento no disponemos de una solución alternativa para este problema; sin embargo, en caso de que necesites más detalles de la transacción, con el ID es posible consultar más información a través de nuestras API.
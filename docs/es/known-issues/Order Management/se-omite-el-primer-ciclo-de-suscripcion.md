---
title: 'Se omite el primer ciclo de suscripción.'
slug: se-omite-el-primer-ciclo-de-suscripcion
status: PUBLISHED
createdAt: 2022-02-21T17:31:13.000Z
updatedAt: 2026-10-29T21:41:14.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: first-subscription-cycle-is-skipped
locale: es
kiStatus: Fixed
internalReference: 528556
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El sistema de suscripción utiliza información como la frecuencia de compra y la fecha del ciclo de suscripción para generar un pedido. Sin embargo, dependiendo de la zona horaria del cliente y la hora en que se realiza el pedido, se omite el primer ciclo y solo se genera en el segundo mes.
Supongamos que el 9 de mayo a las 23:00, un cliente creó una suscripción mensual y configuró la fecha del ciclo para el día 9 de cada mes, esperando que el primer pedido se realizara el 9 de junio.
El sistema de gestión de pedidos opera en la zona horaria previamente configurada en la tienda. En este caso, consideraremos GMT-5, hora de Chicago. Sin embargo, el sistema de suscripción opera en la zona horaria GMT-0. Esto significa que, aunque la suscripción se creó a las 23:00, el sistema la considera creada 5 horas después, es decir, el 10 de mayo.
En este caso, el sistema toma en cuenta la fecha de creación de la suscripción, el 10 de mayo, para calcular el siguiente ciclo. Como la fecha del ciclo de suscripción del 9 de junio no cumple con el requisito de 30 días (un total de 29 días), el sistema establece la siguiente fecha de compra para julio. Por lo tanto, el cliente recibe el producto después de la fecha prevista.

## Simulación

Configure un SKU para suscripción, con frecuencia mensual y día de compra;
Realice un pedido después de las 23:00, por ejemplo.
Verifique que el primer ciclo, que debería generarse el mes siguiente, se omita y se genere solo el segundo mes.

## Workaround

N/A
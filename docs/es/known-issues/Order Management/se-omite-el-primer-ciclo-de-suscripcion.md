---
title: 'Se omite el primer ciclo de suscripción'
slug: se-omite-el-primer-ciclo-de-suscripcion
status: PUBLISHED
createdAt: 2022-02-21T14:31:13.000Z
updatedAt: 2024-02-05T14:10:17.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: first-subscription-cycle-is-skipped
locale: es
kiStatus: Backlog
internalReference: 528556
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El sistema de suscripción utiliza datos como la frecuencia de compra y la fecha del ciclo de suscripción para generar un pedido de suscripción. Sin embargo, dependiendo de la zona horaria del consumidor y de la hora en que se realiza el pedido, se omite el primer ciclo y este solo se genera a partir del segundo mes.
Supongamos que el 9 de mayo, a las 23:00, un cliente creó una suscripción mensual y fijó la fecha del ciclo de suscripción para el día 9 de cada mes, esperando que el primer pedido se realizara el 9 de junio.
El sistema de gestión de pedidos opera en la zona horaria previamente establecida en la tienda. En este caso, consideraremos GMT-5, hora de Chicago. Sin embargo, el sistema de suscripción opera en la zona horaria GMT 0. Esto significa que, aunque la suscripción se creó a las 23:00 h, el sistema de suscripción considera que se creó 5 horas más tarde, es decir, el 10 de mayo.
En este caso, el sistema tiene en cuenta la fecha de creación de la suscripción, el 10 de mayo, para calcular el siguiente ciclo de suscripción. Como la fecha del ciclo de suscripción del 9 de junio no cumpliría la condición del periodo de 30 días, sumando un total de 29 días, el sistema fija la siguiente fecha de compra para julio. Por lo tanto, el cliente acaba recibiendo el producto después de la fecha prevista.

## Simulación

Configure una SKU para suscripción, con frecuencia mensual y día de compra;
Realice un pedido después de las 23:00, por ejemplo
Compruebe que el primer ciclo, que debería generarse al mes siguiente, se omitirá, generándose solo en el segundo mes.

## Workaround

n/a
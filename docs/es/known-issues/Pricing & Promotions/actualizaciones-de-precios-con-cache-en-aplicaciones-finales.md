---
title: 'Actualizaciones de precios con caché en aplicaciones finales'
slug: actualizaciones-de-precios-con-cache-en-aplicaciones-finales
status: PUBLISHED
createdAt: 2023-09-08T16:08:10.000Z
updatedAt: 2023-09-08T16:08:10.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: price-updates-with-cache-on-end-applications
locale: es
kiStatus: Backlog
internalReference: 896520
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las modificaciones de precios realizadas en la cuenta se actualizan casi en tiempo real en las API de precios. Sin embargo, las simulaciones de pago tardan unos 5 minutos en mostrar el precio más actualizado del producto debido a la caché. Esto es lo esperado.

No obstante, en aplicaciones finales como las de afiliados externos o integraciones en marketplaces como Google Shopping, los precios pueden, **en ocasiones**, mostrarse incorrectamente.

Esto ocurre porque el módulo de precios notifica a todos los sistemas internos que el precio se ha actualizado tan pronto como se produce la acción, sin dar tiempo suficiente a las aplicaciones finales que consultan las simulaciones de pago para obtener el precio sin caché.

## Simulación

1. Actualiza el precio de una referencia;
2. Comprueba en los registros del puente si el precio enviado a las integraciones de marketplaces era el más actualizado o el valor antiguo.

## Workaround

provisional**
N/A
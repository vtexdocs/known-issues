---
title: 'Las promociones de envío aplicables en distintos SLA provocan discrepancias en Tax Hub'
slug: las-promociones-de-envio-aplicables-en-distintos-sla-provocan-discrepancias-en-tax-hub
status: PUBLISHED
createdAt: 2023-10-09T13:41:50.000Z
updatedAt: 2023-10-23T11:58:56.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-promotions-applying-in-different-slas-causing-divergence-in-tax-hub
locale: es
kiStatus: Fixed
internalReference: 916423
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se aplican promociones de envío a diferentes SLA y una de ellas es el envío gratuito, se produce una discrepancia en la solicitud enviada por Tax Hub, lo que impide que se realice el pedido.

## Simulación

- Crea una promoción de envío gratuito para un SLA específico;
- Crea cualquier otra promoción de envío para otro SLA;
- Intenta realizar un pedido; aparecerá el mensaje «No se ha podido crear el pedido solicitado. Inténtalo de nuevo».

## Workaround

N/A
---
title: 'La falta de notificaciones de uso de Checkout puede provocar que los contadores de uso de las promociones sean inconsistentes.'
slug: la-falta-de-notificaciones-de-uso-de-checkout-puede-provocar-que-los-contadores-de-uso-de-las-promociones-sean-inconsistentes
status: PUBLISHED
createdAt: 2026-07-16T05:03:17.000Z
updatedAt: 2026-07-16T05:03:17.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: missing-checkout-usage-notifications-may-lead-to-inconsistent-promotion-usage-counters
locale: es
kiStatus: Backlog
internalReference: 1435307
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El contador de uso de promociones puede volverse inconsistente cuando las notificaciones de uso y cancelación no se procesan simétricamente. El contador de promociones depende de dos notificaciones:

- El proceso de pago notifica cuando se utiliza una promoción.

- El sistema de gestión de pedidos (OMS) notifica cuando se debe revertir dicho uso (por ejemplo, cuando se cancela un pedido).

En algunos casos, las notificaciones de cancelación se procesan aunque no se haya registrado previamente ninguna notificación de uso correspondiente. Esto provoca que el contador disminuya sin un incremento equivalente, lo que permite que la promoción se aplique más veces de las permitidas por su límite de uso configurado.

La condición exacta que provoca la falta de notificación de uso aún está bajo investigación.

## Simulación

Actualmente, no siempre es posible reproducir este problema de forma consistente:

1. Cree una promoción con un número limitado de usos.

2. Cree pedidos que utilicen la promoción y genere escenarios con pedidos incompletos o cancelados. 3. Dependiendo de si la notificación de uso se registra correctamente antes de que se procese la notificación de cancelación, el contador de la promoción puede disminuir con respecto al número real de usos válidos, lo que permite que pedidos adicionales utilicen la promoción más allá de su límite configurado.

## Workaround

No aplica
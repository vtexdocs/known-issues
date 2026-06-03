---
title: 'Es posible que las promociones de suscripción con una periodicidad definida no se apliquen a los pedidos recurrentes'
slug: es-posible-que-las-promociones-de-suscripcion-con-una-periodicidad-definida-no-se-apliquen-a-los-pedidos-recurrentes
status: PUBLISHED
createdAt: 2026-06-03T18:38:50.000Z
updatedAt: 2026-06-03T18:38:50.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: subscription-promotions-with-defined-periodicity-may-not-apply-to-recurring-orders
locale: es
kiStatus: Backlog
internalReference: 1416445
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las promociones de suscripción configuradas con una periodicidad específica pueden aplicarse correctamente al pedido inicial, pero no se aplican a los pedidos recurrentes posteriores.

## Simulación

1. Crea una promoción que se aplique a los pedidos de suscripción.
2. Configure la promoción con una periodicidad específica (por ejemplo, diaria, semanal o mensual).
3. Cree una compra de suscripción que cumpla los criterios de la promoción.
4. Compruebe que el descuento se aplica en el primer pedido.
5. Espere al siguiente pedido recurrente generado por el flujo de suscripción.
6. Comprueba que la promoción ya no se aplica, aunque la suscripción siga cumpliendo los criterios configurados.

## Workaround

N/A
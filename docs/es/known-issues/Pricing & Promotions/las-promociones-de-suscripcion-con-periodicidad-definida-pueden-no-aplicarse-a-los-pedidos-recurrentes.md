---
title: 'Las promociones de suscripción con periodicidad definida pueden no aplicarse a los pedidos recurrentes.'
slug: las-promociones-de-suscripcion-con-periodicidad-definida-pueden-no-aplicarse-a-los-pedidos-recurrentes
status: PUBLISHED
createdAt: 2026-06-03T18:38:50.000Z
updatedAt: 2026-09-22T21:50:24.000Z
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

Las promociones de suscripción con una periodicidad específica configurada pueden aplicarse correctamente al pedido inicial, pero no a los pedidos recurrentes posteriores.

## Simulación

1. Cree una promoción que se aplique a los pedidos de suscripción.

2. Configure la promoción con una periodicidad específica (por ejemplo, diaria, semanal o mensual).
3. Cree una compra de suscripción que cumpla con los criterios de la promoción.

4. Verifique que el descuento se aplique al primer pedido.

5. Espere a que se genere el siguiente pedido recurrente mediante el flujo de suscripción.

6. Compruebe que la promoción ya no se aplica, aunque la suscripción debería seguir cumpliendo con los criterios configurados.

## Workaround

No aplica
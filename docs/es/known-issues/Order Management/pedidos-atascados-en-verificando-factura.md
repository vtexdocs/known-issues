---
title: 'Pedidos atascados en “Verificando factura”'
slug: pedidos-atascados-en-verificando-factura
status: PUBLISHED
createdAt: 2026-09-23T17:44:32.000Z
updatedAt: 2026-09-23T17:45:50.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-verifying-invoice
locale: es
kiStatus: No Fix
internalReference: 1465086
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los casos en que el vendedor envía la factura, su pedido pasa directamente al estado "Facturado", mientras que el pedido en la plataforma permanece en estado "Verificando factura". Esto sucede porque la plataforma necesita recibir la confirmación de la pasarela de pago de que el pedido se ha liquidado. Si un error de la pasarela impide la facturación, el pedido en la plataforma se queda atascado en "Verificando factura" mientras que el pedido del vendedor permanece como "Facturado". Esto imposibilita modificar los pedidos, ya que no podemos cancelar ni facturar el pedido de la plataforma en esta situación.

## Simulación

No existe una forma sencilla de reproducir este escenario.

## Workaround

¡No disponemos de una solución alternativa para este escenario!
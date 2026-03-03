---
title: 'Pedidos que no alcanzan el estado «facturado» incluso después de que la factura se haya introducido correctamente.'
slug: pedidos-que-no-alcanzan-el-estado-facturado-incluso-despues-de-que-la-factura-se-haya-introducido-correctamente
status: PUBLISHED
createdAt: 2026-03-03T19:44:06.385Z
updatedAt: 2026-03-03T19:44:06.385Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-that-fail-to-reach-the-invoiced-status-even-after-the-invoice-has-been-correctly-entered
locale: es
kiStatus: Backlog
internalReference: 1372902
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hemos identificado que, en algunos casos, el pedido del Marketplace no alcanza el estado «facturado», sino que permanece en «pago aprobado» u otro estado que no es facturado, aunque la factura esté correctamente cumplimentada y el valor coincida con el importe total del pedido. El pedido del vendedor avanza correctamente hasta el estado facturado.

Hemos observado que esta situación se produce debido a un conflicto al guardar la factura en SNO, lo que nos obliga a reindexar la factura en SNO, lo que a su vez hace que el pedido alcance el estado correcto de facturado.

## Simulación

¡No tenemos forma de simular esta situación!

## Workaround

¡Reindexaremos manualmente la factura en SNO!
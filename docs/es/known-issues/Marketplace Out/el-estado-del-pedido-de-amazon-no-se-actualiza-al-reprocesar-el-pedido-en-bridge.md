---
title: 'El estado del pedido de Amazon no se actualiza al reprocesar el pedido en Bridge.'
slug: el-estado-del-pedido-de-amazon-no-se-actualiza-al-reprocesar-el-pedido-en-bridge
status: PUBLISHED
createdAt: 2024-10-18T15:17:42.000Z
updatedAt: 2026-09-22T19:03:24.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-order-status-is-not-revised-when-reprocessing-order-on-bridge
locale: es
kiStatus: Fixed
internalReference: 1119618
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pedidos de Amazon que presentan algún error se envían al área de integración con el mensaje de error y el estado del pedido en el momento de su procesamiento inicial.

Sin embargo, incluso si el estado se actualiza en Amazon (por ejemplo, si se cancela), el estado en la integración permanece sin cambios.

Por lo tanto, si un pedido se reprocesa en la integración, su estado no se actualiza en el marketplace, lo que podría causar errores al integrar pedidos con un estado incorrecto.

## Simulación

1. Obtenga un pedido con error en la integración;

2. Verifique si su estado es "cancelado" en Amazon;

3. Reprocese el pedido en la integración y verifique que se haya integrado correctamente.

## Workaround

N/A
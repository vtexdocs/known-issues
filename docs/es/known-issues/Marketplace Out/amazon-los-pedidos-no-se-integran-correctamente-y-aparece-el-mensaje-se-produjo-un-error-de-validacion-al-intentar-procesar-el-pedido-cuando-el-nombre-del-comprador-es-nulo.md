---
title: 'Amazon Los pedidos no se integran correctamente y aparece el mensaje "Se produjo un error de validación al intentar procesar el pedido" cuando el nombre del comprador es nulo.'
slug: amazon-los-pedidos-no-se-integran-correctamente-y-aparece-el-mensaje-se-produjo-un-error-de-validacion-al-intentar-procesar-el-pedido-cuando-el-nombre-del-comprador-es-nulo
status: PUBLISHED
createdAt: 2026-10-02T20:01:28.000Z
updatedAt: 2026-10-02T20:19:17.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-orders-fail-to-integrate-with-a-validation-error-occurred-while-trying-to-process-the-order-when-the-buyer-name-is-null
locale: es
kiStatus: Backlog
internalReference: 1469662
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos pedidos de Amazon no se integran correctamente en VTEX OMS y siguen mostrando el error "Se produjo un error de validación al intentar procesar el pedido", incluso después de reprocesarlo. Esto ocurre cuando Amazon devuelve el pedido sin el nombre del comprador (`buyerInfo.buyerName` está vacío o es nulo).

## Simulación

1. Cree un pedido de Amazon donde `buyerName=null` en la API de Pedidos, mientras que `shippingAddress.name` está completo (por ejemplo, "JOHN").

2. Espere a que la integración importe el pedido o reproceselo manualmente.

3. El pedido no se crea en OMS y los registros de integración/Bridge muestran "Se produjo un error de validación al intentar procesar el pedido".

![](https://vtexhelp.zendesk.com/attachments/token/P3lwvoTdnUiv2dvjyPdLnR50H/?name=image.png)

## Workaround

No existe ninguna solución alternativa en VTEX para integrar el pedido afectado.
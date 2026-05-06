---
title: 'Encomenda não notificada: a transportadora deixa o código de barras da etiqueta incompleto'
slug: encomenda-nao-notificada-a-transportadora-deixa-o-codigo-de-barras-da-etiqueta-incompleto
status: PUBLISHED
createdAt: 2023-08-01T16:50:43.000Z
updatedAt: 2023-09-18T22:52:38.000Z
contentType: knownIssue
productTeam: VTEX Shipping Network (VTEX Log)
author: 2mXZkbi0oi061KicTExNjo
tag: VTEX Shipping Network (VTEX Log)
slugEN: order-not-notified-carrier-leaves-label-barcode-incomplete
locale: pt
kiStatus: Backlog
internalReference: 872530
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os clientes que utilizam transportadoras parceiras da Shipping Network, ao solicitar a emissão da etiqueta no Ready to Ship, podem receber o arquivo com o código de barras incompleto, o que pode impedir o envio da encomenda.

## Simulação

Não foi possível reproduzir o problema, apenas verificar as etiquetas enviadas pelos clientes com o código de barras incompleto e confirmar via API que a encomenda não foi notificada.

## Workaround

Notificar o pedido manualmente novamente garante que a transportadora seja notificada, que o código de barras esteja completo e que a etiqueta possa ser utilizada.
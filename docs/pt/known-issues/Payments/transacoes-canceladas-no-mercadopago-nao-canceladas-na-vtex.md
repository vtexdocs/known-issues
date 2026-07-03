---
title: 'Transações canceladas no MercadoPago não canceladas na VTEX'
slug: transacoes-canceladas-no-mercadopago-nao-canceladas-na-vtex
status: PUBLISHED
createdAt: 2021-04-26T23:06:53.000Z
updatedAt: 2026-07-03T15:21:22.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transacoes-canceladas-no-mercadopago-nao-cancelam-na-vtex
locale: pt
kiStatus: No Fix
internalReference: 360653
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um pagamento é cancelado manualmente no painel do MercadoPago após a transação já ter passado da etapa de autorização no VTEX, a notificação de cancelamento enviada pelo MercadoPago é ignorada. O VTEX continua processando a transação até a conclusão, enquanto o pagamento permanece cancelado no MercadoPago, criando uma divergência de status entre os dois sistemas. O pedido aparece como concluído no VTEX, mas o pagamento nunca foi efetivamente recebido.

## Simulação

Não foi possível reproduzir o problema de forma controlada. A questão exige que o MercadoPago envie uma notificação de cancelamento em um ponto específico do fluxo da transação, após o VTEX já ter avançado além do status de "autorizando", o que não pode ser forçado de forma consistente.

## Workaround

Não disponível.
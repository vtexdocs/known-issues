---
title: 'Seleção de transportadora Amazon'
slug: selecao-de-transportadora-amazon
status: PUBLISHED
createdAt: 2025-10-16T20:39:40.150Z
updatedAt: 2025-10-16T20:39:40.150Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-carrier-selection
locale: pt
kiStatus: Backlog
internalReference: 1186908
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Divergência no tipo de método de entrega selecionado
Isso ocorre porque a integração, quando não solicitada dos EUA, na verdade envia null para a simulação.
## Simulação




1. A simulação retorna uma lista de SLAs.
2. A integração filtra para usar o SLA de menor valor.
3. A reserva é criada.
4. Ao fazer o pedido, o SLA da reserva é usado, ou seja, aquele com o valor mais baixo.

Entendemos que há uma divergência entre a escolha do comprador ao fazer o pedido e a forma como o pedido entra no OMS
## Workaround


N/A




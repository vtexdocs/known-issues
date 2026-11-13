---
title: 'Magalu SLA não disponível na arquitetura multinível'
slug: magalu-sla-nao-disponivel-na-arquitetura-multinivel
status: PUBLISHED
createdAt: 2022-12-20T00:00:31.000Z
updatedAt: 2026-11-13T17:38:00.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: magalu-sla-not-available-in-multilevel-architecture
locale: pt
kiStatus: Backlog
internalReference: 719367
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O cliente utiliza a arquitetura de Inventário Omnichannel Multinível e a maioria dos pedidos não se integra com o SLA, apresentando erro.

**Marketplace:** Magazine Luiza
**Causa Raiz do Produto:** Pedidos
**Arquitetura:** Inventário Omnichannel Multinível

## Simulação

Erro registrado na ponte e a solicitação não pode ser criada no OMS (VTEX).

O erro ocorre quando a solicitação possui dois `IdOrderPackage`.

![](https://vtexhelp.zendesk.com/attachments/token/etBqC3RxwLfjQHzObSSLpjDbN/?name=image.png)

## Workaround

N/A
---
title: 'Redirecionamentos temporários expirados que não apontam mais para a rota antiga'
slug: redirecionamentos-temporarios-expirados-que-nao-apontam-mais-para-a-rota-antiga
status: PUBLISHED
createdAt: 2023-09-12T14:40:55.000Z
updatedAt: 2023-09-12T14:40:55.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: expired-temporary-redirects-not-pointing-back-to-old-route
locale: pt
kiStatus: Backlog
internalReference: 898062
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma rota de redirecionamento é criada, a rota interna é removida; no entanto, quando o redirecionamento expira, a rota não é restaurada

## Simulação

- Crie um redirecionamento temporário
- Verifique se o redirecionamento funciona corretamente
- Após a data de expiração, verifique novamente
- O caminho/rota original não será carregado corretamente

## Workaround

A rota só voltará a funcionar se você a criar novamente no rewriter
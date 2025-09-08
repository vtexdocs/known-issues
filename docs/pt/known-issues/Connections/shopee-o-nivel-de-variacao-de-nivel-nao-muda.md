---
title: Shopee O nível de variação de nível não muda
slug: shopee-o-nivel-de-variacao-de-nivel-nao-muda
status: PUBLISHED
createdAt: 2025-09-08T20:33:24.639Z
updatedAt: 2025-09-08T20:33:24.639Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-the-level-of-tiervariation-not-change
locale: pt
kiStatus: Backlog
internalReference: 1262367
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos, ao criar um produto com variações no Shopee, ocorre um erro em que parte da estrutura é criada com sucesso, mas as variações (SKUs) não são. Isso impede que as atualizações de preço e estoque sejam aplicadas ao produto e registra a seguinte mensagem de erro no Bridge: **"The level of tier-variation not change "**.
## Simulação



- O produto é criado com sucesso na Shopee.
- A criação de variações (modelos) falha.
- Em uma nova tentativa, o sistema tenta recriar a estrutura e recebe o erro **"The level of tier-variation not change "** no Bridge
## Workaround


N/A



---
title: A exclusão de preço do KIt não está funcionando
slug: a-exclusao-de-preco-do-kit-nao-esta-funcionando
status: PUBLISHED
createdAt: 2025-10-16T20:54:21.745Z
updatedAt: 2025-10-16T20:54:21.745Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: kit-price-deletion-not-working
locale: pt
kiStatus: Backlog
internalReference: 1234002
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, ao tentar excluir um preço fixo que pertence a um kit (pacote) no administrador de preços, o processo não funciona.
## Simulação


1 - Para um item que é um skukit (o pai, que é composto de mais de 1 componente), tente acessar a UI de administração de preços --> https://.myvtex.com/admin/pricing#/prices/?tradePolicy=1&page=1&qtd=10

2 - Tente excluir um preço fixo que pertença a esse item --> nada acontecer
## Workaround


Excluir esses preços via API




---
title: 'A API de aprovação automática aceita qualquer valor'
slug: a-api-de-aprovacao-automatica-aceita-qualquer-valor
status: PUBLISHED
createdAt: 2025-11-14T17:14:54.846Z
updatedAt: 2025-11-14T17:14:54.846Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: auto-approve-api-accepts-any-values
locale: pt
kiStatus: Backlog
internalReference: 713704
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, a API de aprovação automática não está verificando se o vendedor existe, o que pode levar a configurações incorretas.

/suggestions/configuration/autoapproval/toggle/seller/1a?sellerId=

Se o ID do vendedor acima for enviado, por exemplo, usando um caractere diferente que diferencia maiúsculas de minúsculas: Myseller em vez de myseller, a API responderá com 200OK e a aprovação automática será, enganosamente, definida como verdadeira. No entanto, o próprio vendedor não terá sua aprovação automática ativada, pois a cadeia de caracteres precisa ser uma correspondência exata para que funcione.


## Simulação



1. Usando a API de configurações de aprovação automática, defina uma string semelhante à do vendedor, mas não uma correspondência exata
2. Verifique se esse valor será definido como verdadeiro e se a API não responderá com uma mensagem indicando que não há um vendedor existente para esse valor
3
## Workaround


Se a sua aprovação automática não estiver funcionando, verifique se há algum caractere com uma caixa diferente ou uma pequena diferença.
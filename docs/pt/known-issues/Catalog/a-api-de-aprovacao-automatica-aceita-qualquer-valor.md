---
title: 'A API de aprovação automática aceita qualquer valor'
slug: a-api-de-aprovacao-automatica-aceita-qualquer-valor
status: PUBLISHED
createdAt: 2022-12-09T14:09:32.000Z
updatedAt: 2022-12-12T14:18:32.000Z
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

Atualmente, a API de aprovação automática não verifica se o vendedor existe, o que pode levar a configurações incorretas.

/suggestions/configuration/autoapproval/toggle/seller/1a?sellerId=

Se o ID do vendedor acima for enviado, por exemplo, usando um caractere diferente que diferencie maiúsculas de minúsculas: Myseller em vez de myseller, a API responderá com 200OK e a aprovação automática será, de forma enganosa, definida como verdadeira. No entanto, o próprio vendedor não terá sua aprovação automática ativada, já que a string precisa ser uma correspondência exata para que funcione.

## Simulação

1. Usando a API de configurações de autoaprovação, defina uma string semelhante ao vendedor, mas que não seja uma correspondência exata
2. Verifique se esse valor será definido como verdadeiro e se a API não responderá com uma mensagem indicando que não existe um vendedor para esse valor
3.

## Workaround

Se sua autoaprovação não estiver funcionando, verifique se há algum caractere com maiúscula ou minúscula diferente ou uma ligeira diferença.
---
title: 'Auto aprova API aceita quaisquer valores'
id: kLl4mtwKPPqW6jk5hZMWs
status: PUBLISHED
createdAt: 2022-12-12T14:18:51.059Z
updatedAt: 2024-02-16T20:27:19.981Z
publishedAt: 2024-02-16T20:27:19.981Z
firstPublishedAt: 2022-12-12T14:18:51.733Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: auto-approve-api-accepts-any-values
locale: pt
kiStatus: No Fix
internalReference: 713704
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, a API de aprovação automática não está verificando se o vendedor existe, o que pode levar a configurações incorretas.

/suggestions/configuration/autoapprovation/toggle/seller/1a?sellerId=

Se a identificação do vendedor acima for enviada, por exemplo, usando um caractere sensível ao caso diferente: Myseller ao invés de myseller, a API responderá com 200OK e a aprovação automática será, enganosamente, definida como verdadeira. Entretanto, o próprio vendedor não terá sua auto-aprovação ativada, uma vez que a cadeia precisa ser uma correspondência exata para que funcione.




##

## Simulação



1. Usando a API de ajustes de auto-aprovação, defina uma seqüência semelhante à do vendedor, mas não uma correspondência exata
2. Verifique se este valor será definido como verdadeiro e a API não responderá com uma mensagem indicando que não existe um vendedor para este valor.
3.


##

## Workaround


Se sua aprovação automática não estiver funcionando, verifique duas vezes se há algum personagem com um caso diferente ou uma leve diferença.


---
title: 'Problema com APIs de sessão usando propriedades públicas que começam com o mesmo prefixo'
id: RAoSKg2hwwiC6L7wFPyNv
status: PUBLISHED
createdAt: 2023-08-21T20:00:45.403Z
updatedAt: 2023-08-21T20:11:44.751Z
publishedAt: 2023-08-21T20:11:44.751Z
firstPublishedAt: 2023-08-21T20:00:46.132Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: issue-with-session-apis-using-public-properties-beginning-with-the-same-prefix
locale: pt
kiStatus: Backlog
internalReference: 885011
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A API de sessão está gerando algumas inconsistências. A equipe de engenharia identificou o erro, que está relacionado a propriedades que começam com a mesma palavra.

## Simulação


Se você fizer um POST enviando 2 valores públicos com o mesmo prefixo, a API receberá apenas um. Se você tentar novamente, fazendo o mesmo POST enviando os mesmos 2 valores, a API receberá ambos.



## Workaround


n/a






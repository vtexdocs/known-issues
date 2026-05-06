---
title: 'Problema com APIs de sessão que utilizam propriedades públicas cujos nomes começam com o mesmo prefixo'
slug: problema-com-apis-de-sessao-que-utilizam-propriedades-publicas-cujos-nomes-comecam-com-o-mesmo-prefixo
status: PUBLISHED
createdAt: 2023-08-21T20:00:25.000Z
updatedAt: 2023-08-21T20:11:31.000Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: issue-with-session-apis-using-public-properties-beginning-with-the-same-prefix
locale: pt
kiStatus: Backlog
internalReference: 885011
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A API de sessão está gerando algumas inconsistências. A equipe de engenharia identificou o bug, que está relacionado a propriedades cujos nomes começam com a mesma palavra.

## Simulação

Se você enviar uma solicitação POST com dois valores públicos que tenham o mesmo prefixo, a API receberá apenas um. Se você tentar novamente, enviando a mesma solicitação POST com os mesmos dois valores, a API receberá ambos.

## Workaround

n/a
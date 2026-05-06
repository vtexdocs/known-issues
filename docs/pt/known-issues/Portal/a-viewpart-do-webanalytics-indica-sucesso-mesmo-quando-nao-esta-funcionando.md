---
title: 'A Viewpart do Webanalytics indica sucesso mesmo quando não está funcionando'
slug: a-viewpart-do-webanalytics-indica-sucesso-mesmo-quando-nao-esta-funcionando
status: PUBLISHED
createdAt: 2023-03-09T18:20:24.000Z
updatedAt: 2023-03-09T18:20:40.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: webanalytics-viewpart-shows-success-even-when-it-isnt-working
locale: pt
kiStatus: Backlog
internalReference: 768059
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, o viewpart de análise da web não exibe nenhuma mensagem de erro, mesmo quando apresenta falha e não fornece o conteúdo de metadados ao usuário.

Esse problema também pode ocultar possíveis falhas relacionadas a um número incorreto de eventos PageView na navegação das páginas VTEX legadas

## Simulação

Esse problema é bastante difícil de replicar, uma vez que não há feedback de erro.

O código-fonte da visualização contém uma série de tags que podem carregar metadados se o usuário tiver implementado seu código-fonte GTM:https://account.myvtex.com/

No entanto, mesmo quando as tags (como o conteúdo do GTM) não carregam os dados necessários para enviar ao Google (por exemplo, se não houver GTM configurado), a tag webanalytics é gerada e não há feedback de erro para informar ao usuário o que está errado.

## Workaround

n/a
---
title: 'Webanalytics Viewpart Mostra o sucesso mesmo quando não está funcionando'
slug: webanalytics-viewpart-mostra-o-sucesso-mesmo-quando-nao-esta-funcionando
status: PUBLISHED
createdAt: 2025-11-14T19:37:04.626Z
updatedAt: 2025-11-14T19:37:04.626Z
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


Atualmente, a parte de visualização do webanalytics não exibe nenhuma mensagem de erro, mesmo quando falha e não fornece conteúdo de metadados ao usuário.

Esse problema também pode ocultar possíveis problemas relacionados a um número incorreto de eventos PageView na navegação das páginas VTEX herdadas
## Simulação


Esse problema é bastante difícil de replicar, pois não há feedback de erro.

O viewsource tem uma série de tags que podem carregar metatadas se o usuário tiver implementado o view-source do GTM:https://account.myvtex.com/

No entanto, mesmo quando as tags (como o conteúdo gtm) não carregam os dados necessários para enviar ao Google (por exemplo, se não houver GTM configurado), a tag webanalytcs é gerada e não há feedback de erro para informar ao usuário o que está errado
## Workaround


n/a




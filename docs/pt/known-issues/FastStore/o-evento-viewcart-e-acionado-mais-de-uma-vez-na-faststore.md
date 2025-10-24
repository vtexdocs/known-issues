---
title: 'O evento view_cart é acionado mais de uma vez na Faststore'
slug: o-evento-viewcart-e-acionado-mais-de-uma-vez-na-faststore
status: PUBLISHED
createdAt: 2025-10-16T20:29:40.684Z
updatedAt: 2025-10-16T20:29:40.684Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: viewcart-event-is-triggered-more-than-once-on-faststore
locale: pt
kiStatus: Fixed
internalReference: 1163447
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando você abre o minicarro na Faststore, o evento view_cart é acionado mais de uma vez.

O problema provavelmente está relacionado a esta linha de código.
## Simulação



- Use o parâmetro `gtm_debug=true`
- Tente abrir o minicarro
- Veja o evento view_cart sendo acionado mais de uma vez no dataLayer

Você pode testá-lo em nossa loja padrão https://starter.vtex.app
## Workaround


N/A




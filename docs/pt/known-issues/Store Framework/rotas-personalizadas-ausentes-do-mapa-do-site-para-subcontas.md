---
title: 'Rotas personalizadas ausentes do mapa do site para subcontas'
slug: rotas-personalizadas-ausentes-do-mapa-do-site-para-subcontas
status: PUBLISHED
createdAt: 2026-01-12T14:41:16.913Z
updatedAt: 2026-01-12T14:41:16.913Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: custom-routes-missing-from-sitemap-for-subaccounts
locale: pt
kiStatus: Backlog
internalReference: 1349623
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

 As rotas personalizadas são retornadas corretamente pelo endpoint custom-routes, mas não aparecem no sitemap.xml da loja. As lojas afetadas veem o sitemap.xml gerado sem as entradas de rotas personalizadas, mesmo depois de definir disableSitemapEntry=false e regenerar o sitemap. Isso está relacionado ao gerador de sitemap que depende de uma rota de identidade que não lista subcontas.
## Simulação


## Workaround


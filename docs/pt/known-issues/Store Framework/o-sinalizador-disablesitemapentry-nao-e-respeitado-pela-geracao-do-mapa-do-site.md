---
title: 'O sinalizador disableSitemapEntry não é respeitado pela geração do mapa do site'
slug: o-sinalizador-disablesitemapentry-nao-e-respeitado-pela-geracao-do-mapa-do-site
status: PUBLISHED
createdAt: 2026-01-15T19:42:43.646Z
updatedAt: 2026-01-15T19:42:43.646Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: disablesitemapentry-flag-not-respected-by-sitemap-generation
locale: pt
kiStatus: Backlog
internalReference: 1351681
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

 Definir disableSitemapEntry: true em rotas internas não impede que essas rotas sejam incluídas no mapa do site gerado. Os comerciantes afetados veem as rotas desativadas ainda aparecendo nos mapas do site da marca/categoria/produto, mesmo depois de tentar regenerar o mapa do site. Isso afeta as lojas que usam o pipeline de mapa do site unificado para Store Framework, FastStore ou legado, especialmente ao tentar desindexar rotas específicas.
## Simulação


## Workaround


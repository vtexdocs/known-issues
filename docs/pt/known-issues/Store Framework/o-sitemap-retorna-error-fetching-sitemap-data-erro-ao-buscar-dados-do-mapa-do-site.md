---
title: 'O Sitemap retorna "Error fetching sitemap data" (Erro ao buscar dados do mapa do site)'
slug: o-sitemap-retorna-error-fetching-sitemap-data-erro-ao-buscar-dados-do-mapa-do-site
status: PUBLISHED
createdAt: 2025-11-06T20:20:17.708Z
updatedAt: 2025-11-06T20:20:17.708Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sitemap-returns-error-fetching-sitemap-data
locale: pt
kiStatus: Backlog
internalReference: 1319643
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Algumas lojas estão apresentando o erro "Error fetching sitemap data" ao tentar acessar o arquivo principal `/sitemap.xml`. Isso impede que bots e rastreadores padrão acessem a estrutura do mapa do site da loja.
## Simulação



- Acesse o URL do mapa do site principal de uma loja afetada (por exemplo, `https://www.{storedomain}.com/sitemap.xml`).
- Observe que, em vez de retornar o índice XML, o sistema retorna a mensagem "Error fetching sitemap data" (Erro ao buscar dados do mapa do site)
## Workaround


Instale a versão hotfix do aplicativo de mapa do site na conta afetada: `vtex.store-sitemap@2.18.4-hkignore`




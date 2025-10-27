---
title: 'Página de estilos da vitrine interferindo no carregamento do CSS do tema'
slug: pagina-de-estilos-da-vitrine-interferindo-no-carregamento-do-css-do-tema
status: PUBLISHED
createdAt: 2025-08-22T20:23:37.424Z
updatedAt: 2025-08-22T20:23:37.424Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: storefront-styles-page-interfering-with-theme-css-loading
locale: pt
kiStatus: Backlog
internalReference: 1280557
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando uma versão do tema é salva como **"atual "** na seção **Storefronts → Styles** do VTEX Admin, essa configuração substitui o CSS carregado na vitrine. Esse comportamento causa problemas quando uma nova versão do tema é publicada, uma vez que o CSS da versão marcada como "atual" em Styles ainda será exibido na vitrine em vez da versão mais recente do tema.
## Simulação



- No VTEX Admin, vá para **Storefronts → Styles**.
- Salve um estilo de tema como **"atual "**.
- Publique uma nova versão do tema com alterações de CSS.
- Acesse a vitrine e verifique o CSS que está sendo exibido.
- Observe que o CSS ainda faz referência à versão do tema salva em **Styles**, e não à última versão publicada.
- Você também pode verificar se o CSS que está sendo chamado no HTML tem o ID de tema errado
## Workaround


Vá para a página **Storefronts → Styles** no Admin e salve a nova versão do tema como **"current "**.




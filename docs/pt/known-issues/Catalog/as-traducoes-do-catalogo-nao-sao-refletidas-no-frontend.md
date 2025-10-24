---
title: 'As traduções do catálogo não são refletidas no front-end'
slug: as-traducoes-do-catalogo-nao-sao-refletidas-no-frontend
status: PUBLISHED
createdAt: 2025-09-15T14:16:13.100Z
updatedAt: 2025-09-15T14:16:13.100Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-translations-not-reflecting-on-the-frontend
locale: pt
kiStatus: Backlog
internalReference: 861892
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando o comerciante executa uma ação no aplicativo Messages para que alguns dados do produto sejam traduzidos no front-end, essa ação não é realmente refletida na vitrine.
## Simulação



1. Faça uma alteração no aplicativo Messages;
2. Observe no `IndexedInfo` que o campo `GenerateAndSaveTranslationsDocument` está definido como `false`;
3. Não reindexe o produto;
4. Verifique se a alteração não foi refletida no site traduzido
## Workaround


Para forçar a reindexação das traduções de um produto, use a seguinte solicitação de API:

    curl --request POST 'https://{accountName}.vtexcommercestable.com.br/api/notificator/changenotification/{productId}/translation' \--header 'VtexIdclientAutCookie: {VtexIdclientAutCookie}'




---
title: 'As traduções do catálogo não aparecem na interface do usuário'
slug: as-traducoes-do-catalogo-nao-aparecem-na-interface-do-usuario
status: PUBLISHED
createdAt: 2023-07-13T22:42:58.000Z
updatedAt: 2025-10-31T21:49:15.000Z
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

Quando o comerciante realiza uma ação no aplicativo Mensagens para que alguns dados do produto sejam traduzidos no front-end, essa ação não é efetivamente refletida na loja virtual.

## Simulação

1. Faça uma alteração no aplicativo Mensagens;
2. Observe no `IndexedInfo` que o campo `GenerateAndSaveTranslationsDocument` está definido como `false`;
3. Não reindexe o produto;
4. Verifique se a alteração não se refletiu no site traduzido.

## Workaround

Para forçar a reindexação das traduções de um produto, use a seguinte solicitação de API:


    curl --request POST 'https://{accountName}.vtexcommercestable.com.br/api/notificator/changenotification/{productId}/translation' \--header 'VtexIdclientAutCookie: {VtexIdclientAutCookie}'
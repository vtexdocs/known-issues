---
title: 'A transliteração só está sendo salva no vbase e não no rewriter'
slug: a-transliteracao-so-esta-sendo-salva-no-vbase-e-nao-no-rewriter
status: PUBLISHED
createdAt: 2025-11-17T17:44:11.045Z
updatedAt: 2025-11-17T17:44:11.045Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: transliteration-only-being-saved-in-vbase-and-not-into-rewriter
locale: pt
kiStatus: Backlog
internalReference: 738334
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Ao transliterar as urls por meio do catálogo, o rewriter não as armazena ou não recebe nenhuma notificação por meio do broadcaster, estamos armazenando-as apenas no vbase
## Simulação



Tradução

Verifique o rewriter com o linkId que você criou em admin/graphql-ide e escolha o aplicativo rewriter:


    { internal{ get(path: "yourLinkdIdHere"){ id } }}

## Workaround



Execute a seguinte consulta no reescritor


    { internal{ get(path: "yourTranslatedCategoryNameSlugified"){ id from declarer type query binding origin resolveAs } }}


Salve os valores retornados, pois você precisará usá-los na próxima etapa

Execute a seguinte mutação, alterando apenas o parâmetro from; os outros devem ser iguais aos anteriores:


    mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "route": { "from": "yourLinkId", "declarer": "yourSavedDeclarer", "type": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origin": "yourSavedOrigin", "resolveAs": "TheOriginalNameOfTheCategory" -- aqui em cirílico }}



> Para obter mais informações sobre esses parâmetros, você pode consultar: https://developers.vtex.com/vtex-developer-docs/docs/rewriter


Agora, vamos excluir a rota antiga (a que foi salva com o nome)


    mutation saveInternal($route: InternalInput!) { internal { delete(path: "yourTranslatedCategoryNameSlugified") { id } }}
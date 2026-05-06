---
title: 'A transliteração está sendo salva apenas no vbase e não no rewriter'
slug: a-transliteracao-esta-sendo-salva-apenas-no-vbase-e-nao-no-rewriter
status: PUBLISHED
createdAt: 2023-01-23T15:28:58.000Z
updatedAt: 2023-12-12T19:53:55.000Z
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

Quando a transliteração das URLs pelo reescritor do catálogo não é armazenada, ou não há recebimento de nenhuma notificação pelo broadcaster, estamos armazenando-a apenas no vbase

## Simulação

Transl

Verifique o rewriter com o linkId que você criou em admin/graphql-ide e escolha o aplicativo rewriter:


 { internal{ get(path: "yourLinkdIdHere"){ id } }}

## Workaround

Execute a seguinte consulta no rewriter


 { internal{ get(path: "yourTranslatedCategoryNameSlugified"){ id from declarer type query binding  origin resolveAs } }}


Salve os valores retornados, você precisará usá-los na próxima etapa

Execute a seguinte mutação alterando apenas o parâmetro from; os demais devem ser os mesmos que acima:


 mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "route": { "from": "yourLinkId", "declarer": "yourSavedDeclarer", "type": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origin": "yourSavedOrigin", "resolveAs": "TheOriginalNameOfTheCategory" --aqui em cirílico }}



> Para mais informações sobre esses parâmetros, consulte: https://developers.vtex.com/vtex-developer-docs/docs/rewriter


Agora, vamos excluir a rota antiga (aquela salva com o nome)


    mutation saveInternal($route: InternalInput!) { internal { delete(path: "yourTranslatedCategoryNameSlugified") { id } }}
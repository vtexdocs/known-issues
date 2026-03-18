---
title: 'Os valores das especificações não estão sendo traduzidos na seção de Pesquisa Inteligente'
slug: os-valores-das-especificacoes-nao-estao-sendo-traduzidos-na-secao-de-pesquisa-inteligente
status: PUBLISHED
createdAt: 2026-03-18T19:52:40.342Z
updatedAt: 2026-03-18T19:52:40.342Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: specification-values-not-being-translated-in-intelligent-search-side
locale: pt
kiStatus: Backlog
internalReference: 784129
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A tradução de campos de um idioma para outro usando o aplicativo `vtex.catalog-graphql` e a disponibilização desses campos para pesquisa na Pesquisa Inteligente não estão funcionando corretamente.

O processo de indexação e o aplicativo `vtex.catalog-graphql` diferem no tratamento dos Valores de Especificação. A diferença é que, ao chamar `vtex.messages`, o processo de indexação usa o _FieldValueId_ do valor de especificação, enquanto que, ao registrar traduções, o `vtex.catalog-graphql` usa o _FieldId_ da especificação. Essa diferença sutil faz com que as traduções de valores de especificação criadas usando o aplicativo `vtex.catalog-graphql` não sejam captadas durante o processo de indexação.

## Simulação

Siga o guia sobre valores de especificação de tradução: https://developers.vtex.com/docs/guides/catalog-internationalization

Verifique se a tradução não se refletirá nas facetas no lado do IS.

## Workaround

- Obtenha todos os valores de especificação que você precisa traduzir e seus _FieldValueIds_.
- Use a consulta traduzida para obter a tradução atual do aplicativo de mensagens usando o _FieldId_ como contexto (no exemplo abaixo, _Red_ é o valor de especificação e 1 é o _FieldId_ para uma especificação de cor).

    query GetTranslation($args: TranslateArgs!) {translate(args: $args)}{"args": { "indexedByFrom": [   { "from": "en-US",      "messages": [ { "content": "Red", "context": "1" }     ]    } ], "to": "pt-BR"}}

- Crie uma nova tradução usando o FieldValueId como contexto e a mutação translate (no exemplo abaixo, 11 é o _FieldValueId_ para o valor de especificação _Red_).

    mutação Save($saveArgs: SaveArgsV2!) {saveV2(args: $saveArgs)}{"saveArgs": { "to": "pt-BR", "messages": [   { "srcLang": "en-US",      "srcMessage": "Red", "context": "11", "targetMessage": "Vermelho"    }]}}
Em resumo, em vez de salvar a propriedade "context" com base apenas no `fieldValueId`, você também precisará salvá-la no contexto das mensagens usando o `fieldId`.

Observe que ambas as traduções são necessárias, pois diferentes partes da loja usarão maneiras diferentes de consultá-la; o "FieldValueId" é usado pelas informações do Catálogo/Pesquisa, e o "FieldId" pode ser usado diretamente pela Estrutura da Loja.

Para especificações do tipo "text", cujos valores não são predefinidos, não haverá um `fieldValueId` propriamente dito. Nesse caso, o próprio texto deve ser usado, gerando a mesma string nos campos `srcMessage` e `context`.


%0A
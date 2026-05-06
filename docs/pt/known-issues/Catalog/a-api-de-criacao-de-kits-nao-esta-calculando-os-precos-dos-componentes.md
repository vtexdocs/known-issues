---
title: 'A API de criação de kits não está calculando os preços dos componentes'
slug: a-api-de-criacao-de-kits-nao-esta-calculando-os-precos-dos-componentes
status: PUBLISHED
createdAt: 2023-01-24T19:13:44.000Z
updatedAt: 2024-04-02T18:36:28.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: kit-creation-api-is-not-calculating-component-prices
locale: pt
kiStatus: Backlog
internalReference: 739693
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, a carga útil da API do KIT de inserção tem um formato que solicita os componentes que compõem esse kit, bem como as respectivas quantidades e preços.

O preço esperado de um KIT deve ser a soma ponderada dos preços de seus componentes * as quantidades necessárias para compor o kit.

Por exemplo, se eu tiver um KIT que seja:

Componente (A) --> $10, 2 unidades
Componente (B) --> $25, 1 unidade

O preço do kit deve ser: 10*2 + 25 === 45.

É isso que acontece na interface do usuário do KIT, SkuKit.aspx.

No entanto, a API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit não está fazendo essas atualizações de preço para componentes que não sejam o primeiro adicionado.

## Simulação

Crie um kit usando a seguinte API com um componente com quantidade igual ou superior a 2 https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit e, em seguida, verifique seu preço na interface do módulo de preços.

## Workaround

Insira o preço final do kit diretamente por meio da API de preços.
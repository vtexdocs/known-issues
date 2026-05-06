---
title: 'API de checkout: tratar comportamentos indesejados dos itens do carrinho ao enviar "anexos" para itens já adicionados'
slug: api-de-checkout-tratar-comportamentos-indesejados-dos-itens-do-carrinho-ao-enviar-anexos-para-itens-ja-adicionados
status: PUBLISHED
createdAt: 2021-10-18T21:23:00.000Z
updatedAt: 2023-10-11T18:20:50.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-api-handle-cart-items-misbehaviors-when-sending-attachments-for-already-added-items
locale: pt
kiStatus: Fixed
internalReference: 452053
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao usar a API de checkout para gerenciar itens do carrinho, caso um determinado item já tenha sido adicionado sem "_attachments_", tentar incluí-lo novamente, desta vez com "_attachments_", não funcionará corretamente nem registrará nada.

O "_checkout-graphql"_ usa essa API para resolver mutações; portanto, usar a mutação "_addToCart"_ em um carrinho onde um determinado item já foi adicionado sem "_options_" e tentar incluí-lo novamente com "_options_" também não funcionará corretamente. A mutação não registrará as "_options_" enviadas e também retornará um erro se elas estiverem relacionadas a informações de "_subscription_".

Nesse contexto, a propriedade "_options_" é usada para declarar "_assemblyOptions_", tanto para "_composition_" quanto para "_inputValues_", que também é usada no lugar de "_itemAttachments_" e para incluir "_subscriptionsData_".

Comportamentos atuais:
- _addToCart_ **sem** enviar "_options_" para um item já adicionado **também sem** "_options_" atualizará sua quantidade **para** o número fornecido
- _addToCart_ com ou sem enviar "_options_" para um item já adicionado **com** "_options_" funcionará para incluir itens **novos**/repetidos com a quantidade fornecida

Onde ocorre o problema:
- _addToCart_ enviando "options" para um item já adicionado sem "options"

O "_options_" não será registrado (nem atualizando nem funcionando como um novo item) no orderForm. Ainda assim, ele funcionará na atualização da quantidade do item já adicionado – da mesma forma que o primeiro comportamento descrito.

O pior cenário ocorre se você enviar uma "_option_" relacionada a informações de assinatura. A mutação "_addToCart"_ possui uma ação encadeada para atualizar a seção "_subscriptionsData_" do orderForm com as informações dessa "_option_", e, nesse caso, ela falhará, retornando erros para a operação – mas também executando a ação anterior, que atualiza a quantidade.

Para constar, a mutação "_updateItems"_ não funciona para adicionar itens ou adicionar/remover "_options_" a um item já adicionado.

## Simulação

Considerando esta mutação:

 mutation ($orderFormId: ID, $items: [ItemInput]) {  addToCart(orderFormId: $orderFormId, items: $items) {    ...  }}


A primeira solicitação, que funciona bem:

 {  "items": [    { "id": 123, "quantity": 1, "seller": "1"    } ]}


A segunda solicitação, incluindo o mesmo item, mas com informações de assinatura:

 {  "items": [    { "id": 123, "index": 0, "quantity": 1, "seller": "1", "options": [        { "assemblyId": "vtex.subscription", "inputValues": { "vtex.subscription.key.frequency": "1 mês" } }     ]    }  ]}

A resposta:

 {  "data": null,  "errors": [    { "message": "Falha na solicitação com código de status 400", ... "response": { "data": {              "Fields": {}, "operationId": "acdb9ef5-59dc-49a7-9d79-d3fb895d81fe", "error": { "code": "1",                "message": "Assinatura inválida", "exception": null } }, ...    } ]}

## Workaround

N/A


%0A
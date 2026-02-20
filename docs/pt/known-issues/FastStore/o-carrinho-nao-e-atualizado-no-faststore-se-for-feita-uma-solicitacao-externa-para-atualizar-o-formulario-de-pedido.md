---
title: 'O carrinho não é atualizado no FastStore se for feita uma solicitação externa para atualizar o formulário de pedido.'
slug: o-carrinho-nao-e-atualizado-no-faststore-se-for-feita-uma-solicitacao-externa-para-atualizar-o-formulario-de-pedido
status: PUBLISHED
createdAt: 2026-02-20T20:57:53.272Z
updatedAt: 2026-02-20T20:57:53.272Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: cart-does-not-update-in-faststore-if-external-request-is-made-to-update-orderform
locale: pt
kiStatus: Backlog
internalReference: 1127034
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O carrinho FastStore é criado/atualizado por meio do _ValidateCartMutation_. Se ocorrer uma solicitação externa que atualize/complemente/enriqueça o carrinho, como `POST /attachments/marketingData`, o carrinho perde sua referência e não é possível adicionar outro produto na primeira tentativa. Chamadas externas que alteram o orderForm podem deixar o carrinho obsoleto, o que significa que os itens no carrinho foram alterados fora do fluxo padrão do cliente na loja e não têm mais o mesmo estado do carrinho que o cliente armazenou no navegador. Quando isso acontece, a primeira solicitação _validateCartMutation_ é ignorada (por exemplo, o cliente adicionando outro produto) e, em seguida, a versão atual do orderForm é retornada, e esse novo produto não é adicionado ao carrinho. Percebemos que esse comportamento ocorre tanto na v2 quanto na v3 do pacote `@faststore/api`.

## Simulação

Você pode validar esse comportamento fazendo as seguintes solicitações:

1. Adicione um produto ao carrinho por meio de `POST ValidateCartMutation`; 2. Adicione dados de marketing por meio de `POST api/checkout/pub/orderForm/{{id}}/attachments/marketingData`; 3. Adicione outro produto ao carrinho por meio de `POST ValidateCartMutation`. Quando você adicionar o segundo item ao carrinho, ele não será adicionado. Será necessário adicioná-lo novamente.

PS: É importante observar que o `marketingData` é apenas um exemplo; esse KI pode ocorrer com qualquer solicitação externa que possa ser feita para atualizar o orderForm.

## Workaround

Após cada solicitação que atualiza o carrinho (etapa 2 no exemplo acima), será necessário recuperar as informações atuais do carrinho e atualizá-las, conforme sugerido pela implementação abaixo:

    await axios.post('/api/marketingdata', payload)// atualizar o armazenamento do carrinho const updatedCart = cartStore.read()cartStore.set(updatedCart)Isso garantirá que o carrinho esteja atualizado para que, quando o cliente adicionar mais produtos, o carrinho tenha informações atualizadas. %0A
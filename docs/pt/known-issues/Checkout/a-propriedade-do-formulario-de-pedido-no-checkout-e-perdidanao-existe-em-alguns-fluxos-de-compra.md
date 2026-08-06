---
title: 'A propriedade do formulário de pedido no checkout é perdida/não existe em alguns fluxos de compra.'
slug: a-propriedade-do-formulario-de-pedido-no-checkout-e-perdidanao-existe-em-alguns-fluxos-de-compra
status: PUBLISHED
createdAt: 2024-05-24T01:06:29.000Z
updatedAt: 2026-08-06T22:53:50.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkoutorderformownership-is-lostdoesnt-exist-in-some-purchase-flows
locale: pt
kiStatus: Backlog
internalReference: 1038692
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O cookie CheckoutOrderFormOwnership é perdido ou não foi criado em alguns fluxos de compra.

A perda do cookie CheckoutOrderFormOwnership resulta na exibição de dados mascarados e impede a edição do carrinho.

## Simulação

- Contas PII

- Venda Social:

- Ao compartilhar o carrinho via Venda Social, não é gerada uma `passKey` para compartilhar a propriedade do carrinho com o novo usuário.

- Passo a passo:

- Criar carrinho
- Adicionar dados pessoais e de entrega (os dados serão exibidos normalmente)

- Compartilhar carrinho por meio do link criado pelo aplicativo de Venda Social

- Abrir o novo carrinho em uma janela anônima: nenhum cookie OwnershipCookie será criado e todos os dados serão mascarados.

- Faststore:

- O cookie CheckoutOrderFormOwnership não é criado, pois o FastStore v1 não suporta cookies.

- Checkout GraphQL:

- Ao usar `vtex.checkout-graphql` para adicionar um endereço por meio das funções `selectDeliveryOption` / `updateSelectedAddress`, o cookie não é criado.

- Passo a passo (usando o tema nativo do Store Framework):

- Adicionar item ao carrinho via PDP (addToCart)

- Adicionar CEP via PDP

- Selecionar opção de entrega Simulador de Envio PDP (updateSelectedAddress). O cookie de propriedade não será criado e os dados do endereço serão mascarados no carrinho.

- B2B:

- `vtex.storefront-permissions` / `vtex.store-graphql` ao adicionar um endereço via `updateOrderFormShipping`

- `vtex.storefront-permissions` ao adicionar dados de perfil via `updateOrderFormProfile`

- Passo a passo:

- Faça login em uma loja com o tema nativo B2B (`storefront-permissions` adicionará automaticamente os dados de endereço e perfil ao formulário de pedido)
- Depois disso, você verá que nenhum cookie OwnershipCookie foi definido
- O cookie é definido apenas ao acessar o carrinho, pelas requisições feitas pela interface de checkout (antes disso, não há cookie e tentar acessar dados pessoais via API resultará em dados mascarados)

- Mesmo após a criação do cookie, tentar acessar o formulário de pedido usando o cookie resultará em dados de endereço mascarados

## Workaround

N/A. Entre em contato com o Suporte ao Produto solicitando a desativação e informe em qual dos casos se aplica.
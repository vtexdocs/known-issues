---
title: 'Não é possível adicionar um item com acessório ao carrinho se já houver outra unidade desse item sem acessório no carrinho'
slug: nao-e-possivel-adicionar-um-item-com-acessorio-ao-carrinho-se-ja-houver-outra-unidade-desse-item-sem-acessorio-no-carrinho
status: PUBLISHED
createdAt: 2021-08-12T14:26:40.000Z
updatedAt: 2024-02-02T15:01:12.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: it-is-not-possible-to-add-an-item-with-attachment-to-the-cart-if-there-is-already-another-unit-of-this-item-without-attachment-in-the-cart
locale: pt
kiStatus: No Fix
internalReference: 412041
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Durante o processo de compra, se o cliente adicionar um item que já tenha sido incluído no carrinho anteriormente e a nova inclusão tiver opções de montagem, o segundo item não será adicionado ao carrinho.

Por exemplo, se durante o processo de compra o cliente adicionar um SKU ao carrinho e, em seguida, outra unidade do mesmo SKU, mas com garantia estendida (via assemblyOptions), o último item adicionado (o item com garantia estendida) não estará disponível no carrinho.

## Simulação

Para executar a simulação, certifique-se de que haja itens com opções de montagem em sua loja.


1. Acesse a loja;
2. Adicione um produto ao carrinho;
3. Adicione o produto mais uma vez e inclua uma opção de montagem ao item (uma personalização ou uma garantia estendida, por exemplo);
4. Verifique o carrinho e confirme se o item com a opção de montagem não foi adicionado.

## Workaround

Não há solução alternativa disponível.
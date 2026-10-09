---
title: 'A propriedade do formulário de pedido no checkout é perdida/não existe em alguns fluxos de compra.'
slug: a-propriedade-do-formulario-de-pedido-no-checkout-e-perdidanao-existe-em-alguns-fluxos-de-compra
status: PUBLISHED
createdAt: 2024-05-24T01:06:29.000Z
updatedAt: 2026-10-09T18:35:47.000Z
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

O cookie CheckoutOrderFormOwnership é perdido ou não é criado em alguns fluxos de compra.

A perda do cookie CheckoutOrderFormOwnership resulta na exibição de dados mascarados e impede a edição do carrinho.

## Simulação

- Contas com informações pessoais (PII)

- Vendas sociais:

- Ao compartilhar o carrinho via Vendas sociais, não é gerada uma `passKey` para compartilhar a propriedade do carrinho com o novo usuário.

- Passo a passo:

- Criar carrinho
- Adicionar dados pessoais e de envio (os dados serão exibidos normalmente)

- Compartilhar carrinho por meio de um link criado pelo aplicativo de Vendas sociais

- Abrir o novo carrinho em uma janela anônima: nenhum cookie OwnershipCookie será criado e todos os dados serão mascarados.

- FastStore:

- O cookie CheckoutOrderFormOwnership não é criado, pois o FastStore v1 não suporta cookies.

## Workaround

N/A. Entre em contato com o Suporte ao Produto solicitando a desativação e informe em qual dos casos isso se aplica.
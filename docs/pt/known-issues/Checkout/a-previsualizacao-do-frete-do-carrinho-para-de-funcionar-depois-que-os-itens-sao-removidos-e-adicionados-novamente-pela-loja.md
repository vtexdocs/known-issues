---
title: 'A pré-visualização do frete do carrinho para de funcionar depois que os itens são removidos e adicionados novamente pela loja.'
slug: a-previsualizacao-do-frete-do-carrinho-para-de-funcionar-depois-que-os-itens-sao-removidos-e-adicionados-novamente-pela-loja
status: PUBLISHED
createdAt: 2021-03-24T18:07:23.000Z
updatedAt: 2026-09-17T15:40:41.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-shipping-preview-stops-working-after-items-are-removed-and-added-back-by-the-storefront
locale: pt
kiStatus: No Fix
internalReference: 348152
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando itens são removidos do carrinho e adicionados novamente programaticamente pela loja virtual, a pré-visualização de frete para de funcionar. Ou ela não é exibida, ou mostra um alerta como se o CEP inserido não fosse reconhecido. Alternar para a opção de retirada na loja pode interromper completamente o processo.

## Simulação

1. Abra a página do carrinho em uma loja que remove e adiciona itens ao carrinho programaticamente.
2. Remova todos os itens do carrinho.

3. Adicione um item de volta.

4. Verifique a pré-visualização de frete — ela está ausente ou mostra um alerta como se o CEP não fosse reconhecido.

5. Alterne para a opção de retirada na loja — o processo não carrega.

## Workaround

Recarregue a página — o problema desaparece.
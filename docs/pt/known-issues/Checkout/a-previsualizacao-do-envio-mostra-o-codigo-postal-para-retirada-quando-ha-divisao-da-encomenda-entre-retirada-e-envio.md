---
title: 'A pré-visualização do envio mostra o código postal para retirada quando há divisão da encomenda entre retirada e envio'
slug: a-previsualizacao-do-envio-mostra-o-codigo-postal-para-retirada-quando-ha-divisao-da-encomenda-entre-retirada-e-envio
status: PUBLISHED
createdAt: 2023-11-17T14:18:54.000Z
updatedAt: 2024-06-26T20:36:26.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-shows-pickup-postal-code-for-shipping-when-there-is-package-split-for-pickup-and-shipping
locale: pt
kiStatus: Backlog
internalReference: 938124
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Na visualização do envio, ao selecionar a opção “Retirar na loja”, mas nem todos os itens estiverem disponíveis para retirada, o endereço exibido para envio é o da loja de retirada escolhida, e não é possível alterá-lo. No formulário de pedido, porém, o endereço selecionado para envio está correto.

## Simulação

- Adicione itens ao carrinho, sendo que pelo menos um deles não esteja disponível para retirada;
- Adicione um CEP ao carrinho;
- Altere para retirada na loja;
- O CEP exibido para envio é o da loja de retirada escolhida.

## Workaround

Altere o CEP na etapa de envio.
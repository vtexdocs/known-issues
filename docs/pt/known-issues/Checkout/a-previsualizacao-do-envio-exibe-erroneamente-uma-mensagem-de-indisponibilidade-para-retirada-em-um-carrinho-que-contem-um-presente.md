---
title: 'A pré-visualização do envio exibe erroneamente uma mensagem de indisponibilidade para retirada em um carrinho que contém um presente'
slug: a-previsualizacao-do-envio-exibe-erroneamente-uma-mensagem-de-indisponibilidade-para-retirada-em-um-carrinho-que-contem-um-presente
status: PUBLISHED
createdAt: 2023-03-03T19:53:54.000Z
updatedAt: 2025-01-29T14:16:35.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-showing-unavailability-message-for-pickup-in-a-cart-with-gift
locale: pt
kiStatus: Backlog
internalReference: 764457
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando você adiciona o "selectedSla" (deve ser uma retirada) e "selectedAddresses" via API a um carrinho com promoção de presente, e a loja está configurada para geolocalização e utiliza polígonos, a pré-visualização do envio exibirá uma mensagem de indisponibilidade para a retirada, que foi selecionada via API. Esse comportamento afetará o fluxo de compra, pois não permitirá avançar após a seleção do frete.

## Simulação

- Configure a geolocalização e os polígonos;
- Configure uma promoção de brinde para um item;
- Adicione o item ao carrinho;
- Envie o "selectedSla" como retirada e "selectedAddresses" via API;
- Acesse o carrinho na interface do usuário; você verá uma mensagem de indisponibilidade, mesmo que a API esteja correta.

## Workaround

Altere a opção para Entrega e volte para Retirada
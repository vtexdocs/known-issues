---
title: 'Snippets de produto que não utilizam o formato AggregateOffer para ofertas com mais de um vendedor'
slug: snippets-de-produto-que-nao-utilizam-o-formato-aggregateoffer-para-ofertas-com-mais-de-um-vendedor
status: PUBLISHED
createdAt: 2023-02-14T12:44:44.000Z
updatedAt: 2023-02-14T12:44:44.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: product-rich-snippets-not-using-aggregateoffer-format-for-offers-with-more-than-one-seller
locale: pt
kiStatus: Backlog
internalReference: 753505
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um único produto está associado a várias ofertas (por exemplo, o mesmo par de sapatos é oferecido por diferentes comerciantes), o AggregateOffer pode ser utilizado para enviar essa informação ao Google de forma que o rastreador não rejeite a oferta por causa de preços incorretos.

Atualmente, a VTEX está usando apenas o formato Offer.

Isso faz com que algumas ofertas sejam rejeitadas devido a preços incorretos, comparando as informações enviadas com as apresentadas no front-end da loja.

Referência da documentação: https://schema.org/AggregateOffer

## Simulação

1. Tenha uma oferta associada a vários vendedores;
2. Use os rich snippets de produto da VTEX;
3. Verifique se apenas os preços do vendedor 1 estão sendo enviados;
4. Verifique se algumas ofertas podem ser rejeitadas no Google Merchant da conta.

## Workaround

Não há solução alternativa.
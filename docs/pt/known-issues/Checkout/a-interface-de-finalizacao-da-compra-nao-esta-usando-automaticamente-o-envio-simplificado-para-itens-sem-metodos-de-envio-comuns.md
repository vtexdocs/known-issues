---
title: 'A interface de finalização da compra não está usando automaticamente o "envio simplificado" para itens sem métodos de envio comuns.'
slug: a-interface-de-finalizacao-da-compra-nao-esta-usando-automaticamente-o-envio-simplificado-para-itens-sem-metodos-de-envio-comuns
status: PUBLISHED
createdAt: 2021-02-01T19:11:48.000Z
updatedAt: 2026-10-08T01:21:54.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-is-not-automatically-using-lean-shipping-for-items-with-no-common-shipping-methods
locale: pt
kiStatus: Fixed
internalReference: 329846
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As configurações da interface de finalização de compra permitem desativar o frete simplificado (otimizações do modo de entrega), mas isso só é possível se todos os itens no carrinho tiverem os mesmos métodos de entrega. Caso contrário, o frete simplificado será exibido à força no carrinho, mesmo com a opção desativada.

No entanto, em alguns cenários, o comportamento descrito acima não ocorre e todos os métodos de entrega disponíveis são apresentados individualmente ao comprador.

Como resultado, como não há como selecionar um método de entrega diferente para cada item, nenhuma entrega exibida corresponde a uma única opção de entrega para todo o carrinho, com opções e pacotes sem sentido sendo apresentados.

## Simulação

- Desative as **Opções de Envio Otimizadas**;
- Monte um carrinho onde nem todos os itens tenham o mesmo método de entrega;

- Também é necessário que a loja tenha a opção "permitir múltiplas entregas" ativada;

- O cenário relatado exibirá as opções abertamente em vez do frete simplificado.

## Workaround

N/A
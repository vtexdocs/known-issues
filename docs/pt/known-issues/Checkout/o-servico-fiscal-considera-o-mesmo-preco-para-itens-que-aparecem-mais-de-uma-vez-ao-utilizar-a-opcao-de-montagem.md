---
title: 'O Serviço Fiscal considera o mesmo preço para itens que aparecem mais de uma vez ao utilizar a Opção de Montagem'
slug: o-servico-fiscal-considera-o-mesmo-preco-para-itens-que-aparecem-mais-de-uma-vez-ao-utilizar-a-opcao-de-montagem
status: PUBLISHED
createdAt: 2023-09-25T13:27:03.000Z
updatedAt: 2023-09-27T12:47:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-consider-the-same-price-for-items-that-appear-more-than-once-when-using-assembly-option
locale: pt
kiStatus: Fixed
internalReference: 906518
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar as Opções de Conjunto, se o item for adicionado novamente ao carrinho, ele aparecerá duas vezes e o Serviço de Impostos considerará apenas o preço do item que está em primeiro lugar no carrinho, causando divergências nos valores dos impostos ao finalizar a compra.

## Simulação

- Configure o Tax Hub em uma conta;
- Configure as Opções de Montagem;
- Adicione ao carrinho um item que estava incluído na Opção de Montagem;

## Workaround

N/A
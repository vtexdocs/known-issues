---
title: 'A API da região retorna uma lista de vendedores devido ao cache'
slug: a-api-da-regiao-retorna-uma-lista-de-vendedores-devido-ao-cache
status: PUBLISHED
createdAt: 2024-01-22T17:34:00.000Z
updatedAt: 2024-01-22T17:48:27.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: region-api-returns-seller-list-due-to-cache
locale: pt
kiStatus: Backlog
internalReference: 969692
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar uma estrutura de subcontas com região, se a API “Obter vendedores por região ou endereço” for utilizada em ambas as contas para o mesmo canal de vendas, e uma delas não estiver disponível para esse canal de vendas, ela retornará uma lista de vendedores devido ao cache.

## Simulação

- Crie uma nova loja;
- Defina um canal de vendas diferente para a loja;
- Use a API “Obter vendedores por região ou endereço” na loja;
- Use novamente a API para o mesmo canal de vendas na outra loja.

## Workaround

N/A
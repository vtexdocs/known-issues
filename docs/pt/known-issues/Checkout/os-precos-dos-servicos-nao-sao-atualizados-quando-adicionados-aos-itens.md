---
title: 'Os preços dos serviços não são atualizados quando adicionados aos itens'
slug: os-precos-dos-servicos-nao-sao-atualizados-quando-adicionados-aos-itens
status: PUBLISHED
createdAt: 2023-05-09T14:27:21.000Z
updatedAt: 2023-06-23T18:37:20.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: services-prices-are-not-updated-when-added-to-items
locale: pt
kiStatus: Backlog
internalReference: 822107
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os preços dos serviços não são atualizados se o serviço tiver sido adicionado a um item antes da alteração do preço do serviço no painel de administração. Isso fará com que o pedido seja criado com um preço desatualizado.

## Simulação

- Crie um serviço;
- Adicione um item com o serviço ao carrinho;
- Altere o preço do serviço;
- Verifique o carrinho montado anteriormente; o preço do serviço não foi atualizado.

## Workaround

Remova e adicione o serviço novamente.
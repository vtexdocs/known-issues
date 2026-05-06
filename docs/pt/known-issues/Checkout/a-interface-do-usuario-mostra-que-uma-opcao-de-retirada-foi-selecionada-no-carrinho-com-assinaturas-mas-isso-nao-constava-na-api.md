---
title: 'A interface do usuário mostra que uma opção de retirada foi selecionada no carrinho com assinaturas, mas isso não constava na API'
slug: a-interface-do-usuario-mostra-que-uma-opcao-de-retirada-foi-selecionada-no-carrinho-com-assinaturas-mas-isso-nao-constava-na-api
status: PUBLISHED
createdAt: 2024-03-08T19:08:01.000Z
updatedAt: 2024-03-08T19:08:01.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-shows-a-pickup-was-selected-in-cart-with-subscriptions-but-it-wasnt-in-api
locale: pt
kiStatus: Backlog
internalReference: 996976
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As opções de retirada são oferecidas aos compradores cujo carrinho contenha um item com assinatura. Quando uma das opções de retirada é selecionada, o checkout muda automaticamente para entrega, mas a interface do usuário continua mostrando que a retirada foi selecionada.

## Simulação

- Configure uma assinatura;
- Adicione o item com a assinatura ao carrinho;
- Na etapa de envio, selecione “Retirada na loja”;
- Verifique o orderForm via API, e a entrega estará selecionada.

## Workaround

Abra um ticket no Suporte da VTEX solicitando a ativação dos pontos de retirada para pedidos de assinatura.
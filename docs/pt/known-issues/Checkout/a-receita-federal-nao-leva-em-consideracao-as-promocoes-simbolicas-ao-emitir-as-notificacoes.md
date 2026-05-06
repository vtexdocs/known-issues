---
title: 'A Receita Federal não leva em consideração as promoções simbólicas ao emitir as notificações'
slug: a-receita-federal-nao-leva-em-consideracao-as-promocoes-simbolicas-ao-emitir-as-notificacoes
status: PUBLISHED
createdAt: 2023-09-14T20:48:24.000Z
updatedAt: 2025-11-08T00:42:31.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-doesnt-consider-nominal-promotions-when-placing-orders
locale: pt
kiStatus: Backlog
internalReference: 900120
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar o serviço de impostos, se houver uma promoção nominal aplicada no carrinho e ocorrer uma divisão de item, a solicitação enviada ao sistema de impostos não terá a promoção nominal aplicada, o que impedirá a conclusão da compra, e será exibida a mensagem “Não foi possível criar o pedido solicitado. Tente novamente”.

## Simulação

- Crie uma promoção nominal com o atendimento como origem do pedido;
- Adicione itens ao carrinho, certifique-se de que os itens sejam divididos (aqui você pode limitar a promoção a uma determinada quantidade de itens);
- Tente concluir a compra.

## Workaround

N/A
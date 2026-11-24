---
title: 'O Serviço de Impostos obtém valores diferentes do Marketplace e do Fulfillment quando uma promoção "Mais por Menos" é utilizada.'
slug: o-servico-de-impostos-obtem-valores-diferentes-do-marketplace-e-do-fulfillment-quando-uma-promocao-mais-por-menos-e-utilizada
status: PUBLISHED
createdAt: 2023-11-16T22:22:05.000Z
updatedAt: 2026-11-24T18:19:00.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-getting-different-values-from-marketplace-and-fullfilment-when-a-more-for-less-promotion-is-used
locale: pt
kiStatus: Backlog
internalReference: 937730
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao usar o serviço de impostos, se houver uma promoção **Mais por Menos** aplicada no carrinho e ocorrer a divisão de itens, dependendo do número de itens envolvidos na promoção, a compra não será concluída e a mensagem de erro "**Não foi possível criar o pedido solicitado. Tente novamente.**" será exibida.

## Simulação

- Crie uma promoção **Mais por Menos** (por exemplo, Compre 6 do mesmo item e ganhe 1 grátis);

- Adicione itens ao carrinho, certificando-se de que os itens sejam divididos;

- Tente concluir a compra.

## Workaround

N/A
---
title: 'A Tax Service não aplica promoções de frete grátis a promoções que dividem os itens'
slug: a-tax-service-nao-aplica-promocoes-de-frete-gratis-a-promocoes-que-dividem-os-itens
status: PUBLISHED
createdAt: 2024-03-06T23:07:42.000Z
updatedAt: 2025-11-08T00:43:26.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-doesnt-apply-free-shipping-promotions-with-promotion-that-splits-items
locale: pt
kiStatus: Backlog
internalReference: 995527
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar o serviço de impostos, se houver uma promoção que separe os itens, por exemplo, uma promoção “Mais por menos” e uma promoção de frete grátis, o frete grátis não é aplicado corretamente a todos os itens na solicitação do serviço de impostos, causando um cálculo incorreto e impedindo que o pedido seja criado com a mensagem “Não foi possível criar o pedido solicitado. Tente novamente.”

## Simulação

- Configure o Serviço de Impostos;
- Crie uma promoção “Mais por Menos” com o atendimento como origem do pedido e limite a promoção a uma determinada quantidade de itens;
- Crie uma promoção de frete grátis com o atendimento como origem do pedido;
- Monte um carrinho e tente finalizar o pedido.

## Workaround

N/A
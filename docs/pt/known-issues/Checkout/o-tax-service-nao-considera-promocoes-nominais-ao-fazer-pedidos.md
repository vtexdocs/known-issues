---
title: 'O Tax Service não considera promoções nominais ao fazer pedidos'
slug: o-tax-service-nao-considera-promocoes-nominais-ao-fazer-pedidos
status: PUBLISHED
createdAt: 2025-11-07T21:28:56.320Z
updatedAt: 2025-11-07T21:28:56.320Z
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


Ao usar o serviço de impostos, se houver uma promoção nominal aplicada no carrinho e ocorrer uma divisão de item, a solicitação para o sistema de serviço de impostos não terá a promoção nominal aplicada, não permitindo concluir a compra, e a mensagem "O pedido solicitado não pôde ser criado. Please try again" será exibida.
## Simulação



- Crie uma promoção nominal com atendimento como origem do pedido;
- Adicione itens ao carrinho, verifique se os itens estão divididos (aqui você pode limitar a promoção a uma determinada quantidade de itens);
- Tente concluir a compra
## Workaround


N/A



---
title: 'O Tax Service não aplica promoções de frete grátis com promoções que dividem itens'
slug: o-tax-service-nao-aplica-promocoes-de-frete-gratis-com-promocoes-que-dividem-itens
status: PUBLISHED
createdAt: 2025-11-07T21:32:11.008Z
updatedAt: 2025-11-07T21:32:11.008Z
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


Ao usar o serviço de impostos, se houver uma promoção que divida os itens, por exemplo, uma promoção Mais por Menos e uma promoção de frete grátis, o frete grátis não é aplicado corretamente para todos os itens na solicitação do serviço de impostos, causando um cálculo errado e evitando que o pedido seja criado com a mensagem "O pedido solicitado não pôde ser criado. Please try again."
## Simulação



- Configurar o serviço fiscal;
- Crie uma promoção More for Less (Mais por menos) com o atendimento como a origem do pedido e limite a promoção a uma determinada quantidade de itens;
- Crie uma promoção de frete grátis com o atendimento como origem do pedido;
- Montar um carrinho e tentar fazer o pedido
## Workaround


N/A



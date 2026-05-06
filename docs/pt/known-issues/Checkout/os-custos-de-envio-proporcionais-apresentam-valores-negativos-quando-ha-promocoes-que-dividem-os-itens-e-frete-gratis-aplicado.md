---
title: 'Os custos de envio proporcionais apresentam valores negativos quando há promoções que dividem os itens e frete grátis aplicado'
slug: os-custos-de-envio-proporcionais-apresentam-valores-negativos-quando-ha-promocoes-que-dividem-os-itens-e-frete-gratis-aplicado
status: PUBLISHED
createdAt: 2023-09-29T01:29:24.000Z
updatedAt: 2026-03-07T01:55:06.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: proportional-shipping-costs-shows-negative-values-when-there-are-promotion-that-split-items-and-free-shipping-applied
locale: pt
kiStatus: Backlog
internalReference: 909925
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar promoções que dividem os itens, como as do tipo “Mais por menos”, os custos de envio proporcionais podem apresentar valores negativos.

Esse problema ocorre quando o vendedor aplica o desconto “Mais por menos” e o marketplace aplica uma promoção de frete grátis, resultando na concessão de um desconto. Esse comportamento causa um loop infinito ao tentar concluir uma compra.

## Simulação

Pode haver diferentes combinações causando o problema, uma vez que o peso é usado para calcular os custos de envio proporcionais, dificultando a reprodução.

## Workaround

1.  Configure a promoção de frete grátis para ser aplicada pelo vendedor.
2. Configure a promoção “Mais por menos” no marketplace e restrinja-a ao vendedor usando o recurso de adesão do vendedor.
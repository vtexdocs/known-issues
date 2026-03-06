---
title: 'Os custos de envio proporcionais apresentam valores negativos quando há promoções que dividem os itens e envio gratuito aplicado.'
slug: os-custos-de-envio-proporcionais-apresentam-valores-negativos-quando-ha-promocoes-que-dividem-os-itens-e-envio-gratuito-aplicado
status: PUBLISHED
createdAt: 2026-03-06T22:55:32.297Z
updatedAt: 2026-03-06T22:55:32.297Z
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

Ao usar promoções que dividem itens, como o tipo “Mais por menos”, os custos proporcionais de envio podem exibir valores negativos. Esse problema é visível quando o desconto “Mais por menos” é aplicado pelo vendedor e uma promoção de frete grátis é aplicada pelo marketplace, resultando em um desconto. Esse comportamento causa um loop infinito ao tentar concluir uma compra.

## Simulação

Pode haver diferentes combinações causando o problema, uma vez que o peso é usado para calcular os custos de envio proporcionais, tornando difícil reproduzi-lo.

## Workaround

1. Configure a promoção de frete grátis para ser aplicada pelo vendedor. 2. Configure a promoção “Mais por menos” no marketplace e restrinja-a ao vendedor usando o recurso de adesão do vendedor.
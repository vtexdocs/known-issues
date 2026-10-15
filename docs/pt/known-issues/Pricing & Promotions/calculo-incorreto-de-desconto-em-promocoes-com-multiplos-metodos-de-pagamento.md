---
title: 'Cálculo incorreto de desconto em promoções com múltiplos métodos de pagamento.'
slug: calculo-incorreto-de-desconto-em-promocoes-com-multiplos-metodos-de-pagamento
status: PUBLISHED
createdAt: 2026-10-15T20:15:33.000Z
updatedAt: 2026-10-15T20:16:07.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: incorrect-discount-calculation-in-multi-payment-method-promotions
locale: pt
kiStatus: Backlog
internalReference: 1474203
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Promoções MPM (Múltiplos Métodos de Pagamento) configuradas com `applyOn = ValuePaidWithExpectedMethods` podem retornar um valor de desconto incorreto quando o recurso `AllowPaymentDetails` está habilitado.

O problema é causado por uma incompatibilidade nos formatos monetários durante o cálculo do desconto: o preço do item é representado em centavos, enquanto o valor do método de pagamento pode ser processado como um valor decimal. Isso pode resultar em um desconto significativamente maior do que o esperado.

## Simulação

1. Habilite o recurso `AllowPaymentDetails`.

2. Crie uma promoção MPM com um desconto percentual e configure `applyOn = ValuePaidWithExpectedMethods`.

3. Adicione um produto ao carrinho e selecione o método de pagamento esperado, como Pix.

4. Simule a promoção e inspecione a solicitação enviada ao RnB, particularmente o campo `paymentMethods[].value`.

5. Verifique os `priceTags` retornados e compare o valor do desconto com o valor esperado.
6. Repita o teste com uma promoção equivalente configurada com `applyOn = FullPrice` e compare os resultados.

## Workaround

N/A
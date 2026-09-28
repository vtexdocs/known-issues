---
title: 'As promoções podem acumular com preços manuais quando `accumulateWithManualPrice` não for explicitamente definido.'
slug: as-promocoes-podem-acumular-com-precos-manuais-quando-accumulatewithmanualprice-nao-for-explicitamente-definido
status: PUBLISHED
createdAt: 2026-09-28T16:41:03.000Z
updatedAt: 2026-09-28T16:47:59.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotions-may-accumulate-with-manual-prices-when-accumulatewithmanualprice-is-not-explicitly-set
locale: pt
kiStatus: Backlog
internalReference: 1467018
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas promoções podem ser aplicadas a itens com preços manuais, mesmo quando o campo `accumulateWithManualPrice` não estiver explicitamente configurado na promoção.

De acordo com o comportamento atual do produto, as promoções de preço não devem acumular com preços manuais por padrão. No entanto, quando o campo é `nulo` ou omitido, o mecanismo RnB não aplica essa restrição de forma consistente a todos os tipos de promoção.

O comportamento real depende dos efeitos da promoção e de como ela é avaliada. Como resultado, promoções que não deveriam acumular com preços manuais ainda podem ser aplicadas a itens com preços manuais.

## Simulação

1. Crie uma promoção regular com um desconto de valor fixo baseado em uma fórmula.

2. Observe que a caixa de seleção `Permitir combinação com preços manuais` está desativada na configuração da promoção.

3. Adicione um produto elegível ao carrinho e atenda às condições de elegibilidade da promoção.

4. Verifique se a promoção foi aplicada ao item.

5. Envie um preço manual para o mesmo item.
6. Observe que a promoção permanece aplicada mesmo após o item receber o preço manual.

## Workaround

Configure explicitamente o campo `accumulateWithManualPrice` por meio da API de Promoções.

Para impedir que a promoção se acumule com preços manuais, defina:

{ "accumulateWithManualPrice": false }

Use o endpoint de atualização de promoção para aplicar a configuração: Crie ou atualize a promoção ou o imposto. Isso permite que o comportamento desejado seja aplicado sem depender do tratamento padrão de um campo indefinido.
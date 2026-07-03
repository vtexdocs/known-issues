---
title: 'O PayPal Plus não respeita o valor mínimo da parcela.'
slug: o-paypal-plus-nao-respeita-o-valor-minimo-da-parcela
status: PUBLISHED
createdAt: 2021-05-18T21:34:28.000Z
updatedAt: 2026-07-03T15:23:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: paypalplus-does-not-respect-the-minimum-installment-amount
locale: pt
kiStatus: No Fix
internalReference: 370271
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O valor mínimo da parcela configurado em uma condição de pagamento PayPalPlus não é aplicado no checkout. Os clientes visualizam opções de parcelamento abaixo do mínimo configurado, independentemente do valor definido nas configurações da condição de pagamento.

Isso ocorre porque o PayPalPlus envia as opções de parcelamento disponíveis em sua resposta de autorização, enquanto a VTEX não envia uma solicitação especificando a restrição. Como as regras de parcelamento são definidas pelo PayPal, a VTEX não pode alterá-las.

Um comportamento secundário também é observado: quando um valor mínimo de parcelamento existente é modificado ou removido, o checkout pode continuar aplicando o valor anterior mesmo após salvar e reindexar.

## Simulação

1. Configure uma condição de pagamento PayPalPlus com um valor mínimo de parcelamento (por exemplo, R$ 30).

2. Adicione um produto ao carrinho cujo total permita parcelamentos abaixo desse mínimo.

3. Prossiga para o checkout e selecione PayPalPlus como forma de pagamento.

4. Observe que as opções de parcelamento abaixo do mínimo configurado ainda são exibidas.

## Workaround

Não disponível para a limitação principal, pois o PayPal controla suas próprias regras de parcelamento e a VTEX não pode substituí-las.

Para casos em que um valor mínimo previamente definido persiste após ser atualizado ou removido: exclua a condição de pagamento existente e crie uma nova do zero com a configuração desejada. Editar a condição existente pode não propagar a alteração corretamente.
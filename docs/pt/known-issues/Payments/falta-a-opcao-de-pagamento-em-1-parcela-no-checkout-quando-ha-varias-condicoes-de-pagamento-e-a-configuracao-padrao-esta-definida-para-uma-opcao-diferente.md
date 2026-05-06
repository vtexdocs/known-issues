---
title: 'Falta a opção de pagamento em 1 parcela no checkout quando há várias condições de pagamento e a configuração padrão está definida para uma opção diferente'
slug: falta-a-opcao-de-pagamento-em-1-parcela-no-checkout-quando-ha-varias-condicoes-de-pagamento-e-a-configuracao-padrao-esta-definida-para-uma-opcao-diferente
status: PUBLISHED
createdAt: 2022-12-02T20:24:04.000Z
updatedAt: 2023-05-11T17:23:23.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: missing-1x-installment-option-on-checkout-with-multiple-payment-conditions-and-default-configuration-set-to-a-different-option
locale: pt
kiStatus: Backlog
internalReference: 709971
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando há mais de uma condição de pagamento configurada para um sistema de pagamento e uma condição de pagamento diferente daquela com a opção de parcela única é definida como padrão, a opção de parcela única não aparece na página de finalização da compra. Nesses casos, apenas a opção de parcela única é removida da finalização da compra.

## Simulação

Para simular esse problema, siga estas etapas:

1. Acesse o painel de administração e configure três condições de pagamento para um sistema de pagamento com cartão de crédito, por exemplo, Visa. A condição de pagamento A poderia ter parcelas de 1x a 3x, a condição B com parcelas de 4x a 8x e a condição C com parcelas de 9x a 12x.

2. Em seguida, acesse a página de checkout e observe que todas as opções de parcelamento aparecem na página de checkout.

3. Depois, defina a condição de pagamento B ou C como padrão e acesse a página de checkout novamente. Você notará que a opção de parcelamento em 1x desaparece da página de checkout.

4. No entanto, se você definir a condição de pagamento A como padrão novamente, a opção de parcelamento em 1x reaparecerá na página de checkout.

## Workaround

Para resolver esse problema, você pode definir a opção de regra de pagamento parcelado mais baixa como padrão ou remover a configuração padrão excluindo a condição de pagamento com essa configuração e configurando uma nova condição de pagamento sem o sinalizador padrão.
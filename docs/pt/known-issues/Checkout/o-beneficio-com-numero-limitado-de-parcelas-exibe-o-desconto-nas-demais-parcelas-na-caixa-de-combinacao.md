---
title: 'O benefício com número limitado de parcelas exibe o desconto nas demais parcelas na caixa de combinação'
slug: o-beneficio-com-numero-limitado-de-parcelas-exibe-o-desconto-nas-demais-parcelas-na-caixa-de-combinacao
status: PUBLISHED
createdAt: 2021-01-12T15:55:48.000Z
updatedAt: 2023-03-31T23:07:04.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: benefit-with-restricted-number-of-installments-displays-discount-in-other-installments-in-the-combo-box
locale: pt
kiStatus: Backlog
internalReference: 323525
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao registrar um benefício para pagamentos com cartão, com quantidade limitada de parcelas (por exemplo, “10% à vista”), o desconto é apresentado após a seleção desse número de parcelas no checkout. No entanto, esse valor com desconto passa a ser o novo valor total, no qual as demais parcelas se basearão para apresentar seus valores. Então, no campo de seleção, as outras parcelas, que são calculadas com base no valor total **com o desconto**, são exibidas entre as opções. Quando você seleciona uma parcela diferente, no entanto, o valor exibido passa a ser o correto.

Esse cenário ocorre apenas para descontos em cartão e no momento da seleção. A compra **nunca é finalizada com o valor incorreto**.

## Simulação

1. Crie um benefício com número restrito de parcelas;
2. Acesse a loja e crie um novo carrinho, prosseguindo para o checkout;
3. Selecione o número de parcelas em que o benefício é aplicado;
4. Observe que, ao abrir o campo de seleção de parcelas mais uma vez, as outras opções também exibem o desconto;
5. Selecione outra parcela e veja que o valor é ajustado.

## Workaround

Há uma correção disponível para esse cenário como um recurso “beta”. Você pode entrar em contato com a equipe de suporte por meio de um ticket para obter mais detalhes.
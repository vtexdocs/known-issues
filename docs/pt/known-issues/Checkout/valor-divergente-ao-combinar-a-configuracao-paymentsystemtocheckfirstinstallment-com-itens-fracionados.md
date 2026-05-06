---
title: 'Valor divergente ao combinar a configuração "paymentSystemToCheckFirstInstallment" com itens fracionados'
slug: valor-divergente-ao-combinar-a-configuracao-paymentsystemtocheckfirstinstallment-com-itens-fracionados
status: PUBLISHED
createdAt: 2023-03-07T18:34:46.000Z
updatedAt: 2023-03-07T20:06:15.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: divergent-value-while-mixing-paymentsystemtocheckfirstinstallment-configuration-and-splitted-items
locale: pt
kiStatus: Backlog
internalReference: 766454
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a conta tem o parâmetro "paymentSystemToCheckFirstInstallment" configurado na configuração do orderForm, o cálculo do checkout enviará duas solicitações ao módulo de promoções. Se houver itens divididos no carrinho (por exemplo, promoção "Mais por menos"), a primeira solicitação enviará os itens corretamente, mas a segunda enviará os itens divididos com base na aplicação da promoção.

Ao combinar essa promoção com uma promoção regular restrita ao mesmo método de pagamento configurado em "paymentSystemToCheckFirstInstallment", você verá valores diferentes na resposta do módulo de promoções e um valor de juros nos totalizadores na interface de checkout, o que não permite concluir a compra e exibe a mensagem "O valor do pagamento não corresponde ao valor solicitado".

Observamos esse comportamento para formas de pagamento que têm apenas 1 parcela como padrão, por exemplo, PIX, "Boleto Bancário" ou Promissória.

## Simulação

- Configure "paymentSystemToCheckFirstInstallment" na configuração do orderForm;
- Configure uma promoção "More for Less";
- Configure uma promoção regular restrita ao mesmo método de pagamento configurado em "paymentSystemToCheckFirstInstallment": PIX ou Boleto;
- Monte um carrinho e selecione o método de pagamento configurado em "paymentSystemToCheckFirstInstallment";
- Você poderá ver o valor dos juros nos totalizadores da interface de checkout.

## Workaround

N/A
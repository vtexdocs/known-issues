---
title: 'A opção `installmentOptions` da API `orderForm` não leva em consideração promoções específicas de parcelamento'
slug: a-opcao-installmentoptions-da-api-orderform-nao-leva-em-consideracao-promocoes-especificas-de-parcelamento
status: PUBLISHED
createdAt: 2022-08-24T15:34:20.000Z
updatedAt: 2023-03-31T15:39:29.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: installmentoptions-from-orderform-api-doesnt-take-into-account-specific-installment-promotions
locale: pt
kiStatus: No Fix
internalReference: 644563
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma promoção é restrita a um número específico de parcelas no cartão de crédito (por exemplo, “10% de desconto”), o valor do desconto é aplicado mesmo para parcelas fora desse intervalo, e o objeto “installmentOptions” da API do formulário de pedido retorna valores incorretos.

Selecionar um número diferente de parcelas recalculará as promoções e atualizará os valores de todas as parcelas. Não é possível criar um pedido com o desconto incorreto, pois ele sempre será atualizado para o número de parcelas selecionado; portanto, esse problema está relacionado apenas aos valores exibidos.

## Simulação

- Crie uma promoção com um número restrito de parcelas;
- Por meio da API, crie ou simule um carrinho informando um "paymentData" com o número de parcelas em que a promoção é aplicada;
- Observe o "installmentOptions" em relação aos valores com desconto;
- Informe outro número de parcelas e veja o valor sendo atualizado para todas elas.

## Workaround

Este objeto tem um comportamento limitado e deve ser considerado obsoleto.

Lojas que dependem de descontos para parcelas específicas em um orderForm devem basear-se em uma nova API, conforme descrito neste changelog (1) e nesta documentação (2).

Essa nova API não abrange solicitações de simulação. Para elas, a alternativa é a configuração "paymentSystemToCheckFirstInstallment" (3) – mas limitada a descontos na primeira parcela.

---

(1) https://developers.vtex.com/vtex-developer-docs/changelog/improvement-price-consistency-checkout-discounts-installments
(2) https://developers.vtex.com/vtex-rest-api/reference/getcartinstallments
(3) https://developers.vtex.com/vtex-rest-api/docs/using-checkout-api-to-set-a-discount
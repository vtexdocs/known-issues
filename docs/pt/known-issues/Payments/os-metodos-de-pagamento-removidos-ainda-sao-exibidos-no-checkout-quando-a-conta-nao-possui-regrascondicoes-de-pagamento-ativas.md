---
title: 'Os métodos de pagamento removidos ainda são exibidos no Checkout quando a conta não possui regras/condições de pagamento ativas.'
slug: os-metodos-de-pagamento-removidos-ainda-sao-exibidos-no-checkout-quando-a-conta-nao-possui-regrascondicoes-de-pagamento-ativas
status: PUBLISHED
createdAt: 2026-03-19T17:10:55.000Z
updatedAt: 2026-08-10T20:50:30.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: removed-payment-methods-still-returned-in-checkout-when-account-has-no-active-payment-rulesconditions
locale: pt
kiStatus: Fixed
internalReference: 1380926
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma conta exclui/desativa todas as suas regras de pagamento em `/admin/pci-gateway#/rules`, o Checkout continua retornando os métodos de pagamento em `orderForm.paymentData.paymentSystems` para esse vendedor. O sintoma visível é que os front-ends/headless podem exibir métodos de pagamento que deveriam estar indisponíveis para a conta, pois ainda estão listados em `paymentSystems`.

## Simulação

1. Exclua/desative todas as condições de pagamento para uma conta.

2. Adicione itens vendidos pelo vendedor ou marketplace afetado a um carrinho no checkout do marketplace.

3. Recupere o `orderForm` e inspecione `orderForm.paymentData.paymentSystems`.

4. Observe que os métodos de pagamento ainda são retornados em `paymentSystems`, apesar de o vendedor não ter regras de pagamento ativas. O método `getPaymentSystems` para o vendedor ou marketplace retornou os métodos, mesmo que as regras da conta estivessem inativas/excluídas.

## Workaround

Abra um chamado para a equipe de suporte para aplicar uma solução alternativa interna.
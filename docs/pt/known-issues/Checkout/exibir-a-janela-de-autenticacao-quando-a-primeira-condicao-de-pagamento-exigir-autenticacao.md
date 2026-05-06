---
title: 'Exibir a janela de autenticação quando a primeira condição de pagamento exigir autenticação'
slug: exibir-a-janela-de-autenticacao-quando-a-primeira-condicao-de-pagamento-exigir-autenticacao
status: PUBLISHED
createdAt: 2023-06-14T17:54:24.000Z
updatedAt: 2023-12-21T15:50:01.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: loop-in-the-authentication-popup-when-the-first-payment-condition-requires-authentication
locale: pt
kiStatus: Backlog
internalReference: 844192
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A janela pop-up de autenticação entra em um loop quando a primeira condição de pagamento tem `requiresAuthentication: true`. Só será possível continuar a compra se a página for recarregada.

## Simulação

- Configure uma condição de pagamento com `requiresAuthentication: true`;
- Certifique-se de que a condição de pagamento seja a primeira;
- Use um e-mail existente no checkout para ser identificado;
- Vá para a etapa de Pagamento e a janela pop-up de autenticação;
- Faça login usando uma das opções e observe que a janela pop-up não é fechada.

## Workaround

- Altere a ordem da condição de pagamento, garantindo que a primeira opção não seja aquela com `requiresAuthentication: true`;
- Defina o parâmetro "defaultPaymentSystemToApplyOnUserOrderForm" na configuração do formulário de pedido via API para uma opção sem autenticação, como cartão de crédito.
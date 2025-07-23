---
title: 'Faça um loop na janela pop-up de autenticação quando a primeira condição de pagamento exigir autenticação'
id: 7fU6wnrTjS0aJqRmertSFg
status: PUBLISHED
createdAt: 2023-06-14T17:54:36.973Z
updatedAt: 2023-12-21T15:50:16.992Z
publishedAt: 2023-12-21T15:50:16.992Z
firstPublishedAt: 2023-06-14T17:54:37.537Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: loop-in-the-authentication-popup-when-the-first-payment-condition-requires-authentication
locale: pt
kiStatus: Backlog
internalReference: 844192
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O pop-up de autenticação entra em loop quando a primeira condição de pagamento tem `requiresAuthentication: true`. A continuação da compra só será possível se a página for recarregada.

## Simulação



- Configure uma condição de pagamento com `requiresAuthentication: true`;
- Certifique-se de que a condição de pagamento seja a primeira;
- Use um e-mail existente no checkout para ser identificado;
- Vá para a etapa de pagamento e para a janela pop-up de autenticação;
- Faça login usando uma das opções e observe que o pop-up não é fechado

## Workaround



- Altere a ordem da condição de pagamento garantindo que a primeira opção não seja aquela com `requiresAuthentication: true`;
- Defina o parâmetro "defaultPaymentSystemToApplyOnUserOrderForm" na configuração do orderForm via API para um sem autenticação, como um cartão de crédito.




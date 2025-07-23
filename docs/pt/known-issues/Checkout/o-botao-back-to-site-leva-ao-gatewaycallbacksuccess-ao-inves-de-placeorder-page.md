---
title: "O botão 'Back to site' leva ao gatewayCallback//Success ao invés de placeOrder page"
id: 7Hp6yYCblhbhrN3jHHigUC
status: PUBLISHED
createdAt: 2023-04-10T15:18:58.986Z
updatedAt: 2023-04-10T15:18:59.672Z
publishedAt: 2023-04-10T15:18:59.672Z
firstPublishedAt: 2023-04-10T15:18:59.672Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: back-to-site-button-takes-to-gatewaycallbacksuccess-instead-of-placeorder-page
locale: pt
kiStatus: Backlog
internalReference: 786685
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o cliente fecha uma compra utilizando um cartão presente e o aplicativo de pagamento MercadoPago, o botão "return to the site" não os leva à página de pedido do local, mas sim à página de pedido "/gatewayCallback//Success".


##

## Simulação



1. Colocar o CG de qualquer valor
2. Selecione o método de pagamento "mercadoPago".
3. Dentro do aplicativo de pagamento, faça uma compra com Efectivo => OXXO
4. Clique em "Voltar ao site".


##

## Workaround


Não há solução...





---
title: 'O botão "Voltar ao site" leva ao gatewayCallback/{orderGroup}/Success em vez da página placeOrder'
slug: o-botao-voltar-ao-site-leva-ao-gatewaycallbackordergroupsuccess-em-vez-da-pagina-placeorder
status: PUBLISHED
createdAt: 2025-11-26T15:01:30.581Z
updatedAt: 2025-11-26T15:01:30.581Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: back-to-site-button-takes-to-gatewaycallbackordergroupsuccess-instead-of-placeorder-page
locale: pt
kiStatus: Backlog
internalReference: 786685
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando o cliente faz uma compra usando um cartão-presente e um aplicativo de pagamento, o botão "voltar ao site" ou o fluxo para voltar ao site não o leva para a página de colocação do pedido, mas para `/gatewayCallback//Success`
## Simulação



1. Coloque o giftcard de qualquer valor
2. Selecione o método "payment app" (aplicativo de pagamento)
3. Dentro do aplicativo de pagamento, faça uma compra
4. Volte para o ambiente da VTEX.


## Workaround


_Não há solução alternativa_



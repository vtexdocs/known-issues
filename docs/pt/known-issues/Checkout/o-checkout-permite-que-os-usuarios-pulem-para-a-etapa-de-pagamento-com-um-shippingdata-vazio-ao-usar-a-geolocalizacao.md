---
title: "O checkout permite que os usuários pulem para a etapa de pagamento com um 'shippingData' vazio ao usar a geolocalização"
id: 7uv85LIrjoPaHxVgCAoy7I
status: PUBLISHED
createdAt: 2023-10-23T17:48:05.377Z
updatedAt: 2023-10-23T17:58:49.908Z
publishedAt: 2023-10-23T17:58:49.908Z
firstPublishedAt: 2023-10-23T17:48:06.206Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-users-to-jump-to-payment-step-with-an-empty-shippingdata-when-using-geolocation
locale: pt
kiStatus: Backlog
internalReference: 343056
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao usar a geolocalização no checkout, os usuários podem pular para a etapa de pagamento com o `shippingData` incompleto.

## Simulação



- Enviar o endereço via API com dados incompletos;
- Adicionar qualquer produto ao carrinho;
- Ir para o carrinho e depois para o checkout;
- Adicionar as informações do perfil

## Workaround


N/A




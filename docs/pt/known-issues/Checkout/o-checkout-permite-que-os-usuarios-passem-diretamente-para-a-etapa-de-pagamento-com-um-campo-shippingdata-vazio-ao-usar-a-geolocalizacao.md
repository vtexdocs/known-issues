---
title: "O checkout permite que os usuários passem diretamente para a etapa de pagamento com um campo 'shippingData' vazio ao usar a geolocalização"
slug: o-checkout-permite-que-os-usuarios-passem-diretamente-para-a-etapa-de-pagamento-com-um-campo-shippingdata-vazio-ao-usar-a-geolocalizacao
status: PUBLISHED
createdAt: 2021-03-10T20:58:42.000Z
updatedAt: 2023-10-23T17:58:32.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-users-to-jump-to-payment-step-with-an-empty-shippingdata-when-using-geolocation
locale: pt
kiStatus: Backlog
internalReference: 343056
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao usar a geolocalização no checkout, os usuários podem avançar para a etapa de pagamento mesmo com os dados de `shippingData` incompletos.

## Simulação

- Envie o endereço via API com dados incompletos;
- Adicione qualquer produto ao carrinho;
- Acesse o carrinho e, em seguida, vá para o checkout;
- Preencha as informações do perfil.

## Workaround

N/A
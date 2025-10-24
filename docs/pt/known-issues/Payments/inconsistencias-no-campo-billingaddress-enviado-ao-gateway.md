---
title: 'Inconsistências no campo billingAddress enviado ao Gateway'
slug: inconsistencias-no-campo-billingaddress-enviado-ao-gateway
status: PUBLISHED
createdAt: 2025-08-07T20:19:54.478Z
updatedAt: 2025-08-07T20:19:54.478Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistencies-in-billingaddress-field-sent-to-gateway
locale: pt
kiStatus: Fixed
internalReference: 291688
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O gateway usa o endereço errado em cenários de compras recorrentes quando já existe um cartão salvo no perfil do usuário.

O erro ocorre porque o gateway se baseia na caixa de seleção `isBillingAddressDifferent`, que aparece ao lado dos dados do cartão no checkout, para definir se usará o endereço de entrega ou o endereço de cobrança em afiliações e antifraude. O problema é que essa caixa de seleção em questão nem sequer aparece no checkout após a primeira compra com o cartão, mas seu valor é `false` por padrão. Isso significa que, sendo uma compra para entrega ou retirada, o endereço que o gateway usará é o endereço de entrega e não o endereço de cobrança, e isso trará problemas em cenários de retirada ou mesmo para gerar boletos bancários.
## Simulação


Cena A:

1. Como um novo usuário, vá até o caixa de uma loja e faça uma compra de entrega para gerar um perfil de compra
2. Ao pagar por esse pedido, use um endereço de cartão diferente do endereço de entrega
3. Faça uma nova compra com o mesmo e-mail e o mesmo cartão, mas comprando em uma opção de retirada
4. Observe os objetos `isBillingAddressDifferent` que será falso e o `address` do pagamento que será um endereço específico

Cenário B:

1. Como um novo usuário, vá até o caixa de uma loja e faça uma compra de entrega para gerar um perfil de compra
2. Ao pagar por esse pedido, use o mesmo endereço como endereço de entrega
3. Faça uma nova compra com o mesmo e-mail e o mesmo cartão, mas comprando em uma opção de retirada
4. Observe os objetos `isBillingAddressDifferent` que serão falsos e o `address` do pagamento que não terá um endereço específic
## Workaround


Envie uma solicitação de suporte ao produto para prosseguir com a transação.




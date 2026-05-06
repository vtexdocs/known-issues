---
title: 'Inconsistências no campo "billingAddress" enviado ao Gateway'
slug: inconsistencias-no-campo-billingaddress-enviado-ao-gateway
status: PUBLISHED
createdAt: 2020-09-29T21:17:51.000Z
updatedAt: 2025-07-24T22:27:10.000Z
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

O gateway utiliza o endereço incorreto em cenários de compras recorrentes quando já existe um cartão salvo no perfil do usuário.

O erro ocorre porque o gateway se baseia na caixa de seleção `isBillingAddressDifferent`, que aparece ao lado dos dados do cartão no checkout, para definir se utilizará o endereço de entrega ou o endereço de cobrança nas verificações de afiliação e antifraude. O problema é que essa caixa de seleção em questão nem sequer aparece no checkout após a primeira compra com o cartão, mas seu valor é `false` por padrão. Isso significa que, seja uma compra com entrega ou retirada, o endereço que o gateway utilizará é o endereço de entrega e não o de cobrança, o que causará problemas em cenários de retirada ou mesmo na geração de boletos bancários.

## Simulação

Cenário A:

1. Como novo usuário, acesse o checkout de uma loja e faça uma compra com entrega para gerar um perfil de compra
2. Ao pagar por este pedido, use um endereço de cartão diferente do endereço de entrega
3. Faça uma nova compra com o mesmo e-mail e o mesmo cartão, mas escolhendo a opção de retirada
4. Observe que o objeto `isBillingAddressDifferent` será falso e que o `endereço` do pagamento será um endereço específico

Cenário B:

1. Como novo usuário, vá ao checkout da loja e faça uma compra com entrega para gerar um perfil de compra
2. Ao pagar por este pedido, use o mesmo endereço como endereço de entrega
3. Faça uma nova compra com o mesmo e-mail e o mesmo cartão, mas escolhendo a opção de retirada
4. Observe que o objeto `isBillingAddressDifferent` será falso e que o `address` do pagamento não terá um endereço específico

## Workaround

Envie uma solicitação de suporte ao produto para prosseguir com a transação.
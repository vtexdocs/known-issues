---
title: 'A incompatibilidade do AddressId causa o erro "endereço inválido para um item"'
slug: a-incompatibilidade-do-addressid-causa-o-erro-endereco-invalido-para-um-item
status: PUBLISHED
createdAt: 2024-03-01T19:28:34.000Z
updatedAt: 2024-03-01T19:28:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: addressid-mismatch-causes-invalid-address-for-an-item-error
locale: pt
kiStatus: Backlog
internalReference: 992503
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O anexo `shippingData` do carrinho suporta o campo `addressId` em alguns objetos diferentes: `logisticsInfo`, `address` e `selectedAddresses`.
O campo `addressId` também é mantido nos endereços salvos do usuário, armazenados na entidade AD do Master Data.

Ao fazer um pedido, a API de checkout compara o endereço de entrega selecionado no `orderForm` com os endereços disponíveis no perfil do usuário.
Se houver uma correspondência, o `addressId` dentro de `address` e `selectedAddresses` do `orderForm` é substituído pelo valor existente no perfil do usuário.

No entanto, em uma etapa posterior das validações da API, ela também comparará esse `addressId` com o do objeto `logisticsInfo`.
Como o valor em `logisticsInfo` não é substituído pelo processo mencionado acima, eles podem não corresponder, e essa validação posterior falhará.
Isso aciona um "**endereço inválido para um item**", impedindo que a compra seja concluída.

## Simulação

- Salve dois endereços diferentes no perfil de um usuário e anote os valores de `addressId` deles.
- Monte uma solicitação de "Place Order". Use um dos endereços criados na etapa anterior, mas utilize o `addressId` do outro.
- Envie a solicitação. A resposta conterá a mensagem de erro "endereço inválido para um item".

## Workaround

Ao enviar a solicitação de "Place Order" com um endereço salvo anteriormente, certifique-se de que o valor usado para `addressId` corresponda aos dados reais do endereço.
Como alternativa, você também pode omitir o `addressId` da solicitação.
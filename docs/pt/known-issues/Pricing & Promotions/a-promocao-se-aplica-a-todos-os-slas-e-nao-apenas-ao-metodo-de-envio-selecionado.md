---
title: 'A promoção se aplica a todos os SLAs, e não apenas ao método de envio selecionado.'
slug: a-promocao-se-aplica-a-todos-os-slas-e-nao-apenas-ao-metodo-de-envio-selecionado
status: PUBLISHED
createdAt: 2025-07-24T15:49:56.000Z
updatedAt: 2026-09-22T23:46:37.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-applies-to-all-slas-instead-of-only-selected-shipping-method
locale: pt
kiStatus: Backlog
internalReference: 1265187
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Promoções que deveriam ser restritas a um método de envio específico (SLA) não estão se comportando corretamente, a menos que o indicador obsoleto `isSlaSelected` seja explicitamente definido como `true`. A nova interface de Promoções Regulares não expõe mais esse indicador e, ao criar promoções por meio dela, o indicador assume o valor padrão `false`. Isso resulta em um comportamento incorreto, no qual o benefício é aplicado a qualquer método de envio disponível, desde que o método especificado esteja listado entre as opções na

## Simulação

do carrinho.

## **Simulação**

- Crie uma promoção com um desconto restrito a um método de envio específico e válido usando o novo formulário de Promoções Regulares.

- No carrinho, adicione um produto e verifique se os métodos de envio específicos estão disponíveis.

- Observe que, mesmo que o método de envio selecionado não seja o configurado nas configurações da promoção, o desconto ainda será aplicado.
- O comportamento esperado é que o desconto seja aplicado somente se o método de envio específico for realmente selecionado.
- Isso só funciona corretamente se o parâmetro obsoleto `isSlaSelected` estiver definido como `true` (o que não é possível pela nova interface do usuário).

## Workaround

Defina `isSlaSelected = true` via API. Isso garante que a promoção seja aplicada somente após a seleção do SLA correspondente.
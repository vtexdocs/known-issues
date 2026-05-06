---
title: 'As promoções por forma de pagamento não aparecem na página do produto'
slug: as-promocoes-por-forma-de-pagamento-nao-aparecem-na-pagina-do-produto
status: PUBLISHED
createdAt: 2023-03-30T20:12:49.000Z
updatedAt: 2023-03-31T15:44:40.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: promotions-by-order-of-payment-methods-do-not-appear-on-the-product-page
locale: pt
kiStatus: Backlog
internalReference: 781523
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A página do produto exibe o preço do SKU apenas com algumas promoções, sem incluir as condições específicas dos métodos de pagamento nem o número de parcelas. Essas informações só são aplicadas durante o checkout, após o usuário ter optado explicitamente por uma determinada condição de pagamento.

## Simulação

1. Crie uma promoção que conceda um desconto de 5% para pagamento via boleto (método de pagamento offline popular no Brasil)
2. Acesse a página do produto
3. Observe que o valor exibido não leva em conta o desconto definido. O desconto aparecerá após a escolha do boleto como forma de pagamento no checkout.

## Workaround

Esse cenário pode ser facilmente resolvido implementando um Javascript front-end que calcule o preço e inclua a porcentagem de desconto devida, exibindo, em seguida, um elemento com esse preço adicional na página do produto.
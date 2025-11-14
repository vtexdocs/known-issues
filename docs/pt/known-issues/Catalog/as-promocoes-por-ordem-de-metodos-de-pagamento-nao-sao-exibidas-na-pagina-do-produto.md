---
title: 'As promoções por ordem de métodos de pagamento não são exibidas na página do produto'
slug: as-promocoes-por-ordem-de-metodos-de-pagamento-nao-sao-exibidas-na-pagina-do-produto
status: PUBLISHED
createdAt: 2025-11-14T19:13:22.279Z
updatedAt: 2025-11-14T19:13:22.279Z
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


A página do produto mostra apenas o preço da SKU com algumas promoções, o que não inclui as condições específicas dos métodos de pagamento nem o número de parcelas. Elas são aplicadas somente durante o checkout, depois que o usuário optou explicitamente por usar uma determinada condição de pagamento.

## Simulação




1. Crie uma promoção que conceda um desconto de 5% para pagamento por boleto bancário (método de pagamento off-line popular no Brasil)
2. Acesse a página do produto
3. Observe que o valor exibido não leva em conta o desconto definido. O desconto aparecerá após a escolha do "boleto" como método de pagamento no checkout.
## Workaround



Esse cenário pode ser facilmente resolvido com a implementação de um Javascript de front-end que calcula o preço e inclui a porcentagem de desconto devida, exibindo em seguida um elemento com esse preço adicional na página do produto.







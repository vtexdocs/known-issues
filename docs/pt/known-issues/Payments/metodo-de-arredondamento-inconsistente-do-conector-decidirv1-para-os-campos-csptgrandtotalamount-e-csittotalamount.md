---
title: 'Método de arredondamento inconsistente do conector DecidirV1 para os campos CSPTGRANDTOTALAMOUNT e CSITTOTALAMOUNT.'
slug: metodo-de-arredondamento-inconsistente-do-conector-decidirv1-para-os-campos-csptgrandtotalamount-e-csittotalamount
status: PUBLISHED
createdAt: 2023-04-10T20:32:15.000Z
updatedAt: 2023-04-10T20:32:14.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidirv1-connectors-inconsistent-rounding-method-for-csptgrandtotalamount-and-csittotalamount-fields
locale: pt
kiStatus: Backlog
internalReference: 787367
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O conector DecidirV1 legado utiliza um método interno para calcular os campos `CSPTGRANDTOTALAMOUNT` e `CSITTOTALAMOUNT`, que correspondem ao produto entre o valor do produto e a quantidade. Essa abordagem resulta em uma string com duas casas decimais. Consequentemente, quando o preço do produto contém mais de duas casas decimais, o valor do campo `CSPTGRANDTOTALAMOUNT` diverge, uma vez que se trata do próprio valor do pagamento.

## Simulação

Faça um pedido usando o DecidirV1 com um produto no carrinho cujo preço tenha mais de 3 casas decimais.

## Workaround

Para evitar tais discrepâncias, recomendamos usar produtos com no máximo duas casas decimais ou modificar o carrinho de checkout para eliminar o uso de casas decimais.
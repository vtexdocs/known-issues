---
title: 'No retorno parcial, os valores do Imposto na IU aparecem o total'
id: 2I5a9hwrUo6s1htxOg8H1U
status: PUBLISHED
createdAt: 2022-04-11T13:15:06.455Z
updatedAt: 2024-02-16T20:28:35.114Z
publishedAt: 2024-02-16T20:28:35.114Z
firstPublishedAt: 2022-04-11T13:15:07.028Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: in-the-partial-return-the-tax-values-in-the-ui-appear-the-total
locale: pt
kiStatus: No Fix
internalReference: 559458
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Em uma ordem onde temos dois itens idênticos, e um dos itens é devolvido, as taxas para ambos os itens são exibidas na IU, ao invés de apenas as taxas para o item que foi devolvido sendo exibidas na IU. Esta informação sobre taxas é apenas para informação, pois o que será realmente devolvido é o que é preenchido na Nota de Devolução.




## Simulação


Para simular este cenário, será necessário colocar um pedido com dois itens iguais (SKU), veremos que na ordem, as tarifas para os dois itens serão adicionadas e exibidas na IU. Entretanto, ao devolver apenas um dos itens, veremos que a devolução referente ao total das taxas será exibida na IU, em vez de mostrar as taxas referentes a apenas um item.






## Workaround


Não temos uma solução para este caso.


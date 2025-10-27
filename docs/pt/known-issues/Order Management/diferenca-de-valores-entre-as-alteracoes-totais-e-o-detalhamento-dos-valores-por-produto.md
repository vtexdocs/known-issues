---
title: 'Diferença de valores entre as alterações totais e o detalhamento dos valores por produto'
slug: diferenca-de-valores-entre-as-alteracoes-totais-e-o-detalhamento-dos-valores-por-produto
status: PUBLISHED
createdAt: 2025-10-16T19:22:57.061Z
updatedAt: 2025-10-16T19:22:57.061Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: difference-in-values-between-the-total-changes-and-the-detail-of-values-by-product
locale: pt
kiStatus: Backlog
internalReference: 1256685
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Foi identificado um problema relacionado à apresentação de valores ajustados em pedidos após alterações envolvendo produtos com um `unitMultiplier` decimal maior que 2.

Quando o peso ou a quantidade de um item é modificado por meio do fluxo **Order Modification**, o sistema usa valores `unitMultiplier` com várias casas decimais para recalcular os preços individuais e totais. No entanto, a interface do usuário do pedido usa o `sellingPrice` do item, que pode ser arredondado e aproximado para apenas **duas casas decimais**. **Isso pode resultar em discrepâncias visíveis entre a soma dos valores exibidos por produto e o valor total cobrado do cliente**, o que pode confundir os comerciantes.

É essencial observar que o cálculo do valor total do pedido segue com exatidão a precisão exigida, e a inconsistência está limitada à exibição dos detalhes do produto na interface.
## Simulação


Para reproduzir o problema:

1. Acesse a área de ordens na plataforma VTEX.
2. Selecione um pedido que contenha itens com um `unitMultiplier` decimal (por exemplo, produtos vendidos por peso).
3. Modifique manualmente o peso (`unitMultiplier`) com um valor que contenha mais de 2 casas decimais _(mais casas decimais resultarão em uma divergência mais visível)_ do item por meio do fluxo de Modificação de Pedidos (ou Pick and Pack).
4. Observe que, após a alteração:
  - O valor total do pedido é ajustado corretamente e cobrado como esperado.
  - Entretanto, os valores exibidos para cada produto podem não corresponder exatamente ao total mostrado, devido ao arredondamento do `sellingPrice` na interface do usuário.
5. Compare os valores exibidos pelo sistema com um cálculo manual usando os preços, as quantidades e o `unitMultiplier` completo
## Workaround


No momento, não há nenhuma correção definitiva ou ajuste de configuração disponível para resolver a discrepância na soma dos valores exibidos na interface do usuário. Recomenda-se:

- Informar os comerciantes e usuários sobre a possibilidade dessa inconsistência visual.
- Para fins de reconciliação, sempre use o valor total do pedido (totais), não a soma dos campos `sellingPrice` individuais.
- Se necessário, use ferramentas como APIs de visualização ou aplique ajustes manuais por meio dos campos `manualIncrementValue`/`manualDecrementValue` para garantir que os valores finais sejam precisos.
- Acompanhe as atualizações do produto para obter possíveis melhorias no tratamento de decimais na exibição da interface do usuário.



%0A
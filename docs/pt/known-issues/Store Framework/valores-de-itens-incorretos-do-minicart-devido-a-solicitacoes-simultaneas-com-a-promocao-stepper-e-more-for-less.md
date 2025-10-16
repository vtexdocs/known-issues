---
title: Valores de itens incorretos do Minicart devido a solicitações simultâneas com a promoção Stepper e More for Less
slug: valores-de-itens-incorretos-do-minicart-devido-a-solicitacoes-simultaneas-com-a-promocao-stepper-e-more-for-less
status: PUBLISHED
createdAt: 2025-10-16T20:38:32.759Z
updatedAt: 2025-10-16T20:38:32.759Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: minicart-incorrect-item-values-due-to-concurrent-requests-with-stepper-and-more-for-less-promotion
locale: pt
kiStatus: Backlog
internalReference: 1185655
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O problema de sincronização de checkout ocorre quando o minicarro, usando o método stepper (com o seletor de quantidade definido para a propriedade mode como "stepper"), envia várias solicitações. Os itens envolvidos em uma promoção "Buy More Save More" resultam em valores de item incorretos devido à divisão de itens, fazendo com que várias solicitações sejam enviadas e levando a discrepâncias na resposta da API de checkout.
## Simulação



1. Adicione itens qualificados para a promoção "Buy More Save More" ao minicarro.
2. Certifique-se de que o seletor de quantidade tenha a propriedade de modo definida como "stepper".
3. Use o método stepper para atualizar a quantidade de vários itens de uma só vez no minicarro.
4. Observe que os valores dos itens retornados pela API de checkout estão incorretos devido ao envio de várias solicitações do minicarro após a divisão dos itens.


## Workaround


Use o seletor de quantidade como padrão.




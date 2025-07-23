---
title: 'As transações de verificação ao salvar o cartão em MyCards não são automaticamente canceladas'
id: 3VqRlcnzHqDEx7v1IIlBuf
status: PUBLISHED
createdAt: 2022-03-27T15:14:55.382Z
updatedAt: 2024-02-16T20:27:46.524Z
publishedAt: 2024-02-16T20:27:46.524Z
firstPublishedAt: 2022-03-27T15:14:56.630Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: verification-transactions-when-saving-card-in-mycards-are-not-automatically-canceled
locale: pt
kiStatus: No Fix
internalReference: 347084
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um cartão é salvo no módulo MyCards, é gerada uma transação de verificação no valor de R$ 1,50, que, após seguir o fluxo de autorização e aprovação, deve ser automaticamente cancelada. Esta transação destina-se a validar que o cartão salvo é autêntico e está transacionando sem problemas.
No entanto, foi identificado que no caso em que o adquirente devolve uma comunicação indefinida, o Gateway não está chamando simulação



## Simulação


Este é um problema intermitente e depende do fornecedor, portanto não podemos determinar um passo a passo para reproduzir este cenário



## Workaround


Não foi identificada nenhuma solução, mas é possível cancelar manualmente a transação de R$ 1,50 via API


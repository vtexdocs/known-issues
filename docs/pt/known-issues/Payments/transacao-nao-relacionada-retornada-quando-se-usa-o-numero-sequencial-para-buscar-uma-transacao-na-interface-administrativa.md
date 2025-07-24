---
title: 'Transação não relacionada retornada quando se usa o número seqüencial para buscar uma transação na interface administrativa'
id: 62ePhzVMcAe8KRgs4ASSSv
status: PUBLISHED
createdAt: 2022-07-25T17:03:28.496Z
updatedAt: 2022-11-25T22:04:31.969Z
publishedAt: 2022-11-25T22:04:31.969Z
firstPublishedAt: 2022-07-25T17:03:28.988Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: unrelated-transaction-returned-when-using-sequence-number-to-fetch-a-transaction-in-admin-ui
locale: pt
kiStatus: Backlog
internalReference: 503446
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o usuário procura uma transação no administrador pelo número de seqüência, em alguns casos, o retorno é a transação desejada e transação não relacionada com o status de chargeback.



## Simulação


Se a loja tiver transações em status de chargeback e o usuário a buscar com o número seqüencial.



## Workaround


Use transaçãoId ou pagamentoId em seu lugar.


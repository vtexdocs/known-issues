---
title: 'UI duplicando seleção de data e hora para entrega programada quando há divisão de entrega'
id: 6nPIfnI47XKI0YYNEEPenR
status: PUBLISHED
createdAt: 2022-04-28T20:03:10.918Z
updatedAt: 2022-11-25T21:53:53.493Z
publishedAt: 2022-11-25T21:53:53.493Z
firstPublishedAt: 2022-04-28T20:03:11.884Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-duplicating-date-and-time-selection-for-scheduled-delivery-when-it-has-delivery-division
locale: pt
kiStatus: Backlog
internalReference: 569132
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Quando o usuário chega à caixa e a entrega é programada e há mais de um item onde a divisão de entrega ocorre, portanto, itens que saem de um SLA X e Y.
Ao selecionar a primeira data de entrega e ao atualizar a página, a IU termina a seleção da mesma data e hora para também a segunda seleção, mesmo que o usuário não tenha interagido com o modal de seleção.



## Simulação



Tendo programado a entrega e também quebrando pacotes entre diferentes SLAs, escolhendo apenas a seleção de data e hora para o primeiro pacote, refrescando a página e percebendo que a seleção também foi feita para o segundo pacote.




## Workaround


N/A


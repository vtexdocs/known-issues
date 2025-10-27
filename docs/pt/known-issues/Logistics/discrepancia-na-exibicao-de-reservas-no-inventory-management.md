---
title: 'Discrepância na exibição de reservas no Inventory Management'
slug: discrepancia-na-exibicao-de-reservas-no-inventory-management
status: PUBLISHED
createdAt: 2025-10-16T20:51:10.139Z
updatedAt: 2025-10-16T20:51:10.139Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: discrepancy-in-display-of-reservations-in-inventory-management
locale: pt
kiStatus: Backlog
internalReference: 1220722
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



A tela de gerenciamento de inventário exibe um comportamento inesperado em que a quantidade de itens reservados exibida na tela inicial é maior do que a quantidade exibida no modal de itens reservados. Esse comportamento ocorre para reservas no status "Canceled_AbortedCommitted", e essas reservas não são filtradas corretamente na tela inicial.
## Simulação



Não há uma maneira fácil de reproduzir esse cenário, mas há uma grande chance de ocorrer com reservas com o status "Canceled_AbortedCommitted".


## Workaround



Ao cancelar a reserva novamente, o cancelamento funciona e a reserva não aparece mais na interface do usuário.

https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/inventory/reservations/-reservationId-/cancel?endpoint=post-/api/logistics/pvt/inventory/reservations/-reservationId-/cancel


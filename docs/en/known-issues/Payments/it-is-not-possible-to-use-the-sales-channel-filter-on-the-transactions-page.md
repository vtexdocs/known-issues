---
title: 'It is not possible to use the sales channel filter on the transactions page.'
slug: it-is-not-possible-to-use-the-sales-channel-filter-on-the-transactions-page
status: PUBLISHED
createdAt: 2026-01-09T14:59:12.351Z
updatedAt: 2026-01-09T14:59:12.351Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: it-is-not-possible-to-use-the-sales-channel-filter-on-the-transactions-page
locale: en
kiStatus: Backlog
internalReference: 1348924
---

## Summary


When filtering transactions by a specific Sales Channel (Trade Policy) in the Admin Transactions page, recent transactions do not appear. Users see results capped around February 5, even though there are transactions for the same Sales Channel. This affects merchants using the Payments Transactions UI filter by Sales Channel, causing incomplete visibility of payment data.


#### Simulation



1. Open Admin > Transactions at the URL pattern: `{accountName}.myvtex.com/admin/pci-gateway#/transactions`.
2. In the filter controls, select the Sales Channel (e.g., SC 5).
3. Observe that the list shows the last transactions around 05/Feb and does not include transactions after this date, despite existing orders tied to that Sales Channel.


#### Workaround


There is no workaround




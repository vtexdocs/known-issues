---
title: 'Mercado Livre Order fails to reprocess when shipment is cancelled (ERR_UNAVAILABLE_SLA)'
slug: mercado-livre-order-fails-to-reprocess-when-shipment-is-cancelled-errunavailablesla
status: PUBLISHED
createdAt: 2026-08-03T20:51:28.000Z
updatedAt: 2026-08-03T20:51:28.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-order-fails-to-reprocess-when-shipment-is-cancelled-errunavailablesla
locale: en
kiStatus: Backlog
internalReference: 1442735
---

## Summary

Orders from Mercado Livre whose shipment is in `cancelled` status (e.g. substatus `pack_partially_cancelled`, undocumented in the ML API) cannot be reprocessed in the integration. The Bridge returns a generic, misleading error (`ERR_UNAVAILABLE_SLA` — "Order not imported because the selected delivery SLA is not available"), masking the real issue, which is an unhandled exception when processing an empty Orders list.

## Simulation

- Find an order on Mercado Livre whose shipment has status `cancelled` and returns an empty `Orders` list (e.g. order #47381163879, account eletroangeloni).
- Reprocess the order via the Bridge.
- The error stays the same across attempts, always returning `ERR_UNAVAILABLE_SLA`.

## Workaround

N/A
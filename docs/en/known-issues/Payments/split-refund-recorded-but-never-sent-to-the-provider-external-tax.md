---
title: 'Split refund recorded but never sent to the provider (external tax)'
slug: split-refund-recorded-but-never-sent-to-the-provider-external-tax
status: PUBLISHED
createdAt: 2026-08-31T19:20:00.000Z
updatedAt: 2026-08-31T19:20:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: split-refund-recorded-but-never-sent-to-the-provider-external-tax
locale: en
kiStatus: Backlog
internalReference: 1454215
---

## Summary

On stores that use an external tax provider, refunding an already-invoiced seller sub-order fails inside the gateway and never reaches the connector. The shopper is not refunded; the transaction may stay in `Settling`, and a refund record is still written for the full value as an `email-notification` while `totalRefunds` stays `0` — so it looks like the refund happened.

Instead of reusing the recipient split agreed at authorization, the gateway rebuilds it for the refund from the sum of the cart lines, which excludes the externally provided tax. Because that sum is smaller than the amount being refunded, the shares are scaled up — in practice, only the seller's, since the marketplace share is merely the remainder and shrinks by the same amount. The seller is then pushed back down to its agreed amount, the marketplace is never recalculated, and the difference is left with nobody.

**Expected:** the recipients array totals the refunded amount, and the refund is dispatched to the connector.
**Actual:** it totals less, and the gateway rejects its own request with `ValidationException: Value in recipients (xx.xx) is different than operation value (xx.xx)`.

The same sub-order refunded through a cancellation, before invoicing, builds a correct array and dispatches normally — the invoice is not the cause; it only routes the operation into the refund path, the only path that scales the shares.

## Simulation

**Prerequisites**


- Marketplace account with `nativeSplitEnabled: True` on the transaction and a connector using the Payment Provider Protocol with split.
- Transaction field `postPurchaseOperationMode` = `Total` or `Retained` (both map to the affected strategy). `Partial` uses a different strategy.
- Store configured with an **external tax provider**, so cart items carry `"tax": 0` and the tax appears only in `priceTags` entries (e.g. `TAXHUB@STATE | ... | General Sales and Use Tax`). The item must have **no** `totalTax` **key** in the transaction `cart` field.
- At least one seller item with a non-zero `commission`.


**Steps**


1. On a store whose tax comes from an external provider, place an order mixing an item sold by the marketplace itself with an item fulfilled by a third-party seller that has a commission agreement. The seller's item must carry its tax in price tags rather than in the item price, so the seller sub-order total is higher than the item price plus shipping.
2. Let the order be paid and the payment captured, so the seller sub-order becomes eligible for invoicing. The division agreed at this point is stored on the transaction and is the reference the refund is later checked against.
3. In the seller account's order management, start handling the seller sub-order.
4. Invoice the seller sub-order for its full value — a sales invoice, `type: Output`.
5. Wait until the seller sub-order shows as invoiced. Steps 3 and 5 matter: invoicing while the sub-order is still `ready-for-handling` attaches the package without moving the order forward, and the return in the next step is then refused with "pedido sem valor faturado".
6. Register the return of the seller sub-order for the same value — a return invoice, `type: Input`. This is the action that triggers the refund, and where the failure appears.


**Expected:** a refund of the seller sub-order's full value is dispatched to the connector and `totalRefunds` increases.
**Actual:** `Value in recipients (<A>) is different than operation value (<B>)` with `<A> < <B>`, `totalRefunds` stays `0`, and the refund is recorded with `type: "email-notification"` and `connectorResponse: null`. The difference `<B> − <A>` is the share that was clipped from the seller and never returned to the marketplace.

## Workaround

There is no workaround available.
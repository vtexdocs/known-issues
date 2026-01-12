---
title: 'APP FBE CAPI Purchase event not deduplicated in headless checkout (FBP/external_id dependency on VTEX Checkout)'
slug: app-fbe-capi-purchase-event-not-deduplicated-in-headless-checkout-fbpexternalid-dependency-on-vtex-checkout
status: PUBLISHED
createdAt: 2026-01-12T12:04:14.253Z
updatedAt: 2026-01-12T12:04:14.253Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: app-fbe-capi-purchase-event-not-deduplicated-in-headless-checkout-fbpexternalid-dependency-on-vtex-checkout
locale: en
kiStatus: Backlog
internalReference: 1349091
---

## Summary


Headless stores using VTEX’s Facebook Business Extension (FBE) and Conversions API (CAPI) face purchase event deduplication failures because Pixel and CAPI send mismatched identifiers. The current FBE/CAPI flow depends on VTEX Checkout to provide FBP (and external_id), which is not available in headless checkouts, leading Meta to treat Pixel and CAPI as different users/events. Merchants report inflated purchases when the confirmation page is reloaded and event IDs diverge. This affects headless implementations like shopaz and any scenario where CAPI cannot receive the same FBP/external_id used by the Pixel.


#### Simulation


1) Complete a test purchase and capture what Pixel sends vs what CAPI sends (event_name, event_id, timestamp, user identifiers: fbp/external_id). Observe that Pixel does not send external_id and CAPI uses a different fbp than the browser cookie, or CAPI cannot access the browser cookie at all. Meta cannot match the two events to the same user/session, breaking deduplication.

2) Reload the order confirmation page (F5). Pixel fires again; if GTM generates a new random event ID and there is no transaction_id consistently used, Meta counts a new purchase, inflating results and ROAS.

3) Compare with VTEX Checkout reference: in VTEX Checkout, event_id for Purchase maps to the orderId before the “-01”, and CAPI receives the same eventId as the Pixel for other events, plus FBP when available, enabling deduplication. In headless, this mapping/FBP propagation is missing, reproducing the issue.


#### Workaround


N/A




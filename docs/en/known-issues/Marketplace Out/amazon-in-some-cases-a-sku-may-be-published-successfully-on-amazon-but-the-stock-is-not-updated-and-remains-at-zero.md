---
title: 'Amazon In some cases, a SKU may be published successfully on Amazon, but the stock is not updated and remains at zero.'
slug: amazon-in-some-cases-a-sku-may-be-published-successfully-on-amazon-but-the-stock-is-not-updated-and-remains-at-zero
status: PUBLISHED
createdAt: 2026-07-07T19:09:18.000Z
updatedAt: 2026-07-07T19:09:18.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-in-some-cases-a-sku-may-be-published-successfully-on-amazon-but-the-stock-is-not-updated-and-remains-at-zero
locale: en
kiStatus: Backlog
internalReference: 1431243
---

## Summary

One or more Amazon SKUs may appear as successfully published/active, with stock available in the store, but the inventory sent to Amazon remains at zero (or outdated) and does not reflect the real value, even after days or weeks. There is no visible error in the admin panel or integration history indicating the cause.

This occurs with SKUs that, at some point in the past, had an error reported by Amazon on the listing itself and were later fixed/republished. Even though the listing becomes active again normally, the system does not automatically resume sending stock updates for that SKU.

## Simulation

- Identify the reported SKU(s) with a discrepancy between real stock (VTEX Catalog) and the stock published on Amazon.
- Confirm in the VTEX admin (Marketplace → Amazon) that the SKU is marked as published/active, with no apparent errors on screen.
- Confirm that the SKU's stock in the VTEX Catalog (Products and SKUs → Price and inventory) is **greater than zero**.
- Check the integration history for that SKU (Marketplace → history/Bridge) typically the last successful stock update record is outdated (days/weeks old), while there are more recent records of other types (e.g., listing republication) after that date.
- This pattern active listing with no error, real stock available, but no recent stock update in the history is the signature of this issue.

## Workaround

Yes. Support can escalate to the technical team to run a forced stock update for the specific SKU(s), via a direct call to the integration's availability API (outside the standard automatic flow, which is the one that's blocked). This call recalculates the real VTEX stock and sends it directly to Amazon, resolving that SKU individually.

If the client reports multiple SKUs with the same symptom, it's worth compiling the full list and escalating it to the technical team at once, rather than handling them one by one in separate tickets.
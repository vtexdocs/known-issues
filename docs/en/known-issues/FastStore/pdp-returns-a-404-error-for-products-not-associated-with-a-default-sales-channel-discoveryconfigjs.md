---
title: 'PDP returns a 404 error for products not associated with a default sales channel (discovery.config.js)'
slug: pdp-returns-a-404-error-for-products-not-associated-with-a-default-sales-channel-discoveryconfigjs
status: PUBLISHED
createdAt: 2026-04-22T20:23:38.202Z
updatedAt: 2026-04-22T20:23:38.202Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: pdp-returns-a-404-error-for-products-not-associated-with-a-default-sales-channel-discoveryconfigjs
locale: en
kiStatus: Backlog
internalReference: 1396347
---

## Summary

FastStore stores have a salesChannel configured in `discovery.config.js` as the default sales policy; therefore, Intelligent Search uses this sales policy to generate PLPs and PDPs, ignoring query parameters at render time. Therefore, PDPs for products that exist **only in a secondary commercial policy** (for example, a member-exclusive product) return a 404 error, even when:

- the user is logged in and belongs to the corresponding cluster (e.g., “members”)
- the product appears in the PLP when you add `?sc={{id}}` to the URL

Currently, the product must be available in the sales channel configured in `discovery.config.js` for the PDP route to exist. At present, `discovery.config.js` allows for the configuration of a single sales policy.

## Simulation

1. Configure a FastStore project with a fixed default trade policy/sales channel (for example, SC 1) in `discovery.config.js`, using Intelligent Search as the search engine.
2. Register one or more products that are listed only in a secondary trade policy (for example, SC 3), linked to a specific customer cluster (members, VIP, early access, etc.).
3. Verify, via a checkout simulation, whether the SKU is delivered **only under the secondary policy** and is not available under the default policy.
4. In the store, access a product listing page (PLP) that forces the secondary policy via `?sc=` in the URL and verify that the product appears normally in the results.
5. Log in with a user belonging to the client cluster associated with this policy (for example, with the “member” flag set to true).
6. Without forcing `?sc={{id}}` in the URL, note that the session continues to use the default business policy defined in `discovery.config.js` via the `ValidateSession` event in the DevTools Network tab, and that the unique product from the secondary policy does not appear in the PLP/search results.
7. Try accessing this product's product detail page (via the link or by entering the friendly URL).

The PDP returns a 404 error, even though the product is available in the secondary inventory and the user is correctly targeted.

## Workaround

N/A
---
title: 'Mercado Livre Error when accepting Buybox/ME2 suggestion: BRAND attribute required'
slug: mercado-livre-error-when-accepting-buyboxme2-suggestion-brand-attribute-required
status: PUBLISHED
createdAt: 2026-04-30T19:15:21.000Z
updatedAt: 2026-06-09T19:17:51.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-error-when-accepting-buyboxme2-suggestion-brand-attribute-required
locale: en
kiStatus: Backlog
internalReference: 1399947
---

## Summary

When attempting to accept a Buybox/ME2 suggestion, the operation may fail with an error indicating that the `BRAND` attribute must be created. As a result, the product cannot be configured for ME2, preventing the opt-in process for affected SKUs, even when category mapping and other required configurations have already been completed.

## Simulation

1. Access a product eligible for Buybox/ME2.
2. Attempt to accept the Buybox/ME2 suggestion.
3. Observe the validation returned by the integration. The operation is blocked and the following message is displayed: "The following attributes must be created to configure ME2: BRAND."

## Workaround

Open a support request so the SKU can be published manually by the support team.
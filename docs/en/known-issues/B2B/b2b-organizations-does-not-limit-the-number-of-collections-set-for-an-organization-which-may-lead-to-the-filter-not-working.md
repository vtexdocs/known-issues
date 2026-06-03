---
title: 'B2B Organizations does not limit the number of collections set for an organization, which may lead to the filter not working'
slug: b2b-organizations-does-not-limit-the-number-of-collections-set-for-an-organization-which-may-lead-to-the-filter-not-working
status: PUBLISHED
createdAt: 2026-06-03T20:26:23.000Z
updatedAt: 2026-06-03T20:26:23.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-does-not-limit-the-number-of-collections-set-for-an-organization-which-may-lead-to-the-filter-not-working
locale: en
kiStatus: Backlog
internalReference: 1416519
---

## Summary

In stores using B2B Suite, if too many collections are added to the Organization configuration, the search page filtering may not work, which causes all products to be returned, including those that are not set on any collection set for the user's organization.

This occurs because too many `productClusterIds` are added to the segment, causing the `vtex_segment` cookie to exceed size limits and facets to be dropped; any flow depending on the segment cookie can be affected, not just search.

The B2B Organizations app should limit the number of collections added to an Organization upon creation/update to avoid this scenario, which it currently doesn't do.

## Simulation

- Prerequisites:
  - B2B Suite installed and configured with many product clusters assigned to the buyer’s organization.
  - Clean workspace using B2B native theme, no custom apps.

- Steps:
  - Log in as a user which has access to the organization configured with many Collections assigned.
  - Load the storefront and perform a full-text search which should return only products from the assigned collections.
  - Check that products from other collections are also returned.
  - Inspect:
    - `GET /api/sessions?items=*` and confirm `public.facets` and `search.facets` contain the `porductClusterIds` from the collection.
    - `GET /api/segments` and observe the segment is returned without facets, indicating the cookie did not carry them due to size limits. In the console, you can also see a Set-Cookie size limit error.
    - `productSearch` request is sent with a segment lacking facets, and search returns products not in the organization's allowed collections.

## Workaround

Reduce the number of collections assigned to the organization (consolidate or group collections)
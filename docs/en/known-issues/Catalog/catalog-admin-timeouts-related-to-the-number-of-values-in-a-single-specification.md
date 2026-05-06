---
title: 'Catalog admin timeouts related to the number of values in a single specification'
slug: catalog-admin-timeouts-related-to-the-number-of-values-in-a-single-specification
status: PUBLISHED
createdAt: 2021-09-20T23:01:28.000Z
updatedAt: 2025-10-02T23:00:36.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-admin-timeouts-related-to-the-number-of-values-in-a-single-specification
locale: en
kiStatus: Backlog
internalReference: 433664
---

## Summary

There is no limit on the registration of specification fields, which can generate timeouts in the catalog admin.

## Simulation

- Register a huge number of fields (i.e., 1000+) into a single specification.
- Open the admin of this specification, or try to change a product that contains this specification.
- Receive a 404 or 504 request's response.

## Workaround

Prevent: Do not register too many values in a single specification.
Fix: Deactivate the specification and register the values in several specifications, preferably distributed in different categories.
Tip: Don't concatenate specifications, especially in the root category
---
title: 'Magazine Luiza Bridge error: “Request blocked by marketplace CDN'
slug: magazine-luiza-bridge-error-request-blocked-by-marketplace-cdn
status: PUBLISHED
createdAt: 2025-11-18T17:40:24.518Z
updatedAt: 2025-11-18T17:40:24.518Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magazine-luiza-bridge-error-request-blocked-by-marketplace-cdn
locale: en
kiStatus: Backlog
internalReference: 1327151
---

## Summary


Some SKU/Catalog update requests sent from VTEX Bridge to Magazine Luiza are being blocked by the marketplace’s CDN/WAF.
In these cases, Bridge displays:
**“Could not complete the request. Request blocked by the marketplace CDN.”**
This behavior occurs mainly when the payload includes images with filename patterns that Magalu rejects, such as specific character sequences (e.g., `--1-`).


#### Simulation



- In Bridge, attempt to send the affected SKU/product to Magalu.
- Bridge returns:
**“Could not complete the request. Request blocked by the marketplace CDN.”**


#### Workaround



- Rename the image files to remove disallowed patterns (e.g., remove `--1-`).
- Update the catalog images, clear caches if needed, and resend the SKU through Bridge.




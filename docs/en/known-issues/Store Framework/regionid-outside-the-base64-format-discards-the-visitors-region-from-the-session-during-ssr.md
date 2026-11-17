---
title: "region_id outside the Base64 format discards the visitor's region from the session during SSR"
slug: regionid-outside-the-base64-format-discards-the-visitors-region-from-the-session-during-ssr
status: PUBLISHED
createdAt: 2026-11-18T00:45:14.000Z
updatedAt: 2026-11-18T00:45:14.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: regionid-outside-the-base64-format-discards-the-visitors-region-from-the-session-during-ssr
locale: en
kiStatus: Backlog
internalReference: 1486293
---

## Summary

When the PDP URL includes the `region_id` parameter and its value does not follow the expected format (Base64 of `vtex:{ISO-3 country}:{postal code}`), the visitor loses the regionalization they already had in the session. The render-server replaces the visitor's segment with one from a new, empty session, and the `segmentToken` comes out without `regionId`. The PDP is rendered without regionalization (price and availability differ from what the visitor would see without the parameter).


This mostly shows up in stores running Google regional ads where the regions were created manually in Merchant Center: Google appends the registered ID to the URL (for example, `?region_id=007979`), which does not follow the platform contract.

## Simulation

1. Open a PDP with a regionalized session (for example, by entering a postal code or using seller regionalization) and note the price and availability.
2. In the same session, open the same PDP adding `?region_id=<value outside the format>`, for example `?region_id=007979`.
3. Notice that the PDP is rendered without regionalization and that the `segmentToken` has regionId null.
4. For comparison, open it with a region_id in the correct format (Base64 of `vtex:BRA:<postal code>`) or without the parameter: the region is kept.

## Workaround

N/A
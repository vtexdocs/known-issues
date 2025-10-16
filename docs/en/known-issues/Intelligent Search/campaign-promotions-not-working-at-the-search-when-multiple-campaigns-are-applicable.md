---
title: Campaign promotions not working at the Search when multiple campaigns are applicable
slug: campaign-promotions-not-working-at-the-search-when-multiple-campaigns-are-applicable
status: PUBLISHED
createdAt: 2025-10-16T20:46:12.130Z
updatedAt: 2025-10-16T20:46:12.130Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: campaign-promotions-not-working-at-the-search-when-multiple-campaigns-are-applicable
locale: en
kiStatus: Backlog
internalReference: 1207746
---

## Summary


When more than one campaign value is present in the session/segment, promotions are not triggered correctly. None of the campaigns will be considered.


#### Simulation



- Create two campaigns for a given context;
- Create a promotion with a percentage discount for any of these campaigns;
- Login with a customer that is able to receive both campaigns;
- Observe the Segment cookie with two campaigns, following the pattern `"aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa,bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb"` for its string;
- Observe the promotion won't be applied to the expected products.


#### Workaround


There's no workaround available, but the promotion will work properly if only a single campaign is applied to the context.




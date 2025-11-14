---
title: 'Expired temporary redirects not pointing back to old route'
slug: expired-temporary-redirects-not-pointing-back-to-old-route
status: PUBLISHED
createdAt: 2025-11-14T19:40:27.497Z
updatedAt: 2025-11-14T19:40:27.497Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: expired-temporary-redirects-not-pointing-back-to-old-route
locale: en
kiStatus: Backlog
internalReference: 898062
---

## Summary



When a redirect route is created, the internal route is removed, but, when the redirect expires the route doesn't come back


#### Simulation




- Create a temporary redirect
- Check and this will redirect properly
- After the expiration date, check it again
- The original path/route will not load properly


#### Workaround


The route will only work again if you create it once again in the rewriter


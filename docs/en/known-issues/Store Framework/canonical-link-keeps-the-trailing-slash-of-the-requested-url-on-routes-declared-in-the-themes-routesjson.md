---
title: "canonical link keeps the trailing slash of the requested URL on routes declared in the theme's routes.json"
slug: canonical-link-keeps-the-trailing-slash-of-the-requested-url-on-routes-declared-in-the-themes-routesjson
status: PUBLISHED
createdAt: 2026-10-08T22:08:50.000Z
updatedAt: 2026-10-08T22:08:50.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: canonical-link-keeps-the-trailing-slash-of-the-requested-url-on-routes-declared-in-the-themes-routesjson
locale: en
kiStatus: Backlog
internalReference: 1472057
---

## Summary

On Store Framework pages whose route is declared only in the theme’s `store/routes.json` (no `canonical` set), the `<link rel="canonical">` is built from the URL that was requested, trailing slash included. Both `/my-page` and `/my-page/` return 200 and each declares itself as canonical:

- `/my-page` returns `<link rel="canonical" href="https://store.example.com/my-page"/>`
- `/my-page/` returns `<link rel="canonical" href="https://store.example.com/my-page/"/>`

The canonical therefore does not consolidate the two URLs, and search engines may index them as duplicates. Product and category pages are not affected (their canonical is normalized without the slash).

## Simulation

1. In a Store Framework theme, declare a route in store/routes.json without a `canonical`, for example

2. Publish and open the page.
3. Request the page without and with a trailing slash and read the canonical tag: `curl -s https://<store>/my-page | grep -o '<link[^>]*rel="canonical"[^>]*>'` and `curl -s https://<store>/my-page/ | grep -o '<link[^>]*rel="canonical"[^>]*>'`.
4. Expected: the same canonical for both (without the trailing slash). Actual: each response echoes the requested path.

## Workaround

Declare the route in the theme’s `store/routes.json` with an optional trailing slash in `path` and an explicit `canonical` without it:

```
"store.custom#my-page": { "path": "/my-page(/)", "canonical": "/my-page" }
```


With this, both `/my-page` and `/my-page/` return 200 and declare `https://store.example.com/my-page` as canonical. Setting `canonical` equal to `path` is rejected by the build, which is why the optional `(/)` is needed.
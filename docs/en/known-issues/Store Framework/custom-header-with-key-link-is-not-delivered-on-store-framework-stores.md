---
title: 'Custom header with key "Link" is not delivered on Store Framework stores'
slug: custom-header-with-key-link-is-not-delivered-on-store-framework-stores
status: PUBLISHED
createdAt: 2026-11-16T20:03:20.000Z
updatedAt: 2026-11-16T20:03:20.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: custom-header-with-key-link-is-not-delivered-on-store-framework-stores
locale: en
kiStatus: Backlog
internalReference: 1485532
---

## Summary

In Store Framework stores, merchants can add custom HTTP response headers in the Admin (Store Settings > Advanced settings > Custom headers). If a custom header uses the key `Link`, its value never reaches the response. The `Link` header returned by the store contains only the platform’s default resource hints (`dns-prefetch`/`preconnect` for the store’s assets domain, Google Analytics, Google Tag Manager and Facebook). The value configured by the merchant is discarded.
Custom headers with any other key work as expected.

## Simulation

1. In the Admin, go to Store Settings > Storefront > Advanced settings > Custom headers.
2. Add a new header:
  - ID: any label (for example, `my-link-header`)
  - Key: `Link`
  - Value: any valid `Link` value (for example, `</about>; rel="related"`)

3. Save the settings and wait for them to propagate.
4. Request any store page straight from the origin and check the response headers.
5. The `Link` header contains only the default values (`{account}.vtexassets.com`, `google-analytics.com`, `googletagmanager.com`, `connect.facebook.net`). The configured value is missing.
6. For comparison, add another custom header with a different key (for example, `X-Test-Header`). That header appears in the response.

## Workaround

There is no workaround to deliver a custom value in the HTTP `Link` response header.

If the merchant’s use case also accepts the relation declared in the HTML, it can be added as a `<link>` tag inside `<head>` (for example, `<link rel="related" href="/about">`) through a pixel app. This does not replace the HTTP header for clients that read response headers only.
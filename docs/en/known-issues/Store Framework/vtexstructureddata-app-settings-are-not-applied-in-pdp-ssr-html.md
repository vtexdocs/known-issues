---
title: 'vtex.structured-data App settings are not applied in PDP SSR HTML'
slug: vtexstructureddata-app-settings-are-not-applied-in-pdp-ssr-html
status: PUBLISHED
createdAt: 2026-11-12T22:45:53.000Z
updatedAt: 2026-11-12T22:45:53.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: vtexstructureddata-app-settings-are-not-applied-in-pdp-ssr-html
locale: en
kiStatus: Backlog
internalReference: 1484644
---

## Summary

The `vtex.structured-data` app generates the JSON-LD (schema.org) for store pages, consumed by search engines, Google Merchant Center and AI agents. The app reads its own settings (`gtinValue`, `disableProductStructuredData`, etc.) through a component-level GraphQL query (`useAppSettings`). The render-server does not execute these queries during server-side rendering.

As a result, the SSR HTML always uses the code defaults, and the store’s settings are only applied in the browser after hydration. Most consumers of this data read only the server HTML, so in practice **the settings have no effect**. For example, the GTIN is output as the SKU ID with leading zeros even when EAN is configured in the app settings.

The issue affects every account using Store Framework, since `vtex.structured-data` is a dependency of the framework.

## Simulation

1. In a Store Framework account, open the Admin and go to the `vtex.structured-data` app settings.
2. Configure `gtinValue` to use EAN (or enable `disableProductStructuredData`).
3. Make sure the `vtex.store` flag **“Enable executing all GraphQL queries on the product page”** (`enableFullSSROnProduct`) is **not** enabled.
4. Open a PDP and inspect the raw server response (`curl` or “View source”, not the rendered DOM) for the `application/ld+json` script.
5. Observe that the JSON-LD uses the default values: `gtin` is the SKU ID with leading zeros, and the PDP JSON-LD is still present.
6. Inspect the DOM after hydration. The settings are only applied client-side.

## Workaround

Enable **“Enable executing all GraphQL queries on the product page”** (`enableFullSSROnProduct`) in the `vtex.store` settings. With it on, the server runs all the PDP’s GraphQL queries before responding, so the structured-data settings are applied in the SSR HTML.

Limitations:

- It can increase render time and TTFB on the PDP, in proportion to the number of blocks that run a query.
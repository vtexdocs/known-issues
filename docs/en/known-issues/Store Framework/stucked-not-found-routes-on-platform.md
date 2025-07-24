---
title: 'Stucked not found routes on platform'
id: iAGlRJtK1KMBGxH2tAsrX
status: PUBLISHED
createdAt: 2023-04-19T15:54:48.241Z
updatedAt: 2024-10-14T14:15:52.667Z
publishedAt: 2024-10-14T14:15:52.667Z
firstPublishedAt: 2023-04-19T15:54:48.788Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: stucked-not-found-routes-on-platform
locale: en
kiStatus: Fixed
internalReference: 793457
---

## Summary


Due lack of notifications and cache issues, some routes are cached in not found in vbase and in rewriter by store-indexer impacting the experience when these routes are available again, being necessary to send a new indexation and new notifications or wait for the store-indexer time to trigger the new indexing again


##

## Simulation


This is an intermittent issue, so, basically, it's not easy to simulate, but once you store routes on vbase and/or rewriter as not found, there's a chance to not receive a notification in a short time to update that


##

## Workaround


For products,

- Try to not store routes inside the rewriter, unless it's strictly necessary
- Check if the route is stored in rewriter as not found (type: notFoundProduct) if it is updated for new values:

`{`
`  internal{`
`    get(path: "/juego-de-cama-gris-extradoble-fenissa-082031/p"){`
`      from`
`      resolveAs`
`      type`
`    }`
`  }`
`}`
  - If the route is stuck in rewriter with not found, you can simply run this mutation to delete that from there:

`mutation{`
`  internal{`
`    delete(path: "slugOfYourProduct/p"){`
`      from`
`    }`
`  }`
`}`
- Check if page type API is stuck in a not found and notify the catalog team: `https://.vtexcommercestable.com.br/api/catalog_system/pub/portal/pagetype/`
- Reset or remove routes on vbase going into the rewriter app - admin/apps/vtex.rewriter@x.x.x/setup/ - and updating their routes version to a different one - No content will be lost
- Reindex the routes using store-indexer
- Save the product to notify the broadcaster directly that the product has changed and then it needs to send new notifications




---
title: 'VBase responds 404 to vtex.pages-graphql'
id: 1uoRka5Jwkvk5EQhmffyMO
status: PUBLISHED
createdAt: 2023-05-09T13:50:40.063Z
updatedAt: 2023-06-12T14:57:55.479Z
publishedAt: 2023-06-12T14:57:55.479Z
firstPublishedAt: 2023-05-09T13:50:40.632Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: vbase-responds-404-to-vtexpagesgraphql
locale: en
kiStatus: Backlog
internalReference: 822031
---

## Summary


VBase is responding 404 to the vtex.pages-graphql app installed in the account, for some reason, the app is not being found and, as a consequence, the shopper will be impacted by not being able to access a specific product or page in the store. This 404 error is cached for 2 hours, so the problem typically stops after the cache ends. The problem is intermittent and we were not able to find the reason why it is happening yet.

Incident report: https://io.vtex.com.br/incident-report/2023-04-04-VTEX-IO-Intermittent-Pageload-Failures.pdf


##

## Simulation


It is hard to simulate because it is intermittent and there's not a specific page or product. Normally you can reproduce this when navigating through the store and suddenly one random product or page will not load completely. Once you reload the page the problem will solve itself.


##

## Workaround


N/A






---
title: 'Builder-hub error when trying to publish an app'
slug: builderhub-error-when-trying-to-publish-an-app
status: PUBLISHED
createdAt: 2025-07-18T15:48:29.000Z
updatedAt: 2026-08-24T17:27:19.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: builderhub-error-when-trying-to-publish-an-app
locale: en
kiStatus: Backlog
internalReference: 1262332
---

## Summary

When trying to publish an app, you may encounter a builder-hub error. This intermitency normally happens in apps with self-dependency. You may see one of the following errors:


```
error: node@4.x builder failed to install dependencies through yarn (retries=3)yarn errors:An unexpected error occurred: "http://.vtexassets.com/_v/public/typings/v1//public/@types/: Request failed \"500 Internal Server Error\"". vtex.builder-hub@0.309.0
```


 OR

```
Failed to fetch pages build data for <app>@<version>. Caused by: timeout of XXXXms exceeded
```

## Simulation

It is not a simple problem to reproduce; it is intermittent.
The best way to check for intermittent issues is to see if other apps are crashing during the same time window on #vtex-io-3p-releases

## Workaround

This may be solved after some retries, but if it persists, open a ticket to Product Support to solve it
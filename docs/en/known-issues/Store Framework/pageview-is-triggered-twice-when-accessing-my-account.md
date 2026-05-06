---
title: 'pageView is triggered twice when accessing My Account'
slug: pageview-is-triggered-twice-when-accessing-my-account
status: PUBLISHED
createdAt: 2023-07-03T16:32:48.000Z
updatedAt: 2023-07-03T16:32:48.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: pageview-is-triggered-twice-when-accessing-my-account
locale: en
kiStatus: Backlog
internalReference: 854480
---

## Summary

When accessing the My Account, the pageView event is triggered twice, duplicating the data on Analytics.

## Simulation

- Configure the app Google Tag Manager,
- Access the My Account;
- Open the browser's Developer Tools and type "dataLayer" on Console; there will be two pageView events.

## Workaround

N/A
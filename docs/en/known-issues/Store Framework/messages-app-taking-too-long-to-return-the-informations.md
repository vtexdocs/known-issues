---
title: 'Messages app taking too long to return the informations'
slug: messages-app-taking-too-long-to-return-the-informations
status: PUBLISHED
createdAt: 2022-04-26T20:00:55.000Z
updatedAt: 2024-01-30T14:16:42.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: messages-app-taking-too-long-to-return-the-informations
locale: en
kiStatus: Backlog
internalReference: 567305
---

## Summary

In the indexation process, we call the messages app to save translated information on the products, the main issue is that the requests are taking too long to return and with that, some stores that have lots of languages either do not index fully or have their indexations stuck.

## Simulation

Check any store that has a great amount of languages, more than 10 and it will start to slow the response of the messages.
It can reflect other systems that depend on the messages to translate information.

## Workaround

N/A
---
title: 'Requests failing with timeout during app cold start'
slug: requests-failing-with-timeout-during-app-cold-start
status: PUBLISHED
createdAt: 2023-04-13T15:42:30.000Z
updatedAt: 2026-07-24T22:42:22.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: requests-failing-with-timeout-during-app-cold-start
locale: en
kiStatus: Backlog
internalReference: 789499
---

## Summary

When an app does not receive requests for some time, it enters a cold start state. Requests sent to the app while it is "waking up" may fail due to a timeout. As a result, some events may never be successfully delivered. So some events/requests to the affected app may be lost silently when the app is in cold start and takes too long to respond.

## Simulation

This is an intermittent behavior, so it is not possible to simulate.

## Workaround

In some situations, you can reprocess the scenario, since the app is already "awake" at that point.
---
title: 'Search analytics report divergences between versions with/without funnel metrics'
slug: search-analytics-report-divergences-between-versions-withwithout-funnel-metrics
status: PUBLISHED
createdAt: 2024-02-09T19:01:14.000Z
updatedAt: 2024-02-09T19:01:14.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-analytics-report-divergences-between-versions-withwithout-funnel-metrics
locale: en
kiStatus: Backlog
internalReference: 980297
---

## Summary

The search analytics report exported as CSV may diverge between its version with funnel metrics and its version without.

The regular report (without funnel metrics) is exported using the same method as the data presented on the page itself, but the export with funnel metrics uses a different method to compute additional data, which sometimes can result in different information.

## Simulation

Export the two versions of the report for the same period and compare the listed search terms and the first columns between them.

## Workaround

N/A
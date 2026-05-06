---
title: 'Sales Performance Calendar has a problem with some European time zones'
slug: sales-performance-calendar-has-a-problem-with-some-european-time-zones
status: PUBLISHED
createdAt: 2022-12-16T20:25:00.000Z
updatedAt: 2023-03-06T16:20:24.000Z
contentType: knownIssue
productTeam: Analytics
author: 2mXZkbi0oi061KicTExNjo
tag: Analytics
slugEN: sales-performance-calendar-has-a-problem-with-some-european-time-zones
locale: en
kiStatus: Backlog
internalReference: 718470
---

## Summary

In our **Sales Performance** Dashboard we make available within the filters, the possibility of selecting a personalized period to validate the corresponding information. However, at this moment we have a problem with our calendar when it comes to some **European time zones** (so far we have identified the problem in **UK and Portugal only**).

The problem is that for the month of **October**, specifically, the **30th** is being hidden, in addition to this, in the case of selecting a period that includes said day at a general level, generates a problem in the analysis of the data for the selected period.

## Simulation

1. You need to change your timezone on your computer to the United Kingdom or Portugal
2. Then, go to the calendar on **Sales Dashboard specifically in October**
3. Try to find day **30** on the calendar.

## Workaround

When you are in a time zone that presents this problem, it is recommended to select a different period to avoid misbehavior of the results.
---
title: 'UI gets frozen if an error occurs in the place order internal process'
slug: ui-gets-frozen-if-an-error-occurs-in-the-place-order-internal-process
status: PUBLISHED
createdAt: 2023-11-28T18:55:39.000Z
updatedAt: 2023-11-28T18:55:39.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-gets-frozen-if-an-error-occurs-in-the-place-order-internal-process
locale: en
kiStatus: Backlog
internalReference: 943771
---

## Summary

When an error occurs during the place order internal process, UI gets frozen in loading with no error/warning message.

## Simulation

This behavior was seen when Tax Service times out during the place order request, but it's not limited to this.

## Workaround

Refresh the page.
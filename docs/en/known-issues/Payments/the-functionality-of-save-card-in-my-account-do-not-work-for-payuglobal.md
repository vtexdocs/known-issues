---
title: 'The functionality of Save Card in My Account do not work for PayUGlobal'
slug: the-functionality-of-save-card-in-my-account-do-not-work-for-payuglobal
status: PUBLISHED
createdAt: 2020-11-25T17:22:09.000Z
updatedAt: 2026-06-05T21:14:04.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-functionality-of-save-card-in-my-account-do-not-work-for-payuglobal
locale: en
kiStatus: No Fix
internalReference: 309354
---

## Summary

When a customer attempts to **save a credit card in My Account** on a store using the **PayU Global** connector, the operation fails with an error and the card is not saved. A validation transaction of **R$ 1.50** is created and immediately cancelled as part of the save card flow, but the process does not complete successfully.

## Simulation

Unable to reproduce in a controlled environment. To observe the issue, create an account on a store using the PayU Global connector and attempt to save a credit card in My Account. The operation will fail and a cancelled R$ 1.50 validation transaction will be visible in the Gateway.

## Workaround

There is no workaround available.
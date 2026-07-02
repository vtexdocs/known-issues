---
title: '3DS2 Parameters not being validated'
slug: 3ds2-parameters-not-being-validated
status: PUBLISHED
createdAt: 2021-03-26T00:14:41.000Z
updatedAt: 2026-07-02T16:58:34.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: 3ds2-parameters-not-being-validated
locale: en
kiStatus: No Fix
internalReference: 349166
---

## Summary

Debit transactions processed through CieloV3 with 3DS2 authentication are intermittently canceled without the customer completing any error flow. The failure occurs when Cielo returns null values for the 3DS2 authentication parameters, causing the authorization to be rejected. The issue affects debit transactions in general, regardless of card brand or issuing bank.

## Simulation

Unable to reproduce. The failure occurs randomly — some debit transactions complete successfully while others fail under identical conditions.

## Workaround

Not available.
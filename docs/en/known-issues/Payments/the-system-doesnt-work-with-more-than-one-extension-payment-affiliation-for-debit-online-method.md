---
title: "The system doesn't work with more than one extension payment affiliation for debit online method"
slug: the-system-doesnt-work-with-more-than-one-extension-payment-affiliation-for-debit-online-method
status: PUBLISHED
createdAt: 2020-12-28T21:11:38.000Z
updatedAt: 2026-06-05T21:05:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-system-doesnt-work-with-more-than-one-extension-payment-affiliation-for-debit-online-method
locale: en
kiStatus: No Fix
internalReference: 319750
---

## Summary

When more than one **extension payment affiliation** is configured for the **online debit** payment method using different acquirers, transactions may be routed to the **wrong affiliation** intermittently. This means a payment intended for one acquirer can end up being processed by another, causing inconsistent behavior at checkout.

## Simulation

Unable to reproduce consistently in a controlled environment. The issue manifests intermittently in production when two or more online debit payment rules are configured with different affiliations of the same type.

## Workaround

Use only **one affiliation** per online debit payment rule, or disable the additional affiliations. Configuring multiple extension affiliations for the same payment method is not supported reliably.
---
title: 'Inconsistency in creating transactions when the affiliation processing the PSE payment method is switched'
slug: inconsistency-in-creating-transactions-when-the-affiliation-processing-the-pse-payment-method-is-switched
status: PUBLISHED
createdAt: 2022-09-14T22:29:45.000Z
updatedAt: 2026-07-02T15:52:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-in-creating-transactions-when-the-affiliation-processing-the-pse-payment-method-is-switched
locale: en
kiStatus: No Fix
internalReference: 658378
---

## Summary

When a store has two payment conditions configured for the PSE payment method, each processed by a different connector (PSE and MercadoPago), switching between those conditions during checkout can intermittently cause a transaction creation failure. The customer sees an error on the checkout page, and the resulting transaction record becomes inaccessible in the admin.

## Simulation

Unable to reproduce consistently. The failure occurs intermittently when the customer switches between PSE payment conditions backed by different connectors during the same checkout session.

## Workaround

Not available.
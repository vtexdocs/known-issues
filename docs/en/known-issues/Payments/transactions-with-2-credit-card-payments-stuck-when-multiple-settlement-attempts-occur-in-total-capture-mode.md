---
title: 'Transactions with 2 credit card payments stuck when multiple settlement attempts occur in Total capture mode'
slug: transactions-with-2-credit-card-payments-stuck-when-multiple-settlement-attempts-occur-in-total-capture-mode
status: PUBLISHED
createdAt: 2026-07-20T20:37:30.000Z
updatedAt: 2026-07-20T20:37:30.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-2-credit-card-payments-stuck-when-multiple-settlement-attempts-occur-in-total-capture-mode
locale: en
kiStatus: Backlog
internalReference: 1436981
---

## Summary

Transactions can become stuck in `Approved` or `Settling`, without progressing to a final `Finished` or `Canceled` state, when the following conditions are met:

- The transaction contains 2 different credit card payments;
- Payments are processed under the Total settlement model;
- Payments receive more than one settlement attempt, not triggered by auto-settle.

The first settlement attempt settles the total transaction amount on both payments. Subsequent attempts do not visibly fail, but since there is no remaining value to capture, the transaction flow remains stuck.

## Simulation

It is not possible to simulate

## Workaround

No workaround available
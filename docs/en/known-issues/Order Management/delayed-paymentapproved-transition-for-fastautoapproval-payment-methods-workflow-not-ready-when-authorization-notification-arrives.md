---
title: 'Delayed "payment-approved" transition for fast/auto-approval payment methods (workflow not ready when authorization notification arrives)'
slug: delayed-paymentapproved-transition-for-fastautoapproval-payment-methods-workflow-not-ready-when-authorization-notification-arrives
status: PUBLISHED
createdAt: 2026-09-11T20:31:22.000Z
updatedAt: 2026-09-11T20:31:22.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delayed-paymentapproved-transition-for-fastautoapproval-payment-methods-workflow-not-ready-when-authorization-notification-arrives
locale: en
kiStatus: Backlog
internalReference: 1460238
---

## Summary

We identified an issue affecting orders paid with fast/auto-approval payment methods (e.g. Promissory, PSE, and similar instant-confirmation methods) where the payment authorization notification arrives faster than the order's workflow state machine is ready to process it.

When this race condition happens, the automatic transition from `payment-pending` to `payment-approved` fails with an error such as:

"Automatic transition failed. Current retry counter is 1. Failed with message: Failure to run the action 'approve-payment'. Content: '{"error":{"code":"001","message":"Unable to communicate with seller {sellerId}"},"operationId":"{operationId}","fields":null}'"

The order only recovers when the workflow engine's next scheduled retry runs, by default, **900 seconds (15 minutes)** after the failed attempt, with no override configured for this transition. During this window, the order remains stuck showing an earlier status even though payment was already authorized.

This is distinct from delays caused by the payment gateway/anti-fraud analysis on card payments, in card scenarios, the workflow correctly waits for and reacts to the actual authorization time, and no bug is present. This KI covers only the auto-approval-method race condition.

## Simulation

1. Place an order using a payment method with instant/automatic approval (e.g. Promissory, PSE).
2. If the authorization confirmation arrives before the order's workflow step is ready to process the `approve-payment` transition, the automatic transition fails with the "Unable to communicate with seller" error above.
3. The order's status only updates to "payment approved" after the next scheduled retry (~15 minutes later, default retry policy), even though the payment was authorized immediately.

## Workaround

We do not have a WA at the moment. The order does self-recover automatically at the next scheduled retry (up to ~15 minutes), so no manual intervention is required, but the account/end customer experiences the order remaining in a "not yet approved" state for that window.
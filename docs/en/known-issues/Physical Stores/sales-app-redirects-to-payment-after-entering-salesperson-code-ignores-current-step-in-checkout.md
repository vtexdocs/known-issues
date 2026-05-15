---
title: 'Sales App redirects to /payment after entering salesperson code (ignores current step in Checkout)'
slug: sales-app-redirects-to-payment-after-entering-salesperson-code-ignores-current-step-in-checkout
status: PUBLISHED
createdAt: 2026-05-15T19:37:16.000Z
updatedAt: 2026-05-15T19:37:16.000Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: sales-app-redirects-to-payment-after-entering-salesperson-code-ignores-current-step-in-checkout
locale: en
kiStatus: Backlog
internalReference: 1407771
---

## Summary

In Sales App, after the salesperson code is entered, the flow is incorrectly redirected straight to the payment step, skipping the expected client information step. The visible symptom is an abrupt navigation to `/payment` regardless of the user’s current page (e.g., from Cart).

## Simulation

- Create a cart in the sales app.
- Click on "Add" for vendor code. A side drawer will open where you can enter the salesperson code.
- Click on "Apply"


Observe that the app navigates directly to the Checkout payment page (/payment), skipping the client information step, even if you were not on a step that should transition to payment.

## Workaround

Do not enter the vendor code on the `/cart` step. Wait until you reach the `/order-summary` page.
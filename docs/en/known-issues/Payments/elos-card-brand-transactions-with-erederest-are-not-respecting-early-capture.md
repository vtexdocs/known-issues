---
title: "Elo's card brand transactions with ERedeRest are not respecting early capture"
slug: elos-card-brand-transactions-with-erederest-are-not-respecting-early-capture
status: PUBLISHED
createdAt: 2021-03-30T23:57:36.000Z
updatedAt: 2026-06-05T21:25:49.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: elos-card-brand-transactions-with-erederest-are-not-respecting-early-capture
locale: en
kiStatus: No Fix
internalReference: 350814
---

## Summary

For transactions processed through the **ERedeRest** connector using the **Elo** card brand, the **early capture** configuration is not respected. The transaction is captured **immediately after authorization**, regardless of the delay configured for early capture.

## Simulation

Create a transaction using the ERedeRest affiliation with early capture configured and process a payment with an **Elo** card. The capture will occur immediately after authorization instead of waiting for the configured delay.

## Workaround

N/A
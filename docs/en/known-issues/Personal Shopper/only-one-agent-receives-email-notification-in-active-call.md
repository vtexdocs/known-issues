---
title: 'Only one agent receives email notification in active call'
slug: only-one-agent-receives-email-notification-in-active-call
status: PUBLISHED
createdAt: 2025-04-30T16:10:04.000Z
updatedAt: 2026-10-08T16:36:04.000Z
contentType: knownIssue
productTeam: Personal Shopper
author: 2mXZkbi0oi061KicTExNjo
tag: Personal Shopper
slugEN: only-one-agent-receives-email-notification-in-active-call
locale: en
kiStatus: Fixed
internalReference: 1218130
---

## Summary

**Note: Following a recent internal review, we have decided to discontinue Personal Shopper. For this reason, this Known Issue will not be fixed. **
**To learn more about our solution for personalized shopping, check out** **CX Platform****, which supports both the purchase and post-purchase journeys, bringing more agility to the process and potentially increasing sales conversion.**

When manual agent assignment is enabled in Personal Shopper, only one of the agents assigned to a call receives the email notification. The other assigned agents are not notified, so they may miss incoming calls from customers. This behavior is not limited to a specific account.

## Simulation

1. In the Admin, enable manual agent assignment for Personal Shopper.
2. Register at least two agents and assign them to the same [store / queue / session].
3. As a customer, request a Personal Shopper call from the storefront.
4. Check the inbox of each assigned agent:

## Workaround

1. In the Admin, go to [exact menu path, e.g. Personal Shopper > Settings > Agents].
2. Identify the agent who is not receiving email notifications.
3. Delete this agent.
4. Register the agent again, using the same email address and the same settings as before.
5. Save the changes.
6. Request a new call to confirm that all assigned agents receive the email notification.
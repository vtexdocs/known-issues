---
title: 'Wrong error message for place order API when the payload request is invalid'
slug: wrong-error-message-for-place-order-api-when-the-payload-request-is-invalid
status: PUBLISHED
createdAt: 2022-12-01T22:22:32.000Z
updatedAt: 2022-12-01T22:22:40.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: wrong-error-message-for-place-order-api-when-the-payload-request-is-invalid
locale: en
kiStatus: Backlog
internalReference: 709180
---

## Summary

Invalid requests to the "place order" API returns a wrong error message, informing "Invalid id for item" instead of pointing out which information is wrong.

## Simulation

A known scenario is while not sending the "installments" property inside the "paymentData.payments[]" section.

## Workaround

Fixing the payload request is enough to avoid the issue.
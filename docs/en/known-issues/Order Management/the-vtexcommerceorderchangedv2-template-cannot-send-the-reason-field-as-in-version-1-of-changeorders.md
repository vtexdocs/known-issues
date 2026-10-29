---
title: 'The vtexcommerce-order-changed-v2 template cannot send the reason field, as in version 1 of changeOrders.'
slug: the-vtexcommerceorderchangedv2-template-cannot-send-the-reason-field-as-in-version-1-of-changeorders
status: PUBLISHED
createdAt: 2025-09-11T22:22:10.000Z
updatedAt: 2026-10-29T22:03:44.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-vtexcommerceorderchangedv2-template-cannot-send-the-reason-field-as-in-version-1-of-changeorders
locale: en
kiStatus: Fixed
internalReference: 1290946
---

## Summary

It is not possible to send the transactional email "vtexcommerce-order-changed-v2", with the "reason" field, as was done in the "vtexcommerce-order-changed" template, this occurs because the reason field is available in the "OrderModification" API and not in the GetOrder API as it was in change V1..

## Simulation

To simulate this scenario, you need to configure the vtexcommerce-order-changed-v2 template and display the reason field. You'll see that the field will be blank!

## Workaround

We currently have no workaround for this scenario!
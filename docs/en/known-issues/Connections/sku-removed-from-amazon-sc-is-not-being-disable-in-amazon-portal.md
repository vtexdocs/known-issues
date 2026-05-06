---
title: 'SKU removed from Amazon SC is not being disable in Amazon Portal'
slug: sku-removed-from-amazon-sc-is-not-being-disable-in-amazon-portal
status: PUBLISHED
createdAt: 2023-05-18T11:43:16.000Z
updatedAt: 2023-08-14T17:49:57.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: sku-removed-from-amazon-sc-is-not-being-disable-in-amazon-portal
locale: en
kiStatus: Fixed
internalReference: 827760
---

## Summary

We currently have an issue with Amazon integration, when the SKU is removed from an existing Amazon Sales Channel, the disable notification is not being sent to Amazon seller center.

## Simulation

This may cause SKU's without Amazon Sales channel in VTEX, to be activated in Amazon seller center

## Workaround

When this case is identified seller can directly disable the SKU in Amazon seller center, to avoid order's from this SKU.
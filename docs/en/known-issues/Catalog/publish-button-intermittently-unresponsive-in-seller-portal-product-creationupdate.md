---
title: 'Publish button intermittently unresponsive in Seller Portal product creation/update'
slug: publish-button-intermittently-unresponsive-in-seller-portal-product-creationupdate
status: PUBLISHED
createdAt: 2026-03-25T17:03:24.648Z
updatedAt: 2026-03-25T17:03:24.648Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: publish-button-intermittently-unresponsive-in-seller-portal-product-creationupdate
locale: en
kiStatus: Backlog
internalReference: 1383511
---

## Summary

In some Seller Portal accounts, clicking the Publish button during product creation or update intermittently does nothing, and the confirmation modal does not appear. Sometimes, the modal appears, but the next "Update" button performs no action. The issue reproduces across multiple sellers and browsers, but not deterministically, and seems related to a frontend flow where the change is sent but the UI gets stuck. Affected scenarios include creating new products and updating existing ones via the Seller Portal.

## Simulation

1) Open Seller Portal and start creating a new product or open an existing product to edit. Use typical product data;
2) Click the Publish button. Observe that intermittently the confirmation modal does not open and no UI error is shown;
3) Check browser DevTools Network tab (F12), no `createProduct` or `updateProduct` functions were executed in the logs.

## Workaround

Register the product through the Seller Portal API.
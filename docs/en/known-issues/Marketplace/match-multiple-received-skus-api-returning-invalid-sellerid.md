---
title: 'Match Multiple Received SKUs API returning "Invalid sellerId"'
slug: match-multiple-received-skus-api-returning-invalid-sellerid
status: PUBLISHED
createdAt: 2022-01-19T14:16:20.000Z
updatedAt: 2023-10-17T16:26:29.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: match-multiple-received-skus-api-returning-invalid-sellerid
locale: en
kiStatus: Fixed
internalReference: 506660
---

## Summary

The Match Multiple Received SKUs API (doc: https://developers.vtex.com/vtex-rest-api/reference/match-received-skus#matchmultiple) is returning the error message "Invalid sellerId" for any attempt of approving new products, even if the seller is correctly active on the marketplace.

## Simulation

1. Copy the curl of the previous documentation;
2. Paste it on your API tool (postman, insomnia...);
3. Replace the object values with the data from the sku you're trying to approve;
4. Check if the sellerId is active and valid on the marketplace's seller management;
5. The API response should not be:

    "errorResponse": { "Code": 33, "Message": "Invalid sellerId"        }

## Workaround

The Match Received SKUs individually API is working correctly and can replace the previous API to approve new products one by one.
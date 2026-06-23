---
title: 'SKU Insert FIle API may generate duplicate images if it fails'
slug: sku-insert-file-api-may-generate-duplicate-images-if-it-fails
status: PUBLISHED
createdAt: 2026-06-23T16:52:48.000Z
updatedAt: 2026-06-23T16:52:48.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-insert-file-api-may-generate-duplicate-images-if-it-fails
locale: en
kiStatus: Backlog
internalReference: 1425160
---

## Summary

Currently, the INSERT SKU FILE api is used to either insert or associate an image to an sku.

This API, if it fails during the process due to a timeout error, may actually isnert the image with a wrong error feedback.

The image should not be inserted in such cases and this can mislead systems/automations to add the same file twice.

## Simulation

The issue is hard to simulate, so the following is a "most probable" scenario on how to replicate it - keeping in mind that timeouts are not normally replicable in test situations

1 - Using the insert sku file API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file try adding a large file to an sku (largeto increase the leikelyhood of the issue happening)

2 - Also, if you have a slower connection, it is more likely to occur. Furthermore, simultaneous API use also contributes.

3 - If the 500 timeout response is created, check the sku in the catalog UI --> the image will be there, despite the error response

4 - the image should have not been added or deleted after the partial process error.

## Workaround

Add the files via UI/sheet OR check the conditions that cause a timeout and try to avoid them )i.e. use smaller files, space out the API requests more, use a GET after the INSERT in API automations to check if the file was not indeed created, etc..)
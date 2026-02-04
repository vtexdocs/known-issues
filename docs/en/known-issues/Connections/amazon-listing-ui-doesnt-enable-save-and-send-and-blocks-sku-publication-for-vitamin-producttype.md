---
title: "Amazon Listing UI doesn't enable “Save and Send” and blocks SKU publication for VITAMIN productType"
slug: amazon-listing-ui-doesnt-enable-save-and-send-and-blocks-sku-publication-for-vitamin-producttype
status: PUBLISHED
createdAt: 2026-02-04T17:26:25.205Z
updatedAt: 2026-02-04T17:26:25.205Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-ui-doesnt-enable-save-and-send-and-blocks-sku-publication-for-vitamin-producttype
locale: en
kiStatus: Fixed
internalReference: 1347282
---

## Summary


Fix deployed to production. Visually, the main change is the display of the **“Add Vitamins and Minerals”** button, which allows inserting a new block with the related fields.
**Note:** cleaning the SKU data may be necessary if the user encounters new issues while filling in the information.

In the Amazon Listing UI, listings appear as “incomplete” and the “Save and Send” action does not publish the SKU, even when all fields seem filled. The visible symptom is that the button isn’t enabled or, when clicked, nothing is sent, with no validation error shown. The issue has been identified when publishing products with productType “VITAMIN”, where the frontend is not sending some attributes inside nutritional_info correctly to the backend/Amazon, which prevents feed creation/publication.



#### Simulation


Prerequisites:

- Account with Amazon integration enabled
- A product mapped to Amazon with productType set to VITAMIN and nutritional attributes filled.

Steps:
1) Access Admin > Amazon Listing and open the listing (example: /admin/amazon-listing/2564).
2) Fill out all required fields in the UI, including nutritional fields applicable to VITAMIN.
3) Attempt to click “Save and Send”.
4) Observe that:

- The UI may keep the status as “Cadastro incompleto” (incomplete), and/or
- The “Save and Send” button is not enabled or, if enabled and clicked, no publication occurs and no explicit error is shown.
5) Engineering analysis indicates the frontend is not sending some nutritional_info attributes properly (only observed with productType VITAMIN), which blocks publication on submit.


#### Workaround


N/A




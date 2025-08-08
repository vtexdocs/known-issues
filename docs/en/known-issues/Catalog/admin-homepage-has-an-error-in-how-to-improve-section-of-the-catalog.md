---
title: "Admin homepage has an error in 'How to improve' section of the Catalog"
id: 4f8oPMiiCvBMtjFUoOVIGv
status: CHANGED
createdAt: 2021-09-29T14:02:37.809Z
updatedAt: 2022-12-09T18:27:53.061Z
publishedAt: 2021-09-29T14:12:10.806Z
firstPublishedAt: 2021-09-29T14:12:10.806Z
contentType: knownIssue
productTeam: Catalog
author: 0QBQws7rk0t5Mnu8fgfUv
tag: Catalog
slugEN: admin-homepage-has-an-error-in-how-to-improve-section-of-the-catalog
locale: en
kiStatus: Fixed
internalReference: 
---

## Summary

The VTEX Admin homepage contains a section called *How to improve*, which indicates the issues identified in the store and has a link that redirects the user to the module with the issue.

When issues related to the Catalog are identified, users are redirected to the Inventory management module, directly to the popular products that are out of stock.

However, it was observed that when the Catalog section indicated `1` issue encountered, users were redirected to the Catalog in a generic way, without identification of the out-of-stock product. 

This was because the number `1` had been set as the default, even when there was no actual issue with the inventory.

## Simulation

Log in to your **VTEX Admin > Home > How to improve > Catalog**. If the section indicates that `1` issue was found, by clicking on `Popular products without stock` you will be redirected to the Catalog page.

![Como melhorar EN](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/en/known-issues/Catalog/admin-homepage-has-an-error-in-how-to-improve-section-of-the-catalog_1.png)


## Workaround

No action is required from the user as we have already fixed the issue. When no issues are identified, the following message will be displayed:

`We didn't find any issues in your catalog`

![Como melhorar fixed EN](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/en/known-issues/Catalog/admin-homepage-has-an-error-in-how-to-improve-section-of-the-catalog_2.png)


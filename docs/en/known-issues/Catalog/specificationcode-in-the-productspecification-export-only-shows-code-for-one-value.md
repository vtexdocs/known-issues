---
title: 'SpecificationCode in the ProductSpecification export only shows code for one value'
slug: specificationcode-in-the-productspecification-export-only-shows-code-for-one-value
status: PUBLISHED
createdAt: 2026-02-10T11:15:04.258Z
updatedAt: 2026-02-10T11:15:04.258Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: specificationcode-in-the-productspecification-export-only-shows-code-for-one-value
locale: en
kiStatus: Fixed
internalReference: 650961
---

## Summary


In the ProductSpecification sheet, the SpecificationCode column refers to the Id of the value record in the product. In fields where more than one value is selected, the spreadsheet only shows the code of the first value.


#### Simulation



- Download the spreadsheet of a category that has products with more than one value selected in the same field
- Check that the 'SpecificationCode' column will have only one code, despite having more than one value in the SpecificationValue column


#### Workaround


Use the API https://developers.vtex.com/vtex-rest-api/reference/getproductspecificationbyproductid to get the Id




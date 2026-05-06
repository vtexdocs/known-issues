---
title: 'Catalog SKU Specification Export will not always export all the data if the selected category is a department'
slug: catalog-sku-specification-export-will-not-always-export-all-the-data-if-the-selected-category-is-a-department
status: PUBLISHED
createdAt: 2021-11-09T18:18:57.000Z
updatedAt: 2026-02-10T14:17:39.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-sku-specification-export-will-not-always-export-all-the-data-if-the-selected-category-is-a-department
locale: en
kiStatus: Fixed
internalReference: 465445
---

## Summary

Catalog SKU Specification Export, will not always export all the data if selected the department and not the innermost subcategory.

## Simulation

- Go to `admin/Site/ProdutoExportacaoImportacaoEspecificacaoSKUV2.aspx`
- Try to export the specifications from a department with lots of data;
- Export the same data but from all the innermost categories;
- Check data exported, the department may not include all the information.

## Workaround

- Always select the innermost category from the desired department, as described on our UI.
---
title: '"Large Indexed Text" and "Indexed Text" not being changed by Specification Import'
slug: large-indexed-text-and-indexed-text-not-being-changed-by-specification-import
status: PUBLISHED
createdAt: 2026-02-10T21:04:31.140Z
updatedAt: 2026-02-10T21:04:31.140Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: large-indexed-text-and-indexed-text-not-being-changed-by-specification-import
locale: en
kiStatus: Fixed
internalReference: 322657
---

## Summary



Currently, for every product specification import type, the "`Large Indexed Text`" and "`Indexed Text`" are not recognizing changes in specification values via the Product Specification Sheet import.



#### Simulation


1) Create a  "`Large Indexed Text`" or "`Indexed Text`" type product specification.

2) Export a Product Specification sheet of a category in which this specification was created: at ProdutoExportacaoImportacaoEspecificacaoV2.aspx and try to change a specification value.

3) Check your product in which you've requested for changes, none were made.




#### Workaround


Using other text types, such as "`Large Text`" or "`Text`"




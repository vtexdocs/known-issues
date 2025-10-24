---
title: 'Intelligent Search cleanup intermitently failing'
slug: intelligent-search-cleanup-intermitently-failing
status: PUBLISHED
createdAt: 2025-10-23T22:31:17.512Z
updatedAt: 2025-10-23T22:31:17.512Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-cleanup-intermitently-failing
locale: en
kiStatus: Fixed
internalReference: 1225644
---

## Summary


The full clean-up from the Catalog Indexer also triggers the cleaning of the Intelligent Search. This action is intermittently failing, especially for stores with a greater number of products.



#### Simulation


As an intermittent issue, it can't always be reproduced.



- Trigger a full clean-up of the Catalog Indexer.
-

Watch the products count at the Indexing History admin page and/or the number of products using the Intelligent Search API.



#### Workaround


Open a support ticket requesting manual action.




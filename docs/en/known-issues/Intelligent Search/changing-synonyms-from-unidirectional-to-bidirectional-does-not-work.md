---
title: 'Changing synonyms from unidirectional to bidirectional does not work'
slug: changing-synonyms-from-unidirectional-to-bidirectional-does-not-work
status: PUBLISHED
createdAt: 2025-10-16T19:58:43.496Z
updatedAt: 2025-10-16T19:58:43.496Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: changing-synonyms-from-unidirectional-to-bidirectional-does-not-work
locale: en
kiStatus: Backlog
internalReference: 1149205
---

## Summary


Changing the synonym type from unidirectional to bidirectional is not working. After saving the change, it'll be returned to the previous type.


#### Simulation



- Create a unidirectional synonym with terms in both fields and save.
- Edit the synonym type to bidirectional and save.
- Go back to edit the synonym and note that it's still unidirectional but with the terms from the second field copied into the first field.


#### Workaround


Manually erase the second field ("_What the search returns in addition_") before changing the type to unidirectional.




---
title: Wrong translation for different fields under the same original value
slug: wrong-translation-for-different-fields-under-the-same-original-value
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: wrong-translation-for-different-fields-under-the-same-original-value
locale: en
kiStatus: Fixed
internalReference: 982848
---

## Summary


Intelligent Search may use the wrong translation for a field whose value in the primary language is the same between different fields.



#### Simulation


Considering two fields (category and specification) from a product in a store with "nl-BE" as its default language and "fr-BE" as an additional language with the following values:


- category
  - nl-BE = medium
  - fr-BE = moyens
- specification
  - nl-BE = medium
  - fr-BE = midi

In a mismatch, the "fr-BE" translation for the specification field may be wrongly indexed  as "moyens" instead of "midi"



#### Workaround


N/A



---
title: 'MDv2 returns error "504 Gateway Timeout" when we try to update a document passing a symbol or special character.'
slug: mdv2-returns-error-504-gateway-timeout-when-we-try-to-update-a-document-passing-a-symbol-or-special-character
status: PUBLISHED
createdAt: 2025-10-24T22:00:20.251Z
updatedAt: 2025-10-24T22:00:20.251Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: mdv2-returns-error-504-gateway-timeout-when-we-try-to-update-a-document-passing-a-symbol-or-special-character
locale: en
kiStatus: Fixed
internalReference: 852966
---

## Summary


The behavior of the API when trying to update a document that contains a symbol in a field of type string such as `"name": "Product1 14€"`, will return the error 504 Gateway timeout and will not update the document.


#### Simulation



1. Make a PUT request to update a document through the API, in the body include the special character in a field of type string.

    { "name": "Product1 14€", ...}2.  Look at the API response and verify that it returns the error 504 Gateway timeout.


#### Workaround


Delete the special character and enter the name of the symbol. For example: "`14 euros`"
---
title: Error when changing an index if the fields are identical.
slug: error-when-changing-an-index-if-the-fields-are-identical
status: PUBLISHED
createdAt: 2025-10-21T19:14:35.911Z
updatedAt: 2025-10-21T19:14:35.911Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-changing-an-index-if-the-fields-are-identical
locale: en
kiStatus: Fixed
internalReference: 854634
---

## Summary


An update of a schema index can result in a 500 Internal Server error when there are no changes to be made, this means that the field values are identical to the current ones.
Performing a GET request on the API to check the indices reveals that no update is required, as the index is identical to the body provided in the PUT request.


#### Simulation



1. Send a PUT request to update a schema index through the API, providing the necessary payload in the request body.
2. Verify the response from the API and observe if it returns a **500 Internal Server Error**.
3. Perform a subsequent GET request on the API to retrieve the schema indices and compare them to the body provided in the PUT request.


#### Workaround


N/A
---
title: Error when updating secrets on the Admin
slug: error-when-updating-secrets-on-the-admin
status: PUBLISHED
createdAt: 2025-10-16T20:53:57.746Z
updatedAt: 2025-10-16T20:53:57.746Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: error-when-updating-secrets-on-the-admin
locale: en
kiStatus: Fixed
internalReference: 1233661
---

## Summary


When using Webops and trying to edit a secret that you already added to the UI feature, you may get the error:

    "message": "Failed to update secret in Vercel. AWS update blocked. Error: An error occurred while updating secret in Vercel. More info: Environment variable with key \"\" not found"



#### Simulation



- If you're using Webops, try adding a new secret on the Ui;
- Click to update the secret;
- You'll receive a 500 Internal Server Error with the message above.


#### Workaround


N/A




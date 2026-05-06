---
title: 'Unable to pause seller'
slug: unable-to-pause-seller
status: PUBLISHED
createdAt: 2022-10-20T18:31:04.000Z
updatedAt: 2023-05-11T14:08:26.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: unable-to-pause-seller
locale: en
kiStatus: Fixed
internalReference: 682151
---

## Summary

Sometimes the marketplace is unable to pause the seller via admin or via API.

The error message is generic via UI. However, if the error via API is:
{
"error": "Invalid channel",
"data": {
   "code": "SRAPI-408"
}
}

Then the error is happening because the affiliate validation (channel validation) is failing.

If the seller deletes the affiliate (or changes the affiliate id) on their side, the marketplace won't be able to pause the seller.

## Simulation

1. On the seller account, delete the affiliate of the marketplace;
2. On the marketplace account try to pause the seller on the Admin;
3. Check that a generic error message was send.
4. Try to pause the same seller using the update seller API;
5. Verify if the error message is similar/equal as the error above;

## Workaround

In order to be able to pause the seller there are 3 workarounds:

- Delete the `affiliate Id`and `Trade Policy` information on the seller section called "Integration" on the UI
- ![](https://vtexhelp.zendesk.com/attachments/token/Pp9HF1oSjoUYYJdnmKBUSnYVO/?name=image.png)
- Ask the seller to create again the affiliate as it was before and after that pause the seller. (after the seller can delete the affiliate again);
- Use the old seller management UI to proceed with this action: www.myaccount.myvtex.com/admin/site/seller.aspx
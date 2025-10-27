---
title: 'Profile data loaded empty in the UI for complete profile with ''ignoreProfileData'''
id: 10B1QKgN42sjapDEALmKOp
status: PUBLISHED
createdAt: 2024-04-15T11:41:06.841Z
updatedAt: 2024-04-15T11:41:07.691Z
publishedAt: 2024-04-15T11:41:07.691Z
firstPublishedAt: 2024-04-15T11:41:07.691Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: profile-data-loaded-empty-in-the-ui-for-complete-profile-with-ignoreprofiledata
locale: en
kiStatus: Backlog
internalReference: 1016582
---

## Summary


When setting 'ignoreProfileData' via API Ignore profile data on checkout, if the shopper has a complete profile but is not logged in, the data will be loaded empty in the UI.


##

## Simulation



- Send the ignoreProfileData via API Ignore profile data on checkout;
- Add an item to the cart;
- Add an email with a complete profile; no data will be loaded and it'll require login.

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/en/known-issues/Checkout/profile-data-loaded-empty-in-the-ui-for-complete-profile-with-ignoreprofiledata_1.png)


##

## Workaround


N/A





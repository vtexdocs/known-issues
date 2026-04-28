---
title: '"Logistics inventory full access" permission did not work as expected'
slug: logistics-inventory-full-access-permission-did-not-work-as-expected
status: PUBLISHED
createdAt: 2026-04-28T14:15:06.489Z
updatedAt: 2026-04-28T14:15:06.489Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: logistics-inventory-full-access-permission-did-not-work-as-expected
locale: en
kiStatus: Fixed
internalReference: 482353
---

## Summary

At this time within the Logistics permissions there is one with the name of "Logistics inventory full access", which in theory should allow managing the inventory completely independently, that is, the user could manipulate only the inventory data, nothing more within the logistics module.

The problem at this time is that this permission is not working as expected, that is, general logistics permission is needed to be able to manage the inventory. The risk, in this case, is that the user will be able to carry out actions in the other modules within logistics, such as shipping policies, geolocation, etc.

## Simulation

1. You can add the permission "**Logistics inventory full access**" to a user and try to edit some information in the inventory administrator. You will see that it will not be possible to make any change or simply see the inventory list.
2. License Manager permission:
  - ![](https://vtexhelp.zendesk.com/attachments/token/wBGPB2maBntieEZdAxOEYNYkT/?name=inline-5358520.png)
3. User with only that permission
  - ![](https://vtexhelp.zendesk.com/attachments/token/V5aBNZngEUfMQH8czLiQm7e88/?name=inline-1080298236.png)​

## Workaround

At this moment the only workaround is to configure the "Logistics full access" permission, taking into account that the user will be able to carry out actions in the other functionalities within the logistics module, such as shipping policies, geolocation, etc.
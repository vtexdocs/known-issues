---
title: 'CMS Settings Role not working as expected'
slug: cms-settings-role-not-working-as-expected
status: PUBLISHED
createdAt: 2022-03-09T13:13:47.000Z
updatedAt: 2023-06-19T12:31:18.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: cms-settings-role-not-working-as-expected
locale: en
kiStatus: Backlog
internalReference: 538706
---

## Summary

CMS Settings Role not working as expected. Sometimes the user can't access the CMS even after is added to the role.
Another unexpected behavior is that other modules continue to be available for the CMS role even without the necessary permissions.

## Simulation

- Create a role at the License Manager Roles application giving only access to:
  - CMS menu on the top-bar;
  - CMS Settings.

 ![](https://vtexhelp.zendesk.com/attachments/token/fbpObVoVdnEYGeYjd3GDh9Qqf/?name=image.png)


- Associate this role to a user;
- Log in with this user and try to access the CMS settings menu, you will not be able.
- Check that other modules continue to be available.

## Workaround

To access the CMS Menu, the user should be an Admin Super.
---
title: 'Authorization error when running VTEX link'
id: 6KZPAY3hwAowc2MKEYiCwc
status: ARCHIVED
createdAt: 2018-12-05T13:06:52.031Z
updatedAt: 2020-03-13T21:25:23.945Z
publishedAt: 
firstPublishedAt: 2018-12-05T14:01:50.813Z
contentType: knownIssue
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
tag: VTEX IO
slugEN: error-when-running-vtex-link-for-the-first-time
locale: en
kiStatus: Open
internalReference: 
---

## Summary

When running `vtex-link` for the first time the user experiences the following error message: `User xxxx@xxxx.com is not authorized for builder "node"`

Although every developer can create stores using Store-Framework, the Node + GraphQL and Extensibility apps require special permissions.  From now on, accounts wanting to be part of the whitelist in order to extend their apps with Node + GraphQL and Extensibility functionalities need to be _enterprise_.

The error authorization message can change from `node`to `react` according to the chosen option.

## Simulation

1.  Install the VTEX CLI (Toolbelt)
2.  Navigate towards the app's directory
3.  Execute the "vtex-link" command through the terminal.
4.  ![image (8)](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/en/known-issues/VTEX%20IO/error-when-running-vtex-link-for-the-first-time_1.png)

## Workaround

1. Fill out this [form](https://suportevtex1.typeform.com/to/SxXknn) 
2. Access your Account Management module and make sure that your profile has VTEX IO Admin permissions.

>ℹ️ Filling out the form does not guarantee Node + GraphQL and Extensibility Whitelist access.


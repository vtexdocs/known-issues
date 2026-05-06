---
title: 'URL Redirect with special characters non ascii return errors'
slug: url-redirect-with-special-characters-non-ascii-return-errors
status: PUBLISHED
createdAt: 2021-10-26T15:52:00.000Z
updatedAt: 2023-02-10T13:05:07.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: url-redirect-with-special-characters-non-ascii-return-errors
locale: en
kiStatus: Backlog
internalReference: 457047
---

## Summary

If we create a redirect with some special characters, for example `/televisão`, it will not work, we will receive the following error:

    Link: account.vtexcommercestable.com.br/televisão Error: The upstream server response returned invalid header characters

## Simulation

- Create a redirect 301 on the CMS, for example from `/` to `/televisão`
- Check the response body;

## Workaround

Don't use special characters on redirect.
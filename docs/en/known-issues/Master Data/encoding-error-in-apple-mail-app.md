---
title: 'Encoding error in Apple Mail App'
id: 1ppf3Edw6gSikk0KY44gmS
status: PUBLISHED
createdAt: 2018-06-26T17:54:35.967Z
updatedAt: 2022-12-22T20:49:03.198Z
publishedAt: 2022-12-22T20:49:03.198Z
firstPublishedAt: 2018-06-26T18:12:03.953Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data,Message Center
slugEN: encoding-error-in-apple-mail-app
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Apple Mail APP has a bug in the email subject encoding when it has a special character. The subject contains =?UTF-8?Q?S at its beginning.

Apple community link:
https://discussions.apple.com/thread/2811597?tstart=0

## Simulation

Mount an email sending trigger that has a special character in the "Subject" of the email.

Result:

![png](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Master%20Data/encoding-error-in-apple-mail-app_1.png)

## Workaround

Do not use special characters in e-mail subjects.



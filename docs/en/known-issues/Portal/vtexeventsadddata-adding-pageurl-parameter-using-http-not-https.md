---
title: 'vtex.events.addData adding pageUrl Parameter using http, not https'
slug: vtexeventsadddata-adding-pageurl-parameter-using-http-not-https
status: PUBLISHED
createdAt: 2021-03-24T14:48:37.000Z
updatedAt: 2022-01-21T18:02:41.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: vtexeventsadddata-adding-pageurl-parameter-using-http-not-https
locale: en
kiStatus: Backlog
internalReference: 348128
---

## Summary

`vtex.events.addData` adding pageUrl Parameter using http, not https

## Simulation

- Check de source code of a Portal VTEX account
- The pageUrl will be using HTTP:

    <script>
      vtex.events.addData({"pageCategory":"Home","pageDepartment":null,"pageUrl":"**http**://account.myvtex.com/", ...})
    </script>​

## Workaround

There is no workaround
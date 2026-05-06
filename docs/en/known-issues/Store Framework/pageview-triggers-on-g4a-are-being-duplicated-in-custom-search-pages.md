---
title: 'Pageview triggers on G4A are being duplicated in custom search pages'
slug: pageview-triggers-on-g4a-are-being-duplicated-in-custom-search-pages
status: PUBLISHED
createdAt: 2023-08-25T17:36:51.000Z
updatedAt: 2024-02-19T18:42:58.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: pageview-triggers-on-g4a-are-being-duplicated-in-custom-search-pages
locale: en
kiStatus: Backlog
internalReference: 888042
---

## Summary

The pageView event is showing duplicated in dataLayer when on custom search pages

## Simulation

- Go to any custom search page
- Open your browser's console
- Type dataLayer and check the pageView event

The expected behavior is the duplicated event

## Workaround

N/A


## **Internal Notes**

Also found something curious on department page with pageView and page_view

https://storetheme.vtex.com/apparel---accessories/

 ![](https://vtexhelp.zendesk.com/attachments/token/dXFuDY5Q9XhZ7hgIvA8m8ugJ3/?name=image.png)

But, this specific issue is replicable at

https://www.dzarm.com.br/outlet

 ![](https://vtexhelp.zendesk.com/attachments/token/EVakZYSBKtcrCQoNXBe92uAzQ/?name=image.png)
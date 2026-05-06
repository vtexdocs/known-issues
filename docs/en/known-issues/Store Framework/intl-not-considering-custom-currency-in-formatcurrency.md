---
title: 'Intl not considering custom currency in formatCurrency'
slug: intl-not-considering-custom-currency-in-formatcurrency
status: PUBLISHED
createdAt: 2023-01-19T14:20:51.000Z
updatedAt: 2023-01-19T15:45:41.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: intl-not-considering-custom-currency-in-formatcurrency
locale: en
kiStatus: Backlog
internalReference: 736695
---

## Summary

In some store locales, the Intl formatter displays the wrong currency symbol, not considering the one passed through the culture


https://github.com/vtex-apps/format-currency/blob/master/react/formatCurrency.ts

## Simulation

Set a trade policy locale and a custom currency and call the function formatCurrency from format-currency, it will not display properly because intl uses the locale to define (it happens more often in mobile)

## Workaround

It is possible to implement custom price components with a different currency symbol.
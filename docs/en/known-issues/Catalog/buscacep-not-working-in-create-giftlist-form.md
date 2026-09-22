---
title: 'Buscacep not working in create GiftList form.'
slug: buscacep-not-working-in-create-giftlist-form
status: PUBLISHED
createdAt: 2021-03-09T21:38:37.000Z
updatedAt: 2026-09-22T20:35:03.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: buscacep-not-working-in-create-giftlist-form
locale: en
kiStatus: Fixed
internalReference: 342418
---

## Summary

Currently, the anchor "`Não sei meu cep`" under the page `/_secure/giftlist/create` for "Ao dono da lista" list types is redirecting the user to the page itself:

## Simulation

1) Go to https://.myvtex.com/_secure/giftlist/create

2) Press the link under the id="dont-know-postal-code":

We can clearly see the target attribute is `_blank` there where it should direct to a valid hyperlink.

## Workaround

directly using the correios cep locator: http://www.buscacep.correios.com.br/sistemas/buscacep/default.cfm
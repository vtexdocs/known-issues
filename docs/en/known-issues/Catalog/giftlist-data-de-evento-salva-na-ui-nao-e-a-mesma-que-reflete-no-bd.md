---
title: 'Giftlist Data de evento salva na UI não é a mesma que reflete no bd'
slug: giftlist-data-de-evento-salva-na-ui-nao-e-a-mesma-que-reflete-no-bd
status: PUBLISHED
createdAt: 2021-07-27T17:19:17.000Z
updatedAt: 2026-09-22T20:55:10.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: giftlist-data-de-evento-salva-na-ui-nao-e-a-mesma-que-reflete-no-bd
locale: en
kiStatus: Fixed
internalReference: 402134
---

## Summary

Salvando o evento da giftlist com data 31/12/2021, ela registra na UI 30/12/3031, mas na exportação fica 31/12/2021 (a data correta)

## Simulation

1- account https://danilo.myvtex.com/_secure/giftlist/create
2- criar uma nova lista com evento e usar a data 31/12/2021
3- verificar na UI a data e na exportação outra data

## Workaround

n/a
---
title: 'MELI Size Chart not working for sizes with Letters'
slug: meli-size-chart-not-working-for-sizes-with-letters
status: PUBLISHED
createdAt: 2023-07-24T12:04:04.000Z
updatedAt: 2023-09-12T15:04:30.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-size-chart-not-working-for-sizes-with-letters
locale: en
kiStatus: Fixed
internalReference: 867262
---

## Summary

Currently our MELI Size Chart feature is not working for sizes with letters example:

Size = "P", "M", "G".

## Simulation

Inside the mapper screen, we can the Size chart feature available for MELI Integration, So if the sellers maps a size with it's values as letters it won't work and a error message will be shown at bridge product like below:

"O valor do atributo SIZE é invalido: P. Este valor deve ser igual ao da tabela de medidas."

## Workaround

The sizes are currently working with numbers, so sellers can use the numbers instead of letters.
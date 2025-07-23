---
title: 'No se puede archivar una promoción por el endpoint Create Or Update Promotion'
id: 3MUDa3ZvdhoahJhZ4FvekO
status: PUBLISHED
createdAt: 2021-02-25T20:33:18.281Z
updatedAt: 2022-12-22T14:39:48.384Z
publishedAt: 2022-12-22T14:39:48.384Z
firstPublishedAt: 2021-05-04T20:08:56.465Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
tag: Pricing & Promotions
slugEN: you-cannot-archive-a-promotion-via-the-create-or-update-promotion-endpoint
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Durante la actualización de una promoción a través de API, configurar el atributo `isArchived` como `true` no impide que la promoción se muestre en la pantalla de promociones **No Archivadas**.

## Simulación

Actualice una promoción usando el endpoint [Create Or Update Promotion](https://developers.vtex.com/vtex-rest-api/reference/createorupdatecalculatorconfiguration), alterando el valor `isActive` a `false` y el valor `isArchived` a `true`. La promoción será archivada por la API, pero no se removerá de la pantalla **No Archivadas** y la marca **Archivar** continuará en la tarjeta de la promoción.

## Workaround

Utilice el endpoint [Archive a Promotion](https://developers.vtex.com/vtex-rest-api/reference/archivepromotion-1) para archivar la promoción.


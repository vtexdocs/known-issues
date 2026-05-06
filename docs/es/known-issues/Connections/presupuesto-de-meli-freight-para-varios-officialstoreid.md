---
title: 'Presupuesto de MELI Freight para varios «officialStoreID»'
slug: presupuesto-de-meli-freight-para-varios-officialstoreid
status: PUBLISHED
createdAt: 2024-02-07T11:18:56.000Z
updatedAt: 2024-06-19T11:43:38.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-freight-quotation-for-multiple-officialstoreids
locale: es
kiStatus: Fixed
internalReference: 978358
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente tenemos un problema con la integración de MELI en relación con la API de cotización de transporte de MELI. Esto afecta únicamente a los vendedores que utilizan varios «officialStoreID» en MELI, pero que en VTEX utilizan una sola cuenta con el mismo «sellerID» de MELI

## Simulación

Si se da esta situación, la cotización de transporte de MELI devolverá un error y MELI redirigirá al vendedor a la hoja de cálculo de transporte en lugar de utilizar la API de transporte.

## Workaround

Mantenga actualizada la hoja de cálculo de transporte para evitar inconsistencias entre VTEX y MELI.
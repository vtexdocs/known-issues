---
title: 'Sincronización del catálogo bloqueada debido a un exceso de atributos de variación.'
slug: sincronizacion-del-catalogo-bloqueada-debido-a-un-exceso-de-atributos-de-variacion
status: PUBLISHED
createdAt: 2025-05-16T18:03:05.000Z
updatedAt: 2026-06-23T15:53:19.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-catalog-sync-blocked-due-to-excess-variation-attributes
locale: es
kiStatus: Backlog
internalReference: 1227978
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos SKU no se sincronizan con Shopee debido a que los artículos del catálogo contienen más de dos atributos de variación, lo cual no es compatible con la plataforma. Esto impide que los productos afectados se publiquen.

## Simulación

1. Acceda al panel de Bridge de la cuenta afectada.
2. Identifique los productos que devuelven el error:

El error se produce durante el proceso de sincronización del catálogo con Shopee, específicamente cuando la carga útil contiene más de dos atributos en el objeto TierVariation.

1. Este escenario es recurrente en tiendas migradas cuya estructura de catálogo puede tener más de dos atributos de variación.

## Workaround

N/A
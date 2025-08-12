---
title: Shopee Sincronización de catálogo bloqueada por exceso de atributos de variación
slug: shopee-sincronizacion-de-catalogo-bloqueada-por-exceso-de-atributos-de-variacion
status: PUBLISHED
createdAt: 2025-08-12T18:21:15.253Z
updatedAt: 2025-08-12T18:21:15.253Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-catalog-sync-blocked-due-to-excess-variation-attributes
locale: es
kiStatus: Backlog
internalReference: 1227978
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Algunos SKU no se están sincronizando con Shopee debido a que los artículos del catálogo contienen más de dos atributos de variación, lo que no es compatible con el mercado. Esto impide que los productos afectados sean listados.


#### Simulación



1. Acceda al panel Puente de la cuenta afectada
2. Identificar los productos que devuelven el error:
El error se desencadena durante el proceso de sincronización del catálogo con Shopee, concretamente cuando la carga útil contiene más de dos atributos en el objeto TierVariation.

1. Este escenario es recurrente para las tiendas migradas cuya estructura de catálogo puede tener más de dos atributos de variación

## Workaround


N/A



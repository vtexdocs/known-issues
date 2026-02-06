---
title: 'Amazon Listado Algunos SKU no están integrados debido a un error en el campo «color#?.value» del atributo «standardized_values».'
slug: amazon-listado-algunos-sku-no-estan-integrados-debido-a-un-error-en-el-campo-colorvalue-del-atributo-standardizedvalues
status: PUBLISHED
createdAt: 2026-02-06T16:51:08.061Z
updatedAt: 2026-02-06T16:51:08.061Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-some-skus-arent-integrated-due-to-an-error-in-the-attributecolorvalue-field-standardizedvalues
locale: es
kiStatus: Backlog
internalReference: 1361514
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 No se pueden listar algunos SKU a través de VTEX Amazon Listing porque Amazon rechaza la carga útil cuando el atributo obligatorio «Cor» (Color) no se rellena con un valor estandarizado válido. El síntoma visible es el error de Amazon: «Con los datos en '[color#?.value]', el campo 'standardized_values' para el atributo 'Cor' no tiene suficientes valores. El mínimo requerido es 1 valor. Proporcione un valor válido». Esto afecta a los SKU que utilizan una plantilla de categoría de Amazon en la que el campo «Cor» es obligatorio pero no está expuesto/asignado, lo que bloquea la publicación y la venta de artículos en Amazon. #### Simulación

## Workaround


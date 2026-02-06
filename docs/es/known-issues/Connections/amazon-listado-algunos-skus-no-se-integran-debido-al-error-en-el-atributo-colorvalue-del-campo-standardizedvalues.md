---
title: 'Amazon Listado Algunos skus no se integran debido al error en el atributo «color#?.value» del campo «standardized_values».'
slug: amazon-listado-algunos-skus-no-se-integran-debido-al-error-en-el-atributo-colorvalue-del-campo-standardizedvalues
status: PUBLISHED
createdAt: 2026-02-06T16:50:08.966Z
updatedAt: 2026-02-06T16:50:08.966Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-alguns-skus-nao-sao-integrados-devido-ao-erro-no-atributo-colorvalue-field-standardizedvalues
locale: es
kiStatus: Backlog
internalReference: 1361514
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 No se pueden listar algunos SKU a través de VTEX Amazon Listing porque Amazon rechaza la carga útil cuando el atributo obligatorio «Cor» (Color) no se rellena con un valor estandarizado válido. El síntoma visible es el error de Amazon: «Con los datos en '[color#?.value]', el campo 'standardized_values' para el atributo 'Cor' no tiene suficientes valores. El mínimo requerido es 1 valor. Proporcione un valor válido». Esto afecta a los SKU que utilizan una plantilla de categoría de Amazon en la que el campo «Cor» es obligatorio pero no está expuesto/asignado, lo que bloquea la publicación y la venta de artículos en Amazon. #### Simulación

## Workaround


---
title: 'Las actualizaciones de las comisiones de los vendedores no se aplican a los SKU vinculados'
slug: las-actualizaciones-de-las-comisiones-de-los-vendedores-no-se-aplican-a-los-sku-vinculados
status: PUBLISHED
createdAt: 2023-08-31T14:44:23.000Z
updatedAt: 2024-09-30T15:09:39.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-commission-updates-does-not-index-binded-skus
locale: es
kiStatus: Backlog
internalReference: 891162
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el comerciante actualiza la comisión del vendedor en la interfaz de usuario de gestión de vendedores, los SKU vinculados a dicho vendedor no se indexan automáticamente.

Nuestro sistema de pago utiliza la API `stockkeepingunitbyid` para obtener la información actualizada del SKU.

En esta API tenemos el objeto SkuSellers que contiene la información de la comisión. Pero si el SKU no está indexado, este objeto queda desactualizado.

Esto implica que el proceso de pago obtiene el valor antiguo de la comisión.

## Simulación

1. Cambia la comisión del vendedor en la interfaz de usuario de gestión de vendedores.
2. Espera a que se actualice la caché, unos 10 minutos.
3. Comprueba en la simulación de pago que la comisión está desactualizada.

## Workaround

provisional**
Para evitar cerrar pedidos con el valor de comisión desactualizado, el comerciante puede indexar manualmente los SKU afectados.
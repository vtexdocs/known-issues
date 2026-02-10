---
title: 'Mercado Libre Los atributos seller_package_height, seller_package_width, seller_package_length y seller_package_weight son obligatorios.'
slug: mercado-libre-los-atributos-sellerpackageheight-sellerpackagewidth-sellerpackagelength-y-sellerpackageweight-son-obligatorios
status: PUBLISHED
createdAt: 2026-02-10T11:59:50.473Z
updatedAt: 2026-02-10T11:59:50.473Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-os-atributos-sellerpackageheight-sellerpackagewidth-sellerpackagelength-e-sellerpackageweight-sao-obrigatorios
locale: es
kiStatus: Fixed
internalReference: 1325344
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 La función ya está activa para todas las cuentas. Mercado Libre ha hecho obligatorios los atributos de dimensiones para los artículos ME2 en algunas categorías. Sin embargo, este requisito puede extenderse a nuevas categorías sin previo aviso. Por lo tanto, es importante considerar las dimensiones como obligatorias para cualquier categoría de productos que tenga entrega ME2. Para que la función funcione correctamente, el comerciante debe configurar la especificación ME2 a nivel de producto y proporcionar las dimensiones a nivel de SKU.
Las dimensiones deben reflejar valores reales (por ejemplo, L 20, H 30, W 10, D 5) y solo se aceptan valores en centímetros y gramos. Si Mercado Libre no los acepta, el artículo será moderado y el producto no se publicará. La integración lee los atributos de dimensión directamente del catálogo de VTEX a nivel de SKU.
Cualquier asignación de estos campos en el mapeador será ignorada. Esta regla se aplica a todas las SKU configuradas como ME2. #### Simulación

## Workaround


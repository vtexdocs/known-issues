---
title: 'El campo EAN como cadena de caracteres se ignora al aprobar los SKU recibidos'
slug: el-campo-ean-como-cadena-de-caracteres-se-ignora-al-aprobar-los-sku-recibidos
status: PUBLISHED
createdAt: 2023-09-11T16:36:51.000Z
updatedAt: 2023-09-11T16:36:51.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: ean-field-as-string-being-ignored-when-approved-on-received-skus
locale: es
kiStatus: Backlog
internalReference: 897301
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El vendedor envía el SKU con todos los campos declarados en este artículo (https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerSkuId-) para que el marketplace lo apruebe en el módulo «SKU recibidos».

El campo ean está declarado como tipo cadena en el artículo anterior. Sin embargo, a pesar de aparecer en la interfaz de usuario de Skus recibidos, el sistema backend del comparador y el módulo de catálogo lo ignoran, lo que significa que el SKU se crea con este campo vacío.

## Simulación

1. Envía un SKU al marketplace con el campo ean establecido como cadena: `"ean": "123456"`
2. Aprueba el SKU como un nuevo producto en el módulo «SKU recibidos» del marketplace;
3. Comprueba que en el catálogo este campo aparece vacío.

## Workaround

provisional**
**Hasta que se solucione este problema y el sistema funcione según nuestra documentación**, el formato que funciona actualmente consiste en enviar el campo ean como una matriz:
"ean": ["123456"]
Otra forma es configurar este campo manualmente en el catálogo una vez que se haya aprobado el SKU.
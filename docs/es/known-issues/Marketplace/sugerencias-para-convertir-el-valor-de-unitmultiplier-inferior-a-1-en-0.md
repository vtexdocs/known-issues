---
title: 'Sugerencias para convertir el valor de «UnitMultiplier» inferior a 1 en 0'
slug: sugerencias-para-convertir-el-valor-de-unitmultiplier-inferior-a-1-en-0
status: PUBLISHED
createdAt: 2022-11-21T19:45:05.000Z
updatedAt: 2022-12-13T16:13:46.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: suggestions-transforming-unitmultiplier-less-than-1-to-0
locale: es
kiStatus: Fixed
internalReference: 702056
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El vendedor puede enviar valores de «unitMultiplier» inferiores a 1 para sus referencias.

Ejemplo:
 ![](https://vtexhelp.zendesk.com/attachments/token/HqXCaizs03DZbMVT2tcufZM6K/?name=image.png)

La misma información se envía correctamente al marketplace:
 ![](https://vtexhelp.zendesk.com/attachments/token/zImMl1BVZHLG6zc45x4XwrZpB/?name=image.png)

Sin embargo, una vez que el producto es procesado por el Matcher, el valor se redondea a 0:
 ![](https://vtexhelp.zendesk.com/attachments/token/j5FMl4AJJ0R5IP3FcStUo7DDi/?name=image.png)

Y una vez aprobado en el catálogo del marketplace, el valor sigue siendo 0. De esta forma, se establece un valor incorrecto en el catálogo del marketplace.

## Simulación

1. Crea un SKU con un valor de unitMultiplier inferior a 1;
2. Envíalo al marketplace;
3. Aprueba el SKU en el área de SKU recibidos del marketplace;
4. Comprueba en el catálogo del marketplace que el valor se ha establecido en 0.

## Workaround

Ajusta el valor directamente en el catálogo del marketplace a través de Admin, una hoja de cálculo o la API.
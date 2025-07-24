---
title: 'La lógica de redondeo de precios de coste diverge en la API de precios calculados'
id: 744fWEh7fgMHwvidFEhlV
status: PUBLISHED
createdAt: 2023-06-12T17:15:06.190Z
updatedAt: 2023-06-12T17:15:06.890Z
publishedAt: 2023-06-12T17:15:06.890Z
firstPublishedAt: 2023-06-12T17:15:06.890Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: cost-price-rounding-logic-diverges-on-computed-prices-api
locale: es
kiStatus: Backlog
internalReference: 842336
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, la API de precios calculados tiene una propiedad llamada 'precio de coste' que en escenarios específicos podría mostrar una diferencia de 1 céntimo entre su valor en la interfaz de usuario y la API de precios calculados https://developers.vtex.com/docs/api-reference/pricing-api#get-/pricing/prices/-itemId-/computed/-priceTableId-



## Simulación


Establecer un producto con un precio de coste de 67,82 y sin margen de beneficio.

Compruebe la interfaz de usuario de precios y la respuesta de esta API, que debería ofrecer:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/la-logica-de-redondeo-de-precios-de-coste-diverge-en-la-api-de-precios-calculados_1.png)

Aunque el valor correcto es 67,82



## Workaround


Establecer precios fijos o un redondeo de precios lo soluciona.






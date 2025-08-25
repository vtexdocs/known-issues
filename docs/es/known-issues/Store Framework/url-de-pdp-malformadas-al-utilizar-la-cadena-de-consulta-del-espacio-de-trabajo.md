---
title: URL de PDP malformadas al utilizar la cadena de consulta del espacio de trabajo
slug: url-de-pdp-malformadas-al-utilizar-la-cadena-de-consulta-del-espacio-de-trabajo
status: PUBLISHED
createdAt: 2025-08-25T14:58:39.406Z
updatedAt: 2025-08-25T14:58:39.406Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: malformed-pdp-urls-when-using-workspace-querystring
locale: es
kiStatus: Backlog
internalReference: 1281017
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando se utiliza la cadena de consulta `?workspace=` en la URL de la tienda, la navegación de los PDP se interrumpe porque `render-runtime` incluye incorrectamente el indicador `workspace` como parte del parámetro de consulta `skuId`. Esto sustituye `&` por `?`, lo que da lugar a URL malformadas e impide que las PDP se carguen correctamente. Esto no ocurre cuando se elige abrir la página en una nueva pestaña.


#### Simulación



1. Acceda a la URL de una tienda con una cadena de consulta de espacio de trabajo, por ejemplo: `?workspace=prod`.
2. Pase el ratón por encima de un producto: la vista previa de la URL de PDP muestra los parámetros correctamente utilizando &.
3. 3. Haga clic en el producto: la URL sustituye & por ?, lo que provoca que la PDP no se cargue.
4. La inspección de la consola/runtime muestra que render-runtime añade el parámetro workspace dentro de la consulta skuId, corrompiendo la URL final.
## Workaround


No existe una solución fiable. Como medida temporal, los usuarios pueden abrir el producto en una nueva pestaña, que conserva la URL correcta, pero la navegación en la misma pestaña se interrumpe.




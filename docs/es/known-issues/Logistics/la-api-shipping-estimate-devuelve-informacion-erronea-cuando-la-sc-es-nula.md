---
title: 'La API Shipping Estimate devuelve información errónea cuando la SC es nula'
id: 6bxlw1nQ27JGbiOmNbgyn2
status: PUBLISHED
createdAt: 2022-04-01T23:33:47.015Z
updatedAt: 2024-07-01T18:48:14.728Z
publishedAt: 2024-07-01T18:48:14.728Z
firstPublishedAt: 2022-05-18T18:27:53.441Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: api-shipping-estimate-returns-wrong-info-when-sc-is-null
locale: es
kiStatus: No Fix
internalReference: 554948
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



La API está devolviendo información indexada errónea cuando se ejecuta con SC como null.



## Simulación



=> Ejecutar la API en la cuenta, con SC null en la API, (esta cuenta tiene todos los documentos con la política de ventas y el retorno correcto es 200 ok vacío.)
"https://.vtexcommercestable.com.br/api/logistics/pvt/shipping/estimate"

=> Cuando elimine la Política de Ventas de cualquier Dock y ejecute el mismo API verá las devoluciones de la estimación de envío para esa condición porque ahora hay Dock whitout SC.

=> Pero al reinsertar la Política de Ventas en el Dock y ejecutar de nuevo el API, sigue mostrando el resultado. No vuelve al comportamiento original.



## Workaround


La solución es enviar la API con SC definido.


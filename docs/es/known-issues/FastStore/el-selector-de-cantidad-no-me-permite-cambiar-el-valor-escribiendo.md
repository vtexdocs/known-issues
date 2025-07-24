---
title: 'El Selector de Cantidad no me permite cambiar el valor escribiendo'
id: 4whARKlTiLQhTluJrIRfO5
status: PUBLISHED
createdAt: 2024-06-28T15:01:34.187Z
updatedAt: 2024-07-05T16:17:08.672Z
publishedAt: 2024-07-05T16:17:08.672Z
firstPublishedAt: 2024-06-28T15:01:35.225Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: quantity-selector-wont-let-me-change-the-value-by-typing
locale: es
kiStatus: Fixed
internalReference: 1057544
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El componente selector de cantidades en Faststore está presentando un bug. Si el valor mínimo de un producto es 10 y quiero teclear 15, el selector no me deja borrar el 0 porque nos dejará con 1, y sería un valor inferior a la cantidad mínima. Si quiero escribir 15 tengo que escribir 150 y entonces puedo borrar el 0.


##

## Simulación


Puedes probarlo en nuestra tienda por defecto en nuestra página de documentación:
https://developers.vtex.com/docs/guides/faststore/molecules-quantity-selector
https://starter.vtex.app/handmade-plastic-chips-9009169/p

En este caso, el valor mínimo es 1 y el valor máximo es 10.
Intenta escribir 2 borrando el valor 1, no te dejará porque una vez borrado el 1, el valor será menor que el valor mínimo.



## Workaround


N/A






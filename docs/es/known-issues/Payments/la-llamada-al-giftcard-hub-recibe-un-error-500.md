---
title: 'La llamada al Giftcard Hub recibe un error 500'
slug: la-llamada-al-giftcard-hub-recibe-un-error-500
status: PUBLISHED
createdAt: 2025-09-03T15:21:48.934Z
updatedAt: 2025-09-03T15:21:48.934Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-hub-call-receives-500-error
locale: es
kiStatus: Backlog
internalReference: 1286257
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando el Giftcard Hub recibe cualquier error, termina devolviendo un **500 error** al usuario. Esto ocurre porque los errores se manejan en el código del Sistema de Tarjeta de Regalo.

Este comportamiento puede ocurrir en diferentes solicitudes, sin importar el verbo HTTP. La causa raíz es que cuando el Sistema de Tarjeta de Regalo no encuentra contenido en la respuesta, lo cual es común en respuestas **4xx** y **5xx**, borra el contenido de la memoria.
Más tarde, cuando el código intenta acceder de nuevo a este elemento, ya se ha eliminado, lo que da como resultado el siguiente mensaje de error:


    No se puede acceder a un objeto eliminado. Nombre del objeto: 'System.Net.Http.StreamContent'.

##
Con esto, el usuario no tiene información clara sobre lo que ha pasado, lo que hace que la resolución de problemas sea mucho más difícil.


#### Simulación


No es posible simular este comportamiento.

## Workaround


Ninguna.




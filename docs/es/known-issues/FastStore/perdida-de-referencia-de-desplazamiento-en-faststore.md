---
title: 'Pérdida de referencia de desplazamiento en faststore'
slug: perdida-de-referencia-de-desplazamiento-en-faststore
status: PUBLISHED
createdAt: 2025-11-03T15:11:28.233Z
updatedAt: 2025-11-03T15:11:28.233Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: loss-of-scroll-reference-in-faststore
locale: es
kiStatus: No Fix
internalReference: 1317630
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al navegar entre las páginas PLP y PDP, al volver a PLP, el scroll pierde su posición y referencia inicial.


#### Simulación


Al acceder a un PLP en la primera página o buscar más productos, se hace clic en un producto. Al cargar el PDP y hacer clic en el botón Atrás, el scroll de la página no vuelve al producto sobre el que se ha hecho clic, sino que hace referencia a otro producto.

## Workaround


Actualice a la versión `3.91.3-dev.1` o superior.

Este es un WA personalizado para el problema, por lo que puede haber inestabilidad o comportamiento inesperado dependiendo del dispositivo o navegador.




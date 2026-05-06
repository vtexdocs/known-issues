---
title: 'La cookie de segmento solo se actualiza tras actualizar la página'
slug: la-cookie-de-segmento-solo-se-actualiza-tras-actualizar-la-pagina
status: PUBLISHED
createdAt: 2022-08-29T13:22:23.000Z
updatedAt: 2024-01-10T17:17:57.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: segment-cookie-updated-only-after-refreshing-the-page
locale: es
kiStatus: Backlog
internalReference: 647116
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunas funciones y componentes de VTEX pueden utilizar datos solicitados a la cookie de Segment para mostrar información (como el precio, datos de promociones, disponibilidad de SKU, etc.) en la tienda online. Esta cookie se almacena en el navegador del usuario al crearse la sesión. En ocasiones, sobre todo en escenarios dinámicos en los que es necesario realizar cambios en la interfaz que activan una actualización de la cookie de segmento, la propia cookie pierde algunos datos, lo cual es un comportamiento en el tiempo de ejecución de renderizado que no activa el cambio de segmento en el contexto.

Cómo recuperar la información de la sesión:
https://developers.vtex.com/vtex-rest-api/reference/getsession

Puedes obtener los datos de la cookie de segmento a través del token de segmento:

- Abre la consola del navegador;
- Decodifica el token de segmento presente en el objeto de tiempo de ejecución de renderizado;
- En la consola, ejecuta: `atob(__RUNTIME__.segmentToken)`
 ![](https://vtexhelp.zendesk.com/attachments/token/wHuslnrutSh5W2CZS4FlHBm0d/?name=Captura+de+Tela+2022-09-23+a%CC%80s+14.09.57.png)

## Simulación

- Selecciona una tienda que presente información basada en datos de una cookie de segmento:
- Ej.: Se muestran precios diferentes en función de la identificación del cliente, relacionada con las tablas de precios;
- Obtén los datos de la cookie de segmento en diferentes escenarios utilizando la aplicación que recupera la identificación del usuario;

## Workaround

Actualiza la página
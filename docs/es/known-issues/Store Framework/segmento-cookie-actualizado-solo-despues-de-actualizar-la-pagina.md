---
title: 'Segmento Cookie actualizado sólo después de actualizar la página'
id: 3QBmp4D2tvIAxEzEy2LpNf
status: PUBLISHED
createdAt: 2022-11-01T16:33:05.698Z
updatedAt: 2024-01-10T17:18:13.115Z
publishedAt: 2024-01-10T17:18:13.115Z
firstPublishedAt: 2022-11-01T16:33:06.403Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: segment-cookie-updated-only-after-refreshing-the-page
locale: es
kiStatus: Backlog
internalReference: 647116
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Algunas funciones y componentes de VTEX pueden utilizar datos solicitados a la cookie de segmento para presentar información (como precio, datos de promoción, disponibilidad de SKU, etc.) en el escaparate. Esta cookie se almacena en el navegador del usuario cuando se crea la sesión. A veces, sobre todo en escenarios dinámicos donde se necesita hacer cambios en el frente donde se desencadena una actualización del Segmento Cookie, la cookie en sí pierde algunos datos que es de un comportamiento en render-runtime que no desencadena el cambio de segmento al contexto.

Cómo recuperar la información de la sesión:
https://developers.vtex.com/vtex-rest-api/reference/getsession

Puedes obtener los datos del Segmento Cookie a través del token del segmento:

- Abra la consola del navegador;
- Decodifique el token de segmento presentado en el objeto render runtime;
- En la consola, ejecute:` atob(__RUNTIME__.segmentToken)`
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Store%20Framework/segmento-cookie-actualizado-solo-despues-de-actualizar-la-pagina_1.png)


##

## Simulación



- Seleccione una tienda que presente información basada en los datos de una Cookie de Segmento:
- Ej: Se muestran diferentes precios basados en la identificación del cliente - relacionado con tablas de precios;
- Obtener los datos del Segmento Cookie en diferentes escenarios utilizando la app que recupera la identificación del usuario;



## Workaround


Actualice la página






---
title: 'La mutación «updateThemeIds» devuelve un error 504, pero la migración de contenido se completa con éxito en segundo plano'
slug: la-mutacion-updatethemeids-devuelve-un-error-504-pero-la-migracion-de-contenido-se-completa-con-exito-en-segundo-plano
status: PUBLISHED
createdAt: 2026-06-18T16:36:11.000Z
updatedAt: 2026-06-18T16:36:11.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: updatethemeids-mutation-returns-504-but-content-migration-completes-successfully-in-background
locale: es
kiStatus: Backlog
internalReference: 1423324
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al ejecutar la mutación `updateThemeIds` en `vtex.pages-graphql`, la solicitud puede devolver el código de error `504 Gateway Timeout` con un mensaje como `La solicitud a vtex.pages-graphql@2.125.2 ha agotado el tiempo de espera tras 11,0003652`. En algunos casos, especialmente en tiendas con una gran cantidad de contenido del CMS, este tiempo de espera afecta solo a la respuesta HTTP y no a la migración en sí. La migración de contenido puede continuar en segundo plano y completarse con éxito.

## Simulación

- Utiliza una tienda con un gran volumen de contenido del CMS o del editor del sitio.
- Instala la nueva versión principal de la misma aplicación de tema en un espacio de trabajo de producción.
- En el IDE de GraphQL, selecciona «vtex.pages-graphql@2.x».
- Ejecuta la mutación `updateThemeIds`, por ejemplo:

- Observa que la respuesta puede devolver `504 Gateway Timeout` / `ProxyTimeout`, con un mensaje que indica que la solicitud a `vtex.pages-graphql` agotó el tiempo de espera tras unos 11 segundos.
- Tras el tiempo de espera, comprueba el espacio de trabajo en Admin y en la tienda online. En los casos afectados, es posible que el contenido migrado comience a mostrarse correctamente aunque la respuesta de la mutación haya devuelto un error.

## Workaround

provisional**
Tras recibir el `504`, espera unos instantes y comprueba que la migración se haya completado antes de volver a intentar la mutación. Comprueba «CMS > Páginas», el contenido del editor del sitio y la visualización del escaparate en el espacio de trabajo de destino. Si el contenido se ha migrado correctamente, no es necesario realizar ninguna acción adicional. Evita activar la misma mutación varias veces seguidas, ya que es posible que el proceso en segundo plano ya se esté ejecutando o haya finalizado.
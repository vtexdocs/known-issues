---
title: 'La página de estilos de la tienda interfiere con la carga de CSS del tema'
slug: la-pagina-de-estilos-de-la-tienda-interfiere-con-la-carga-de-css-del-tema
status: PUBLISHED
createdAt: 2025-08-22T20:23:47.071Z
updatedAt: 2025-08-22T20:23:47.071Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: storefront-styles-page-interfering-with-theme-css-loading
locale: es
kiStatus: Backlog
internalReference: 1280557
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando una versión del tema se guarda como **"actual "** en la sección **Ventanas → Estilos** de la administración de VTEX, esta configuración anula el CSS cargado en la tienda. Este comportamiento causa problemas cuando se publica una nueva versión del tema, ya que el CSS de la versión marcada como "actual" en Estilos seguirá siendo servido al escaparate en lugar de la última versión del tema.


#### Simulación



- En VTEX Admin, vaya a **Ventanales → Estilos**.
- Guarda un estilo de tema como **"actual "**.
- Publica una nueva versión del tema con cambios en el CSS.
- Accede al escaparate y comprueba el CSS que se está sirviendo.
- Observa que el CSS sigue haciendo referencia a la versión del tema guardada en **Estilos**, no a la última versión publicada.
- También puede comprobar que el CSS al que se llama en el HTML tiene el id de tema incorrecto.

## Workaround


Vaya a la página **Ventanas → Estilos** en Admin y guarde la nueva versión del tema como **"actual "**.




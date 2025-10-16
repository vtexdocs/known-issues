---
title: El evento view_cart se activa más de una vez en Faststore
slug: el-evento-viewcart-se-activa-mas-de-una-vez-en-faststore
status: PUBLISHED
createdAt: 2025-10-16T20:29:47.667Z
updatedAt: 2025-10-16T20:29:47.667Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: viewcart-event-is-triggered-more-than-once-on-faststore
locale: es
kiStatus: Fixed
internalReference: 1163447
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando abres el mini carrito en Faststore el evento view_cart se dispara más de una vez.

El problema está probablemente relacionado con esta línea de código.


#### Simulación



- Utiliza el parámetro `gtm_debug=true`.
- Intenta abrir el minicart
- Ver el evento view_cart siendo disparado más de una vez en dataLayer

Puedes probarlo en nuestra tienda por defecto https://starter.vtex.app/

## Workaround

**
N/A




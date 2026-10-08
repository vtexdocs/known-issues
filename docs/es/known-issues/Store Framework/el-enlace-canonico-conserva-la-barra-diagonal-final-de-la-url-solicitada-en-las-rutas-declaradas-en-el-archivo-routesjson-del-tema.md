---
title: 'El enlace canónico conserva la barra diagonal final de la URL solicitada en las rutas declaradas en el archivo routes.json del tema.'
slug: el-enlace-canonico-conserva-la-barra-diagonal-final-de-la-url-solicitada-en-las-rutas-declaradas-en-el-archivo-routesjson-del-tema
status: PUBLISHED
createdAt: 2026-10-08T22:08:50.000Z
updatedAt: 2026-10-08T22:08:50.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: canonical-link-keeps-the-trailing-slash-of-the-requested-url-on-routes-declared-in-the-themes-routesjson
locale: es
kiStatus: Backlog
internalReference: 1472057
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las páginas de Store Framework cuya ruta se declara únicamente en el archivo `store/routes.json` del tema (sin `canonical` definido), el `<link rel="canonical">` se construye a partir de la URL solicitada, incluyendo la barra diagonal final. Tanto `/my-page` como `/my-page/` devuelven un código 200 y cada una se declara como canónica:

- `/my-page` devuelve `<link rel="canonical" href="https://store.example.com/my-page"/>`

- `/my-page/` devuelve `<link rel="canonical" href="https://store.example.com/my-page/"/>`

Por lo tanto, la etiqueta canónica no consolida las dos URL, y los motores de búsqueda pueden indexarlas como duplicadas. Las páginas de productos y categorías no se ven afectadas (su etiqueta canónica se normaliza sin la barra diagonal).

## Simulación

1. En un tema de Store Framework, declara una ruta en store/routes.json sin una etiqueta `canonical`, por ejemplo:

2. Publica y abre la página.

3. Solicita la página con y sin barra diagonal al final y lee la etiqueta `canonical`: `curl -s https://<store>/my-page | grep -o '<link[^>]*rel="canonical"[^>]*>'` y `curl -s https://<store>/my-page/ | grep -o '<link[^>]*rel="canonical"[^>]*>'`.

4. Resultado esperado: la misma etiqueta `canonical` para ambas (sin la barra diagonal al final). Resultado real: cada respuesta muestra la ruta solicitada.

## Workaround

Declara la ruta en el archivo `store/routes.json` del tema con una barra diagonal final opcional en `path` y una barra diagonal explícita sin ella:

"store.custom#my-page": { "path": "/my-page(/)", "canonical": "/my-page" }

Con esto, tanto `/my-page` como `/my-page/` devuelven un código 200 y declaran `https://store.example.com/my-page` como la ruta canónica. Establecer `canonical` igual a `path` es rechazado por la compilación, por lo que se necesita la barra diagonal opcional.
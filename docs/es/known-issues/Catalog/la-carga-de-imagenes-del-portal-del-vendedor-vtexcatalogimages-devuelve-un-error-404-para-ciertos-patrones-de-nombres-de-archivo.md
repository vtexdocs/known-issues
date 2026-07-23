---
title: 'La carga de imágenes del portal del vendedor (vtex.catalog-images) devuelve un error 404 para ciertos patrones de nombres de archivo.'
slug: la-carga-de-imagenes-del-portal-del-vendedor-vtexcatalogimages-devuelve-un-error-404-para-ciertos-patrones-de-nombres-de-archivo
status: PUBLISHED
createdAt: 2026-07-23T21:45:00.000Z
updatedAt: 2026-07-23T21:45:00.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-portal-image-upload-vtexcatalogimages-returns-404-for-certain-filename-patterns
locale: es
kiStatus: Backlog
internalReference: 1438867
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al subir imágenes mediante la aplicación `vtex.catalog-images` (utilizada por los flujos de ingesta de imágenes del Portal del Vendedor/catálogo), ciertos patrones de nombres de archivo provocan que la aplicación genere una URL `{account}.vtexassets.com` que devuelve un error 404, aunque la solicitud de subida en sí misma devuelva un código 200 con una URL aparentemente válida. Este problema se ha reportado al menos tres veces con diferentes variaciones del mismo síntoma subyacente:

- Los nombres de archivo que contienen tres o más guiones bajos consecutivos (por ejemplo, `hello___world.jpeg`) entran en conflicto con la lógica interna de separación de hash de la aplicación, lo que produce un slug incorrecto.

- Los nombres de archivo sin extensión, o las imágenes obtenidas de URL externas sin extensión, también producen URL que no se pueden resolver.

## Simulación

- Se llama a `POST https://app.io.vtex.com/vtex.catalog-images/v0/{account}/master/images/save/{filename}` con un nombre de archivo que contiene `___` (3 o más guiones bajos consecutivos), por ejemplo, `hello___world.jpeg`.

- La respuesta devuelve 200 con una `fullUrl` como `https://{account}.vtexassets.com/assets/vtex.catalog-images/products/hello___world___{hash}.jpeg`.

- Se accede directamente a esa `fullUrl` → se devuelve un error 404, aunque el mismo flujo con un nombre de archivo sin guiones bajos repetidos (por ejemplo, `hello_world.jpeg`) se resuelve correctamente.

## Workaround

Evite usar nombres de archivo con tres o más guiones bajos consecutivos e incluya siempre una extensión de archivo válida antes de subirlos a través de `vtex.catalog-images`.
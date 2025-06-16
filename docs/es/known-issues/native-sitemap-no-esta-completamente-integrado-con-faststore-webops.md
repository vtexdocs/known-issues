---
title: Native Sitemap no está completamente integrado con Faststore Webops
slug: native-sitemap-no-esta-completamente-integrado-con-faststore-webops
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: native-sitemap-is-not-fully-integrated-with-faststore-webops
locale: es
kiStatus: Backlog
internalReference: 1220872
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Faststore utiliza la aplicación `vtex.store-sitemap` de IO para construir el mapa del sitio de la tienda, pero ahora mismo no está completamente integrada. Las páginas creadas en el hCMS, por ejemplo, no son accesibles en el sitemap, y las URLs del sitemap pueden apuntar al entorno seguro.


#### Simulación



- Ve al IDE GraphQL de tu tienda Faststore y genera el sitemap a través de la app `vtex.store-sitemap`.
- Verás que las páginas de hCMS no están, y el dominio final no es correcto (está usando el dominio seguro)

## Workaround


Para las tiendas que utilizan v1 y v2, es posible utilizar un proxy que apunte al dominio correcto. Esto es algo que el cliente necesita personalizar y solucionará sólo el mapa del sitio en sí, pero las páginas hCMS no se añadirán al mapa del sitio. Desafortunadamente, todavía no tenemos una solución para las páginas hCMS en las tiendas v1 y v2.
Sugerimos utilizar la unificación de dominio para las tiendas que utilizan v3 (webops). Confirme si su tienda está correctamente actualizada y abra un ticket con el soporte de producto para que podamos activar esta función.




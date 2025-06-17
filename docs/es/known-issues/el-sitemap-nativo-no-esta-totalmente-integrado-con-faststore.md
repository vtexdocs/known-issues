---
title: El Sitemap nativo no está totalmente integrado con Faststore
slug: el-sitemap-nativo-no-esta-totalmente-integrado-con-faststore
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: native-sitemap-is-not-fully-integrated-with-faststore
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


**Para tiendas que usan v1 y v2,** un proxy para apuntar al dominio correcto es posible. Esto es algo que el cliente necesita personalizar y solucionará sólo el mapa del sitio en sí, pero las páginas hCMS no se añadirán al mapa del sitio. Desafortunadamente, todavía no tenemos una solución para las páginas hCMS en las tiendas v1 y v2.

Sugerimos utilizar la unificación de dominio para **tiendas que utilicen v3** (webops). Confirma si tu tienda está correctamente actualizada y abre un ticket con el soporte de producto para que podamos activar esta función. Esto es lo que debe comprobar antes de abrir el ticket:

1. Compruebe si ha renombrado correctamente el archivo `faststore.config` a `discovery.config` Puede seguir esta nota de la versión
2. Actualice las dependencias: compruebe esta nota de la versión. Debe utilizar sólo `@faststore/cli` como dependencia.
3. Actualiza la tienda a la versión más reciente del framework: puedes comprobarlo en el repo de faststore https://github.com/vtex/faststore




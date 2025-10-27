---
title: 'El Sitemap nativo no está totalmente integrado con Faststore'
slug: el-sitemap-nativo-no-esta-totalmente-integrado-con-faststore
status: PUBLISHED
createdAt: 2025-10-13T14:41:37.907Z
updatedAt: 2025-10-13T14:41:37.907Z
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

Sugerimos utilizar la unificación de dominio para **tiendas que utilicen v3** (webops). Esto es lo que necesita comprobar antes de seguir:

1. 1. Compruebe si ha renombrado correctamente el archivo `faststore.config` a `discovery.config` Puede seguir esta nota de publicación
2. 2. Actualice las dependencias: consulte esta nota de la versión. Sólo debe utilizar `@faststore/cli` como dependencia.
3. Actualiza la tienda a la versión más reciente del framework: puedes comprobarlo en el repositorio de faststore https://github.com/vtex/faststore

Ahora puedes actualizar los dominios de tu tienda para utilizar un único dominio:

Desde

    storeUrl: "https://www.domain.com (https://www.domain.com/)",secureSubdomain: "https://secure.domain.com (https://secure.domain.com/)",checkoutUrl: "https://secure.domain.com/checkout",loginUrl: "https://secure.domain.com/api/io/login",accountUrl: "https://secure.domain.com/api/io/account",To

    storeUrl: "https://www.domain.com (https://www.domain.com/)",secureSubdomain: "https://www.domain.com (https://www.domain.com/)",checkoutUrl: "https://www.domain.com/checkout",loginUrl: "https://www.domain.com/api/io/login",accountUrl: "https://www.domain.com/api/io/account",
Es importante señalar que la unificación de dominios tampoco resolverá el problema de que las páginas de hCMS estén disponibles en el mapa del sitio para las tiendas que utilicen V3.


%0A
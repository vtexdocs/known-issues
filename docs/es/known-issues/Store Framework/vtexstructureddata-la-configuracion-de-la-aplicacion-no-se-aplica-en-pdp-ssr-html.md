---
title: 'vtex.structured-data La configuración de la aplicación no se aplica en PDP SSR HTML'
slug: vtexstructureddata-la-configuracion-de-la-aplicacion-no-se-aplica-en-pdp-ssr-html
status: PUBLISHED
createdAt: 2026-11-12T22:45:53.000Z
updatedAt: 2026-11-12T22:45:53.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: vtexstructureddata-app-settings-are-not-applied-in-pdp-ssr-html
locale: es
kiStatus: Backlog
internalReference: 1484644
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La aplicación `vtex.structured-data` genera el JSON-LD (schema.org) para las páginas de la tienda, que utilizan los motores de búsqueda, Google Merchant Center y los agentes de IA. La aplicación lee su propia configuración (`gtinValue`, `disableProductStructuredData`, etc.) mediante una consulta GraphQL a nivel de componente (`useAppSettings`). El servidor de renderizado no ejecuta estas consultas durante el renderizado del lado del servidor.

Como resultado, el HTML del SSR siempre utiliza la configuración predeterminada, y la configuración de la tienda solo se aplica en el navegador después de la hidratación. La mayoría de los usuarios de estos datos solo leen el HTML del servidor, por lo que en la práctica **la configuración no tiene efecto**. Por ejemplo, el GTIN se muestra como el ID de SKU con ceros iniciales, incluso cuando el EAN está configurado en los ajustes de la aplicación.

Este problema afecta a todas las cuentas que utilizan Store Framework, ya que `vtex.structured-data` es una dependencia de dicho framework.

## Simulación

1. En una cuenta de Store Framework, abre el panel de administración y ve a la configuración de la aplicación `vtex.structured-data`.

2. Configura `gtinValue` para usar EAN (o habilita `disableProductStructuredData`).

3. Asegúrate de que la opción `vtex.store` **“Habilitar la ejecución de todas las consultas GraphQL en la página del producto”** (`enableFullSSROnProduct`) **no** esté habilitada.

4. Abre una página de producto (PDP) e inspecciona la respuesta del servidor sin procesar (`curl` o “Ver código fuente”, no el DOM renderizado) para el script `application/ld+json`.

5. Observa que el JSON-LD utiliza los valores predeterminados: `gtin` es el ID de SKU con ceros iniciales, y el JSON-LD de la PDP sigue presente.

6. Inspecciona el DOM después de la hidratación. La configuración solo se aplica en el lado del cliente.

## Workaround

Habilite la opción **“Habilitar la ejecución de todas las consultas GraphQL en la página del producto”** (`enableFullSSROnProduct`) en la configuración de `vtex.store`. Al activarla, el servidor ejecuta todas las consultas GraphQL de la página del producto antes de responder, por lo que la configuración de datos estructurados se aplica al HTML del renderizado del lado del servidor (SSR).

Limitaciones:

- Puede aumentar el tiempo de renderizado y el TTFB en la página del producto, en proporción al número de bloques que ejecutan una consulta.
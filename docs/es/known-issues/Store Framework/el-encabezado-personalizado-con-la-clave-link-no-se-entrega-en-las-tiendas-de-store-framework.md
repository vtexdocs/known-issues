---
title: 'El encabezado personalizado con la clave "Link" no se entrega en las tiendas de Store Framework.'
slug: el-encabezado-personalizado-con-la-clave-link-no-se-entrega-en-las-tiendas-de-store-framework
status: PUBLISHED
createdAt: 2026-11-16T20:03:20.000Z
updatedAt: 2026-11-16T20:03:20.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: custom-header-with-key-link-is-not-delivered-on-store-framework-stores
locale: es
kiStatus: Backlog
internalReference: 1485532
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas de Store Framework, los comerciantes pueden agregar encabezados de respuesta HTTP personalizados en el panel de administración (Configuración de la tienda > Configuración avanzada > Encabezados personalizados). Si un encabezado personalizado utiliza la clave `Link`, su valor nunca llega a la respuesta. El encabezado `Link` que devuelve la tienda contiene únicamente las sugerencias de recursos predeterminadas de la plataforma (`dns-prefetch`/`preconnect` para el dominio de los activos de la tienda, Google Analytics, Google Tag Manager y Facebook). El valor configurado por el comerciante se descarta.

Los encabezados personalizados con cualquier otra clave funcionan correctamente.

## Simulación

1. En el panel de administración, vaya a Configuración de la tienda > Tienda virtual > Configuración avanzada > Encabezados personalizados.

2. Agregue un nuevo encabezado:

- ID: cualquier etiqueta (por ejemplo, `my-link-header`)

- Clave: `Link`

- Valor: cualquier valor válido para `Link` (por ejemplo, `</about>; rel="related"`)

3. Guarde la configuración y espere a que se propague.
4. Solicita cualquier página de la tienda directamente desde el origen y verifica los encabezados de respuesta.

5. El encabezado `Link` contiene solo los valores predeterminados (`{account}.vtexassets.com`, `google-analytics.com`, `googletagmanager.com`, `connect.facebook.net`). Falta el valor configurado.

6. Para comparar, agrega otro encabezado personalizado con una clave diferente (por ejemplo, `X-Test-Header`). Ese encabezado aparece en la respuesta.

## Workaround

No existe una solución alternativa para proporcionar un valor personalizado en el encabezado de respuesta HTTP `Link`.

Si el caso de uso del comerciante también acepta la relación declarada en el HTML, se puede agregar como una etiqueta `<link>` dentro de `<head>` (por ejemplo, `<link rel="related" href="/about">`) mediante una aplicación de píxeles. Esto no reemplaza el encabezado HTTP para los clientes que solo leen los encabezados de respuesta.
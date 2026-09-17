---
title: 'La configuración avanzada de vtex.store persistía de forma inconsistente (raíz frente a anidada) dependiendo de la página de administración que se utilizara.'
slug: la-configuracion-avanzada-de-vtexstore-persistia-de-forma-inconsistente-raiz-frente-a-anidada-dependiendo-de-la-pagina-de-administracion-que-se-utilizara
status: PUBLISHED
createdAt: 2026-09-17T20:42:54.000Z
updatedAt: 2026-09-17T20:42:54.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: vtexstore-advanced-settings-persisted-inconsistently-root-vs-nested-depending-on-which-admin-page-is-used
locale: es
kiStatus: Backlog
internalReference: 1462792
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las opciones de configuración avanzada de `vtex.store` (`enableCriticalCSS`, `enableCSSConcatenation`, `enableMenuRenderingOptimization` y otras declaradas en `advancedSettings` en el esquema de la aplicación) se almacenan de forma diferente según la página de administración utilizada para guardarlas. `/admin/cms/store` (Configuración clásica de la tienda, pestañas General/Avanzada) guarda estas opciones directamente en la raíz del archivo JSON de configuración. `/admin/apps/vtex.store@{version}/setup` (página de configuración genérica de la aplicación) guarda las mismas opciones anidadas en `advancedSettings`, tal como se indica en el esquema de la aplicación. Los componentes de la tienda que utilizan estas opciones las leen solo en la raíz, por lo que una opción configurada mediante `/admin/apps/vtex.store@@{version}/setup` aparece habilitada en la interfaz de administración, pero no tiene ningún efecto en la tienda.

## Simulación

- Acceda a `/admin/apps/vtex.store@{versión instalada}/setup` para cualquier cuenta/espacio de trabajo.

- Active la opción "Optimización de renderizado de menús" (`enableMenuRenderingOptimization`) y guarde.

- Ejecute `vtex settings get vtex.store`: la bandera aparecerá anidada: `{"advancedSettings":{"enableMenuRenderingOptimization":true}}`.

- Observe que la optimización de renderizado (montaje diferido de submenús, enlaces SSR reducidos) no surte efecto, aunque la interfaz de administración la muestre como activada.

- Repita el mismo proceso a través de `/admin/cms/store` → pestaña Avanzado → Guardar. Ahora, `vtex settings get vtex.store` muestra la bandera directamente en la raíz (`{"enableMenuRenderingOptimization":true}`), y la optimización del bloque `menu` surte efecto.

## Workaround

Configure estas opciones de Ajustes avanzados a través de `/admin/cms/store` (Ajustes de la tienda clásicos, pestaña Avanzado) en lugar de `/admin/apps/vtex.store@.../setup`. Al guardar los cambios mediante la página clásica, las opciones se conservan en la estructura básica que leen los componentes de la tienda (por ejemplo, `menu`).
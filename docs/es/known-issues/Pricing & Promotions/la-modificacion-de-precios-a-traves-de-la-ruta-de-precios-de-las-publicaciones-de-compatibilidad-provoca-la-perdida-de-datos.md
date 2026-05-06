---
title: 'La modificación de precios a través de la ruta de precios de las publicaciones de compatibilidad provoca la pérdida de datos'
slug: la-modificacion-de-precios-a-traves-de-la-ruta-de-precios-de-las-publicaciones-de-compatibilidad-provoca-la-perdida-de-datos
status: PUBLISHED
createdAt: 2021-12-14T18:46:33.000Z
updatedAt: 2024-12-19T19:49:50.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: pricing-modification-via-compatibility-post-prices-route-is-losing-data
locale: es
kiStatus: No Fix
internalReference: 487698
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hemos detectado un problema con la ruta de publicación de precios de compatibilidad. Cuando se envían varias solicitudes de actualización de precios en un breve intervalo de tiempo, es posible que el sistema no procese el precio más actualizado. Esto puede dar lugar a que se apliquen precios obsoletos o incorrectos.

## Simulación

1. Utiliza la ruta de publicación de precios de compatibilidad para enviar un lote de actualizaciones de precios.
2. Supervise el proceso mediante los registros de auditoría para comprobar si todas las actualizaciones se aplican correctamente.
3. Repita la prueba con lotes de diferentes tamaños e intervalos entre solicitudes. Tenga en cuenta que el problema no se produce de forma sistemática en todas las pruebas.

## Workaround

provisional**

- Pase a utilizar las API de precios V2, que no presentan este problema.
- Distribuya las solicitudes de forma más uniforme introduciendo retrasos, como esperar al menos 30 segundos entre lotes consecutivos.
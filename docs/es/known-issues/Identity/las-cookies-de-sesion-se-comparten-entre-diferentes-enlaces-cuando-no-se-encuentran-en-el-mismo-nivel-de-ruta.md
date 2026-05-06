---
title: 'Las cookies de sesión se comparten entre diferentes enlaces cuando no se encuentran en el mismo nivel de ruta'
slug: las-cookies-de-sesion-se-comparten-entre-diferentes-enlaces-cuando-no-se-encuentran-en-el-mismo-nivel-de-ruta
status: PUBLISHED
createdAt: 2023-10-25T01:05:47.000Z
updatedAt: 2023-10-25T01:05:47.000Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: session-cookies-are-shared-between-different-bindings-when-they-are-not-in-the-same-path-level
locale: es
kiStatus: No Fix
internalReference: 925071
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las cookies de información de sesión son exclusivas de la vinculación de una cuenta específica, pero las vinculaciones que no se encuentran en el mismo nivel de ruta pueden recibir cookies de niveles inferiores, lo que puede provocar problemas.

Si proceden de la misma cuenta, la información de sesión se mezclará y anulará parámetros críticos. Si proceden de cuentas diferentes, pueden bloquear las solicitudes, generando errores como «no se permiten las solicitudes entre cuentas».

## Simulación

Un ejemplo de escenario es una tienda que utiliza la ruta raíz `/` para su idioma predeterminado (inglés) y `/fr` para un segundo idioma (francés). La información de la tienda en inglés puede afectar a la tienda en francés y viceversa.

Otro ejemplo es una tienda B2C bajo `/us` para el país específico y la tienda B2B bajo `/us/corporate`.

## Workaround

Las tiendas que comparten el mismo host/dominio pueden mantener el mismo patrón para su ruta sin mezclar diferentes niveles. Algunas alternativas para los ejemplos presentados serían `/en` frente a `/fr` (ambas con una ruta de un solo nivel) y `/us/personal` frente a `/us/corporate` (ruta de dos niveles).
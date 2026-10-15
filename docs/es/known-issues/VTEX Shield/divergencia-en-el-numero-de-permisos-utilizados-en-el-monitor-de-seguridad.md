---
title: 'Divergencia en el número de permisos utilizados en el Monitor de seguridad'
slug: divergencia-en-el-numero-de-permisos-utilizados-en-el-monitor-de-seguridad
status: PUBLISHED
createdAt: 2025-05-07T23:01:42.000Z
updatedAt: 2026-10-15T22:55:39.000Z
contentType: knownIssue
productTeam: VTEX Shield
author: 2mXZkbi0oi061KicTExNjo
tag: VTEX Shield
slugEN: divergence-in-the-number-of-used-permissions-in-the-security-monitor
locale: es
kiStatus: Backlog
internalReference: 1222306
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El Monitor de Seguridad muestra una discrepancia en el número de permisos utilizados en el hallazgo de Permisos Excesivos para Claves de Aplicación compartidas entre cuentas y subcuentas (arquitectura multicuenta).

## Simulación

Condiciones para reproducir el problema:

- Cuenta con arquitectura multicuenta;

- Existe una Clave de Aplicación compartida entre la cuenta y sus subcuentas;

- Cuenta que utiliza VTEX Shield y tiene el Monitor de Seguridad;

- Esta Clave de Aplicación compartida se reporta como un hallazgo de tipo Permiso Excesivo en el Monitor de Seguridad.

Pasos:
En las cuentas con la Clave de Aplicación compartida:

- Abra el Monitor de Seguridad;

- En cualquiera de las pestañas (Abiertas, Pospuestas y Cerradas), introduzca la Clave de Aplicación en la barra de búsqueda;

- Haga clic en el resultado de tipo Permisos Excesivos;

- En la ventana emergente que se abre, verá que el número de permisos utilizados difiere entre las cuentas.

Dado que se trata de una clave de aplicación compartida, debería mostrar el número de permisos utilizados en todas las cuentas/subcuentas, no solo el de la cuenta que estamos consultando.

## Workaround

No hay ninguna solución alternativa disponible.
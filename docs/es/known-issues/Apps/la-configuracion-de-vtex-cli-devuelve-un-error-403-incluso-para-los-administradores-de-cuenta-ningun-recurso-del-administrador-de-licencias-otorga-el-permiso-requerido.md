---
title: 'La configuración de vtex (CLI) devuelve un error 403 incluso para los administradores de cuenta: ningún recurso del Administrador de licencias otorga el permiso requerido.'
slug: la-configuracion-de-vtex-cli-devuelve-un-error-403-incluso-para-los-administradores-de-cuenta-ningun-recurso-del-administrador-de-licencias-otorga-el-permiso-requerido
status: PUBLISHED
createdAt: 2026-09-17T20:57:07.000Z
updatedAt: 2026-09-17T20:57:07.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: vtex-settings-set-cli-returns-403-even-for-account-admins-no-license-manager-resource-grants-the-required-permission
locale: es
kiStatus: Backlog
internalReference: 1462810
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La ejecución de `vtex settings set <app> <field> <value>` falla con un error 403 Prohibido (`El usuario con rol <usuario> en <cuenta>/ no puede realizar la acción PUT en el recurso vrn:apps:...:/apps/<app>/settings`), incluso cuando el usuario tiene el rol más alto disponible en License Manager (incluida la opción "Permitir configuración de la aplicación"). La interfaz de administración, utilizada por el mismo usuario en la misma cuenta/espacio de trabajo, guarda la configuración correctamente. No se trata de un rol mal configurado: ningún recurso expuesto actualmente en License Manager otorga el permiso que requiere la ruta de escritura directa de la CLI.

## Simulación

- Como usuario con el rol más alto configurado en la cuenta (incluida la opción "Permitir configuración de la aplicación" marcada, en Recursos de infraestructura), ejecute: `vtex settings set vtex.store <field> <value>`.
- Se observa una respuesta 403: `El usuario con rol <usuario> en <cuenta>/ no puede realizar la acción PUT en el recurso vrn:apps:...:/apps/vtex.store/settings`.

- Confirme que el mismo campo se puede guardar correctamente a través de `/admin/cms/store` o `/admin/apps/vtex.store@.../setup` con el mismo usuario, la misma cuenta y el mismo espacio de trabajo.

## Workaround

Configure los ajustes de la aplicación a través de la interfaz de administración (`/admin/cms/store` o `/admin/apps/{app}@{version}/setup`) en lugar de la línea de comandos.
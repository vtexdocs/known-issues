---
title: 'La página de configuración del modo de defensa de la administración de pagos no se carga (permisos y GET /admin/iframe/transactions/settings 500).'
slug: la-pagina-de-configuracion-del-modo-de-defensa-de-la-administracion-de-pagos-no-se-carga-permisos-y-get-adminiframetransactionssettings-500
status: PUBLISHED
createdAt: 2026-01-09T15:30:06.498Z
updatedAt: 2026-01-09T15:30:06.498Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payments-admin-defense-mode-settings-page-fails-to-load-permissions-and-get-adminiframetransactionssettings-500
locale: es
kiStatus: Backlog
internalReference: 1348945
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Los usuarios con un rol personalizado de administrador de licencias no pueden acceder a la página de configuración del modo de defensa de pagos en Admin, incluso cuando parecen tener los permisos necesarios. El síntoma visible es un error 500 al intentar cargar la página con GET a /admin/iframe/transactions/settings (herramientas de desarrollo). Esto afecta a los usuarios que acceden a Admin > Transacciones > Configuración (Modo de defensa) utilizando roles que no son de propietario/administrador en Pagos. El síntoma visual es un error al intentar acceder a la página: `{"name": "HttpError", "statusCode": 404, "message": "No se ha encontrado ninguna página de administración para la URL actual"'}`


#### Simulación

## Workaround


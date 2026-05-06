---
title: 'La interfaz de usuario de configuración no actualiza el «periodo de validez» de las cotizaciones'
slug: la-interfaz-de-usuario-de-configuracion-no-actualiza-el-periodo-de-validez-de-las-cotizaciones
status: PUBLISHED
createdAt: 2023-08-07T19:42:08.000Z
updatedAt: 2024-09-27T13:22:28.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: settings-ui-doesnt-update-expiration-period-of-quotes
locale: es
kiStatus: Fixed
internalReference: 876576
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La interfaz de usuario de la configuración de «Presupuestos B2B» no actualiza el valor del «período de caducidad»; siempre es 30.

## Simulación

- Accede a la página de configuración de «Presupuestos B2B» y modifica el «período de caducidad».
- Actualice la página; no se aplican los cambios.

## Workaround

- Acceda al IDE de GraphQL y seleccione vtex.b2b-quotes-graphql;
- Utilice la consulta siguiente para obtener la fecha de caducidad:

 { getAppSettings{ adminSetup { cartLifeSpan } }}

- Envía una mutación para actualizar la fecha de caducidad a un valor diferente:

 mutation SaveAppSettings($input: AppSettingsInput!) { saveAppSettings(input: $input) { adminSetup { cartLifeSpan } }}{ "input": { "cartLifeSpan": }}
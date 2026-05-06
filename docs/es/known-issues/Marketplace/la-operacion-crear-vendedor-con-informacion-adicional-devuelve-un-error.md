---
title: 'La operación «Crear vendedor con información adicional» devuelve un error'
slug: la-operacion-crear-vendedor-con-informacion-adicional-devuelve-un-error
status: PUBLISHED
createdAt: 2023-01-26T17:12:42.000Z
updatedAt: 2023-02-06T20:34:01.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: create-seller-with-additional-information-is-returning-an-error
locale: es
kiStatus: Fixed
internalReference: 741110
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar crear un vendedor a través del panel de administración y rellenar el formulario opcional de «Información adicional», aparece un error como este:
`El vendedor se ha añadido correctamente, pero no se ha podido guardar parte de la información.`
 ![](https://vtexhelp.zendesk.com/attachments/token/FYe7irRht0psXP4PwkEH7fm05/?name=image.png)

A pesar del mensaje, el vendedor no se ha guardado realmente.

## Simulación

1. Vaya a la gestión de vendedores y haga clic en «Crear nuevo vendedor»;
2. Rellene toda la información obligatoria;
3. Rellene al menos un campo opcional de la sección «Información adicional»;
4. Compruebe que aparece el mensaje de error.

## Workaround

En primer lugar, cree el vendedor sin la «Información adicional».
Una vez creado el vendedor, vuelva a su configuración y rellene la «Información adicional».
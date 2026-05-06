---
title: 'La aplicación de permisos de Storefront establece «documentType» como «cpf»'
slug: la-aplicacion-de-permisos-de-storefront-establece-documenttype-como-cpf
status: PUBLISHED
createdAt: 2023-04-27T15:19:37.000Z
updatedAt: 2023-05-23T18:01:37.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: storefront-permissions-app-sets-documenttype-as-cpf
locale: es
kiStatus: Fixed
internalReference: 798330
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La aplicación de permisos de la tienda online siempre establece el campo «clientProfileData.documentType» como «cpf» en el formulario de pedido. Esto puede provocar que el proveedor rechace la transacción.

## Simulación

- Instala B2B Suite;
- Configura una organización;
- Accede al sitio web y realiza un pedido.

## Workaround

Utiliza el fragmento de código siguiente para sustituir el «documentType» de tu país en el formulario de pedido

    vtexjs.checkout .getOrderForm() .then(function(orderForm) { var clientProfileData = orderForm.clientProfileData clientProfileData.documentType = 'añada aquí la clave para' return vtexjs.checkout.sendAttachment( "clientProfileData", clientProfileData ) }) .done(function(orderForm){})
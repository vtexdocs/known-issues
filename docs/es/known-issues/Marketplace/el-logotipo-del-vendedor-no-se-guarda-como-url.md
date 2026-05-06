---
title: 'El logotipo del vendedor no se guarda como URL'
slug: el-logotipo-del-vendedor-no-se-guarda-como-url
status: PUBLISHED
createdAt: 2023-01-19T14:35:13.000Z
updatedAt: 2023-04-18T12:16:18.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: seller-logo-not-being-saved-as-an-url
locale: es
kiStatus: Fixed
internalReference: 736716
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La información del logotipo del vendedor en la base de datos no se guarda como una URL, sino como una imagen.

Actualmente, la documentación de nuestro formulario de pedido indica que este campo debe ser una URL:
https://developers.vtex.com/docs/guides/orderform-fields#sellers
 ![](https://vtexhelp.zendesk.com/attachments/token/SNx3LvZCcZAZHXrEnMaa5EUkh/?name=image.png)

Sin embargo, en nuestra base de datos se guarda en un formato diferente.

## Simulación

1. Establecer un logotipo para un vendedor a través de la interfaz de usuario o la API;
2. Comprueba mediante la API GET de vendedor (https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/-accountName-.-environment-.com.br/api/seller-register/pvt/sellers/-sellerId-) el formato del campo «UrlLogo».
3. Compruebe que en el formulario de pedido tampoco sea una URL.

## Workaround

No hay solución alternativa.
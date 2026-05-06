---
title: 'Eliminar la información del proveedor de un producto que no funciona a través de «Admin»'
slug: eliminar-la-informacion-del-proveedor-de-un-producto-que-no-funciona-a-traves-de-admin
status: PUBLISHED
createdAt: 2023-04-25T17:14:30.000Z
updatedAt: 2023-04-25T17:14:30.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: remove-supplier-info-from-product-not-working-via-admin
locale: es
kiStatus: Backlog
internalReference: 796608
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar eliminar la información del proveedor de un producto y guardar el producto a través de Admin, aunque se reciba una respuesta de éxito, la información sigue apareciendo.

Al volver a abrir la página del producto, se puede ver que la información del proveedor sigue ahí.

## Simulación

1. Añade un proveedor a un producto y guárdalo;
2. Vuelve a entrar en el producto y comprueba que la información del proveedor aparece correctamente;
3. Elimina la información del proveedor del producto y guárdalo;
4. Vuelve a entrar en el producto y comprueba que la información del proveedor sigue ahí.

## Workaround

provisional**
Elimine esta información utilizando la API de actualización de productos:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/product/-productId-

Establezca el campo `SupplierId` como `null`

    curl --location --globoff --request PUT 'https://.vtexcommercestable.com.br/api/catalog/pvt/product/' \--header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --header 'X-VTEX-API-AppKey: ' \ --header 'X-VTEX-API-AppToken: ' \--data '{ "Name": "insertar prueba de producto", "DepartmentId": 1, "CategoryId": 2, "BrandId": 2000000, "LinkId": "insertar-producto-de-prueba", "RefId": "310117869", "IsVisible": true, "Description": "texto de descripción", "DescriptionShort": "Utilice el código postal 04548-005 para envío gratuito", "FechaDeLanzamiento": "2019-01-01T00:00:00", "PalabrasClave": "prueba,prueba2", "Título": "producto de prueba", "EstáActivo": true, "CódigoFiscal": "", "MetaTagDescription": "prueba de etiqueta", "SupplierId": null, "ShowWithoutStock": true, "AdWordsRemarketingCode": null, "LomadeeCampaignCode": null, "Score": 1}'
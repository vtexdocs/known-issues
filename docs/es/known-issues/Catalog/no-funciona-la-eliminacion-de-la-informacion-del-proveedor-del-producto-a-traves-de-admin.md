---
title: 'No funciona la eliminación de la información del proveedor del producto a través de Admin'
slug: no-funciona-la-eliminacion-de-la-informacion-del-proveedor-del-producto-a-traves-de-admin
status: PUBLISHED
createdAt: 2025-10-16T19:51:19.608Z
updatedAt: 2025-10-16T19:51:19.608Z
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


Al intentar eliminar la información del proveedor de un producto y guardar el producto a través de Admin, a pesar de obtener una respuesta satisfactoria, la información persiste.

Al abrir de nuevo la página del producto, es posible ver la información del proveedor todavía allí.


#### Simulación



1. Añade un proveedor a un producto y guárdalo;
2. Entra de nuevo en el producto y comprueba que la información del proveedor está correctamente;
3. 3. Elimine la información del proveedor del producto y guárdelo;
4. 4. Vuelva a introducir el producto y compruebe que la información del proveedor sigue ahí.

## Workaround


Elimine esta información utilizando la API de actualización de productos:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/product/-productId-

Establezca el campo `SupplierId` como `null`.

    curl --location --globoff --request PUT 'https://.vtexcommercestable.com.br/api/catalog/pvt/product/' \--header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --header 'X-VTEX-API-AppKey: ' \ --header 'X-VTEX-API-AppToken: ' \--data '{ "Nombre": "insertar prueba de producto", "DepartmentId": 1, "CategoryId": 2, "BrandId": 2000000, "LinkId": "insert-product-test", "RefId": "310117869", "IsVisible": true, "Description": "texto de descrição", "DescriptionShort": "Utilize o CEP 04548-005 para frete grátis", "ReleaseDate": "2019-01-01T00:00:00", "KeyWords": "teste,teste2", "Title": "producto de teste", "IsActive": true, "TaxCode": "", "MetaTagDescription": "tag test", "SupplierId": null, "ShowWithoutStock": true, "AdWordsRemarketingCode": null, "LomadeeCampaignCode": null, "Score": 1}'





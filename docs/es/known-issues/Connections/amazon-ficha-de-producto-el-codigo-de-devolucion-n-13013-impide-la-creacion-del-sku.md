---
title: 'Amazon Ficha de producto El código de devolución n.º 13013 impide la creación del SKU'
slug: amazon-ficha-de-producto-el-codigo-de-devolucion-n-13013-impide-la-creacion-del-sku
status: PUBLISHED
createdAt: 2026-03-30T14:32:24.243Z
updatedAt: 2026-03-30T14:32:24.243Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-returns-code-13013-preventing-sku-creation
locale: es
kiStatus: Fixed
internalReference: 1309398
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos comerciantes se encuentran con el código de error n.º 13013 de Amazon al intentar publicar productos a través del conector de VTEX para Amazon. El síntoma visible es que las SKU afectadas no se crean ni se asocian correctamente en Amazon, y las publicaciones siguen mostrando un error en Bridge/Listing. Los informes abarcan varias cuentas y SKU.

## Simulación

Cuenta de VTEX conectada al marketplace de Amazon e intentando publicar productos a través de Amazon Listing/Bridge.

- Pasos:
  - Enviar el listado de productos de una de las SKU afectadas a Amazon a través del conector de VTEX para Amazon.
  - Observar la respuesta en Bridge/Listing: Amazon rechaza el envío con el mensaje del código #13013, indicando que la SKU no se puede añadir porque el producto no está en el catálogo o ha sido eliminado, y solicita reenviarlo con el UPC/GTIN original en lugar del ASIN sugerido, así como comprobar el progreso o los problemas en Seller Central.


    [Código #13013] Su SKU no se puede añadir porque el producto no está en el catálogo o ha sido eliminado. Compruebe los datos del producto, corrija los errores y reenvíelo con el UPC/GTIN original en lugar de un ASIN sugerido. Si está publicando un producto en otro sitio web de Amazon, es posible que el anuncio tarde unas horas en estar disponible. Compruebe si hay avances o problemas en su cuenta de vendedor.

## Workaround

¿Existe alguna solución alternativa para este error? En caso afirmativo, descríbala aquí. Si no es así, escriba «N/A» o «No hay ninguna solución alternativa disponible». No elimine esta sección si no hay ninguna solución alternativa, por favor.
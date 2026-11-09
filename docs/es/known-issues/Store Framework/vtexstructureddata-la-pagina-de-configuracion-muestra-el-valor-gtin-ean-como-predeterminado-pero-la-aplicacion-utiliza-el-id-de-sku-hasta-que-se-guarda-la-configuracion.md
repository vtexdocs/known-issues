---
title: 'vtex.structured-data La página de configuración muestra el valor GTIN "EAN" como predeterminado, pero la aplicación utiliza el ID de SKU hasta que se guarda la configuración.'
slug: vtexstructureddata-la-pagina-de-configuracion-muestra-el-valor-gtin-ean-como-predeterminado-pero-la-aplicacion-utiliza-el-id-de-sku-hasta-que-se-guarda-la-configuracion
status: PUBLISHED
createdAt: 2026-11-09T21:15:34.000Z
updatedAt: 2026-11-09T21:15:34.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: vtexstructureddata-settings-page-shows-gtin-value-ean-as-default-but-the-app-uses-the-sku-id-until-the-setting-is-saved
locale: es
kiStatus: Backlog
internalReference: 1482707
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La página de configuración de `vtex.structured-data` muestra **EAN** como valor GTIN predeterminado. Sin embargo, si nadie ha guardado la configuración de la aplicación, esta utiliza un valor predeterminado diferente (`itemId`, es decir, el ID de SKU de VTEX). El valor predeterminado en `manifest.json` (`"ean"`) y el valor predeterminado en el código (`DEFAULT_GTIN_VALUE = 'itemId'`) no coinciden.

Como resultado, las tiendas que nunca guardaron la configuración envían el ID de SKU en el campo `gtin` de JSON-LD, con ceros iniciales (por ejemplo, el ID de SKU 512839 se convierte en `00512839`), y el campo `sku` muestra el mismo valor. No se utiliza el EAN registrado en el catálogo.

## Simulación

1. Utilice una cuenta donde `vtex.structured-data` esté instalado y la configuración de la aplicación nunca se haya guardado. 2. En el panel de administración, abra la configuración de la aplicación (`/admin/apps/vtex.structured-data@<versión>/setup`). El valor GTIN muestra **EAN** como seleccionado.

3. Sin guardar, abra la página de detalles del producto (PDP) de un producto que tenga un EAN registrado en el catálogo.

4. Inspeccione el script `application/ld+json`.

5. Resultado: `gtin` y `sku` (en `Producto` y `Oferta`) muestran el ID de SKU con ceros a la izquierda, no el EAN.

## Workaround

1. Asegúrese de que la aplicación esté instalada en la cuenta (`vtex install vtex.structured-data`). Si solo es una dependencia, la configuración no se puede modificar.

2. En el panel de administración, abra la configuración de la aplicación, seleccione **EAN** como valor GTIN y haga clic en **Guardar**.

Después de guardar, `gtin` muestra el EAN. Si el producto no tiene un EAN válido, `gtin` se deja vacío y `sku` muestra el ID del SKU.
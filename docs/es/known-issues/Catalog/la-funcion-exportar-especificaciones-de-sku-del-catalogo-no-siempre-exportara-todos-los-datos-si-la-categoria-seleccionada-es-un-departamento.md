---
title: 'La función «Exportar especificaciones de SKU del catálogo» no siempre exportará todos los datos si la categoría seleccionada es un departamento'
slug: la-funcion-exportar-especificaciones-de-sku-del-catalogo-no-siempre-exportara-todos-los-datos-si-la-categoria-seleccionada-es-un-departamento
status: PUBLISHED
createdAt: 2021-11-09T18:18:57.000Z
updatedAt: 2026-02-10T14:17:39.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-sku-specification-export-will-not-always-export-all-the-data-if-the-selected-category-is-a-department
locale: es
kiStatus: Fixed
internalReference: 465445
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La exportación de especificaciones de SKU del catálogo no siempre exportará todos los datos si se selecciona el departamento y no la subcategoría más específica.

## Simulación

- Accede a `admin/Site/ProdutoExportacaoImportacaoEspecificacaoSKUV2.aspx`
- Intente exportar las especificaciones de un departamento con gran cantidad de datos;
- Exporte los mismos datos, pero desde todas las categorías más específicas;
- Compruebe los datos exportados; es posible que el departamento no incluya toda la información.

## Workaround

- Seleccione siempre la categoría más específica del departamento deseado, tal y como se describe en nuestra interfaz de usuario.
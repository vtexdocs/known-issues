---
title: 'La exportación de especificaciones de SKU de catálogo no siempre exportará todos los datos si la categoría seleccionada es un departamento.'
id: 1FrmIfWuDpbWSMvAnLuuho
status: PUBLISHED
createdAt: 2023-05-30T15:36:48.918Z
updatedAt: 2023-05-30T15:36:49.503Z
publishedAt: 2023-05-30T15:36:49.503Z
firstPublishedAt: 2023-05-30T15:36:49.503Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-sku-specification-export-will-not-always-export-all-the-data-if-the-selected-category-is-a-department
locale: es
kiStatus: Backlog
internalReference: 465445
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La Exportación de Especificación SKU del Catálogo, no siempre exportará todos los datos si se selecciona el departamento y no la subcategoría más interna.



##

## Simulación


- Vaya a `admin/Site/ProdutoExportacaoImportacaoEspecificacaoSKUV2.aspx`.
- Intente exportar las especificaciones de un departamento con muchos datos;
- Exporte los mismos datos pero de todas las categorías más internas;
- Compruebe los datos exportados, puede que el departamento no incluya toda la información.



## Workaround


- Seleccione siempre la categoría más interna del departamento deseado, como se describe en nuestra interfaz de usuario.






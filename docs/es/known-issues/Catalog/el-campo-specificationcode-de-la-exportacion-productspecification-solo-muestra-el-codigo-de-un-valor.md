---
title: 'El campo «SpecificationCode» de la exportación «ProductSpecification» solo muestra el código de un valor'
slug: el-campo-specificationcode-de-la-exportacion-productspecification-solo-muestra-el-codigo-de-un-valor
status: PUBLISHED
createdAt: 2022-09-02T18:17:35.000Z
updatedAt: 2026-02-10T14:14:44.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: specificationcode-in-the-productspecification-export-only-shows-code-for-one-value
locale: es
kiStatus: Fixed
internalReference: 650961
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En la hoja «ProductSpecification», la columna «SpecificationCode» hace referencia al ID del registro de valores del producto. En los campos en los que se selecciona más de un valor, la hoja de cálculo solo muestra el código del primer valor.

## Simulación

- Descarga la hoja de cálculo de una categoría que contenga productos con más de un valor seleccionado en el mismo campo
- Comprueba que la columna «SpecificationCode» solo tendrá un código, a pesar de que haya más de un valor en la columna SpecificationValue

## Workaround

Utiliza la API https://developers.vtex.com/vtex-rest-api/reference/getproductspecificationbyproductid para obtener el Id
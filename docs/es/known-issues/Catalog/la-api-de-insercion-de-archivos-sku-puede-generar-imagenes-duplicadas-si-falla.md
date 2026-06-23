---
title: 'La API de inserción de archivos SKU puede generar imágenes duplicadas si falla.'
slug: la-api-de-insercion-de-archivos-sku-puede-generar-imagenes-duplicadas-si-falla
status: PUBLISHED
createdAt: 2026-06-23T16:52:48.000Z
updatedAt: 2026-06-23T16:52:48.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-insert-file-api-may-generate-duplicate-images-if-it-fails
locale: es
kiStatus: Backlog
internalReference: 1425160
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, la API INSERTAR ARCHIVO SKU se utiliza para insertar o asociar una imagen a un SKU.

Si esta API falla durante el proceso debido a un error de tiempo de espera, podría insertar la imagen con un mensaje de error incorrecto.

En estos casos, no se debe insertar la imagen, ya que esto puede provocar que los sistemas o las automatizaciones agreguen el mismo archivo dos veces.

## Simulación

El problema es difícil de simular, por lo que a continuación se presenta un escenario "más probable" para reproducirlo, teniendo en cuenta que los tiempos de espera no suelen ser reproducibles en situaciones de prueba.

1 - Utilizando la API para insertar archivos SKU (https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file), intente agregar un archivo grande a un SKU (el tamaño aumenta la probabilidad de que ocurra el problema).

2 - Además, una conexión lenta también aumenta la probabilidad de que ocurra. El uso simultáneo de la API también influye.

3 - Si se genera una respuesta de tiempo de espera 500, verifique el SKU en la interfaz de usuario del catálogo; la imagen estará presente, a pesar del error.

4 - La imagen no debería haberse agregado ni eliminado después del error de procesamiento parcial.

## Workaround

Agregue los archivos a través de la interfaz de usuario/hoja de cálculo O verifique las condiciones que causan el tiempo de espera y trate de evitarlas (por ejemplo, use archivos más pequeños, espacie más las solicitudes a la API, use una solicitud GET después de la INSERT en las automatizaciones de la API para verificar si el archivo no se creó, etc.).
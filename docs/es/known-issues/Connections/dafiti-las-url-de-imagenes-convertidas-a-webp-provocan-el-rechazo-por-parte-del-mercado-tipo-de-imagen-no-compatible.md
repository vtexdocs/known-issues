---
title: 'Dafiti Las URL de imágenes convertidas a WebP provocan el rechazo por parte del mercado (tipo de imagen no compatible).'
slug: dafiti-las-url-de-imagenes-convertidas-a-webp-provocan-el-rechazo-por-parte-del-mercado-tipo-de-imagen-no-compatible
status: PUBLISHED
createdAt: 2026-02-26T20:57:40.177Z
updatedAt: 2026-02-26T20:57:40.177Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: dafiti-image-urls-converted-to-webp-cause-rejection-by-markeplace-image-type-unsupported
locale: es
kiStatus: Backlog
internalReference: 1370670
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los vendedores que sincronizan productos con el mercado Dafiti pueden encontrarse con errores al subir imágenes, incluso cuando el formato original es compatible con Dafiti, lo que genera errores de «Extensión de tipo de imagen desconocida/no compatible» en Bridge. Esto ocurre especialmente cuando las imágenes tienen una resolución muy alta y se convierten automáticamente durante la descarga a un formato no compatible (WebP).

## Simulación

1. Asegúrese de que las dimensiones y el formato de la imagen sean compatibles con el mercado. 2. Envíe o vuelva a procesar el SKU a través de Bridge para que la URL de la imagen se proporcione al mercado. 3. Compruebe el registro/error de procesamiento de Bridge: 4. «Error al descargar la siguiente URL: {image_url}. Error: extensión de tipo de imagen desconocida/no compatible». ###

## Workaround

Reduzca la resolución de la imagen y vuelva a subirla, luego vuelva a procesar el artículo en Dafiti. Las pruebas indican que las imágenes de muy alta resolución son más propensas a ser convertidas a WebP por el servicio de descarga de imágenes. Reducir la resolución **puede ayudar a evitar** la respuesta WebP y **puede prevenir** el rechazo del mercado, pero no se garantiza que resuelva el problema en todos los casos.
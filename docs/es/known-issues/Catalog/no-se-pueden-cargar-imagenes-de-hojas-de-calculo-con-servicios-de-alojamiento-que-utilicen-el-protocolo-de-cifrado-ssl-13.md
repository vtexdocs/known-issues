---
title: 'No se pueden cargar imágenes de hojas de cálculo con servicios de alojamiento que utilicen el protocolo de cifrado SSL 1.3'
slug: no-se-pueden-cargar-imagenes-de-hojas-de-calculo-con-servicios-de-alojamiento-que-utilicen-el-protocolo-de-cifrado-ssl-13
status: PUBLISHED
createdAt: 2023-06-28T12:23:39.000Z
updatedAt: 2023-06-28T12:25:05.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: unable-to-upload-spreadsheet-images-with-host-services-using-protocol-encryption-protocol-ssl13
locale: es
kiStatus: Backlog
internalReference: 851911
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el servidor de imágenes de la hoja de cálculo utiliza el protocolo de cifrado SSL 1.3, aparece un error al intentar cargar la hoja de cálculo:

«No se ha podido procesar el registro. Asegúrate de que los datos de la hoja de cálculo sean coherentes e inténtalo de nuevo. Detalles del error: Se ha producido un error al enviar la solicitud».

Este error se produce porque nuestro servicio de Windows solo admite versiones anteriores, como la 1.2 o la 1.1.

## Simulación

1. Utilice un servidor con una versión de protocolo más reciente;
2. Intente cargar una imagen, utilizando la hoja de cálculo, que esté alojada allí;
3. Compruebe que aparece el mensaje de error.

## Workaround

Utilice un servidor diferente o consulte con el servidor para utilizar una versión anterior.
---
title: 'Exportación del catálogo para cortes de accesorios > 50 caracteres'
slug: exportacion-del-catalogo-para-cortes-de-accesorios-50-caracteres
status: PUBLISHED
createdAt: 2023-12-14T16:46:42.000Z
updatedAt: 2023-12-14T16:46:42.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-export-for-attachment-cuts-50-characters
locale: es
kiStatus: Backlog
internalReference: 953161
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al importar datos de archivos adjuntos en el módulo del catálogo, si el nombre del archivo adjunto supera los 50 caracteres, la cadena se trunca, lo que impide que se actualicen estos datos.

## Simulación

1 - Crea un archivo adjunto con un nombre de más de 50 caracteres, por ejemplo, «Este es un nombre de archivo adjunto muy largo creado para probar un problema».

2 - Asócialo a un producto

3 - Exporta estos datos utilizando la interfaz de usuario /admin/Site/Relatorio_Skus.aspx

4 - Compruebe la columna relacionada con esto y se mostrará como «`Este es un nombre de archivo adjunto muy largo que se ha creado`» (exactamente 50 caracteres).

5 - Deberá ajustar manualmente esta información si desea importarla correctamente

## Workaround

Actualice los archivos adjuntos a través de la API, la interfaz de usuario o cambie manualmente la cadena incorrecta en la hoja.
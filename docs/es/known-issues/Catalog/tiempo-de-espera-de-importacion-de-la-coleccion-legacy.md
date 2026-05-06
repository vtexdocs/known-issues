---
title: 'Tiempo de espera de importación de la colección Legacy'
slug: tiempo-de-espera-de-importacion-de-la-coleccion-legacy
status: PUBLISHED
createdAt: 2021-12-08T13:58:45.000Z
updatedAt: 2022-12-20T16:30:31.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-collection-import-timeout
locale: es
kiStatus: Backlog
internalReference: 483785
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, cuando un usuario intenta importar datos mediante el botón de inserción masiva de SKU, si la hoja de cálculo que se está utilizando es demasiado extensa, el proceso podría fallar.

 ![](https://vtexhelp.zendesk.com/attachments/token/9TSm4inXTV8cFvuiHwLP9uMpb/?name=inline-929450477.png)

## Simulación

1) Ve a CMS --> Colecciones

2) Crea una nueva colección y un grupo de inclusión

3) Utiliza el botón «Insertar SKU en bloque» para importar datos y selecciona una hoja con, por ejemplo, 65 000 SKU.

4) Aparecerá un mensaje de carga durante unos 50 segundos

 ![](https://vtexhelp.zendesk.com/attachments/token/jd4fu2dmlX2d3WQUWxycsGOIg/?name=inline-243279848.png)

Y, finalmente, el proceso acabará fallando.

## Workaround

1) Utilice las casillas de verificación laterales para seleccionar marcas y/o categorías de forma masiva

2) Importe gradualmente utilizando hojas de menor tamaño
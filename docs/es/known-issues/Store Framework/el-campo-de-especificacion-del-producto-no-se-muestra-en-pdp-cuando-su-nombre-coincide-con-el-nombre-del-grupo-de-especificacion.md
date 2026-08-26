---
title: 'El campo de especificación del producto no se muestra en PDP cuando su nombre coincide con el nombre del grupo de especificación.'
slug: el-campo-de-especificacion-del-producto-no-se-muestra-en-pdp-cuando-su-nombre-coincide-con-el-nombre-del-grupo-de-especificacion
status: PUBLISHED
createdAt: 2026-08-26T15:34:13.000Z
updatedAt: 2026-08-26T15:34:13.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: product-specification-field-is-not-displayed-on-pdp-when-its-name-matches-the-specification-group-name
locale: es
kiStatus: Backlog
internalReference: 1452333
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un producto tiene un campo de especificación (ficha técnica) con el mismo nombre que el grupo de especificaciones al que pertenece, el Store Framework muestra solo una especificación en la página de detalles del producto (PDP), ignorando las demás, aunque la API del catálogo devuelva todos los valores correctamente. Este comportamiento se produce en el Store Framework; en el Portal/CMS heredado, todas las especificaciones se muestran en la PDP como de costumbre.

## Simulación

- Cree (o utilice) un conjunto de especificaciones, por ejemplo, `Especificações`.

- Añada dos o más campos a este grupo (por ejemplo: `Material`, `Tipo de fio`). En este caso, ambas especificaciones se muestran correctamente en la PDP del Store Framework.
![](https://vtexhelp.zendesk.com/attachments/token/8z5Igx1ng1y4N3cbE0V10t7Ry/?name=image.png)

![](https://vtexhelp.zendesk.com/attachments/token/JCaTTHt0OuzS6K75iELZfbwtf/?name=image.png)
- Agregue un tercer campo al mismo grupo con el **mismo nombre que el grupo** (por ejemplo, un campo llamado `Especificações` dentro del grupo `Especificações`).
![](https://vtexhelp.zendesk.com/attachments/token/uTAFSbKbpjK4WmbfQ00rGFVdC/?name=image.png)
- Reindexe el producto después de completar esta nueva especificación.
- Verifique el PDP en el Store Framework: solo se muestra una especificación, aunque la respuesta del endpoint `catalog_system/pub/products/search/{slug}/p` devuelva todos los valores.

![](https://vtexhelp.zendesk.com/attachments/token/yyDSIHMYmdJIjvb6v4YSDMqsE/?name=image.png)

- Compárelo con vtexcommercestable (CMS heredado). Allí, todas las especificaciones aparecen correctamente, lo que confirma que el problema se limita al Store Framework.
![](https://vtexhelp.zendesk.com/attachments/token/GAa1YetuNh0thiUcwjSsGkFsq/?name=image.png)

## Workaround

Cambie el nombre del campo de especificación para que no coincida con el nombre del grupo de especificación al que pertenece.
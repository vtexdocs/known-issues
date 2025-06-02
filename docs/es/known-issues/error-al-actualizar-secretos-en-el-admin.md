---
title: Error al actualizar secretos en el Admin
slug: error-al-actualizar-secretos-en-el-admin
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: error-when-updating-secrets-on-the-admin
locale: es
kiStatus: Fixed
internalReference: 1233661
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al utilizar Webops y tratar de editar un secreto que ya ha añadido a la función de interfaz de usuario, puede obtener el error:

    "Mensaje": "Error al actualizar el secreto en Vercel. Actualización de AWS bloqueada. Error: Se ha producido un error al actualizar el secreto en Vercel. Más información: Variable de entorno con clave \"\" no encontrada"



#### Simulación



- Si estás usando Webops, intenta añadir un nuevo secreto en la Ui;
- Haga clic para actualizar el secreto;
- Recibirá un 500 Internal Server Error con el mensaje anterior.

## Workaround


N/A




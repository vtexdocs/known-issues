---
title: Problemas con los disparadores que contienen archivos adjuntos
slug: problemas-con-los-disparadores-que-contienen-archivos-adjuntos
status: PUBLISHED
createdAt: 2025-10-16T20:49:43.140Z
updatedAt: 2025-10-16T20:49:43.140Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: problems-with-triggers-that-contain-attachments
locale: es
kiStatus: Backlog
internalReference: 1215924
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al configurar un disparador para enviar un correo electrónico que contiene un archivo adjunto, el sistema enviará el correo electrónico pero no incluirá el archivo adjunto.

Este problema conocido suele afectar a las cuentas que han configurado un formulario en su sitio web en el que el usuario adjunta un currículo (por ejemplo: Trabaja con nosotros) o las especificaciones de un producto.


#### Simulación



1. Acceda al almacenamiento dinámico de la cuenta ( https://VTEX.ds.vtexcrm.com.br/)
2. Haz clic en la pestaña Disparadores y configura las acciones en consecuencia
3. Haga clic en Anexo y seleccione "Arquivo" (Archivo) en el desplegable
4. El disparador enviará el correo electrónico correctamente, pero no contendrá el archivo adjunto.


## Workaround


Aunque por el momento no existe una solución que permita almacenar el archivo con VTEX y utilizarlo como disparador, la funcionalidad deseada puede reproducirse de otra manera: El usuario puede configurar el formulario de cara al cliente para aceptar una URL (donde el archivo se almacena externamente. El usuario final puede almacenar el archivo en un servicio independiente (GoogleDrive, Dropbox, S3) y copiar y pegar la URL en ese campo.




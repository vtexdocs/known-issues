---
title: 'El CMS heredado no crea carpetas cuyo nombre tenga menos de tres caracteres'
slug: el-cms-heredado-no-crea-carpetas-cuyo-nombre-tenga-menos-de-tres-caracteres
status: PUBLISHED
createdAt: 2023-05-15T14:32:48.000Z
updatedAt: 2023-05-15T14:32:48.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: legacy-cms-does-not-create-folders-with-less-than-3-characters-in-the-name
locale: es
kiStatus: Backlog
internalReference: 825530
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El CMS heredado no crea carpetas cuyo nombre tenga menos de 3 caracteres

## Simulación

- Accede al CMS heredado
- Crea una nueva carpeta
- Escribe un nombre de carpeta con menos de 3 caracteres
- Intenta guardar la carpeta

Aparecerá un error:

 El nombre de la carpeta no es válido. Consulte las instrucciones para crear un nombre de carpeta. El nombre es obligatorio y solo debe contener letras, números, «@» y «-» (guión). El carácter «@» debe utilizarse al principio y al final. El guión no puede utilizarse al principio ni al final del nombre.

## Workaround

Utilice un nombre de carpeta con 3 o más caracteres
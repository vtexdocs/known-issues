---
title: 'La búsqueda no devuelve ningún documento cuando el valor contiene el símbolo «+» (más).'
slug: la-busqueda-no-devuelve-ningun-documento-cuando-el-valor-contiene-el-simbolo-mas
status: PUBLISHED
createdAt: 2023-05-18T18:29:42.000Z
updatedAt: 2024-07-08T21:45:59.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: searching-not-return-document-when-the-value-contains-a-plus-symbol
locale: es
kiStatus: No Fix
internalReference: 828170
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al buscar un documento utilizando un valor de campo que incluya el símbolo «+», la búsqueda no devuelve el documento. Esto ocurre porque el símbolo «+» se interpreta incorrectamente, lo que hace que el valor de búsqueda no coincida con el valor existente.
_Este problema se produce tanto en la API como en el CRM_

## Simulación

1. Utilice la API de búsqueda para consultar un campo que incluya el símbolo «+».
2. La búsqueda devolverá una matriz vacía. Ejemplo:

 https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=+5512345678901&_fields=id,userId,email,homePhone,firstName


En la interfaz de usuario de CRM:
Si busca un correo electrónico que contenga el símbolo «+», se devolverá un error.

 Se ha producido un error inesperado. Inténtelo de nuevo. Si el problema persiste, póngase en contacto con el servicio de asistencia.

## Workaround

Hay dos formas de solucionar este problema:
Codifique el símbolo «+» como «%2B», de modo que la consulta de búsqueda quede así:

 https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=%2B5512345678901&_fields=id,userId,email,homePhone,firstName


Utilizar el símbolo «*» como comodín, lo que permitirá que la búsqueda coincida con cualquier carácter o caracteres antes del valor especificado:

 https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=*12345678901&_fields=id,userId,email,homePhone,firstName

Este problema surge al buscar documentos utilizando valores de campo que incluyen el símbolo «+». La API de búsqueda no interpreta correctamente el símbolo «+», lo que provoca que la búsqueda falle al no coincidir con los valores existentes. Este problema no se limita al campo «homePhone», sino que puede ocurrir con otros campos, como el correo electrónico, que puedan incluir caracteres especiales.
Para solucionar este problema, puede codificar el símbolo «+» como «%2B» en la consulta de búsqueda o utilizar el símbolo «*» como comodín para garantizar que la búsqueda recupere los documentos correctos.%0A
---
title: 'La búsqueda de televentas no acepta caracteres especiales aparte de "@".'
slug: la-busqueda-de-televentas-no-acepta-caracteres-especiales-aparte-de
status: PUBLISHED
createdAt: 2025-11-14T19:14:55.965Z
updatedAt: 2025-11-14T19:14:55.965Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: telesales-search-doesnt-accept-special-characters-aside-from
locale: es
kiStatus: Backlog
internalReference: 1072418
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, al utilizar la caja de búsqueda de televenta, un usuario puede suplantar la identidad de compradores para ayudar en las compras y, para ello, es necesario introducir, en la caja de búsqueda nativa, el email de quien va a ser suplantado.

Sin embargo, al utilizar esta herramienta, los emails que contengan caracteres especiales, como "+", "$", "#", etc... no son identificados por la herramienta de búsqueda, haciendo que devuelva una respuesta de "no encontrado".


#### Simulación


1 - en una tienda que tenga implementada la televenta (https://help.vtex.com/en/tutorial/telesales-features--UqhiccIRIK2KD0OqkzJaS), acceder a través de un usuario con la autenticación requerida.

2 - crear un email, en los masterdata de la tienda, que utilice un carácter especial como "+".

3 - intente utilizar la barra de herramientas de suplantación de televenta para buscar el correo electrónico dado - devolverá una respuesta "no encontrado".

4 - ajustar este mismo correo electrónico para eliminar el carácter especial y luego buscar de nuevo normalizará la situación.

## Workaround


Adapte las direcciones de correo electrónico de los usuarios para que no utilicen caracteres especiales.



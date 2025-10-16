---
title: Store-graphql impersonate mutation no carga datos de perfil para usuarios creados manualmente
slug: storegraphql-impersonate-mutation-no-carga-datos-de-perfil-para-usuarios-creados-manualmente
status: PUBLISHED
createdAt: 2025-10-16T20:49:01.525Z
updatedAt: 2025-10-16T20:49:01.525Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: storegraphql-impersonate-mutation-does-not-load-profile-data-for-users-created-manually
locale: es
kiStatus: Backlog
internalReference: 1214877
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La mutación de suplantación de la aplicación vtex.store-graphql no se comporta como se espera cuando el cliente no se creó a través de la plataforma VTEX, sino que se importó directamente a Masterdata (independientemente de si fue a través de API, hoja de cálculo o entrada manual). Cuando esto sucede, los datos del perfil del cliente no están disponibles inmediatamente para la aplicación vtex.telemarketing después de la suplantación.



#### Simulación


Para reproducir el problema:

Importe un usuario a Masterdata sin (puede ser vía API, entrada manual u hoja de cálculo).

Vaya a una tienda que utilice vtex.telemarketing con un rol de administrador válido de telemarketing.

Intente suplantar al nuevo usuario.

Observa que la información del perfil es nula en la respuesta de mutación.

Actualice la página manualmente. Después de eso, los datos del perfil aparecen correctamente.


## Workaround


**Actualice la página** después de utilizar la mutación "impersonar", ya sea manualmente o mediante programación. Esto hace que los datos del perfil se obtengan correctamente.




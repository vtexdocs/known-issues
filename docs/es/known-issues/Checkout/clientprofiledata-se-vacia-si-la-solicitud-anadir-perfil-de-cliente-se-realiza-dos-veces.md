---
title: 'clientProfileData se vacía si la solicitud Añadir perfil de cliente se realiza dos veces'
id: 1TG7cnnMyWHNKrCjoouKoC
status: PUBLISHED
createdAt: 2023-10-02T15:51:35.989Z
updatedAt: 2023-10-02T15:51:36.771Z
publishedAt: 2023-10-02T15:51:36.771Z
firstPublishedAt: 2023-10-02T15:51:36.771Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: clientprofiledata-gets-empty-if-request-add-client-profile-is-performed-twice
locale: es
kiStatus: Backlog
internalReference: 911203
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando se envía la petición Añadir perfil de cliente dos veces y el email tiene un perfil completo, "clientProfileData" se queda vacío, mostrando sólo el email.


##

## Simulación



- Añadir perfil de cliente vía API;
- Vuelva a enviar la misma solicitud autenticada, el "clientProfileData" tendrá sólo el correo electrónico.



## Workaround


N/A





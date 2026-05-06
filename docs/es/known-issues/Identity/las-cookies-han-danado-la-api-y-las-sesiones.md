---
title: 'Las cookies han dañado la API y las sesiones'
slug: las-cookies-han-danado-la-api-y-las-sesiones
status: PUBLISHED
createdAt: 2023-03-27T19:54:28.000Z
updatedAt: 2024-03-20T20:34:23.000Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: cookie-broken-the-apisessions
locale: es
kiStatus: Backlog
internalReference: 779014
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando hay un script que genera una cookie para realizar un seguimiento de los usuarios y dicha cookie interrumpe la llamada a /api/sessions, por ejemplo, porque contiene un carácter especial en el valor de la cookie. En ese caso, debemos descartar esas cookies malformadas por nuestra parte y conservar todas las demás, para que no afecte al funcionamiento.

## Simulación

El escenario se reprodujo en Facebook:

Cuando se accede a la página desde un anuncio de Facebook, esta se carga automáticamente en el navegador META nativo y, al llegar a la página de pago, no se carga correctamente, por lo que no es posible finalizar la compra.

Facebook solía redirigir a los navegadores, pero ya no lo hace porque ha integrado su propio navegador en la aplicación.

## Workaround

N/A
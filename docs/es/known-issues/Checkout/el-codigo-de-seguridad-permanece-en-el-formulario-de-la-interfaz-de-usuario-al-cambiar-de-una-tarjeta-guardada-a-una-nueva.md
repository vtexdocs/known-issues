---
title: 'El código de seguridad permanece en el formulario de la interfaz de usuario al cambiar de una tarjeta guardada a una nueva'
slug: el-codigo-de-seguridad-permanece-en-el-formulario-de-la-interfaz-de-usuario-al-cambiar-de-una-tarjeta-guardada-a-una-nueva
status: PUBLISHED
createdAt: 2026-05-26T18:48:20.000Z
updatedAt: 2026-05-26T18:54:21.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: security-code-persistence-in-ui-form-when-changing-from-a-saved-card-to-a-new-card
locale: es
kiStatus: Backlog
internalReference: 1412484
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un usuario que tiene una tarjeta guardada introduce el código de seguridad de dicha tarjeta y luego decide utilizar una nueva tarjeta, el código de seguridad permanece rellenado en el formulario de la interfaz de usuario de la tarjeta.

## Simulación

- Pasa al paso de pago con un usuario que tenga una tarjeta guardada;
- Rellena la información del código de seguridad;

 ![](https://vtexhelp.zendesk.com/attachments/token/B9BTYjBOLIBur6banW5qXqvwV/?name=image.png)

- Selecciona la opción de utilizar otra tarjeta; el código de seguridad seguirá apareciendo en el formulario.

 ![](https://vtexhelp.zendesk.com/attachments/token/hDkQDPMznDXl7s7eJnW0QnMuF/?name=image.png)

## Workaround

Rellena el código de seguridad con la información de la nueva tarjeta.
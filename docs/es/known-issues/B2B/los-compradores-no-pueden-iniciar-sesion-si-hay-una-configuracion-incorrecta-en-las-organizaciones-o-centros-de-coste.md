---
title: 'Los compradores no pueden iniciar sesión si hay una configuración incorrecta en las organizaciones o centros de coste'
slug: los-compradores-no-pueden-iniciar-sesion-si-hay-una-configuracion-incorrecta-en-las-organizaciones-o-centros-de-coste
status: PUBLISHED
createdAt: 2023-11-30T22:21:25.000Z
updatedAt: 2024-10-29T21:07:42.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: buyers-cant-login-if-there-is-misconfiguration-in-organizationscost-centers
locale: es
kiStatus: Fixed
internalReference: 945609
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando a un usuario se le asigna por primera vez una organización no válida con un ID de centro de coste incorrecto, el inicio de sesión falla sin mostrar ningún mensaje.

Aparecerá el mensaje «App storefront-permissions failed, resulting in an error building the session» en la respuesta de la sesión.

## Simulación

- Crea una organización con un ID de centro de coste incorrecto;
- Inicia sesión en el sitio.

## Workaround

provisional**
Corrige el ID de centro de coste asociado a la organización o elimina la organización.
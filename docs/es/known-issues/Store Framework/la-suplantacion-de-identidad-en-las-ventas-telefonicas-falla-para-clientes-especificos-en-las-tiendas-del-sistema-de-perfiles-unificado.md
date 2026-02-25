---
title: 'La suplantación de identidad en las ventas telefónicas falla para clientes específicos en las tiendas del sistema de perfiles unificado.'
slug: la-suplantacion-de-identidad-en-las-ventas-telefonicas-falla-para-clientes-especificos-en-las-tiendas-del-sistema-de-perfiles-unificado
status: PUBLISHED
createdAt: 2026-02-25T20:05:21.681Z
updatedAt: 2026-02-25T20:05:21.681Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: telesales-impersonation-fails-for-specific-customers-in-unified-profile-system-stores
locale: es
kiStatus: Backlog
internalReference: 1369897
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los flujos de televentas B2B, la suplantación de identidad a través de la barra de televentas falla de forma intermitente para algunos correos electrónicos de compradores: la sesión nunca asume el contexto del cliente y profile.isAuthenticated permanece falso en la API de sesión. Los operadores pueden suplantar con éxito a ciertos clientes (a menudo aquellos con pedidos anteriores), mientras que otros fallan constantemente.

## Simulación

- Tienda con operadores de televentas habilitados.
- Cuenta que ha sido sometida a la unificación del sistema de perfiles. - Utilizando la barra de televentas, intente suplantar la identidad con un correo electrónico de cliente y observe la sesión. Compruebe la respuesta de la API de sesiones, si el cliente está correctamente configurado: profile.isAuthenticated:true y se devuelve un profile.id.
- Si falla, compruebe el correo electrónico del cliente y compruebe la respuesta de la API de sesiones. Observe que se devuelve profile.isAuthenticated:false y no se devuelve ningún customer profile.id.

## Workaround

Asegúrese siempre de que el usuario está en los datos maestros de la cuenta principal y tiene un perfil activo.
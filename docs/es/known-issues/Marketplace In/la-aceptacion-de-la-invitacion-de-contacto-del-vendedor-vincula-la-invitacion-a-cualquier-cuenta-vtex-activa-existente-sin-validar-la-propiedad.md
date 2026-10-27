---
title: 'La aceptación de la invitación de contacto del vendedor vincula la invitación a cualquier cuenta VTEX activa existente sin validar la propiedad.'
slug: la-aceptacion-de-la-invitacion-de-contacto-del-vendedor-vincula-la-invitacion-a-cualquier-cuenta-vtex-activa-existente-sin-validar-la-propiedad
status: PUBLISHED
createdAt: 2026-10-27T15:40:24.000Z
updatedAt: 2026-10-27T15:40:24.000Z
contentType: knownIssue
productTeam: Marketplace In
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace In
slugEN: seller-lead-invitation-acceptance-links-the-invite-to-any-existing-active-vtex-account-without-validating-ownership
locale: es
kiStatus: Backlog
internalReference: 1477830
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un posible vendedor acepta una invitación del marketplace, el flujo de aceptación solo verifica si el nombre de cuenta del vendedor (`sellerAccountName`) proporcionado existe y está activo en License Manager. No verifica si la cuenta pertenece al vendedor invitado ni si ya la utiliza otra empresa.

Por lo tanto, si el nombre proporcionado durante la aceptación coincide con una cuenta activa existente propiedad de un tercero, la invitación se vincula a esa cuenta. No se crea ninguna cuenta nueva y el vendedor invitado nunca recibe la clave de acceso necesaria para completar la incorporación.

## Simulación

1. En la cuenta del marketplace, invite a un nuevo posible vendedor.

2. Como vendedor invitado, acepte la invitación e introduzca un nombre de cuenta de vendedor (`sellerAccountName`) que ya existe y está activo en VTEX, pero que pertenece a otra empresa.

3. La invitación se vincula a esa cuenta preexistente.

4. No se crea ninguna cuenta nueva y el vendedor invitado no recibe la clave de acceso.

## Workaround

N/A
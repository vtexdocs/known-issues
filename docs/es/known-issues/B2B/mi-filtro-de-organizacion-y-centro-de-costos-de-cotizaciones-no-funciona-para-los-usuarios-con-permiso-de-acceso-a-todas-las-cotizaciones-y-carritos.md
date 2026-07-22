---
title: 'Mi filtro de organización y centro de costos de cotizaciones no funciona para los usuarios con permiso de acceso a todas las cotizaciones y carritos.'
slug: mi-filtro-de-organizacion-y-centro-de-costos-de-cotizaciones-no-funciona-para-los-usuarios-con-permiso-de-acceso-a-todas-las-cotizaciones-y-carritos
status: PUBLISHED
createdAt: 2026-07-22T18:43:48.000Z
updatedAt: 2026-07-22T18:43:48.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: my-quotes-organization-and-cost-center-filter-doesnt-work-for-users-with-access-all-quotes-and-carts-permission
locale: es
kiStatus: Backlog
internalReference: 1438245
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al iniciar sesión en la página "Mis cotizaciones" con un usuario que tiene el permiso "Acceder a todas las cotizaciones y carritos" y abrir el filtro "Organización y centro de costos", el usuario no podrá buscar una organización. Escribir en la barra de búsqueda no tiene efecto y la función de autocompletar no devuelve resultados.

## Simulación

- En una tienda que utilice B2B Suite y la aplicación `b2b-quotes`, configure el permiso "Acceder a todas las cotizaciones y carritos" para un usuario.
- Inicie sesión con este usuario.
- Vaya a "Mi cuenta" -> "Mis cotizaciones".
- Seleccione el filtro "Organización y centro de costos".
- Escriba en la barra de búsqueda; verá que no se escribe nada y la función de autocompletar no devuelve ninguna opción.

## Workaround

N/A
---
title: 'La función Request Capture no registra nuevos eventos al usar almacenes heredados.'
slug: la-funcion-request-capture-no-registra-nuevos-eventos-al-usar-almacenes-heredados
status: PUBLISHED
createdAt: 2022-06-24T00:37:40.000Z
updatedAt: 2026-09-23T18:00:42.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: request-capture-not-registering-new-events-when-using-legacy-stores
locale: es
kiStatus: Backlog
internalReference: 604254
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, al usar tiendas VTEX de portal (tiendas que no son VTEX IO), la aplicación de captura de solicitudes no registra eventos específicos para las visitas a la página del producto.

## Simulación

1. Usando una tienda VTEX de portal, acceda a una página de producto con la sesión iniciada.
2. Verifique si la aplicación de captura de solicitudes funciona correctamente en su tienda (consulte aquí: https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740#my-trigger-settings-are-correct-but-the-test-email-address-is-not-receiving-emails-what-must-be-checked).

3. Verifique la propiedad 'productVisitedTag' del documento relacionado en su aplicación de Datos Maestros; debería estar vacía. Debería contener datos.

## Workaround

Esta funcionalidad funciona para tiendas VTEX IO.
---
title: 'Shopee Código de pedido: 001 / Correo electrónico no válido'
slug: shopee-codigo-de-pedido-001-correo-electronico-no-valido
status: PUBLISHED
createdAt: 2026-06-24T16:41:04.000Z
updatedAt: 2026-07-01T17:03:43.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-order-code-001-invalid-email
locale: es
kiStatus: Backlog
internalReference: 1425788
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pedidos de Shopee no se crean en VTEX/OMS con el error `código: 001 / Correo electrónico no válido` cuando el `buyerUsername` del comprador contiene caracteres que generan una dirección de correo electrónico no válida según RFC. Dado que Shopee no proporciona el correo electrónico real del comprador, el conector de Shopee para VTEX genera uno sintéticamente utilizando el patrón `{buyerUsername}@email.com`.

## Simulación

- El conector de Shopee recibe el pedido.
- El OMS rechaza la creación del pedido con el error `código: 001 / Correo electrónico no válido`.

- El pedido aparece en Bridge con un error y no se puede importar a VTEX.

- Reprocesar el pedido en VTEX no resuelve el problema; se vuelve a enviar el mismo correo electrónico no válido.

## Workaround

No existe ninguna solución alternativa disponible para el comerciante. El pedido no se puede importar a VTEX mientras el `buyerUsername` genere una dirección de correo electrónico no válida según RFC. Contactar a Shopee para cambiar el nombre de usuario del comprador no es una opción viable. Shopee no cuenta con un mecanismo para actualizar este campo en un pedido existente. Se requiere una investigación técnica.
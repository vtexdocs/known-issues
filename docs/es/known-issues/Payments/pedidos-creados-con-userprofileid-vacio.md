---
title: 'Pedidos creados con userProfileId vacío'
slug: pedidos-creados-con-userprofileid-vacio
status: PUBLISHED
createdAt: 2026-09-23T18:33:36.000Z
updatedAt: 2026-09-23T18:33:36.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: orders-created-with-empty-userprofileid
locale: es
kiStatus: Backlog
internalReference: 1465130
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los clientes recurrentes no son reconocidos al finalizar la compra: sus datos y dirección guardados no se rellenan automáticamente, deben volver a introducir toda la información y el pedido resultante no se vincula a su perfil de cliente. El comercio recibe entonces un pedido con el campo `clientProfileData.userProfileId` vacío, lo que rompe la vinculación con el registro del cliente en CRM, ERP y conciliación. Esto ocurre cuando falla la búsqueda de perfil que realiza el sistema de pago tras la introducción del correo electrónico del cliente; la compra se procesa con normalidad, incluido el pago, por lo que ni el cliente ni la tienda detectan ningún problema. El sistema de pago mantiene ese error en el carrito y, al realizar el pedido, omite la asociación del perfil en lugar de intentarlo de nuevo.

- `clientProfileData.userProfileId` está vacío en el pedido y `profileErrorOnLoading` es `true`.
- La línea de tiempo del pedido muestra el mensaje "No fue necesario guardar el perfil de usuario en el sistema de perfiles".
- La dirección de envío del pedido es una dirección recién ingresada, incluso si el comprador tiene una dirección guardada en su perfil.
- El pedido está completo y correcto: pago aprobado, facturado y sin errores en ningún paso.
- Los compradores recurrentes pierden el enlace a su perfil existente; a los compradores nuevos no se les crea ningún perfil.
- Afecta a los pedidos realizados en la tienda online, no a los del marketplace.

No es lo mismo que un `userProfileId` vacío causado por `ignoreProfileData: true` en los pedidos de compra con un clic o pago rápido, lo cual es el comportamiento esperado.

## Simulación

No se puede reproducir a demanda: depende de un fallo intermitente en la búsqueda del perfil durante el proceso de pago.

Utilice esta lista de verificación para confirmar que un caso corresponde a este KI:

1. La consulta `GET /api/checkout/pvt/orders/{orderId}` devuelve `clientProfileData.profileErrorOnLoading: true` con `userProfileId` vacío.

2. La línea de tiempo del pedido muestra `No fue necesario guardar el perfil de usuario en el sistema de perfiles`.

3. La dirección de envío del pedido está marcada como `isDisposable: true`, y el perfil del comprador contiene una dirección guardada diferente.

4. Descartar "perfil no encontrado": en un carrito nuevo, un correo electrónico sin perfil devuelve `profileErrorOnLoading: false`. Por lo tanto, el valor `true` significa que la búsqueda falló, no que el comprador sea desconocido.

5. Descartar `ignoreProfileData`: no está presente en el pedido y es `null` en la consulta `GET /api/checkout/pvt/configuration/orderForm`. 6. Si el comprador tiene un pedido anterior en la cuenta, dicho pedido incluye un `userProfileId` con datos registrados, en condiciones idénticas.

## Workaround

**Comercio / Integración** — Obtenga el identificador por correo electrónico de los datos maestros y complételo posteriormente: `GET /api/dataentities/CL/search?_where=email={email}&_fields=id,userId` — Utilice el campo `userId`, no el `id` del documento.

No se podrá recuperar nada si el comprador no tenía un perfil en la cuenta antes de realizar el pedido.
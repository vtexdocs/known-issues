---
title: 'La llamada a datos adicionales de la transacción falla con el error "el ID de perfil no puede ser nulo" en cuentas con rectificación de correo electrónico habilitada.'
slug: la-llamada-a-datos-adicionales-de-la-transaccion-falla-con-el-error-el-id-de-perfil-no-puede-ser-nulo-en-cuentas-con-rectificacion-de-correo-electronico-habilitada
status: PUBLISHED
createdAt: 2026-09-22T21:46:41.000Z
updatedAt: 2026-09-22T21:46:41.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-additionaldata-call-fails-with-profile-id-cannot-be-null-on-accounts-with-email-rectification-enabled
locale: es
kiStatus: Backlog
internalReference: 1464703
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las cuentas donde la función de rectificación de correo electrónico de la pasarela está habilitada, la llamada que envía datos adicionales a una transacción falla cuando el objeto `clientProfileData` llega sin un `id`. Antes de almacenar la carga útil, la pasarela intenta resolver el correo electrónico del comprador en el Sistema de Perfiles, y la falta de un identificador aborta toda la solicitud; por lo tanto, `cart`, `shippingData`, `billingAddress` y `paymentRecipients` nunca se guardan en la transacción, no solo el correo electrónico. El identificador de perfil es opcional en el flujo de pedido de pago y no se declara como obligatorio en ninguna parte del contrato de datos adicionales.

- `POST /api/pvt/transactions/{transactionId}/additional-data` devuelve `500` con el cuerpo `el ID de perfil no puede ser nulo`.
- Variante: devuelve `404` con `no se encontraron los datos personales del perfil`. Validar el ID de perfil solicitado cuando `clientProfileData.id` está presente pero el sistema de perfiles lo desconoce.
- Variante: devuelve `404` con el mensaje `el correo electrónico del perfil no puede ser nulo` cuando el perfil se resuelve pero no tiene correo electrónico.
- La transacción queda sin sus campos de datos adicionales: no se almacenan el carrito, la dirección de envío, la dirección de facturación ni los destinatarios del pago.
- Ocurre solo en las cuentas incluidas en la lista de permitidos `allow-email-rectification`; no tiene ningún efecto en las demás cuentas.

## Simulación

1. Confirmar que la cuenta está incluida en la lista de permitidos del indicador `allow-email-rectification`.

2. Iniciar una transacción y mantenerla en estado `iniciado`.

3. Enviar una solicitud POST a `/api/pvt/transactions/{transactionId}/additional-data` con un campo `clientProfileData` cuyo `id` no está presente, es `null` o está vacío. 4. Se esperaba: `500` con el cuerpo `profile Id cannot be null`.

5. Confirme que ninguno de los demás campos de la misma solicitud se haya almacenado en la transacción.

Para confirmar que un caso existente corresponde a este KI, verifique los tres puntos: la cuenta está en la lista de permitidos; el cuerpo de la respuesta de datos adicionales coincide con una de las tres cadenas anteriores; la transacción no incluye los campos de datos adicionales.

## Workaround

- **Abra una solicitud de soporte técnico:** solicite la eliminación de la cuenta de la lista de permitidos `allow-email-rectification`. Esto restablece el comportamiento anterior: el correo electrónico enviado en el cuerpo de la solicitud se almacena tal cual.
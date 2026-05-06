---
title: 'Incoherencias en el campo «fakturierungsadresse» enviado a la pasarela'
slug: incoherencias-en-el-campo-fakturierungsadresse-enviado-a-la-pasarela
status: PUBLISHED
createdAt: 2020-09-29T21:17:51.000Z
updatedAt: 2025-07-24T22:27:10.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistencies-in-billingaddress-field-sent-to-gateway
locale: es
kiStatus: Fixed
internalReference: 291688
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La pasarela utiliza una dirección incorrecta en los casos de compras recurrentes cuando ya hay una tarjeta guardada en el perfil del usuario.

El error se produce porque la pasarela se basa en la casilla de verificación `isBillingAddressDifferent`, que aparece junto a los datos de la tarjeta durante el proceso de pago, para determinar si utilizará la dirección de entrega o la dirección de facturación en las afiliaciones y los controles antifraude. El problema es que esta casilla de verificación en cuestión ni siquiera aparece en la página de pago tras la primera compra con la tarjeta, pero su valor es `false` por defecto. Esto significa que, al tratarse de una compra con entrega o recogida, la dirección que utilizará la pasarela es la de entrega y no la de facturación, lo que provocará problemas en los casos de recogida o incluso a la hora de generar recibos bancarios.

## Simulación

Escenario A:

1. Como nuevo usuario, ve a la caja de una tienda y realiza una compra con entrega a domicilio para generar un perfil de compra
2. Al pagar este pedido, utiliza una dirección de la tarjeta distinta a la dirección de entrega
3. Realice una nueva compra con el mismo correo electrónico y la misma tarjeta, pero seleccionando la opción de recogida.
4. Observe que el objeto `isBillingAddressDifferent` será falso y que la `dirección` del pago será una dirección específica.

Escenario B:

1. Como nuevo usuario, vaya a la caja de una tienda y realice una compra con entrega a domicilio para generar un perfil de compra.
2. Al pagar este pedido, utiliza la misma dirección como dirección de entrega
3. Realiza una nueva compra con el mismo correo electrónico y la misma tarjeta, pero seleccionando la opción de recogida
4. Observa que el objeto `isBillingAddressDifferent` será falso y que la `dirección` del pago no tendrá una dirección específica

## Workaround

Envía una solicitud de asistencia técnica para continuar con la transacción.
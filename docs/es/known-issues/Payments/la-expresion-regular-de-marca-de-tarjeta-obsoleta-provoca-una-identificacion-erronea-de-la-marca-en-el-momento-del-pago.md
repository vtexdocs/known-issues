---
title: 'La expresión regular de marca de tarjeta obsoleta provoca una identificación errónea de la marca en el momento del pago.'
slug: la-expresion-regular-de-marca-de-tarjeta-obsoleta-provoca-una-identificacion-erronea-de-la-marca-en-el-momento-del-pago
status: PUBLISHED
createdAt: 2022-08-20T02:55:49.000Z
updatedAt: 2026-08-10T19:19:06.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: outdated-card-brand-regex-causes-brand-misidentification-at-checkout
locale: es
kiStatus: Backlog
internalReference: 642136
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La selección automática de la marca de la tarjeta en el proceso de pago (interfaz de usuario de la tarjeta) se realiza mediante validación con expresiones regulares (regex), que describen rangos de BIN aceptados. Por defecto, se selecciona la primera marca de tarjeta disponible. Las expresiones regulares desactualizadas pueden provocar que la marca de tarjeta esperada no se identifique o se identifique erróneamente.

## Simulación

Requisitos previos:

- Tener configurada al menos una regla de pago con tarjeta de crédito o débito.

Pasos:

1. Crea un carrito en cualquier tienda utilizando la interfaz de usuario nativa del proceso de pago y procede a la etapa de pago.

2. Selecciona la opción de tarjeta de crédito o débito.
3. Introduce al menos 6 dígitos de un número de tarjeta de la marca deseada que no esté cubierta por la expresión regular actual.
4. Observa si la marca de la tarjeta:

- No identificada: aparece un mensaje de advertencia que recomienda verificar el número de tarjeta. Además, la marca seleccionada previamente permanece seleccionada.

- Identificación errónea: se seleccionó otra marca.

## Workaround

El usuario puede cambiar la marca de la tarjeta seleccionada al finalizar la compra, eligiendo la marca deseada antes de realizar el pedido.
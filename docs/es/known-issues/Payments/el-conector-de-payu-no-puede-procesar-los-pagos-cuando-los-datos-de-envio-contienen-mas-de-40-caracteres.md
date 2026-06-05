---
title: 'El conector de PayU no puede procesar los pagos cuando los datos de envío contienen más de 40 caracteres.'
slug: el-conector-de-payu-no-puede-procesar-los-pagos-cuando-los-datos-de-envio-contienen-mas-de-40-caracteres
status: PUBLISHED
createdAt: 2023-09-19T00:02:18.000Z
updatedAt: 2026-06-05T21:10:27.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-payu-connector-is-unable-to-process-payments-when-there-is-shipping-data-containing-more-than-40-characters
locale: es
kiStatus: No Fix
internalReference: 902539
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El conector de PayU no procesa los datos de dirección recibidos desde el proceso de pago y los envía al proveedor tal cual, sin modificaciones. Sin embargo, en la documentación del proveedor se indica que dichos datos no deben superar los 40 caracteres.

Esto provoca que la transacción se cancele debido a un error de autorización de pago con el mensaje:

 mensaje: El tamaño debe estar entre 0 y 40 propiedad: , mensaje: El tamaño debe estar entre 0 y 40

## Simulación

- Durante el paso de envío en la caja, seleccione una dirección de entrega con más de 40 caracteres, como «Región del Libertador General Bernardo O’Higgins (VI)» en Chile.
- Seleccione un método de pago procesado a través del conector PayU.

## Workaround

N/A
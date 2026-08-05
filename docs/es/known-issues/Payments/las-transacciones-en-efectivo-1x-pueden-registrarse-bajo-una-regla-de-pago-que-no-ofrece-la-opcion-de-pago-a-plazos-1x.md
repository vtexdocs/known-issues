---
title: 'Las transacciones en efectivo (1x) pueden registrarse bajo una regla de pago que no ofrece la opción de pago a plazos 1x.'
slug: las-transacciones-en-efectivo-1x-pueden-registrarse-bajo-una-regla-de-pago-que-no-ofrece-la-opcion-de-pago-a-plazos-1x
status: PUBLISHED
createdAt: 2020-10-02T02:09:14.000Z
updatedAt: 2026-08-05T14:54:44.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: cash-1x-transactions-may-be-recorded-under-a-payment-rule-that-does-not-offer-the-1x-installment-option
locale: es
kiStatus: Backlog
internalReference: 292781
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un comprador paga en efectivo (1 cuota, sin intereses) y más de una regla de pago coincide con los filtros de canal/emisor/marca compartida/nivel de la tarjeta, la pasarela de pagos puede registrar la transacción con una regla que en realidad no ofrece la opción de 1 cuota, en lugar de la regla genérica que sí la ofrece.

Resultado esperado: el nombre de la regla (`ruleName`) registrado en el pago debería ser una regla cuyo rango configurado incluya realmente la opción de 1 cuota.

Resultado real: en una compra con 1 cuota, el selector de reglas agrega _todas_ las reglas que cumplen con los filtros a la lista de candidatas, independientemente de si su rango de cuotas incluye 1 cuota; la posterior ordenación por prioridad del emisor favorece la regla específica del emisor sobre la genérica, por lo que se conserva su nombre (no la regla que se usa realmente para calcular las cuotas/intereses). En la mayoría de los casos observados, se trata únicamente de un **defecto de etiquetado**: las cuotas, el tipo de interés y el importe cobrado son correctos, y cuando las reglas candidatas se dirigen a la misma afiliación/conector, no hay enrutamiento ni impacto financiero.

## Simulación

**Requisitos previos:** dos reglas de pago activas para el mismo canal y marca de tarjeta, ambas válidas para tarjetas de crédito:

- Regla A («genérica»): cualquier emisor, cuotas de 1 a 12, sin intereses
- Regla B («específica del emisor»): emisor/banco específico, cuotas de 13 a 21, con intereses

1. Realice un pedido y pague con una tarjeta de crédito configurada en la Regla B.
2. Al finalizar la compra, seleccione 1 cuota (efectivo/sin intereses).

3. Complete la compra (el pago debe alcanzar el estado de «aprobado»).

4. En el panel de administración, abra los detalles del pago de la transacción («+ Información») e inspeccione el campo «Reglas disponibles»: los ID de las Reglas A y B aparecerán como posibles candidatos, aunque el rango configurado para la Regla B (13-21) no incluya 1x.

5. Verifique el campo «Nombre de la regla» en el pago: mostrará la Regla B (la específica del emisor), no la Regla A.

**Paso de verificación:** confirme que «Cuotas = 1», «Tasa de interés de cuotas = 0» y «Valor de cuotas» sea igual al valor total del pedido.
Esto demuestra que la Regla A fue la que se aplicó realmente para la facturación, mientras que el `ruleName` registrado es incorrecto, lo que permite distinguir este defecto de un enrutamiento erróneo real, donde los términos facturados también serían incorrectos.

## Workaround

- **Inmediata/operativa:** Configure la regla compatible con 1x (Regla A) como la **regla predeterminada** para la afiliación. Esto reduce, pero no elimina, la posibilidad de que se registre una regla específica del emisor sin soporte para 1x cuando las reglas coinciden.

- **Corrección estructural (por tienda, ya implementada):** Comuníquese con el equipo de producto de Pagos para solicitar que se habilite la cuenta para la corrección estructural existente. Ya está disponible una ruta de selección de reglas corregida que el equipo de producto puede activar por tienda.
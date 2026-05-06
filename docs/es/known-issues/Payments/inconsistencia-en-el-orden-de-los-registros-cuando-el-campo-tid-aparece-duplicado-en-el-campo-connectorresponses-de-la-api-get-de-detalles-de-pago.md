---
title: 'Inconsistencia en el orden de los registros cuando el campo «tid» aparece duplicado en el campo «connectorResponses» de la API GET de detalles de pago.'
slug: inconsistencia-en-el-orden-de-los-registros-cuando-el-campo-tid-aparece-duplicado-en-el-campo-connectorresponses-de-la-api-get-de-detalles-de-pago
status: PUBLISHED
createdAt: 2023-09-06T21:17:51.000Z
updatedAt: 2023-09-06T21:17:51.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-report-inconsistency-when-tid-field-is-duplicated-in-the-connectorresponses-field-from-get-payment-details-api
locale: es
kiStatus: Backlog
internalReference: 895664
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los conectores de esa lista deben guardar más campos para el conector que funciona con la aplicación «Venda direta» (Ventas). En concreto, para los conectores que se enumeran a continuación, y solo para ellos, todo el contenido de la carga útil debe dirigirse al campo «`connectorResponses`». Esto da lugar a una duplicación del campo «`tid`», que ya existe en «`connectorResponses`». Aunque esta duplicación no supone un problema en cuanto al ciclo de vida de la transacción, sí crea una inconsistencia al generar informes desde la página de pedidos.


- PagarMeV3
- PagarMeV3Stg
- Adyen V3

## Simulación

1. Acceda a la página de pedidos del administrador.
2. Genere el informe de pedidos.
3. Busque la columna `tId` donde se realizaron los pedidos utilizando uno de estos conectores

## Workaround

Utilice la ruta /payment o la API GET de pedidos para recuperar estos datos
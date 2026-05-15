---
title: 'Aplicación de ventas Al intentar pagar con tarjeta digital o escaneada, no se puede rellenar el campo del CVV'
slug: aplicacion-de-ventas-al-intentar-pagar-con-tarjeta-digital-o-escaneada-no-se-puede-rellenar-el-campo-del-cvv
status: PUBLISHED
createdAt: 2026-03-18T23:07:59.000Z
updatedAt: 2026-05-15T19:48:20.000Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: sales-app-when-attempting-to-pay-with-digit-or-scan-card-the-cvv-field-cant-be-filled
locale: es
kiStatus: Fixed
internalReference: 1380651
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En el método de pago en el que el cliente puede introducir o escanear los datos de su tarjeta de crédito, el campo del CVV tiene una longitud de 0, lo que impide introducir ningún valor.

## Simulación

Debe haber al menos un método de pago con tarjeta de crédito activo en la aplicación de ventas.
Crea un carrito y ve al paso final (pago).
 - Para simularlo con la función de escanear la tarjeta, accede a través de la aplicación móvil.

## Workaround

n/a
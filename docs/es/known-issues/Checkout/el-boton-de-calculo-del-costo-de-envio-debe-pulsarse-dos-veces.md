---
title: 'El botón de cálculo del costo de envío debe pulsarse dos veces.'
slug: el-boton-de-calculo-del-costo-de-envio-debe-pulsarse-dos-veces
status: PUBLISHED
createdAt: 2021-05-24T16:04:02.000Z
updatedAt: 2026-09-17T16:11:54.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-cost-calculation-button-has-to-be-clicked-twice
locale: es
kiStatus: No Fix
internalReference: 372268
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En el proceso de pago, el cálculo del costo de envío a veces no se ejecuta al hacer clic en el botón por primera vez; el botón solo se resalta y el cálculo se ejecuta al segundo clic. Es intermitente. Lo esperado es que el cálculo se realice automáticamente después de ingresar la dirección.

## Simulación

1. Abra un carrito con productos.

2. Vaya al paso de dirección e ingrese una dirección (por ejemplo, "Avenida la Marina, 2400, San Miguel, Perú").

3. Haga clic en el botón de cálculo del costo de envío; no se calcula nada, el botón solo se resalta.

4. Haga clic en el botón nuevamente; el cálculo se ejecuta.

Si el botón funciona al primer clic, salga del proceso de pago y vuelva a él: el botón deja de realizar la validación que estaba haciendo antes.

## Workaround

N/A
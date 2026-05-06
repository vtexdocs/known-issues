---
title: 'La función «Early Capture» compite indebidamente con la función «Automatic Capture» en AuthorizeDotNet'
slug: la-funcion-early-capture-compite-indebidamente-con-la-funcion-automatic-capture-en-authorizedotnet
status: PUBLISHED
createdAt: 2023-07-20T18:08:14.000Z
updatedAt: 2023-07-20T18:08:14.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: early-capture-wrongfully-competing-with-automatic-capture-on-authorizedotnet
locale: es
kiStatus: Backlog
internalReference: 866068
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Para poder entender este comportamiento, primero debemos comprender la diferencia entre la captura automática y la captura anticipada:

**Captura automática:** Activará la solicitud de liquidación automáticamente una vez alcanzada la fecha, independientemente de si la transacción ha sido aprobada o no por el adquirente y el sistema antifraude.

**Captura anticipada:** Se iniciará la solicitud de liquidación una vez que el sistema antifraude apruebe la transacción, al alcanzarse el número de días configurado.

En este conector, la captura automática está programada para que se produzca tras 4 días, mientras que la captura anticipada se puede configurar hasta un máximo de 10 días tras la aprobación del control antifraude. Ambas terminan compitiendo entre sí, y si la captura anticipada se configura con un valor superior a 4 días, la captura automática siempre se producirá antes, por lo que siempre se activará primero.

Esto hace que los valores permitidos en la captura anticipada sean inútiles si son superiores a 4 días.

## Simulación

1. Configura el conector AuthorizeDotNet en tu tienda;
2. Establece el campo «Captura anticipada» en un valor superior a 4 días;
3. Realiza una transacción de prueba;
4. Ve a la interfaz de usuario de transacciones y comprueba que se activa primero el valor programado para la captura automática.

## Workaround

N/A
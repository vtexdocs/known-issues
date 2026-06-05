---
title: 'La función «Captura temprana» compite indebidamente con la función «Captura automática» en AuthorizeDotNet'
slug: la-funcion-captura-temprana-compite-indebidamente-con-la-funcion-captura-automatica-en-authorizedotnet
status: PUBLISHED
createdAt: 2023-07-20T21:08:14.000Z
updatedAt: 2026-06-05T20:48:23.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: early-capture-wrongfully-competing-with-automatic-capture-on-authorizedotnet
locale: es
kiStatus: No Fix
internalReference: 866068
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Para poder entender este comportamiento, primero debemos comprender la diferencia entre la captura automática y la captura anticipada:

**Captura automática:** activará la solicitud de liquidación automáticamente una vez alcanzada la fecha, independientemente de si la transacción ha sido aprobada o no por el adquirente y el sistema antifraude.

**Captura anticipada:** Se iniciará la solicitud de liquidación después de que el sistema antifraude apruebe la transacción, una vez que se haya alcanzado el número de días configurado.

En este conector, la captura automática está programada para que se produzca tras 4 días, mientras que la captura anticipada se puede configurar hasta un máximo de 10 días tras la aprobación del sistema antifraude. Ambas opciones terminan compitiendo entre sí, y si la captura anticipada se configura con un valor superior a 4 días, la captura automática siempre se producirá antes, por lo que siempre se activará primero.

Esto hace que los valores permitidos en la captura anticipada sean inútiles si son superiores a 4 días.

## Simulación

1. Configura el conector AuthorizeDotNet en tu tienda;
2. Establece el campo «Captura anticipada» en un valor superior a 4 días;
3. Realiza una transacción de prueba;
4. Vaya a la interfaz de usuario de transacciones y compruebe que el valor programado para la captura automática se ejecuta primero.

## Workaround

N/A
---
title: 'Problema con la validación del número de teléfono en dispositivos móviles'
slug: problema-con-la-validacion-del-numero-de-telefono-en-dispositivos-moviles
status: PUBLISHED
createdAt: 2024-01-11T17:35:18.000Z
updatedAt: 2024-01-12T14:24:20.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: problem-with-phone-validation-on-mobile-devices
locale: es
kiStatus: Backlog
internalReference: 964802
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La validación del campo de teléfono en dispositivos móviles no funciona como se esperaba. Cuando se alcanza el número de caracteres previsto, la validación marca correctamente el campo con una marca de verificación. Sin embargo, cuando se añaden caracteres adicionales y luego se eliminan uno a uno, la validación no detecta que el recuento de caracteres sigue siendo superior al esperado, por lo que marca erróneamente la entrada como válida. La validación también marca como válidas las entradas con menos caracteres de los esperados.

## Simulación

1. Accede a la página de pago comprando cualquier artículo al azar.
2. Durante el paso del perfil, introduce un número de teléfono hasta que el campo se valide y se marque con una marca de verificación.
3. Pruebe añadiendo más caracteres al número de teléfono y luego eliminándolos uno a uno, observando cómo el campo conserva la marca de verificación incluso con un número de caracteres reducido en comparación con la validación inicial.

## Workaround

N/A
---
title: Terminal Connector entra en bucle en lugar de mostrar error cuando se introduce un código de terminal no válido (Sales App POS)
slug: terminal-connector-entra-en-bucle-en-lugar-de-mostrar-error-cuando-se-introduce-un-codigo-de-terminal-no-valido-sales-app-pos
status: PUBLISHED
createdAt: 2025-10-07T12:17:34.202Z
updatedAt: 2025-10-07T12:17:34.202Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: terminal-connector-loops-instead-of-showing-error-when-invalid-terminal-code-is-entered-sales-app-pos
locale: es
kiStatus: -
internalReference: 1303282
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando un usuario introduce un número de serie/código de terminal inexistente, el flujo del terminal-conector debería mostrar un error, pero la aplicación nativa vtex.terminal-connector-app entra en un bucle infinito y la pantalla se queda atascada en "Esperando pago en el terminal".
Afecta a los flujos POS de la aplicación de ventas que utilizan vtex.terminal-connector-app cuando se proporciona un código de terminal no válido.


#### Simulación



- Inicie un pago en la aplicación de ventas que abra vtex.terminal-connector-app para recopilar el número de serie del terminal.
- Introduce un código de terminal inexistente/inválido.
- Observa que las cajas siguen volviendo a la app, y la pantalla permanece en un bucle en lugar de cerrarse y volver a la página de cajas.

## Workaround


Cierre la pantalla de impugnación del terminal utilizando la X superior y reinicie el flujo de pago.




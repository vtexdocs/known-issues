---
title: 'Errores de consola de solo informe de CSP en iframes de pago de io.vtexpayments.com.br (sintaxis de encabezado no válida e io2.vtex.com no permitido).'
slug: errores-de-consola-de-solo-informe-de-csp-en-iframes-de-pago-de-iovtexpaymentscombr-sintaxis-de-encabezado-no-valida-e-io2vtexcom-no-permitido
status: PUBLISHED
createdAt: 2024-04-16T13:30:23.000Z
updatedAt: 2026-10-16T23:34:25.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: csp-reportonly-console-errors-in-iovtexpaymentscombr-payment-iframes-invalid-header-syntax-and-io2vtexcom-not-allowed
locale: es
kiStatus: Backlog
internalReference: 1017370
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los componentes de pago cargados durante el proceso de compra en `io.vtexpayments.com.br` (como el formulario de tarjeta de crédito) devuelven una cabecera `Content-Security-Policy-Report-Only` que genera mensajes en la consola del navegador. Esta política es de solo informe, por lo que no se bloquea nada y el proceso de compra no se ve afectado.
Existen dos escenarios:

1. La política prohíbe el uso de scripts/estilos en línea y las llamadas al host `io2.vtex.com`, por lo que los registros del navegador muestran mensajes como:

[Solo informe] Se rechazó la ejecución del script en línea porque infringe la siguiente directiva de la Política de Seguridad de Contenido: "script-src 'self' https://io.vtex.com.br https://*.vtex.com.br https://*.vtexpayments.com.br https://*.myvtex.com https://*.vtexcommercestable.com.br https://*.vtexcommercebeta.com.br https://*.vteximg.com.br https://*.vtexassets.com 'report-sample'". Para habilitar la ejecución en línea, se requiere la palabra clave `unsafe-inline`, un hash (`sha256-AdqydPwVZwz4OteEhuvEEzsFBDTM/J6q0/ZlIWf9Wr4=`) o un nonce (`nonce-...`).

2. El valor del encabezado incluye el nombre del encabezado como prefijo (`content-security-policy-report-only: default-src ...`), por lo que el navegador registra:

El nombre de la directiva Content-Security-Policy, `content-security-policy-report-only:`, contiene uno o más caracteres no válidos. Solo se permiten caracteres alfanuméricos ASCII o guiones (`-`) en los nombres de las directivas.

## Simulación

1. Vaya a la página de pago de la tienda y seleccione un método de pago con tarjeta de crédito;

2. Abra la consola del navegador y revise los mensajes anteriores;
3. Opcionalmente, abra `https://io.vtexpayments.com.br/card-ui/1.42.10/index.html`, vaya a DevTools > Network > `index.html` > Response Headers y compruebe que el valor `Content-Security-Policy-Report-Only` comienza con `content-security-policy-report-only:`.

## Workaround

No existe ninguna solución alternativa en la tienda, ya que el encabezado lo establece VTEX. Los mensajes no afectan el proceso de compra. Si aparecen en herramientas de monitorización (por ejemplo, Microsoft Clarity), se pueden filtrar de los informes de error.
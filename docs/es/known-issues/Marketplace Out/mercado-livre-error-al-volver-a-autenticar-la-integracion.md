---
title: 'Mercado Livre Error al volver a autenticar la integración'
slug: mercado-livre-error-al-volver-a-autenticar-la-integracion
status: PUBLISHED
createdAt: 2026-11-06T01:58:24.000Z
updatedAt: 2026-11-06T01:58:24.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-error-when-reauthenticating-the-integration
locale: es
kiStatus: Backlog
internalReference: 1481892
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una tienda reconfigura su integración con Mercado Livre e intenta autenticar la cuenta nuevamente, la autenticación no se completa y se muestra el siguiente error:
`500 - Error interno del servidor. ID de operación: [xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]`
La integración permanece desconectada de la cuenta de Mercado Livre.

## Simulación

1. Abra la configuración de la integración de Mercado Livre para una tienda que ya se haya autenticado previamente.

2. Reconfigure la integración e inicie una nueva autenticación.

3. La autenticación no se completa y se muestra el error anterior.

## Workaround

Abra un ticket con el Soporte de VTEX indicando el nombre de la cuenta y el tipo de listado (Clásico y/o Premium) de la integración. Una vez que el Soporte realice el ajuste, vuelva a autenticarse con la caché del navegador borrada.
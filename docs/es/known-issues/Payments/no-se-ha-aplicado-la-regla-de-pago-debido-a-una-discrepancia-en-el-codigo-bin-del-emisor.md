---
title: 'No se ha aplicado la regla de pago debido a una discrepancia en el código BIN del emisor'
slug: no-se-ha-aplicado-la-regla-de-pago-debido-a-una-discrepancia-en-el-codigo-bin-del-emisor
status: PUBLISHED
createdAt: 2026-05-21T23:23:21.000Z
updatedAt: 2026-05-21T23:25:12.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-rule-not-applied-due-to-bin-issuer-mismatch
locale: es
kiStatus: Backlog
internalReference: 1410739
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las reglas de pago dirigidas a un emisor específico (a nivel de país, banco o tarjeta) no se aplican cuando Checkout identifica la tarjeta del comprador mediante un BIN de 8 dígitos cuya información sobre el emisor difiere del registro del BIN de 6 dígitos correspondiente en la base de datos de BIN de VTEX. Esto afecta a los carritos en los que hay reglas de pago disponibles para ambas versiones del BIN.

## Simulación

**Requisitos previos:**

- Existen registros BIN con discrepancia de emisor (a nivel de país, banco o tarjeta) entre sus versiones de 6 y 8 dígitos
- El comerciante tiene una regla de pago (A) condicionada por el emisor (a nivel de país, banco o tarjeta) que coincide con el registro BIN actual de 6 dígitos
- El comerciante tiene otra regla de pago (B) con menos restricciones o restricciones diferentes que coincide con el registro actual del BIN de 8 dígitos

**Pasos:**

1. Configure una regla de pago (A) con condiciones especiales utilizando la información del emisor bancario (país, banco, nivel de tarjeta);
2. En Checkout, introduzca un número de tarjeta que coincida con un BIN de 6 dígitos cubierto por la regla (A)
3. A continuación, introduzca un número de tarjeta que coincida con la versión de 8 dígitos del mismo BIN;
4. Observe que Checkout da prioridad al BIN de 8 dígitos y evalúa las reglas en función del nombre del emisor de 8 dígitos, que no coincide con la regla de pago (A). No se aplica la regla esperada (A); en su lugar, se selecciona una regla más amplia (B).

## Workaround

Como solución rápida, el comerciante puede crear una regla de pago similar con la misma información del emisor bancario que la versión del BIN de 6 dígitos.

**Recomendado**: Abre un ticket para solicitar una actualización del soporte de VTEX y estandarizar la información del BIN tanto de 6 como de 8 dígitos, enviando la información requerida: https://help.vtex.com/docs/tutorials/adding-bin-information.
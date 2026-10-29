---
title: 'La plantilla vtexcommerce-order-changed-v2 no puede enviar el campo de motivo, como en la versión 1 de changeOrders.'
slug: la-plantilla-vtexcommerceorderchangedv2-no-puede-enviar-el-campo-de-motivo-como-en-la-version-1-de-changeorders
status: PUBLISHED
createdAt: 2025-09-11T22:22:10.000Z
updatedAt: 2026-10-29T22:03:44.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-vtexcommerceorderchangedv2-template-cannot-send-the-reason-field-as-in-version-1-of-changeorders
locale: es
kiStatus: Fixed
internalReference: 1290946
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

No es posible enviar el correo electrónico transaccional "vtexcommerce-order-changed-v2" con el campo "motivo", como se hacía en la plantilla "vtexcommerce-order-changed". Esto se debe a que el campo "motivo" está disponible en la API "OrderModification" y no en la API "GetOrder", como ocurría en la versión 1.

## Simulación

Para simular este escenario, configure la plantilla "vtexcommerce-order-changed-v2" y muestre el campo "motivo". ¡Observará que el campo aparece en blanco!

## Workaround

Actualmente no disponemos de una solución alternativa para este escenario.
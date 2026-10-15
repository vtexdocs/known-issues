---
title: 'Organizaciones B2B sin un número de dirección como dirección válida'
slug: organizaciones-b2b-sin-un-numero-de-direccion-como-direccion-valida
status: PUBLISHED
createdAt: 2025-02-04T19:55:26.000Z
updatedAt: 2026-10-15T17:34:52.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-without-an-address-number-as-a-valid-address
locale: es
kiStatus: Fixed
internalReference: 1173874
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las organizaciones B2B permiten agregar una dirección sin número, aunque es obligatorio para completar la compra. Esto impide que el comprador finalice la transacción.

Hemos detectado este comportamiento en Chile, pero no se limita a este país.

## Simulación

- Crea una organización;

- Agrega una dirección sin número;

- Intenta finalizar una compra; no te permitirá pasar al paso de pago.

## Workaround

Agrega el número al registrar la dirección.
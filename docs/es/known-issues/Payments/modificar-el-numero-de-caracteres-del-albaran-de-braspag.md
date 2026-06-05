---
title: 'Modificar el número de caracteres del albarán de Braspag'
slug: modificar-el-numero-de-caracteres-del-albaran-de-braspag
status: PUBLISHED
createdAt: 2023-03-14T22:01:30.000Z
updatedAt: 2026-06-05T20:23:27.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: change-the-number-of-characters-in-the-braspag-slip
locale: es
kiStatus: No Fix
internalReference: 771045
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se genera un pedido mediante boleto con Braspag y los datos de la dirección superan los 40 caracteres, estos se truncan. Es necesario realizar una mejora cambiando el límite de caracteres de los campos de dirección de 40 a 60.

## Simulación

Realice un pedido con Braspag mediante boleto y, en los datos de la dirección, introduzca una dirección que supere los 40 caracteres.

## Workaround

provisional**
N/a
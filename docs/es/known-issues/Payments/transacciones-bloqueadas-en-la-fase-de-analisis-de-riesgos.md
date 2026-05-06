---
title: 'Transacciones bloqueadas en la fase de análisis de riesgos'
slug: transacciones-bloqueadas-en-la-fase-de-analisis-de-riesgos
status: PUBLISHED
createdAt: 2022-03-11T21:56:32.000Z
updatedAt: 2025-03-06T16:20:12.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-analysing-risk
locale: es
kiStatus: Backlog
internalReference: 541149
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los reintentos automáticos se quedan bloqueados en algunas transacciones que utilizan un proveedor antifraude; esto puede deberse a dos posibles situaciones:

1. Se tarda más de lo esperado en solicitar un nuevo reintento para cambiar su estado.
2. No se inicia el siguiente reintento, lo que deja la transacción atascada.

Esto está bloqueando el inventario de los clientes.

## Simulación

No se puede simular, ya que este comportamiento se produce de forma intermitente.

## Workaround

provisional**
N/A
---
title: Transacción no cargada - Pantalla en blanco
slug: transaccion-no-cargada-pantalla-en-blanco
status: PUBLISHED
createdAt: 2025-10-16T20:27:40.771Z
updatedAt: 2025-10-16T20:27:40.771Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-not-loading-blank-screen
locale: es
kiStatus: Backlog
internalReference: 1157426
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al intentar acceder a una transacción concreta, ésta se carga indefinidamente en una pantalla en blanco.


#### Simulación



1. Acceda directamente a la URL:
`https://.myvtex.com/admin/pci-gateway/#/transactions/`
2. Comprueba en la pestaña de red de dev tools que la única ruta que falla al cargar es `/interactions`.
3. Como validación final, intente acceder directamente a la ruta `/interactions` y reciba un error `504 Gateway Timeout`.

## Workaround


Eliminar el registro de interacciones es imposible, pero el servicio externo que llama varias veces a la pasarela puede reducir su frecuencia, evitando que se produzcan nuevos casos.




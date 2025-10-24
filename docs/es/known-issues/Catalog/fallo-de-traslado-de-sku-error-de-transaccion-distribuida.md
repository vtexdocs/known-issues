---
title: 'Fallo de traslado de SKU: Error de transacción distribuida'
slug: fallo-de-traslado-de-sku-error-de-transaccion-distribuida
status: PUBLISHED
createdAt: 2025-09-29T13:14:54.648Z
updatedAt: 2025-09-29T13:14:54.648Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-move-failure-distributed-transaction-error
locale: es
kiStatus: Backlog
internalReference: 1297799
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando un usuario intenta mover un SKU dentro de un producto, la acción puede fallar. El usuario recibirá un mensaje de error en la pantalla, y un registro en el DevTools mostrará el mensaje "Esta plataforma no soporta transacciones distribuidas". Este problema se produce de forma intermitente.


#### Simulación


A través de la interfaz de usuario del catálogo en Admin, introduzca una SKU e intente moverla a otro producto. Aparecerá el mensaje de error "No puede mover la SKU a otro producto. Inténtelo de nuevo". El mensaje detallado puede verse en la pestaña DevTools Network del navegador.

## Workaround


N/A. Algunos productos causarán el error, y no será posible moverlos.




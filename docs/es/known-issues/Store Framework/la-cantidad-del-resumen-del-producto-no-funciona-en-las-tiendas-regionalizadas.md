---
title: 'La cantidad del resumen del producto no funciona en las tiendas regionalizadas'
slug: la-cantidad-del-resumen-del-producto-no-funciona-en-las-tiendas-regionalizadas
status: PUBLISHED
createdAt: 2025-10-27T12:42:16.733Z
updatedAt: 2025-10-27T12:42:16.733Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: product-summary-quantity-does-not-work-in-regionalized-stores
locale: es
kiStatus: Backlog
internalReference: 1313686
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En tiendas con regionalización el componente product-summary-quantity no se renderiza porque siempre comprueba la disponibilidad en el vendedor por defecto, no en el vendedor de marca blanca.


#### Simulación


Regionalice una tienda que utilice el bloque product-summary-quantity en cualquier estantería y verá que no aparece.

## Workaround


N/A




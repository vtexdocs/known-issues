---
title: No se permite la entrega de kits si el producto tiene un modal configurado
slug: no-se-permite-la-entrega-de-kits-si-el-producto-tiene-un-modal-configurado
status: PUBLISHED
createdAt: 2025-10-16T20:45:30.910Z
updatedAt: 2025-10-16T20:45:30.910Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: delivery-of-kits-is-not-allowed-if-the-product-has-a-configured-modal
locale: es
kiStatus: Backlog
internalReference: 296045
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Actualmente no se permite la entrega de un kit si el producto tiene un modal configurado.


#### Simulación



1-Configurar un transportista para que sólo acepte entregas de un modal específico.

2-Configure este modal en un SKU de kit y también en los SKUs de sus componentes.

3-Intente realizar una compra de este kit para que sea entregado por el transportista que tiene el modal.

## Workaround


Configure la política de envíos para que también entregue los modales indefinidos.

 ![](https://vtexhelp.zendesk.com/attachments/token/deeIRFGCxJEMdfXegOHTI8nuP/?name=inline923958570.png)
Obs: Esta solución sólo está disponible si TODOS los componentes dentro del KIT tiene el modal configurado,




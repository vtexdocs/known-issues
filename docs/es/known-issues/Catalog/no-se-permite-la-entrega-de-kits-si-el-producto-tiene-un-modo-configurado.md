---
title: 'No se permite la entrega de kits si el producto tiene un modo configurado'
slug: no-se-permite-la-entrega-de-kits-si-el-producto-tiene-un-modo-configurado
status: PUBLISHED
createdAt: 2020-10-14T00:43:42.000Z
updatedAt: 2025-04-07T23:53:24.000Z
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

Actualmente, no se permite la entrega de un kit si el producto tiene un modo de transporte configurado.

## Simulación

1-Configura un transportista para que solo acepte entregas de un modo de transporte específico.

2-Configura este modo de transporte en la referencia del kit y también en las referencias de sus componentes.

3-Intenta realizar una compra de este kit para que lo entregue el transportista que tiene ese modo de transporte.

## Workaround

Configura la política de envío para que también se entreguen los modos de transporte no definidos.

 ![](https://vtexhelp.zendesk.com/attachments/token/deeIRFGCxJEMdfXegOHTI8nuP/?name=inline923958570.png)
Nota: Esta solución solo está disponible si TODOS los componentes del KIT tienen el modo de transporte configurado,
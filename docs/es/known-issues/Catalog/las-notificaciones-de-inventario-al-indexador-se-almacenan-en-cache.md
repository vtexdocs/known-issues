---
title: 'Las notificaciones de inventario al indexador se almacenan en caché'
slug: las-notificaciones-de-inventario-al-indexador-se-almacenan-en-cache
status: PUBLISHED
createdAt: 2023-10-05T12:47:51.000Z
updatedAt: 2024-05-14T11:26:20.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inventory-notifications-to-indexer-are-cached
locale: es
kiStatus: Fixed
internalReference: 914545
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una cuenta de franquicia o un vendedor notifica a la cuenta principal (o al marketplace) cambios en el inventario, la cuenta envía el producto al indexador para disponer de la información más actualizada.

El sistema encargado de recibir las notificaciones y transmitirlas al indexador es Broadcaster.

El problema es que el flujo de trabajo Disponibilidad -> Broadcaster -> Indexador funciona a un ritmo muy rápido y, en algunos casos, la información sigue almacenada en caché. De este modo, el Indexador conserva la información antigua hasta una nueva indexación.

## Simulación

No hay una forma fácil de simular este escenario, ya que no ocurre en todas las ocasiones.
El proceso debería ser:

1. La cuenta de franquicia actualiza un inventario;
2. Broadcaster envía el producto al Indexer;
3. El Indexer actualiza el SKU de la cuenta principal con la información antigua.

## Workaround

N/A
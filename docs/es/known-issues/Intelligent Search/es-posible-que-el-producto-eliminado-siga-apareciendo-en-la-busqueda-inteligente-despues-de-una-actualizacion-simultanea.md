---
title: 'Es posible que el producto eliminado siga apareciendo en la Búsqueda inteligente después de una actualización simultánea.'
slug: es-posible-que-el-producto-eliminado-siga-apareciendo-en-la-busqueda-inteligente-despues-de-una-actualizacion-simultanea
status: PUBLISHED
createdAt: 2026-11-10T23:21:02.000Z
updatedAt: 2026-11-10T23:22:03.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: deleted-product-may-still-appears-in-intelligent-search-after-a-concurrent-update
locale: es
kiStatus: Backlog
internalReference: 1483590
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los productos desactivados aún pueden aparecer en las búsquedas de la Búsqueda Inteligente. Esto sucede cuando un producto activo se guarda justo antes de ser desactivado. El historial del indexador registra la eliminación como completada, pero el producto permanece en el índice de búsqueda.

## Simulación

1. Actualiza (guarda) un producto en el Catálogo.

2. Desactiva el mismo producto inmediatamente después de guardarlo. El guardado y la desactivación se procesan casi simultáneamente.

3. Consulta el historial del indexador para el producto. Aparece como eliminada.

4. Busca el producto en la Búsqueda Inteligente usando su ID.

**Comportamiento esperado:** El producto no aparece en la Búsqueda Inteligente.

**Comportamiento real:** El producto aparece en la Búsqueda Inteligente.

## Workaround

Abre un ticket para reindexar los productos afectados.
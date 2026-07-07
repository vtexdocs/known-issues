---
title: 'Amazon En algunos casos, un SKU puede publicarse correctamente en Amazon, pero el stock no se actualiza y permanece en cero.'
slug: amazon-en-algunos-casos-un-sku-puede-publicarse-correctamente-en-amazon-pero-el-stock-no-se-actualiza-y-permanece-en-cero
status: PUBLISHED
createdAt: 2026-07-07T19:09:18.000Z
updatedAt: 2026-07-07T19:09:18.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-in-some-cases-a-sku-may-be-published-successfully-on-amazon-but-the-stock-is-not-updated-and-remains-at-zero
locale: es
kiStatus: Backlog
internalReference: 1431243
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Es posible que uno o más SKU de Amazon aparezcan como publicados/activos correctamente, con stock disponible en la tienda, pero el inventario enviado a Amazon permanece en cero (o desactualizado) y no refleja el valor real, incluso después de días o semanas. No se observa ningún error en el panel de administración ni en el historial de integración que indique la causa.

Esto ocurre con SKU que, en algún momento, tuvieron un error reportado por Amazon en la propia publicación y que posteriormente se corrigió/republicó. Aunque la publicación se active de nuevo con normalidad, el sistema no reanuda automáticamente el envío de actualizaciones de stock para ese SKU.

## Simulación

- Identifique los SKU reportados con una discrepancia entre el stock real (Catálogo VTEX) y el stock publicado en Amazon.

- Confirme en el panel de administración de VTEX (Marketplace → Amazon) que el SKU esté marcado como publicado/activo, sin errores aparentes en pantalla. - Confirme que el stock del SKU en el catálogo de VTEX (Productos y SKU → Precio e inventario) sea **mayor que cero**.

- Verifique el historial de integración de ese SKU (Marketplace → Historial/Bridge). Normalmente, el último registro de actualización de stock exitosa está desactualizado (hace días o semanas), mientras que existen registros más recientes de otros tipos (p. ej., republicación de listado) posteriores a esa fecha.

- Este patrón (listado activo sin errores, stock real disponible, pero sin actualizaciones de stock recientes en el historial) es característico de este problema.

## Workaround

Sí. El equipo de soporte puede derivar el caso al equipo técnico para que ejecute una actualización de stock forzada para el/los SKU específicos, mediante una llamada directa a la API de disponibilidad de la integración (fuera del flujo automático estándar, que es el que está bloqueado). Esta llamada recalcula el stock real de VTEX y lo envía directamente a Amazon, resolviendo el problema de ese SKU individualmente.

Si el cliente reporta varios SKU con el mismo síntoma, conviene recopilar la lista completa y enviarla al equipo técnico de una sola vez, en lugar de gestionarlas una por una en tickets separados.
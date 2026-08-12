---
title: 'Los almacenes excluidos siguen devolviendo la disponibilidad de stock en la simulación y la API de disponibilidad.'
slug: los-almacenes-excluidos-siguen-devolviendo-la-disponibilidad-de-stock-en-la-simulacion-y-la-api-de-disponibilidad
status: PUBLISHED
createdAt: 2025-06-18T23:20:11.000Z
updatedAt: 2026-08-12T20:05:17.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: excluded-warehouses-continue-to-return-stock-availability-in-the-simulation-and-availability-api
locale: es
kiStatus: No Fix
internalReference: 1246900
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se elimina un almacén en el módulo de Logística, puede permanecer registrado en la base de inventario de disponibilidad. Esto provoca que la disponibilidad de stock de los SKU siga considerando cantidades de almacenes que ya no existen, lo que hace que los SKU aparezcan como no disponibles o muestren cantidades irreales.

Esta situación se produce principalmente cuando el proceso de eliminación del almacén implica un gran volumen de SKU vinculados, lo que puede generar un tiempo de espera agotado y dejar residuos en la base de disponibilidad incluso después de la eliminación en Logística. El impacto se nota en las API de

## Simulación

y en la selección de vendedores, generando inconsistencias para el comerciante y el comprador, lo que afecta la experiencia de compra en tienda.

## **Simulación**

- Cree un almacén en la cuenta y asocie SKU a este almacén, asignando cantidades positivas al stock.

- Elimine el almacén a través del módulo de Logística.

- Ejecute una llamada a la API de simulación.
- Observe que, en la respuesta, el SKU devuelve la disponibilidad del almacén eliminado, o que la suma de las existencias incluye valores que no coinciden con los de los almacenes válidos. Al usar la ruta para listar los almacenes activos en la cuenta, observe que el almacén en cuestión ya no aparece en la lista, pero aún se muestra en la información de disponibilidad/simulación.

- El SKU puede dejar de estar disponible para la compra debido a este stock residual o mostrar una cantidad irreal en los puntos finales de stock.

## Workaround

Migrar la indexación de la cuenta a Delivery Promise resuelve este problema, ya que elimina la dependencia de la base de disponibilidad anterior donde persiste el stock residual de los almacenes eliminados.

Para las cuentas que **no** utilizan Delivery Promise: no existe ninguna solución alternativa pública disponible. El tratamiento es exclusivamente del backend y debe gestionarse caso por caso mediante un ticket con el equipo de ingeniería, que realizará la limpieza en función de la disponibilidad.
---
title: 'Los almacenes excluidos siguen devolviendo la disponibilidad de existencias en la simulación y la API de disponibilidad'
slug: los-almacenes-excluidos-siguen-devolviendo-la-disponibilidad-de-existencias-en-la-simulacion-y-la-api-de-disponibilidad
status: PUBLISHED
createdAt: 2025-10-16T19:29:52.175Z
updatedAt: 2025-10-16T19:29:52.175Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: excluded-warehouses-continue-to-return-stock-availability-in-the-simulation-and-availability-api
locale: es
kiStatus: Backlog
internalReference: 1246900
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Cuando se elimina un almacén en el módulo Logística, puede permanecer registrado en la base de inventario de disponibilidad. Esto provoca que la disponibilidad de stock de las SKUs siga considerando cantidades de estos almacenes que ya no existen, provocando que las SKUs no estén disponibles o muestren cantidades irreales.
La situación se produce principalmente cuando el proceso de eliminación de un almacén implica un gran volumen de SKU vinculadas a él, lo que puede generar un tiempo de espera y dejar residuos en la base de disponibilidad incluso después de la eliminación en Logística. El impacto se siente en las APIs de simulación y en la selección de vendedores, generando inconsistencias para el comerciante y el comprador, impactando en la experiencia de compra en tienda.

## Simulación




- Cree un almacén en la cuenta y asocie SKUs a este almacén, asignando cantidades positivas al stock.
- Eliminar el almacén a través del módulo Logística.
- Ejecute una llamada a la API de simulación.
- Observe que, en la respuesta, la SKU devuelve disponibilidad del almacén eliminado, o que la suma de las existencias incluye valores que no se ajustan a lo que existe en los almacenes válidos. Utilizando la ruta para listar los almacenes activos en la cuenta, observe que el almacén en cuestión ya no está listado, pero sigue apareciendo en la devolución de disponibilidad/simulación.
- Es posible que la SKU no esté disponible para la compra debido a este stock residual o que muestre una cantidad irreal en los finales de stock.

## Workaround



No hay ninguna solución pública disponible ni ninguna acción preventiva por parte del comerciante. El tratamiento es exclusivamente backend y depende del equipo de ingeniería para llevar a cabo la limpieza en función de la disponibilidad.




---
title: 'Las actualizaciones de precio fijo pueden sobrescribir los cambios simultáneos.'
slug: las-actualizaciones-de-precio-fijo-pueden-sobrescribir-los-cambios-simultaneos
status: PUBLISHED
createdAt: 2026-09-09T15:50:21.000Z
updatedAt: 2026-09-09T15:50:21.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: fixed-price-updates-may-overwrite-concurrent-changes
locale: es
kiStatus: Backlog
internalReference: 1458558
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se envían varias actualizaciones de precio fijo para el mismo SKU simultáneamente o en una secuencia corta, puede producirse una condición de carrera en el flujo de actualización de precios fijos.

Las solicitudes pueden leer la misma instantánea o una instantánea desactualizada del array `fixedPrices` del SKU y, posteriormente, sobrescribir todo el array con datos obsoletos. Como resultado, una actualización de precio fijo de una solicitud puede sobrescribir o eliminar involuntariamente los cambios realizados por otras solicitudes simultáneas.

Esto puede provocar la pérdida de actualizaciones de precios, incluidos los precios configurados para diferentes políticas comerciales, aunque las solicitudes a la API se completen correctamente y no se registre ninguna operación de eliminación explícita para el precio afectado.

## Simulación

1. Seleccione un SKU con precios fijos configurados para varias políticas comerciales.
2. Envíe varias solicitudes de actualización de precio fijo para el mismo SKU simultáneamente o en un intervalo muy corto, utilizando el punto final de Precio Fijo:
`POST /api/pricing/prices/{itemId}/fixed/{priceTableId}`
3. Configure cada solicitud para actualizar una política comercial o un precio diferente para el mismo SKU.

4. Verifique el array `fixedPrices` resultante una vez procesadas todas las solicitudes.

5. En caso de una condición de carrera, una o más actualizaciones podrían faltar o revertirse debido a que una solicitud conservó una instantánea obsoleta del array `fixedPrices`.

6. El registro de auditoría podría mostrar operaciones de `Precio Fijo Modificado` exitosas sin la eliminación explícita del precio faltante.

Es más probable que este problema ocurra cuando se procesan varias solicitudes para el mismo SKU simultáneamente. No existe un intervalo de tiempo específico entre solicitudes que garantice la prevención del problema, ya que el comportamiento depende del número y la sincronización de las actualizaciones simultáneas.

## Workaround

En lugar de enviar una solicitud `POST` por cada precio configurado para el mismo SKU, utilice el endpoint `Put Price` para enviar todos los precios del SKU en una sola operación.

Esto reduce el número de actualizaciones simultáneas del mismo SKU y evita que varias solicitudes sobrescriban los cambios de otras debido a datos obsoletos.
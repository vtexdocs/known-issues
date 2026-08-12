---
title: 'Shopee Error al actualizar la política comercial en la configuración de la tarjeta de integración.'
slug: shopee-error-al-actualizar-la-politica-comercial-en-la-configuracion-de-la-tarjeta-de-integracion
status: PUBLISHED
createdAt: 2025-05-30T18:40:46.000Z
updatedAt: 2026-08-12T23:57:44.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-error-when-updating-commercial-policy-in-the-integration-card-setup
locale: es
kiStatus: Backlog
internalReference: 1236034
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al cambiar la política comercial de una cuenta de Shopee ya configurada, los artículos vinculados a la política anterior permanecen activos. No existe un proceso automático para desactivarlos o volver a publicarlos bajo la nueva política comercial, lo que provoca problemas en el catálogo y fallos en los pedidos.

## Simulación

- Configura una cuenta de Shopee en VTEX con una política comercial (p. ej., Política A).

- Publica los SKU como de costumbre.

- Cambia la política comercial a una nueva (p. ej., Política B).
- Los artículos previamente vinculados a la Política A permanecen activos y provocan errores en Bridge, como:
["fields":0,"error":{"code":ORDoo2,"message":El artículo {descripción del artículo} ya no está disponible,"exception":null},"operationId": {número de operationId}"]

## Workaround

Establezca el inventario a cero para todos los artículos vinculados a la antigua política comercial.
Espere a que el mercado procese correctamente esta actualización.
Luego, actualice la cuenta con la nueva política comercial y vuelva a publicar los artículos.
---
title: Shopee Error al actualizar la política comercial en la configuración de la tarjeta de integración
slug: shopee-error-al-actualizar-la-politica-comercial-en-la-configuracion-de-la-tarjeta-de-integracion
status: PUBLISHED
createdAt: 2025-08-14T16:19:41.756Z
updatedAt: 2025-08-14T16:19:41.756Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-error-when-updating-commercial-policy-in-the-integration-card-setup
locale: es
kiStatus: Backlog
internalReference: 1236034
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al cambiar la política comercial de una cuenta Shopee ya configurada, los artículos previamente vinculados a la antigua política permanecen activos. No existe un proceso automático para desactivar esos artículos o volver a publicarlos bajo la nueva política comercial, lo que provoca problemas en el catálogo y fallos en los pedidos.



#### Simulación



- Configurar una cuenta Shopee en VTEX utilizando una política comercial (por ejemplo, Política A).
- Publica SKUs como de costumbre.
- Cambia la política comercial por una nueva (por ejemplo, Política B).
- Los artículos previamente vinculados a la Política A permanecen activos y provocan errores en Bridge, como:
["fields":0, "error":{"code": "ORDoo2", "message": "El artículo {item description} ya no está disponible", "exception":null}, "operationId": {número de operationId}"]



#### Workaround


Ponga el inventario a cero para todos los artículos vinculados a la antigua política comercial.
Espere a que el mercado procese correctamente esta actualización.
A continuación, actualice la cuenta con la nueva política comercial y vuelva a publicar los artículos.





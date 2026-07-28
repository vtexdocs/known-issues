---
title: 'Amazon Los SKU inactivos o que no cumplen con la política comercial permanecen publicados (Coincidencia/nuevo listado) en Amazon después de que el conector los envía.'
slug: amazon-los-sku-inactivos-o-que-no-cumplen-con-la-politica-comercial-permanecen-publicados-coincidencianuevo-listado-en-amazon-despues-de-que-el-conector-los-envia
status: PUBLISHED
createdAt: 2026-07-28T17:05:56.000Z
updatedAt: 2026-07-28T17:05:56.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-inactive-or-outofcommercialpolicy-skus-remain-published-matchnew-listing-on-amazon-after-the-connector-sends-them
locale: es
kiStatus: Backlog
internalReference: 1440366
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los SKU inactivos en el catálogo VTEX, o que ya no se ajustan a la política comercial configurada para el canal de Amazon, pueden seguir apareciendo como publicados en Amazon, ya sea asociados a un producto existente (Coincidencia) o como un nuevo listado creado por el conector, incluso después de que dejen de cumplir dichas condiciones. La validación existente impide que un SKU en esta situación se publique por primera vez, pero no elimina de Amazon un SKU que ya se publicó (mediante Coincidencia o como un nuevo listado) antes de volverse inactivo o quedar fuera de la política comercial.

## Simulación

- Publique un SKU en Amazon mientras esté activo y cumpla con la política comercial configurada para el canal, ya sea mediante Coincidencia con un producto existente o como un nuevo listado.

- Desactive ese SKU en el catálogo VTEX o cambie su política comercial para que ya no pertenezca al canal de ventas configurado para la integración con Amazon.

- Verifique la pantalla de Coincidencia o el listado de ese SKU en la cuenta de Amazon del vendedor.
- El SKU sigue apareciendo como publicado, tanto en el escenario de coincidencia como en el de nueva publicación, aunque ya no debería estar disponible.

## Workaround

En esta situación, no es posible eliminar automáticamente el SKU de Amazon a través del conector, en ninguno de los dos escenarios (coincidencia o nueva publicación). Como solución parcial, el stock del SKU suele actualizarse a cero durante las actualizaciones de disponibilidad (lo que impide nuevas ventas).
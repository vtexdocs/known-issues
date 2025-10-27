---
title: '"Método de envío" (de Logística) en Automatización de pedidos (pnp) se vincula incorrectamente a una Categoría de producto cuando ambas comparten el mismo ID.'
slug: metodo-de-envio-de-logistica-en-automatizacion-de-pedidos-pnp-se-vincula-incorrectamente-a-una-categoria-de-producto-cuando-ambas-comparten-el-mismo-id
status: PUBLISHED
createdAt: 2025-10-27T17:51:38.213Z
updatedAt: 2025-10-27T17:51:38.213Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: shipping-method-from-logistics-in-order-automation-pnp-is-incorrectly-linked-to-a-product-category-when-both-share-the-same-id
locale: es
kiStatus: Backlog
internalReference: 1313989
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al configurar un **Automatización de Pedidos** utilizando la condición **Método de Envío**, el nombre de la política de envío seleccionada es reemplazado inmediatamente por el nombre de una **Categoría de Producto**. El valor de selección que debería mostrar el nombre del método de envío muestra en su lugar el nombre de la categoría que comparte el mismo ID.
El problema se produce cuando el **ID** de una política de envío coincide con el ID de una categoría existente.
Usuarios afectados: aquellos que crean automatizaciones en cuentas **Pick and Pack** en las que los ID de política de envío de **Logística** son valores numéricos que se solapan con los ID de categoría.


#### Simulación



- Requisitos
  - Cuenta con **Pick and Pack** activado.
  - **Logística** políticas de envío con ID numéricos que se superponen a los ID de categoría existentes (por ejemplo, ID de política de envío 5 e ID de categoría 5).
- Pasos:**
  - Abra la Configuración de Recogida y Embalaje y cree o edite un **Automatización de Pedido** utilizando "**Método de Envío**" como condición.
  - En la lista, seleccione una política de envío (por ejemplo, "Entrega Express Compras hasta 500" con ID 5).
  - Observe que tras la selección, la etiqueta mostrada cambia al nombre de la categoría con el mismo ID (por ejemplo, "Carnes, pescados y mariscos").

## Workaround


Cambie los **ID** de las políticas de envío a valores que no coincidan con los ID de categoría existentes (por ejemplo, utilice ID alfanuméricos).
Esto elimina la colisión y permite que la automatización se vincule correctamente y funcione por **Método de envío**.




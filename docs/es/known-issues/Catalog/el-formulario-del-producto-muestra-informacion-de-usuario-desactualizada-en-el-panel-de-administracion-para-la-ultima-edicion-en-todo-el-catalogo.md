---
title: 'El formulario del producto muestra información de usuario desactualizada en el panel de administración para la última edición en todo el catálogo.'
slug: el-formulario-del-producto-muestra-informacion-de-usuario-desactualizada-en-el-panel-de-administracion-para-la-ultima-edicion-en-todo-el-catalogo
status: PUBLISHED
createdAt: 2026-09-16T19:35:35.000Z
updatedAt: 2026-09-16T19:35:35.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-form-displays-outdated-user-information-in-the-admin-for-last-edit-across-catalog
locale: es
kiStatus: Backlog
internalReference: 1462086
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El formulario de producto de administración muestra una atribución de usuario obsoleta o eliminada en el campo **Última actualización por**. Esto ocurre cuando los productos se modifican mediante servicios de administración o hojas de cálculo heredados, que no actualizan el campo **Última actualización por**.

## Simulación

1. Abra **Administración > Catálogo > Productos**.

2. Seleccione un producto que se haya editado recientemente mediante la administración heredada o la importación masiva.

3. Vea el formulario de edición del producto.

4. Verifique el campo **Última actualización por**.

**Comportamiento esperado:** El campo muestra el usuario o la clave API que modificó el producto más recientemente.

**Comportamiento real:** El campo muestra un usuario obsoleto, un usuario eliminado o una clave API revocada. La fecha puede ser posterior a la última acción del usuario atribuido.

## Workaround

No aplica. Tenga en cuenta que las pantallas de administración heredadas se consideran descontinuadas y ya no deben usarse. Utilice la interfaz de administración actual para garantizar que los campos se actualicen correctamente.
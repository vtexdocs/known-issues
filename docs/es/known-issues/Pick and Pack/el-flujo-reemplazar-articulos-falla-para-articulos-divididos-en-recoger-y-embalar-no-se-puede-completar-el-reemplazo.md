---
title: 'El flujo Reemplazar Artículos falla para artículos divididos en Recoger y Embalar (no se puede completar el reemplazo).'
slug: el-flujo-reemplazar-articulos-falla-para-articulos-divididos-en-recoger-y-embalar-no-se-puede-completar-el-reemplazo
status: PUBLISHED
createdAt: 2025-10-07T21:39:05.626Z
updatedAt: 2025-10-07T21:39:05.626Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: replace-items-flow-fails-for-split-items-in-pick-and-pack-cannot-complete-replacement
locale: es
kiStatus: Backlog
internalReference: 1303803
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En **Recoger y empaquetar**, el flujo **Reemplazar artículos** no funciona correctamente cuando un pedido contiene artículos divididos (es decir, el mismo SKU dividido en varias líneas de pedido debido a **precios diferentes,** **promociones o una condición/personalización individual**). La interfaz de usuario requiere que el selector seleccione una línea de división específica y, a continuación, bloquea la finalización de la sustitución.

Esto también ocurre en **hojas de trabajo de picking de un solo pedido**, impidiendo que se finalice la acción de sustitución para los artículos afectados.


#### Simulación


**Requisitos**: Un pedido en **Pick and Pack** donde un **SKU** aparece **dividido** en múltiples líneas debido a diferencias en **precios,** **promociones, o una condición/personalización individual**. Este escenario está documentado y es reproducible.

Pasos:

1.

Abra la **hoja de trabajo de picking** para el pedido afectado en **Pick and Pack**.



2.

Seleccione una **partida** y elija **Reemplazar partidas**; el sistema requiere seleccionar qué **partida específica** desea reemplazar.



3.

Proceda a la sustitución; el flujo **no permite la finalización** y bloquea la operación, incluso para **hojas de trabajo de selección única**.




## Workaround


**Descartar** los elementos divididos **individualmente** y **añadir nuevos productos** según sea necesario, alineando este proceso con las partes interesadas hasta que se mejore el comportamiento.




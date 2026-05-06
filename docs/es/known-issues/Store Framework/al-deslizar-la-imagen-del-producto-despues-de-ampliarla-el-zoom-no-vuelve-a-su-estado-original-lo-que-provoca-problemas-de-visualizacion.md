---
title: 'Al deslizar la imagen del producto después de ampliarla, el zoom no vuelve a su estado original, lo que provoca problemas de visualización'
slug: al-deslizar-la-imagen-del-producto-despues-de-ampliarla-el-zoom-no-vuelve-a-su-estado-original-lo-que-provoca-problemas-de-visualizacion
status: PUBLISHED
createdAt: 2021-12-20T18:53:33.000Z
updatedAt: 2024-01-29T18:05:04.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: swiping-productimage-after-zooming-in-does-not-revert-the-zoom-causing-display-issues
locale: es
kiStatus: Backlog
internalReference: 491180
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al utilizar el componente «product-image» de vtex.store-components, si se desliza una imagen hacia un lado tras hacer clic en ella para ampliarla, la primera imagen permanecerá ampliada, lo que provoca problemas de visualización cuando el usuario vuelve a deslizarse hacia ella.

## Simulación

En una página de detalles del producto (PDP) que utilice el componente «product-image» de vtex.store-components, acceda a la versión móvil de un producto que contenga al menos dos imágenes.
Haz clic para ampliar la primera imagen y, a continuación, desliza el dedo hacia la siguiente.
Haz clic para ampliar la segunda y vuelve a deslizar el dedo hacia la primera.
Hacer esto varias veces acabará provocando algunos problemas de visualización en la imagen que se encuentra actualmente ampliada.
Al hacer clic de nuevo en la imagen para alejar el zoom, se restablece a su estado normal.

## Workaround

Utiliza las flechas para navegar entre imágenes y reducir la probabilidad de que los usuarios opten por deslizarse.

Establece la propiedad «zoomMode»: «hover» o «zoomMode»: «open-modal». Esto impide deslizarse cuando la imagen está ampliada, pero cambia ligeramente el comportamiento.
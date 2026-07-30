---
title: 'La creación de una especificación de SKU obligatoria y activa no desactiva las SKU de categoría.'
slug: la-creacion-de-una-especificacion-de-sku-obligatoria-y-activa-no-desactiva-las-sku-de-categoria
status: PUBLISHED
createdAt: 2026-07-30T21:47:00.000Z
updatedAt: 2026-07-30T21:47:00.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: creating-a-mandatory-active-sku-specification-is-not-inactivating-category-skus
locale: es
kiStatus: Backlog
internalReference: 1441624
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, cuando se crea una especificación obligatoria **después** de que ya existan SKU activos en una categoría determinada, estos no se desactivan.

El escenario esperado, según la advertencia de la interfaz de usuario que se muestra a continuación, es que cuando se crea una especificación obligatoria en una categoría, todos los SKU activos de dicha categoría se desactiven hasta que se completen los valores de la especificación.

![](https://vtexhelp.zendesk.com/attachments/token/YYcHzuU2WkcD7DP1ZvcAOYm0J/?name=image.png)

Resultado

![](https://vtexhelp.zendesk.com/attachments/token/Gn0CO1DGe9fxU0w066bZblOcX/?name=image.png)

## Simulación

1 - Para una categoría con 1 o más SKU activos, vaya al menú de la categoría (https://myaccount.myvtex.com/admin/Site/Campo.aspx).

2 - Cree un nuevo campo de SKU y marque los campos "isMandatory" e "isActive" como verdadero.

3 - Se mostrará el mensaje "Todos los SKU se desactivarán".

4 - Acceda nuevamente al SKU dentro de esta categoría. Observe que no ha ocurrido nada. Se habrá alcanzado un estado incorrecto de SKU activos con campos obligatorios vacíos.

## Workaround

-
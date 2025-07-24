---
title: 'Las condiciones del catálogo de promociones se aplican a skucomponent aunque sólo añada skukit a la cesta'
id: g9V2wsKiakxYs4982oPDH
status: PUBLISHED
createdAt: 2024-08-22T13:29:07.146Z
updatedAt: 2024-08-22T13:34:20.455Z
publishedAt: 2024-08-22T13:34:20.455Z
firstPublishedAt: 2024-08-22T13:29:07.960Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotions-catalog-conditions-apply-to-skucomponent-even-when-only-adding-skukit-to-cart
locale: es
kiStatus: Backlog
internalReference: 1085500
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, cuando se añade una restricción de promoción que tiene una regla de catálogo (es decir, categorías, skus, marcas, colecciones, ...) y este conjunto contiene el componente de un SKU, pero no el kit en sí, la intención, del usuario, originalmente, es dar este descuento dado sólo para cuando el componente se compra por separado.

Sin embargo, si se configura este tipo de restricción, si el skukit se añade a la cesta, se le sigue aplicando el descuento.



## Simulación


1 - crear un kit SKU con 1+ componentes.
2 - cree una promoción que aplique un descuento al componente, pero no al kit.
3 - añada el kit al carrito, el descuento se aplicará, como si fuera el componente también.



## Workaround


Añada otras restricciones de promoción o no utilice componentes separados de los kits en las promociones.






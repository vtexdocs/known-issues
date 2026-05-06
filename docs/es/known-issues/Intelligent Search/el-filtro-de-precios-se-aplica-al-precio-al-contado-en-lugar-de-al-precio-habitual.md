---
title: 'El filtro de precios se aplica al «precio al contado» en lugar de al precio habitual'
slug: el-filtro-de-precios-se-aplica-al-precio-al-contado-en-lugar-de-al-precio-habitual
status: PUBLISHED
createdAt: 2024-02-15T19:39:39.000Z
updatedAt: 2024-02-15T19:39:39.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: price-filter-applied-on-top-of-spot-price-instead-of-regular-price
locale: es
kiStatus: Backlog
internalReference: 982664
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los filtros de precio se aplican sobre el valor «spotPrice», que es el precio correspondiente a condiciones de pago especiales, en lugar del precio habitual del artículo.

Esto puede afectar a las expectativas, ya que difiere de lo que ocurre en la mayoría de los sitios, que se centran en el precio habitual, como suelen hacer las estanterías y el carrito, o propiedades como «priceRange» de la API.

## Simulación

Consideremos un producto con un precio de 430 $ con un 10 % de descuento en un método de pago específico, lo que genera un «precio al contado» de 387 $.

Si se filtran los artículos con un precio entre 300 y 400 $, aparecerá este producto, que normalmente se muestra en la estantería como 430 $ (su precio habitual), lo que genera una percepción de divergencia.

Del mismo modo, la propiedad «priceRange» de la API responderá con los siguientes valores (considerando este producto como el único resultado para esta consulta de búsqueda), lo que alimenta la sensación de divergencia:

    "priceRange": { "sellingPrice": { "highPrice": 430, "lowPrice": 430 }, "listPrice": { "highPrice": 430, "lowPrice": 430 }}

## Workaround

N/A
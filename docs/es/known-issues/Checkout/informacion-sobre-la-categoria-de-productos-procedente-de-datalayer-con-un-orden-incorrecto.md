---
title: 'Información sobre la categoría de productos procedente de dataLayer con un orden incorrecto'
slug: informacion-sobre-la-categoria-de-productos-procedente-de-datalayer-con-un-orden-incorrecto
status: PUBLISHED
createdAt: 2021-01-27T14:55:26.000Z
updatedAt: 2023-02-27T21:49:07.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: product-category-information-from-datalayer-with-a-wrong-sorting
locale: es
kiStatus: Fixed
internalReference: 328415
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La información sobre las categorías de productos en el dataLayer de las páginas de pago se muestra con un orden incorrecto. Esto se refleja en la propiedad «categoryTree».

Se ordenan según sus ID, de menor a mayor, lo que puede no reflejar la jerarquía esperada para esta información.

## Simulación

Añade un producto al carrito y compara las propiedades «productCategoryIds» y «productCategories» del formulario de pedido con la propiedad «categoryTree» del dataLayer.

## Workaround

La misma información se puede recuperar de la API del formulario de pedido en lugar de del dataLayer.
---
title: 'Las promociones por orden de formas de pago no aparecen en la página del producto'
slug: las-promociones-por-orden-de-formas-de-pago-no-aparecen-en-la-pagina-del-producto
status: PUBLISHED
createdAt: 2025-11-14T19:13:27.922Z
updatedAt: 2025-11-14T19:13:27.922Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: promotions-by-order-of-payment-methods-do-not-appear-on-the-product-page
locale: es
kiStatus: Backlog
internalReference: 781523
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La página del producto sólo muestra el precio SKU con algunas promociones, que no incluyen las condiciones específicas para los métodos de pago ni el número de cuotas. Estos sólo se aplican durante el pago, después de que el usuario haya optado explícitamente por utilizar una determinada condición de pago.



#### Simulación




1. Crear una promoción que conceda un 5% de descuento por pago con "boleto" (popular medio de pago offline brasileño).
2. Acceder a la página del producto
3. Tenga en cuenta que el valor mostrado no tiene en cuenta el descuento establecido. El descuento aparecerá después de elegir "boleto" como método de pago en la caja.


## Workaround



Este escenario puede resolverse fácilmente implementando un Javascript front-end que calcule el precio e incluya el porcentaje de descuento debido, mostrando después un elemento con este precio adicional en la página del producto.







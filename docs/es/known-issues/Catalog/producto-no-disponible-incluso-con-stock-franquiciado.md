---
title: Producto no disponible incluso con stock franquiciado
slug: producto-no-disponible-incluso-con-stock-franquiciado
status: PUBLISHED
createdAt: 2025-09-10T13:35:47.174Z
updatedAt: 2025-09-10T13:35:47.174Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-unavailable-even-with-franchised-stock
locale: es
kiStatus: No Fix
internalReference: 404499
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Si el producto está agotado en el mercado, en cualquier otro vendedor habitual, y la bandera **mostrar agotado** está desmarcada, el producto se mostrará agotado en el escaparate o en la API de búsqueda, aunque tenga existencias en las cuentas de franquicia. Es posible añadir el producto a la cesta.


    ¿Mostrar fuera de stock? - Falso -> 404- Verdadero -> regionalización -> comprobar existencias de cuentas de franquicia

##

#### Simulación



- Poner stock en la cuenta franquicia.
- Establecer la bandera `Show out of stock` como `no`.
-

Ver el producto no está disponible en la parte delantera.


## Workaround


Establecer `Mostrar fuera de stock` como `sí` en la cuenta de mercado.



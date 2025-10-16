---
title: Vista previa de envío que muestra erróneamente el precio en la división de recogida y entrega
slug: vista-previa-de-envio-que-muestra-erroneamente-el-precio-en-la-division-de-recogida-y-entrega
status: PUBLISHED
createdAt: 2025-10-16T20:37:27.569Z
updatedAt: 2025-10-16T20:37:27.569Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-the-price-in-pickup-and-delivery-split
locale: es
kiStatus: Fixed
internalReference: 1181570
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El precio de entrega mostrado en la vista previa de envío (carrito) es incorrecto cuando hay una división entre recogida, ofrecida por el vendedor A, y entrega, ofrecida por el vendedor B, y ambos vendedores ofrecen un ANS de entrega con el mismo nombre. Por ejemplo:


- Artículo 1, ofrecido por el vendedor A, con ANS: recogida X y entrega X
- Artículo 2, ofrecido por el vendedor B, con ANS: recogida Y y entrega X

Al seleccionar "Recogida en tienda":

- El artículo 1 tiene recogida X
- El artículo 2 tiene entrega X con un precio superior al registrado en la tienda.


#### Simulación



- Añade dos o más artículos al carrito, donde un vendedor diferente realiza cada artículo;
- Asegúrese de que uno de los artículos no está disponible para su recogida;
- Ambos vendedores deben ofrecer un SLA con el mismo nombre.

## Workaround


N/A



---
title: 'El conector antifraude ClearSale está enviando los artículos del carrito equivocados en los casos en los que dos o más artículos comparten el mismo nombre.'
id: 1OSID8MeL6DxaM3urR7CHj
status: PUBLISHED
createdAt: 2023-04-28T12:21:24.524Z
updatedAt: 2023-05-08T18:23:47.413Z
publishedAt: 2023-05-08T18:23:47.413Z
firstPublishedAt: 2023-04-28T12:21:25.305Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-clearsale-antifraud-connector-is-sending-the-wrong-cart-items-in-cases-where-two-or-more-items-share-the-same-name
locale: es
kiStatus: Backlog
internalReference: 799396
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El conector antifraude ClearSale utiliza el nombre del artículo como condición cuando realiza un bucle a través del minicarrito enviado por la caja. En los casos en que dos o más artículos comparten el mismo nombre, aunque tengan SKU diferentes, sólo uno de esos artículos se envía al sistema antifraude. El importe de la transacción de los artículos restantes se envía como carga.



## Simulación


Realiza un pedido con 2 artículos en la cesta que comparten el mismo nombre.



## Workaround


N/A






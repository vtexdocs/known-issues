---
title: 'La promoción «Compra conjunta» con muchas referencias puede hacer que los productos que cumplen los requisitos no se carguen en la página principal (tiempo de espera agotado)'
slug: la-promocion-compra-conjunta-con-muchas-referencias-puede-hacer-que-los-productos-que-cumplen-los-requisitos-no-se-carguen-en-la-pagina-principal-tiempo-de-espera-agotado
status: PUBLISHED
createdAt: 2020-10-30T18:47:39.000Z
updatedAt: 2024-01-23T15:09:02.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: buy-together-promotion-with-lots-of-skus-may-let-the-eligible-products-not-to-load-on-the-front-timeout
locale: es
kiStatus: No Fix
internalReference: 301463
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La promoción «Compra conjunta» con muchas referencias (SKU) puede provocar que los productos elegibles no se carguen en la página principal debido a un tiempo de espera agotado. Las páginas de productos utilizan el control de producto `<vtex.cmc:BuyTogether/>`. Este control se encarga de mostrar en la página del producto la información de todas las referencias elegibles incluidas en la promoción.

El problema es que, si el cliente configura muchas referencias en esta promoción, el Portal tendrá que mostrar esta información (precio, stock, etc.) de todos los productos de estas referencias en la página del producto. Y el Portal lo hace simulando sus productos con el proceso de pago. Si tenemos una promoción que se ha configurado, por ejemplo, con 50 SKU, y estas SKU pertenecen a productos que tienen al menos 5 SKU por producto, y están disponibles, por ejemplo, en 3 canales de venta, el Portal tendrá que simular con el proceso de pago cada SKU para cada canal de venta de cada producto elegible en esta promoción, solo para mostrar esta página de producto específica. En este ejemplo, Portal tendrá que realizar 750 simulaciones con el proceso de pago (50 SKU configuradas en la promoción; suponiendo que estas SKU correspondan a productos que tienen 5 SKU cada uno, son 250 SKU, y todas deben simularse para cada canal de venta, lo que nos da un total de 750 simulaciones).

PD: no disponemos de una cifra exacta que establecer en la lista de SKU, ya que dependerá de cada cliente. Si el cliente tiene productos con pocas SKU y solo un SC disponible, podrá utilizar más SKU en este tipo de promoción.

## Simulación

- Crea una promoción «Comprar juntos»
- Añade a la Lista de SKU 1 o a la Lista de SKU 2 un gran número de SKU, por ejemplo, más de 50.
- Intenta cargar la página del producto que utiliza el control `<vtex.cmc:BuyTogether/>`; la página no debería cargarse debido a un tiempo de espera agotado.

## Workaround

Hay dos formas de «resolver» este problema:
- Elimina el control de plantilla <vtex.cmc:BuyTogether/>; esto hará que la página del producto no cargue la información sobre este producto disponible en esta promoción;
- Utilice menos SKU en la lista de la promoción «Comprar juntos». Una vez más, lamentablemente, no disponemos de un número concreto que funcione. Aconsejo al cliente que pruebe con unos 10 y empiece a aumentar y a realizar pruebas.%0A
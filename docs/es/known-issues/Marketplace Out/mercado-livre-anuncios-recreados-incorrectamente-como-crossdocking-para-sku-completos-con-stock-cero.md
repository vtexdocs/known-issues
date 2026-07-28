---
title: 'Mercado Livre Anuncios recreados incorrectamente como cross-docking para SKU completos con stock cero.'
slug: mercado-livre-anuncios-recreados-incorrectamente-como-crossdocking-para-sku-completos-con-stock-cero
status: PUBLISHED
createdAt: 2026-07-28T23:42:34.000Z
updatedAt: 2026-07-28T23:42:34.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-ads-incorrectly-recreated-as-crossdocking-for-full-skus-with-zero-stock
locale: es
kiStatus: Backlog
internalReference: 1440697
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los anuncios del Marketplace se recrean incorrectamente como "Entrega en punto de recogida/Cross-docking" para productos vendidos bajo el modelo "Completo" (gestión logística) cuando se agota el stock en el centro logístico del Marketplace.

## Simulación

- Registre un SKU bajo la operación "Completo", con el tipo logístico configurado por el Marketplace como "Completo" (gestión logística).

- Establezca el stock físico de ese producto en el centro logístico del Marketplace a cero.

- Espere al siguiente ciclo de actualización/exportación de productos.

- Observe que se crea un nuevo anuncio para el mismo producto, ahora clasificado como "Cross-docking", con una cantidad de stock muy superior a la real.

- Pause o elimine ese anuncio incorrecto en el panel de vendedor del Marketplace.

- Espere al siguiente ciclo; el anuncio de "Cross-docking" se vuelve a crear, repitiéndose el ciclo.

## Workaround

No hay ninguna solución alternativa disponible. Pausar o eliminar el anuncio incorrecto no soluciona el problema, ya que se vuelve a crear automáticamente.
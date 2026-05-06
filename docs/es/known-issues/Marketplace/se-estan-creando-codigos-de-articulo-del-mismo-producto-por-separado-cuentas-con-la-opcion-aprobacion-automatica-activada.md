---
title: 'Se están creando códigos de artículo del mismo producto por separado (cuentas con la opción «Aprobación automática» activada)'
slug: se-estan-creando-codigos-de-articulo-del-mismo-producto-por-separado-cuentas-con-la-opcion-aprobacion-automatica-activada
status: PUBLISHED
createdAt: 2021-11-11T13:30:53.000Z
updatedAt: 2023-11-28T19:01:23.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: skus-from-the-same-product-being-created-separately-accounts-with-autoapprove-flag-enabled
locale: es
kiStatus: Fixed
internalReference: 467112
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El vendedor envía un lote con referencias del mismo producto (todas las variaciones posibles del producto).

En lugar de crearse como un producto con sus variaciones, todas las referencias se crean por separado.

Este comportamiento se debe a que la cuenta del marketplace tiene activada la opción «Autoapprove» y el vendedor está enviando todas las referencias a la vez.

Normalmente, el sistema cuenta con un bloqueo, por nombre de producto, para evitar este tipo de situaciones, ya que el Matcher tiene más de una cola procesando los SKU. Sin embargo, este bloqueo no se aplica en el flujo de trabajo de aprobación automática.

## Simulación

1. Habilita la opción de aprobación automática en el marketplace;
2. El vendedor envía un lote de productos y sus SKU (variaciones) de una sola vez;
3. El primer SKU del producto se crea correctamente, pero los demás se crean por separado.

## Workaround

Para evitar esta situación, hay dos formas posibles.

1. El vendedor envía los SKU poco a poco dentro de un plazo determinado;
2. Desactivar la opción de aprobación automática en el Marketplace.
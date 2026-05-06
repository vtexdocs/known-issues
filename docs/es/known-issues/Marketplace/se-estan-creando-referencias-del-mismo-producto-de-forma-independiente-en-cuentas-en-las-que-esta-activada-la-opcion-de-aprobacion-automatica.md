---
title: 'Se están creando referencias del mismo producto de forma independiente en cuentas en las que está activada la opción de aprobación automática'
slug: se-estan-creando-referencias-del-mismo-producto-de-forma-independiente-en-cuentas-en-las-que-esta-activada-la-opcion-de-aprobacion-automatica
status: PUBLISHED
createdAt: 2024-01-09T12:39:02.000Z
updatedAt: 2024-07-22T19:31:03.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: skus-from-the-same-product-being-created-separately-on-accounts-with-autoapprove-flag-enabled
locale: es
kiStatus: Fixed
internalReference: 962986
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El vendedor envía un lote con SKU del mismo producto (todas las variaciones posibles del producto).

En lugar de crearse como un producto con sus variaciones, todas las SKU se crean por separado.

Este comportamiento se debe a que la cuenta del marketplace tiene activada la opción «Autoapprove» y el vendedor está enviando todas las SKU a la vez.

Normalmente, el sistema cuenta con un bloqueo, por nombre de producto, para evitar este tipo de situaciones, ya que el Matcher tiene más de una cola procesando los SKU. Sin embargo, este bloqueo no está implementado en el flujo de trabajo de «Autoaprobación».

## Simulación

1. Habilita la opción «Autoaprobación» en el marketplace;
2. El vendedor envía un lote de productos y sus SKU (variaciones) de una sola vez;
3. El primer SKU del producto se crea correctamente, pero los demás se crean por separado.

## Workaround

Para evitar esta situación, hay dos formas posibles.

1. El vendedor envía los SKU poco a poco dentro de un plazo determinado;
2. Desactivar la opción de aprobación automática en el Marketplace.
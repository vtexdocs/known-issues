---
title: 'Intl no tiene en cuenta la moneda personalizada en formatCurrency'
slug: intl-no-tiene-en-cuenta-la-moneda-personalizada-en-formatcurrency
status: PUBLISHED
createdAt: 2023-01-19T14:20:51.000Z
updatedAt: 2023-01-19T15:45:41.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: intl-not-considering-custom-currency-in-formatcurrency
locale: es
kiStatus: Backlog
internalReference: 736695
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunas configuraciones regionales de la tienda, el formateador Intl muestra un símbolo de moneda incorrecto, sin tener en cuenta el que se pasa a través de la configuración cultural


https://github.com/vtex-apps/format-currency/blob/master/react/formatCurrency.ts

## Simulación

Establezca una configuración regional de política comercial y una moneda personalizada, y llame a la función formatCurrency desde format-currency; no se mostrará correctamente porque Intl utiliza la configuración regional para definirla (esto ocurre con mayor frecuencia en dispositivos móviles).

## Workaround

Es posible implementar componentes de precio personalizados con un símbolo de moneda diferente.
---
title: 'La interfaz de usuario de «Promociones» muestra información errónea sobre la moneda'
slug: la-interfaz-de-usuario-de-promociones-muestra-informacion-erronea-sobre-la-moneda
status: PUBLISHED
createdAt: 2022-12-19T14:40:55.000Z
updatedAt: 2024-02-15T12:10:49.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotions-ui-loading-wrong-currency-information
locale: es
kiStatus: Fixed
internalReference: 718908
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al abrir el módulo «Promociones» muy rápidamente y varias veces seguidas, se produce un comportamiento incorrecto en la interfaz de usuario.

El campo «Restringir esta promoción a los productos del vendedor» no carga el marcador de posición correcto, sino que carga el marcador de posición «GLOBAL SELECT-A-SELLER...».

La información sobre la moneda se carga como R$ (real)

Al guardar la promoción, el valor final no es el esperado por el cliente.

## Simulación

No hay una forma fácil de reproducir este escenario. A veces, al abrir el módulo de promociones en diferentes pestañas muy rápidamente, se produce este comportamiento.
Comprueba si el campo «Restringir esta promoción a los productos del vendedor» es diferente para saber que has llegado a la situación.

## Workaround

provisional**
Cierra la interfaz de usuario de promociones actual y abre una nueva en la que no se produzca este comportamiento.
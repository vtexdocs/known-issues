---
title: 'La generación del mapa del sitio no tiene en cuenta los productos de Cuenta y Subcuenta.'
slug: la-generacion-del-mapa-del-sitio-no-tiene-en-cuenta-los-productos-de-cuenta-y-subcuenta
status: PUBLISHED
createdAt: 2021-11-19T14:51:35.000Z
updatedAt: 2026-08-14T23:23:54.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: sitemap-generation-does-not-consider-products-from-account-and-subaccount
locale: es
kiStatus: Fixed
internalReference: 471748
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, en VTEX, podemos tener una cuenta que muestre productos de una tienda específica y otra cuenta (subcuenta) que muestre productos de otra tienda. El mapa del sitio se generará considerando únicamente los productos de la tienda específica (cuenta principal o subcuenta, la primera que se genere). Al intentar acceder al mapa del sitio desde la otra tienda, se mostrarán los productos de la primera tienda generada.

## Simulación

- Configure una tienda para la Cuenta Principal y otra para la Subcuenta, cada una con un Canal de Ventas específico.

- Verifique que se muestren los productos de la otra tienda (subcuenta) en la Cuenta Principal.

## Workaround

No existe ninguna solución alternativa.
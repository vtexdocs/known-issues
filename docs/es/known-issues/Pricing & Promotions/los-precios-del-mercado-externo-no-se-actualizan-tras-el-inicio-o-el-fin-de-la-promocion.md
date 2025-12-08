---
title: 'Los precios del mercado externo no se actualizan tras el inicio o el fin de la promoción'
slug: los-precios-del-mercado-externo-no-se-actualizan-tras-el-inicio-o-el-fin-de-la-promocion
status: PUBLISHED
createdAt: 2025-12-08T20:03:24.765Z
updatedAt: 2025-12-08T20:03:24.765Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: external-marketplace-prices-not-updated-after-promotion-start-or-end
locale: es
kiStatus: Backlog
internalReference: 1322691
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando una promoción comienza o termina, los precios en el marketplace externo pueden no actualizarse correctamente. Esto ocurre porque el módulo de promociones o precios no notifica automáticamente al emisor los productos afectados; por lo tanto, no hay ningún evento que el marketplace pueda consumir. Como resultado, el marketplace puede mostrar precios desactualizados, especialmente en catálogos grandes o cuentas con muchas promociones activas.


#### Simulación



- Cree una promoción que cambie el precio del producto.
- Activar y posteriormente desactivar la promoción.
- Compruebe los productos afectados en el mercado - los precios pueden permanecer desactualizados incluso después de que la promoción haya finalizado.

## Workaround


La solución actual consiste en realizar una carga de precios en el conector de mercado afectado, para que sus precios se actualicen en el mercado.



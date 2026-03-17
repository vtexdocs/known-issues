---
title: 'El cupón no funciona y aparece el mensaje «El cupón ha caducado»'
slug: el-cupon-no-funciona-y-aparece-el-mensaje-el-cupon-ha-caducado
status: PUBLISHED
createdAt: 2026-03-17T17:39:19.203Z
updatedAt: 2026-03-17T17:39:19.203Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: coupon-not-working-with-message-coupon-has-expired
locale: es
kiStatus: Backlog
internalReference: 1379679
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, el módulo de promociones permite al usuario copiar el contenido de una promoción a otra y activarla. Sin embargo, si la promoción ha superado su fecha de validez inicial, es posible que se establezca «isArchived» = true y, al estar activa, seguirá apareciendo en el panel de administración como una promoción normal y activa.

## Simulación

1 - Crea una promoción y archívala o deja que caduque.  https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#get-/api/rnb/pvt/calculatorconfiguration/-idCalculatorConfiguration-

2 - Cambia su propiedad «isActive» y asígnale un cupón

3 - Intenta utilizar el cupón en la caja para aplicar la promoción: aparecerá un mensaje indicando «cupón caducado».

## Workaround

**Crea una nueva promoción y un nuevo cupón desde cero, que, por defecto, tendrán «isArchived» = false. **

**No intentes cambiar la propiedad «isArchived» en la promoción antigua. **
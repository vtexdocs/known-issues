---
title: 'Aparece un mensaje erróneo de «cupón caducado» en la página de pago al utilizar una promoción cuyo valor «isArchived» es «true»'
slug: aparece-un-mensaje-erroneo-de-cupon-caducado-en-la-pagina-de-pago-al-utilizar-una-promocion-cuyo-valor-isarchived-es-true
status: PUBLISHED
createdAt: 2026-04-27T20:33:10.767Z
updatedAt: 2026-04-27T20:33:10.767Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: incorrect-coupon-expired-messaged-displayed-in-the-checkout-when-using-a-promotion-that-isarchived-true
locale: es
kiStatus: Backlog
internalReference: 1375848
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, el módulo de promociones permite a los usuarios copiar el contenido de una promoción a otra y activarla. Sin embargo, si la promoción original ha superado su periodo de validez, puede tener `"isArchived" = true`, y esta información también se transferirá a la promoción copiada.
En este caso, aunque la promoción se establezca como activa, puede seguir estando marcada internamente como archivada, mientras que en el panel de administración aparecerá como una promoción activa normal, lo que puede resultar engañoso.
Este comportamiento puede dar lugar a inconsistencias al validar la disponibilidad de la promoción en la página de pago, especialmente cuando se utilizan cupones para activar la promoción.

## Simulación

1. Crea una promoción y archívala o deja que caduque: https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#get-/api/rnb/pvt/calculatorconfiguration/-idCalculatorConfiguration-
2. Actualiza su propiedad `"isActive"` a `true` y asóciala a un cupón.
3. Intenta utilizar el cupón al finalizar la compra: aparecerá un mensaje de **«cupón caducado»**.

## Workaround

Crea una nueva promoción y un nuevo cupón desde cero. Por defecto, tendrá `"isArchived" = false`. No intentes reutilizar ni modificar la promoción archivada.
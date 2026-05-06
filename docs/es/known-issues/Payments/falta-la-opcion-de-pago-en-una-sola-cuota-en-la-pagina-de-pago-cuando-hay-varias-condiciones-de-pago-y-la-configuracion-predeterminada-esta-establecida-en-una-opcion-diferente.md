---
title: 'Falta la opción de pago en una sola cuota en la página de pago cuando hay varias condiciones de pago y la configuración predeterminada está establecida en una opción diferente'
slug: falta-la-opcion-de-pago-en-una-sola-cuota-en-la-pagina-de-pago-cuando-hay-varias-condiciones-de-pago-y-la-configuracion-predeterminada-esta-establecida-en-una-opcion-diferente
status: PUBLISHED
createdAt: 2022-12-02T20:24:04.000Z
updatedAt: 2023-05-11T17:23:23.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: missing-1x-installment-option-on-checkout-with-multiple-payment-conditions-and-default-configuration-set-to-a-different-option
locale: es
kiStatus: Backlog
internalReference: 709971
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando hay más de una condición de pago configurada para un sistema de pago, y se establece como predeterminada una condición de pago distinta de la que incluye la opción de pago en una sola cuota, dicha opción no aparece en la página de pago. En tales casos, solo se elimina la opción de pago en una sola cuota de la página de pago.

## Simulación

Para simular este problema, sigue estos pasos:

1. Ve al panel de administración y configura tres condiciones de pago para un sistema de pago con tarjeta de crédito, por ejemplo, Visa. La condición de pago A podría tener cuotas de 1 a 3, la condición B de 4 a 8 y la condición C de 9 a 12.

2. A continuación, vaya a la página de pago y observe que todas las opciones de pago a plazos aparecen en la página de pago.

3. Después, establezca la condición de pago B o C como predeterminada y vuelva a la página de pago. Observará que la opción de pago a plazos de 1 vez desaparece de la página de pago.

4. Sin embargo, si vuelve a establecer la condición de pago A como predeterminada, la opción de pago a plazos de 1 vez volverá a aparecer en la página de pago.

## Workaround

Para resolver este problema, puede establecer la opción de regla de pago a plazos más baja como predeterminada o eliminar la configuración predeterminada borrando la condición de pago con esta configuración y configurando una nueva condición de pago sin el indicador predeterminado.
---
title: 'El descuento de envío se descartó debido al redondeo en las promociones acumulativas.'
slug: el-descuento-de-envio-se-descarto-debido-al-redondeo-en-las-promociones-acumulativas
status: PUBLISHED
createdAt: 2026-10-07T22:47:33.000Z
updatedAt: 2026-10-07T22:47:33.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: shipping-discount-discarded-due-to-rounding-in-cumulative-promotions
locale: es
kiStatus: Backlog
internalReference: 1471558
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se aplican promociones de envío acumulativas, las diferencias de redondeo pueden provocar que RnB descarte un descuento de envío, incluso cuando la promoción debería otorgarlo.

Esto puede ocurrir cuando una promoción reduce el costo de envío y una segunda promoción acumulativa aplica un descuento adicional al importe restante. Si el descuento calculado resulta mayor que el importe restante del envío tras el redondeo, RnB descarta el descuento.

Por ejemplo, si el importe restante del envío es de R$ 0,01 y el descuento calculado se redondea a un valor ligeramente superior a R$ 0,01, el descuento no se aplica. Como resultado, es posible que se le cobre al cliente un pequeño importe de envío, aunque la combinación de promociones debería resultar en envío gratuito.

## Simulación

1. Configure dos promociones de envío con el modo de competencia **acumulativa**.

2. Configure la primera promoción para reducir la mayor parte del costo de envío.

3. Configure la segunda promoción para aplicar un descuento de envío adicional.

4. Añada al carrito un producto que coincida con ambas promociones. 5. Aplica las promociones y verifica los descuentos de envío que devuelve RnB.

6. Si el importe restante del envío es muy pequeño, como R$ 0,01, verifica que el descuento de la segunda promoción pueda descartarse debido al redondeo.

7. Revisa la etiqueta de precio de la promoción y verifica que el descuento descartado se muestre como R$ 0,00.

## Workaround

Siempre que sea posible, evita combinar promociones de envío acumulativas que resulten en importes restantes muy pequeños.

Como alternativa, configura las promociones para que **compitan** en lugar de acumularse, según la regla de negocio prevista.
---
title: 'Las promociones de fórmulas utilizan un valor de flete incorrecto cuando se aplican descuentos de envío'
slug: las-promociones-de-formulas-utilizan-un-valor-de-flete-incorrecto-cuando-se-aplican-descuentos-de-envio
status: PUBLISHED
createdAt: 2025-11-24T17:11:00.054Z
updatedAt: 2025-11-24T17:11:00.054Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: formula-promotions-use-incorrect-freight-value-when-shipping-discounts-are-applied
locale: es
kiStatus: Backlog
internalReference: 1329431
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando un carro contiene una promoción de descuento de envío (por ejemplo, porcentaje de descuento en el flete) y una promoción basada en una fórmula, el valor del flete utilizado por el RnB para evaluar la fórmula es incorrecto.
Internamente, el descuento de envío se aplica dos veces durante el paso de normalización de flete del RnB, lo que provoca que la fórmula calcule el descuento basándose en un valor de flete inferior al que debería ser.
Como resultado:

- La promoción de la fórmula devuelve un valor incorrecto (normalmente inferior).
- El descuento parece inconsistente con cualquier SLA devuelto por Logística.
- Esto sólo afecta a las promociones evaluadas después de los descuentos de flete:  Fórmula, Impuesto (porcentaje basado en el flete) y Recompensa.


#### Simulación



1. Crear una **promoción de descuento en envío** (por ejemplo, 10% de descuento en flete).
2. Cree una **promoción basada en una fórmula** utilizando una expresión de flete, por ejemplo: `cargo - floor(flete)`.
3. Genere un carro que tenga más de un ANS, asegurándose de que se aplica un descuento por envío.
4. 4. Observe que el valor de descuento calculado a partir de la fórmula de promoción es incorrecto.


#### Workaround


N/A




---
title: "La simulación de pago devuelve el valor 0 en el campo 'slas.tax' para los impuestos del porcentaje de envío."
id: 54Mtsj8EKuo0SaQCoWyYzj
status: PUBLISHED
createdAt: 2024-04-05T18:55:32.183Z
updatedAt: 2024-04-05T18:55:33.336Z
publishedAt: 2024-04-05T18:55:33.336Z
firstPublishedAt: 2024-04-05T18:55:33.336Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-simulation-returns-value-0-in-slastax-field-for-shipping-percentage-taxes
locale: es
kiStatus: Backlog
internalReference: 1012724
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los impuestos del porcentaje de envío no se devuelven en el campo `logisticsInfo.slas.tax` al realizar una simulación de pago aunque la información de los impuestos individuales esté disponible en el campo `items.priceTags`.



## Simulación



- Configurar un Impuesto de Porcentaje de Envío
- Realizar una solicitud de simulación de carrito con el ANS seleccionado
- El campo `tax` devuelve el valor `0


##

## Workaround


N/A




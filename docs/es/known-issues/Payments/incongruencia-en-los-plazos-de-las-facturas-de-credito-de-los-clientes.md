---
title: 'Incongruencia en los plazos de las facturas de crédito de los clientes'
id: 73zrcR44MDH7PAFdhu8fPM
status: PUBLISHED
createdAt: 2022-03-27T13:20:54.642Z
updatedAt: 2022-11-25T22:08:23.381Z
publishedAt: 2022-11-25T22:08:23.381Z
firstPublishedAt: 2022-03-27T13:20:55.062Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-on-the-deadlines-of-customer-credit-invoices
locale: es
kiStatus: Backlog
internalReference: 331279
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los pedidos realizados con Crédito Cliente como forma de pago generan facturas de una sola cuota a 60 días. Si se comprueba la cuenta en el módulo de Crédito Cliente se dice que la factura se ha generado sin problemas. Sin embargo, mirando a través de la API es posible notar que dentro del campo customData los plazos (fechas de vencimiento) se envían con valores diferentes. Esto impacta en la integración con otros sistemas que organizan los cumplimientos.



## Simulación


N/A



## Workaround


N/A


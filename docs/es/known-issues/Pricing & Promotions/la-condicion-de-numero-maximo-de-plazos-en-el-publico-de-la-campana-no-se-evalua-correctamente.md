---
title: La condición de número máximo de plazos en el público de la campaña no se evalúa correctamente
slug: la-condicion-de-numero-maximo-de-plazos-en-el-publico-de-la-campana-no-se-evalua-correctamente
status: PUBLISHED
createdAt: 2025-10-16T19:55:54.691Z
updatedAt: 2025-10-16T19:55:54.691Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: maximum-number-of-installments-condition-in-campaign-audiences-is-not-evaluated-correctly
locale: es
kiStatus: Backlog
internalReference: 1141291
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La condición **Número máximo de cuotas** en las configuraciones de **Campaña de público** no se está evaluando correctamente. Este requisito no se tiene en cuenta a la hora de determinar si la campaña se corresponde, lo que permite que las campañas de promoción se apliquen de forma incorrecta. Este problema imposibilita la aplicación de restricciones basadas en cuotas en las campañas, lo que puede dar lugar a aplicaciones de descuentos no deseadas.


#### Simulación



1. Crear una **Campaña de Público** y añadir una condición para un **Número máximo de cuotas** igual a "2".
2. Crea una **Campaña de Promoción** y asóciala a la Campaña de Público configurada.
3. Añade al carrito artículos que cumplan las condiciones definidas en la Campaña de Público.
4. 4. Vaya a la caja y observe que, ya en la fase del carrito, antes de que se defina un método de pago, la campaña coincide.

## Workaround


Los vendedores pueden configurar una **Promoción periódica** con restricciones de plazos en la sección **Métodos de pago**. Este método es menos dinámico que las campañas de público, pero garantiza la aplicación de las restricciones basadas en el pago a plazos.



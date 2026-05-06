---
title: 'No se puede crear un intervalo de entrega debido a una inconsistencia entre «estimateDate» y «lastDeliveryDay», lo que conlleva un elevado coste de tiempo.'
slug: no-se-puede-crear-un-intervalo-de-entrega-debido-a-una-inconsistencia-entre-estimatedate-y-lastdeliveryday-lo-que-conlleva-un-elevado-coste-de-tiempo
status: PUBLISHED
createdAt: 2024-03-06T19:38:06.000Z
updatedAt: 2024-03-06T19:38:06.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: no-delivery-window-can-be-created-due-to-inconsistence-in-estimatedate-and-lastdeliveryday-for-high-timecost
locale: es
kiStatus: Backlog
internalReference: 995491
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La variable `estimateDate` tiene en cuenta el tiempo total de entrega, pero solo considera los días en los que el transportista realiza entregas; por lo tanto, en el caso de este ejemplo, no tiene en cuenta los fines de semana.
Sin embargo, la variable `lastDeliveryDay` se calcula en días naturales (días consecutivos), es decir, `fecha de hoy + tiempo de entrega + número máximo de días` configurado para la entrega programada; dado que cuenta días consecutivos, sí tendrá en cuenta los fines de semana.

Para que el sistema establezca la ventana de entrega disponible, comparará si:

 lastDeliveryDay > estimateDate : TRUE


Y solo si se cumple esta condición creará la ventana de entrega.

Pero con un `timecost` de tránsito total excesivamente alto, existe una inconsistencia entre las variables `estimateDate` y `lastDeliveryDay`, la condición devolverá `false` y, por lo tanto, no se creará ninguna ventana de entrega.

## Simulación

Cambie la configuración de envío a lo siguiente:

- Días y horas de procesamiento del almacén: 100 días;
- «timecost» en el archivo de tarifas de la hoja de cálculo: 1 día;
- Eliminar fines de semana y festivos de la configuración de la política de envío;
- Programar la entrega de lunes a viernes de 0:00 a 23:59;
- Tiempo máximo de entrega en la configuración de la programación de entregas: 5 días;

Esta configuración dará como resultado `lastDeliveryDay=10/05/2024` y `estimateDate=14/06/2024`;
Y, por lo tanto, la condición será falsa:

 10/05/2024 > 14/06/2024 : FALSO


y no se creará ningún intervalo de entrega;

## Workaround

No hay ninguna solución alternativa disponible.
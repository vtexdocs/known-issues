---
title: Los transportistas con método de envío llamado "Agendada" no funcionan
slug: los-transportistas-con-metodo-de-envio-llamado-agendada-no-funcionan
status: PUBLISHED
createdAt: 2025-10-16T20:46:00.417Z
updatedAt: 2025-10-16T20:46:00.417Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: carriers-with-shipping-method-named-agendada-does-not-work
locale: es
kiStatus: Backlog
internalReference: 1207733
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



**Este KI sólo ocurre a las tiendas que utilizan "lengua portuguesa". **

Si el "Método de Envío" del transportista se nombra con algo que tiene "Agendada", y este transportista no utiliza la función "Programar entrega", Logística entiende que este transportista debe tener ventanas disponibles, y si estas ventanas no se encuentran, el sistema no puede calcular el SLA, y el retorno de la simulación está vacía. Por lo tanto, ¡el transportista no funcionará!


#### Simulación


Solo necesita nombrar el "Método de Envío" con algo que tenga "Agendada".

## Workaround


Simplemente elimine la palabra "Agendada", entonces funcionará correctamente.




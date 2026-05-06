---
title: 'La vista previa del envío muestra erróneamente la fecha de entrega prevista'
slug: la-vista-previa-del-envio-muestra-erroneamente-la-fecha-de-entrega-prevista
status: PUBLISHED
createdAt: 2023-01-31T19:36:45.000Z
updatedAt: 2023-01-31T19:36:45.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-the-date-when-its-scheduled-delivery
locale: es
kiStatus: Backlog
internalReference: 743774
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La interfaz de pago convierte la hora según la zona horaria del ordenador, lo que provoca que la fecha de entrega se muestre incorrectamente en la vista previa del envío (carrito) cuando los artículos tienen una fecha de entrega programada.

## Simulación

- Configura un intervalo de entrega programada que comience a las 0:00 h
- Configura en el ordenador una zona horaria que reste horas respecto a UTC+00:00
- Verás que la fecha que se muestra es la del día anterior

## Workaround

provisional**
Configura los intervalos de entrega programada durante el día, por ejemplo, en horario comercial, ya que es el momento más habitual para las entregas
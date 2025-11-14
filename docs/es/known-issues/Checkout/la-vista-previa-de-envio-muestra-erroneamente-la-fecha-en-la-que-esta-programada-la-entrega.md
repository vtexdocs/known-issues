---
title: 'La vista previa de envío muestra erróneamente la fecha en la que está programada la entrega'
slug: la-vista-previa-de-envio-muestra-erroneamente-la-fecha-en-la-que-esta-programada-la-entrega
status: PUBLISHED
createdAt: 2025-11-14T19:17:48.850Z
updatedAt: 2025-11-14T19:17:48.850Z
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


Checkout UI convierte la hora utilizando la zona horaria del ordenador mostrando la fecha de entrega incorrectamente en shipping-preview (carrito) cuando los artículos son de entrega programada.

## Simulación



- Configurar una ventana de entrega programada para que comience a las 0h
- Configure una zona horaria que reste de UTC+00:00 en el ordenador
- Verás que la fecha que se muestra es la del día anterior

## Workaround


Configure ventanas de entrega programadas durante el día, como el horario comercial ya que es el momento más común para las entregas



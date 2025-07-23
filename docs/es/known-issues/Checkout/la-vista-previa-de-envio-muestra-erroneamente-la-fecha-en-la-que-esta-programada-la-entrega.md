---
title: 'La vista previa de envío muestra erróneamente la fecha en la que está programada la entrega'
id: 6pbufuWTFkL4NK3xLIxj1z
status: PUBLISHED
createdAt: 2023-01-31T19:36:58.137Z
updatedAt: 2024-07-01T18:48:44.228Z
publishedAt: 2024-07-01T18:48:44.228Z
firstPublishedAt: 2023-01-31T19:36:58.933Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-the-date-when-its-scheduled-delivery
locale: es
kiStatus: No Fix
internalReference: 743774
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Checkout UI convierte la hora utilizando la zona horaria del ordenador mostrando la fecha de entrega incorrectamente en shipping-preview (carrito) cuando los artículos son de entrega programada.



## Simulación



- Configurar una ventana de entrega programada para que comience a las 0h
- Configure una zona horaria que reste de UTC+00:00 en el ordenador
- Verá que la fecha que se muestra es la del día anterior



## Workaround


Configure ventanas de entrega programadas durante el día, como el horario comercial ya que es el momento más común para las entregas





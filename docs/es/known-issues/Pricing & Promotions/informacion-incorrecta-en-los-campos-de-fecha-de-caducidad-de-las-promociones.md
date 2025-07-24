---
title: 'Información incorrecta en los campos de fecha de caducidad de las promociones'
id: 1iyo8L4y8A4ygwUI9f8tHA
status: PUBLISHED
createdAt: 2022-07-05T17:19:07.753Z
updatedAt: 2022-11-25T22:12:13.810Z
publishedAt: 2022-11-25T22:12:13.810Z
firstPublishedAt: 2022-07-05T17:19:08.406Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: incorrect-information-in-the-expiration-date-fields-of-promotions
locale: es
kiStatus: Backlog
internalReference: 611284
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


De forma intermitente, cuando abrimos una promoción, los campos Fecha de inicio y Fecha de finalización muestran la fecha actual, y los campos Hora de inicio y Hora de finalización muestran las 12:00 AM. A pesar de la información incorrecta en la UI, las fechas establecidas en la promoción no se ven afectadas.



## Simulación


Este escenario puede ocurrir aleatoriamente, sin embargo, lo encontramos con mayor frecuencia en el navegador Safari. Para reproducirlo:
1. Abra una promoción
2. Compruebe el formulario de la fecha de caducidad



## Workaround


La recarga de la página es suficiente para corregir la información en la interfaz de usuario


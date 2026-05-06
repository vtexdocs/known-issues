---
title: 'La API de aprobación automática acepta cualquier valor'
slug: la-api-de-aprobacion-automatica-acepta-cualquier-valor
status: PUBLISHED
createdAt: 2022-12-09T14:09:32.000Z
updatedAt: 2022-12-12T14:18:32.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: auto-approve-api-accepts-any-values
locale: es
kiStatus: Backlog
internalReference: 713704
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, la API de aprobación automática no comprueba si el vendedor existe, lo que podría dar lugar a configuraciones incorrectas.

/suggestions/configuration/autoapproval/toggle/seller/1a?sellerId=

Si se envía el ID de vendedor anterior, por ejemplo, utilizando un carácter diferente que distinga entre mayúsculas y minúsculas: Myseller en lugar de myseller, la API responderá con 200OK y la aprobación automática se establecerá, de forma engañosa, como verdadera. Sin embargo, el vendedor en sí no tendrá activada la aprobación automática, ya que la cadena debe coincidir exactamente para que funcione.

## Simulación

1. Utilizando la API de configuración de autoapprove, establece una cadena similar al vendedor, pero que no coincida exactamente
2. Comprueba que este valor se establecerá como true y que la API no responderá con un mensaje indicando que no existe ningún vendedor para ese valor
3.

## Workaround

Si tu autoapprove no funciona, comprueba si hay algún carácter con mayúsculas o minúsculas diferentes o alguna diferencia leve.
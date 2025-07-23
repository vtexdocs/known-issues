---
title: 'La API de aprobación automática acepta cualquier valor'
id: kLl4mtwKPPqW6jk5hZMWs
status: PUBLISHED
createdAt: 2022-12-12T14:18:51.059Z
updatedAt: 2024-02-16T20:27:19.981Z
publishedAt: 2024-02-16T20:27:19.981Z
firstPublishedAt: 2022-12-12T14:18:51.733Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: auto-approve-api-accepts-any-values
locale: es
kiStatus: No Fix
internalReference: 713704
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, la API de autoaprobación no comprueba si el vendedor existe, lo que puede dar lugar a configuraciones incorrectas.

/suggestions/configuration/autoapproval/toggle/seller/1a?sellerId=

Si el identificador de vendedor anterior se envía, por ejemplo, con un carácter diferente que distinga entre mayúsculas y minúsculas: Myseller en lugar de myseller, la API responderá con 200OK y la autoaprobación se establecerá, engañosamente, como verdadera. Sin embargo, no se activará la aprobación automática del vendedor, ya que la cadena debe coincidir exactamente para que funcione.




##

## Simulación



## Workaround




---
title: 'La API de aprobación automática acepta cualquier valor'
slug: la-api-de-aprobacion-automatica-acepta-cualquier-valor
status: PUBLISHED
createdAt: 2025-11-14T17:15:01.630Z
updatedAt: 2025-11-14T17:15:01.630Z
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


Actualmente, la API de autoaprobación no comprueba si el vendedor existe, lo que puede dar lugar a configuraciones incorrectas.

/suggestions/configuration/autoapproval/toggle/seller/1a?sellerId=

Si el identificador de vendedor anterior se envía, por ejemplo, con un carácter diferente que distinga entre mayúsculas y minúsculas: Myseller en lugar de myseller, la API responderá con 200OK y la autoaprobación se establecerá, engañosamente, como verdadera. Sin embargo, no se activará la aprobación automática del vendedor, ya que la cadena debe coincidir exactamente para que funcione.




#### Simulación



1. Utilizando la API de configuración de autoaprobación, establezca una cadena similar a la del vendedor, pero que no coincida exactamente
2. Comprueba que este valor se establecerá como verdadero y la API no responderá con un mensaje indicando que no existe vendedor para ese valor
3.

## Workaround


Si su autoaprobación no funciona, compruebe si hay algún carácter con una mayúscula o minúscula diferente.
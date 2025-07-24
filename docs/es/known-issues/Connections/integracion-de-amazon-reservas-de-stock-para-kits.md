---
title: 'Integración de Amazon reservas de stock para KITS'
id: 6ZEvHuGCOEcuQTya1oDOyu
status: PUBLISHED
createdAt: 2023-05-22T14:28:54.846Z
updatedAt: 2023-09-27T14:37:26.343Z
publishedAt: 2023-09-27T14:37:26.343Z
firstPublishedAt: 2023-05-22T14:28:55.337Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-integration-stock-reservations-for-kits
locale: es
kiStatus: Fixed
internalReference: 829583
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente tenemos un problema para la reserva de stock en la integración con Amazon, lo que ocurre es que antes de crear el pedido hacemos una reserva de stock, y para los itens que son KITS estamos teniendo un problema en la reserva de stock, pero cuando se crea el Pedido el stock se está reservando sin ningún error.


##

## Simulación



Esto solo se aplicara para los KITS en la Integracion de Amazon, y para la reserva de stock, dentro del menu puente - Pedidos. podemos ver un aviso:

Reserva de pedido fallida: ANS no disponible



## Workaround



Una vez creado el pedido el stock se reserva con éxito.






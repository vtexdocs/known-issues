---
title: 'O mínimo de itens pode ser enviado como 0 por meio do campo "numberOfItemsPerShipment" na API'
slug: o-minimo-de-itens-pode-ser-enviado-como-0-por-meio-do-campo-numberofitemspershipment-na-api
status: PUBLISHED
createdAt: 2025-10-16T19:58:59.132Z
updatedAt: 2025-10-16T19:58:59.132Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: minimum-of-items-can-be-sent-as-0-through-the-field-numberofitemspershipment-in-api
locale: pt
kiStatus: Backlog
internalReference: 1149818
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O mínimo de itens pode ser enviado como 0 por meio do campo "numberOfItemsPerShipment" na API e, quando preenchido com 0, a polícia de remessa fica indisponível.
## Simulação


Rotas da API em que é possível enviar o campo numberOfItemsPerShipment como 0:

https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/shipping-policies/-id-
https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies

Depois que o campo "numberOfItemsPerShipment" for preenchido com 0, a simulação de envio no administrador mostrará a polícia de envio como disponível, mas ela não funcionará no processo de compra
## Workaround


Basta modificar o campo "numberOfItemsPerShipment" para um valor 1 ou acima.




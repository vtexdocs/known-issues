---
title: 'Stock reservado en pedidos facturados'
id: TfDOKEybi6eSAEoCEEAqg
status: ARCHIVED
createdAt: 2017-06-13T18:43:58.606Z
updatedAt: 2023-10-17T15:29:19.908Z
publishedAt: 
firstPublishedAt: 2017-06-14T00:07:07.051Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_4
tag: Order Management
slugEN: reserved-stock-in-invoiced-orders
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

En ocasiones la solicitud ya se ha facturado, el stock de los productos involucrados ya ha cambiado, pero los elementos siguen reservados. Al verificar el stock de estos productos, vemos que ellos **no entraron** en la columna "em manuseio" (en manipulación).

Esto ocurre cuando el pedido está en el estado `Pronto para Manuseio` status (Listo para el manejo) y el cliente solicita la cancelación del pedido. Si la tienda no acata la cancelación y factura el pedido, éste saltará los pasos `Iniciar manuseio` (Iniciar manejo) y `Preparando entrega` (Preparando entrega), de modo que la reserva no será reconocida.

Ejemplo con el flujo del pedido:

![2017-06-13 182850](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Post-purchase/stock-reservado-en-pedidos-facturados_1.jpg)

En el paso circulado del flujo del pedido, el producto se factura sin el reconocimiento de la reserva.

Como las reservas ya están confirmadas, no van a expirar.

## Simulación

1. Hacer un pedido;
2. Alcanzar el estado "Pronto para manuseio";
3. Como cliente, solicitar la cancelación a través de My Orders;
4. El estado del pedido pasará a ser "Cancelamento solicitado" (Cancelación solicitada);
5. Enviar la factura con el fin de facturar el pedido;
6. En stock, el elemento permanecerá reservado en la columna "Itens reservados".

## Workaround

No hay workaround para este problema actualmente.

En los casos en que esto ocurra, el stock permanecerá reservado, siendo necesario entrar en contacto con el soporte VTEX para la liberación de la reserva.


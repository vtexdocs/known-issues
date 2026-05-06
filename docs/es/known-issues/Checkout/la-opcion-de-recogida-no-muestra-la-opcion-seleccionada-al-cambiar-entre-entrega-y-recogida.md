---
title: 'La opción de recogida no muestra la opción seleccionada al cambiar entre entrega y recogida'
slug: la-opcion-de-recogida-no-muestra-la-opcion-seleccionada-al-cambiar-entre-entrega-y-recogida
status: PUBLISHED
createdAt: 2022-05-30T18:33:47.000Z
updatedAt: 2023-03-27T12:38:17.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-option-does-not-return-selected-option-if-switching-between-delivery-and-pickup
locale: es
kiStatus: Backlog
internalReference: 588394
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el cliente selecciona una tienda para la recogida, cambia a la opción de entrega a domicilio y añade una nueva dirección en la que no se puede realizar la entrega al volver a la opción de recogida, se selecciona otra tienda. Si se alterna entre la entrega a domicilio y la recogida, a veces la tienda seleccionada aparece inicialmente intercalada con otra tienda.

## Simulación

- Añade al carrito un artículo que solo tenga stock para recogida en tienda;
- En la opción de recogida, busca una dirección y selecciona cualquier tienda;
- Cambia a entrega a domicilio y modifica la dirección;
- Vuelve a la opción de recogida.

## Workaround

provisional**
N/A
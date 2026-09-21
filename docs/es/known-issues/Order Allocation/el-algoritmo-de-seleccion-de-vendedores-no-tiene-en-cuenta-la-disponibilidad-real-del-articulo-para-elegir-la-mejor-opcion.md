---
title: 'El algoritmo de selección de vendedores no tiene en cuenta la disponibilidad real del artículo para elegir la mejor opción.'
slug: el-algoritmo-de-seleccion-de-vendedores-no-tiene-en-cuenta-la-disponibilidad-real-del-articulo-para-elegir-la-mejor-opcion
status: PUBLISHED
createdAt: 2021-04-23T23:03:37.000Z
updatedAt: 2026-09-21T17:24:17.000Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: seller-selection-algorithm-doesnt-consider-the-real-availability-of-the-item-to-choose-the-best-option
locale: es
kiStatus: Fixed
internalReference: 360097
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El algoritmo de selección de vendedores considera el stock de los artículos para elegir al mejor vendedor de marca blanca para un contexto determinado.

El problema es que esta API no tiene en cuenta si la cantidad proviene de un almacén válido para el canal de ventas, con una estrategia de envío válida, ni siquiera si el almacén está habilitado. Por lo tanto, el contexto es deficiente para seleccionar al mejor vendedor.

Posteriormente, el proceso de pago realiza una

## Simulación

completa de la solicitud al vendedor seleccionado, y solo entonces descubre que, en realidad, el artículo no está disponible. Pero en ese momento, ya no se puede aplicar un vendedor de marca blanca alternativo.

## **Simulación**

- Tener una tienda con vendedores de marca blanca
- Tener más de un vendedor:

- Vendedor A con un alto stock, pero con el almacén deshabilitado

- Vendedor B con un bajo stock, pero con el almacén habilitado y con una estrategia de envío válida

- Realizar una simulación y observar que el proceso de pago selecciona al vendedor A en lugar del vendedor B

## Workaround

La tienda debe asegurarse de que, si un vendedor está habilitado, tenga una estrategia de envío válida para todos los almacenes. Si algún almacén no se utiliza, su saldo debe actualizarse a cero. De lo contrario, existe el riesgo de seleccionar un vendedor que no pueda cumplir con los plazos de entrega.
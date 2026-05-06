---
title: 'El campo «País» está en blanco en invoiceData'
slug: el-campo-pais-esta-en-blanco-en-invoicedata
status: PUBLISHED
createdAt: 2021-06-15T20:11:49.000Z
updatedAt: 2023-12-19T21:21:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: country-field-as-null-in-invoicedata
locale: es
kiStatus: Fixed
internalReference: 382175
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El campo «país» en «invoiceData» puede estar vacío si se envía a través de la API o si hay una dirección de facturación en el sistema de perfiles con el país en blanco, por lo que los pedidos se crearán con datos incompletos en «invoiceData».

## Simulación

- Crear un carrito con artículos;
- Enviar «invoiceData» a través de la API sin rellenar el campo «país»;
- Finalizar la compra.

## Workaround

provisional**
N/A
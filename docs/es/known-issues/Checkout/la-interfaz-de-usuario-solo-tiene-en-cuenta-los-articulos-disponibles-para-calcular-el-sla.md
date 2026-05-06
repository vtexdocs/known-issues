---
title: 'La interfaz de usuario solo tiene en cuenta los artículos disponibles para calcular el SLA'
slug: la-interfaz-de-usuario-solo-tiene-en-cuenta-los-articulos-disponibles-para-calcular-el-sla
status: PUBLISHED
createdAt: 2023-04-25T21:55:24.000Z
updatedAt: 2023-04-25T21:55:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-considers-only-the-available-items-to-calculate-sla
locale: es
kiStatus: Backlog
internalReference: 797028
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se pueden seleccionar diferentes marcas blancas de vendedor para gestionar los productos cuando se utilizan direcciones distintas para la entrega y la recogida. Cuando se selecciona la opción de recogida y se cambia a entrega, la interfaz de usuario solo tiene en cuenta los artículos disponibles para calcular el nuevo SLA de entrega, aunque los productos estén disponibles. El precio de la entrega solo tendrá en cuenta los artículos seleccionados que estén disponibles para su recogida.

## Simulación

- Configure dos marcas blancas de vendedor para direcciones diferentes;
- Añada productos que estén disponibles para ambos vendedores;
- Añada una dirección de entrega al carrito;
- Cambie a recogida y añada una dirección diferente;
- Vaya a entrega y compruebe que el precio solo tendrá en cuenta los artículos disponibles para recogida.

## Workaround

N/A
---
title: 'La interfaz de usuario cambia automáticamente el ANS seleccionado cuando el vendedor ha programado la recogida y el artículo no se encuentra en la primera posición.'
id: 7Jcp2B8YnlWXHNqU4W0VfC
status: PUBLISHED
createdAt: 2023-06-13T23:59:24.235Z
updatedAt: 2023-06-13T23:59:24.804Z
publishedAt: 2023-06-13T23:59:24.804Z
firstPublishedAt: 2023-06-13T23:59:24.804Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-automatically-changes-the-selected-sla-when-the-seller-has-scheduled-pickup-and-item-is-not-in-the-first-position
locale: es
kiStatus: Backlog
internalReference: 843602
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En un carrito donde hay al menos dos productos cumplidos por vendedores diferentes, si ambos vendedores han programado la recogida y el 2º artículo tiene varias opciones de ANS, la UI se pierde y selecciona automáticamente un ANS diferente y muestra el mensaje "No hay franjas horarias disponibles para esta fecha", no permitiendo ir al paso de pago.


##

## Simulación



- Configurar dos vendedores con recogida programada;
- Configure un carrito en el que un vendedor realice el segundo artículo con al menos dos recogidas programadas;
- Seleccione una entrega en ventanilla para el primer artículo del carro; se mostrará el mensaje "No hay franjas horarias disponibles para esta fecha" para el 2º artículo;
- Intente seleccionar otra entrega en ventanilla para el 2º artículo; la interfaz de usuario cambiará y volverá a mostrar el mensaje;



## Workaround


N/A





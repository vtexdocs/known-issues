---
title: 'La interfaz de usuario cambia automáticamente el SLA seleccionado cuando el vendedor ha programado la recogida y el artículo no se encuentra en la primera posición'
slug: la-interfaz-de-usuario-cambia-automaticamente-el-sla-seleccionado-cuando-el-vendedor-ha-programado-la-recogida-y-el-articulo-no-se-encuentra-en-la-primera-posicion
status: PUBLISHED
createdAt: 2023-06-13T21:34:55.000Z
updatedAt: 2023-06-13T21:34:55.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-automatically-changes-the-selected-sla-when-the-seller-has-scheduled-pickup-and-item-is-not-in-the-first-position
locale: es
kiStatus: Backlog
internalReference: 843602
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En un carrito en el que hay al menos dos productos gestionados por vendedores diferentes, si ambos vendedores tienen programada la recogida y el segundo artículo tiene varias opciones de SLA, la interfaz de usuario se bloquea y selecciona automáticamente un SLA diferente, mostrando el mensaje «No hay franjas horarias disponibles para esta fecha», lo que impide pasar al paso de pago.

## Simulación

- Configura dos vendedores con recogida programada;
- Crea un carrito en el que un vendedor gestione el segundo artículo con al menos dos recogidas programadas;
- Selecciona una franja horaria de entrega para el primer artículo del carrito; se mostrará el mensaje «No hay franjas horarias disponibles para esta fecha» para el segundo artículo;
- Intente seleccionar otra franja horaria de entrega para el segundo artículo; la interfaz de usuario cambiará y volverá a mostrar el mensaje;

## Workaround

provisional**
N/A
---
title: 'Punto de recogida no seleccionado por Checkout UI al cambiar SLA'
slug: punto-de-recogida-no-seleccionado-por-checkout-ui-al-cambiar-sla
status: PUBLISHED
createdAt: 2025-11-07T22:01:08.228Z
updatedAt: 2025-11-07T22:01:08.228Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-point-unselected-by-checkout-ui-when-changing-sla
locale: es
kiStatus: Backlog
internalReference: 1199158
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Considere un carro con dos o más artículos de diferentes vendedores habituales, digamos, el vendedor A y el vendedor B. Si las opciones de recogida ya estaban seleccionadas como los ANS para satisfacer estos artículos, al cambiar la opción de recogida seleccionada para los artículos de uno de los vendedores (digamos, el vendedor A) utilizando el módulo Punto de recogida, la interfaz de usuario de pago deselecciona la opción de recogida seleccionada para los artículos del otro vendedor (digamos, el vendedor B).

Cuando esto ocurre, la interfaz de usuario envía `logisticsInfo[].selectedSla` como `null` para los artículos del vendedor B en la solicitud `/shippingData` y el valor de `logisticsInfo[].selectedSla` de estos artículos en el formulario de pedido cambia por defecto a uno de entrega.

## Simulación



- Añadir dos artículos de 2 vendedores diferentes al carrito;
- Cambiar al punto de recogida;
- Cambiar el ANS seleccionado para uno de los artículos.

## Workaround


N/A



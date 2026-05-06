---
title: 'Las opciones de entrega no se actualizan al cambiar la dirección o el vendedor'
slug: las-opciones-de-entrega-no-se-actualizan-al-cambiar-la-direccion-o-el-vendedor
status: PUBLISHED
createdAt: 2020-09-18T00:59:05.000Z
updatedAt: 2023-06-22T19:53:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: schedule-delivery-options-are-not-updated-when-changing-address-or-seller
locale: es
kiStatus: Backlog
internalReference: 288574
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

**Escenario 1**: En un carrito identificado (pero sin iniciar sesión), con una dirección enmascarada en el paso de envío, al cambiar entre las direcciones disponibles, las opciones de franja horaria de entrega no se recalculan en la interfaz de usuario.

**Escenario 2**: En un carrito en el que hay dos vendedores de marca blanca configurados con el mismo ID de SLA, pero con diferentes opciones de franja horaria de entrega. Tras cambiar la opción de entrega seleccionada y el vendedor, las opciones de franja horaria de entrega no se recalculan en la interfaz de usuario.

Se envía una solicitud a la API, que devuelve el «deliveryWindow», pero la interfaz de usuario no actualiza el componente. Al seleccionar una franja horaria de entrega no válida, no es posible pasar al paso de pago para finalizar la compra.

## Simulación

### Escenario 1

- Registrar un comprador con dos direcciones;
- Crear un carrito y cambiar entre las direcciones disponibles en el paso de envío;
- Seleccionar la franja horaria de entrega.


### Escenario 2

- Configurar dos vendedores de marca blanca diferentes con el mismo ID de SLA para la entrega programada, pero con franjas horarias de entrega diferentes;
- Cada uno de los vendedores de marca blanca debe tener también su propia opción de entrega programada;
- Seleccionar la entrega programada específica para uno de los vendedores;
- Cambiar a la entrega programada con el mismo ID de SLA y seleccionar la franja horaria de entrega.

## Workaround

**Escenario 1**: N/A
**Escenario 2**: Configurar la misma franja horaria de entrega para todos los vendedores de marca blanca o cambiar el ID de SLA.
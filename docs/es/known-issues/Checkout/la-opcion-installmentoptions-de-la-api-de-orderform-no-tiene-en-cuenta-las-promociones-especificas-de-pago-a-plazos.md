---
title: 'La opción «installmentOptions» de la API de «orderForm» no tiene en cuenta las promociones específicas de pago a plazos'
slug: la-opcion-installmentoptions-de-la-api-de-orderform-no-tiene-en-cuenta-las-promociones-especificas-de-pago-a-plazos
status: PUBLISHED
createdAt: 2022-08-24T15:34:20.000Z
updatedAt: 2023-03-31T15:39:29.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: installmentoptions-from-orderform-api-doesnt-take-into-account-specific-installment-promotions
locale: es
kiStatus: No Fix
internalReference: 644563
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una promoción se limita a un número concreto de cuotas de pago con tarjeta de crédito (por ejemplo, «10 % de descuento»), el importe del descuento se aplica incluso a las cuotas que quedan fuera del rango establecido, por lo que el objeto «installmentOptions» de la API de orderForm devolverá valores erróneos.

Al seleccionar un número diferente de cuotas, se volverán a calcular las promociones y se actualizarán los valores de todas las cuotas. No se puede crear un pedido con un descuento incorrecto, ya que siempre se actualizará al número de cuotas seleccionado, por lo que este problema solo está relacionado con los valores mostrados.

## Simulación

- Crea una promoción con un número limitado de cuotas;
- A través de la API, crea o simula un carrito indicando en «paymentData» el número de cuotas en las que se aplica la promoción;
- Observa «installmentOptions» en relación con los valores con descuento;
- Indica otro número de cuotas y comprueba cómo se actualiza el valor en todas ellas.

## Workaround

Este objeto tiene un comportamiento limitado y debe considerarse obsoleto.

Las tiendas que dependan de descuentos para cuotas específicas en un formulario de pedido deben basarse en una nueva API, tal y como se describe en este registro de cambios (1) y en esta documentación (2).

Esta nueva API no cubre las solicitudes de simulación. Para ellas, la alternativa es la configuración «paymentSystemToCheckFirstInstallment» (3), pero limitada a los descuentos en la primera cuota.

---

(1) https://developers.vtex.com/vtex-developer-docs/changelog/improvement-price-consistency-checkout-discounts-installments
(2) https://developers.vtex.com/vtex-rest-api/reference/getcartinstallments
(3) https://developers.vtex.com/vtex-rest-api/docs/using-checkout-api-to-set-a-discount
---
title: 'Valor divergente al combinar la configuración «paymentSystemToCheckFirstInstallment» con partidas divididas'
slug: valor-divergente-al-combinar-la-configuracion-paymentsystemtocheckfirstinstallment-con-partidas-divididas
status: PUBLISHED
createdAt: 2023-03-07T18:34:46.000Z
updatedAt: 2023-03-07T20:06:15.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: divergent-value-while-mixing-paymentsystemtocheckfirstinstallment-configuration-and-splitted-items
locale: es
kiStatus: Backlog
internalReference: 766454
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la cuenta tiene configurado «paymentSystemToCheckFirstInstallment» en la configuración de «orderForm», el cálculo del proceso de pago enviará dos solicitudes al módulo de promociones. Si hay artículos fraccionados en el carrito (por ejemplo, la promoción «Más por menos»), la primera solicitud enviará los artículos correctamente, pero la segunda los enviará fraccionados según la aplicación de la promoción.

Al combinar esa promoción con una promoción regular restringida al mismo método de pago configurado en «paymentSystemToCheckFirstInstallment», se observarán valores diferentes en la respuesta del módulo de promociones y un valor de interés en los totalizadores de la interfaz de pago, lo que impedirá finalizar la compra y mostrará el mensaje «El valor del pago no coincide con el valor solicitado».

Hemos observado este comportamiento en métodos de pago que tienen solo 1 plazo como valor predeterminado, por ejemplo, PIX, «Boleto Bancário» o Promissory.

## Simulación

- Configura «paymentSystemToCheckFirstInstallment» en la configuración de orderForm;
- Configura una promoción «More for Less»;
- Configure una promoción regular restringida al mismo método de pago configurado en «paymentSystemToCheckFirstInstallment»: PIX o Boleto;
- Llene un carrito y seleccione el método de pago configurado en «paymentSystemToCheckFirstInstallment»;
- Es posible que vea el valor de los intereses en los totalizadores de la interfaz de pago.

## Workaround

provisional**
N/A
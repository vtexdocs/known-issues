---
title: 'En algunos casos, Checkout-UI no muestra el importe correcto a pagar con el crédito del cliente para una cuota única'
slug: en-algunos-casos-checkoutui-no-muestra-el-importe-correcto-a-pagar-con-el-credito-del-cliente-para-una-cuota-unica
status: PUBLISHED
createdAt: 2023-02-06T20:00:18.000Z
updatedAt: 2023-02-06T20:00:18.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: in-some-cases-checkoutui-does-not-show-the-correct-amount-to-be-paid-with-customer-credit-for-1x-installment
locale: es
kiStatus: Backlog
internalReference: 748320
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los casos en los que se utiliza el crédito del cliente para pagar un importe inferior al valor total del carrito, en el menú desplegable aparece como opción de pago «1 cuota», sin tener en cuenta los deducciones que se aplicarían al pagar con otro método de pago, como una tarjeta regalo.

Se trata de un problema exclusivo del lado del cliente; por lo tanto, si el usuario realiza un pedido utilizando esta opción del menú desplegable, la API de pago enviará el valor correcto a la pasarela.

## Simulación

- Asegúrate de que la cuenta tenga condiciones de pago con 1 cuota para el crédito de cliente;
- Ve a la sección de pago en el proceso de pago y, a continuación, elige el crédito de cliente como método de pago junto con una tarjeta regalo. Observa que el valor que aparece en el menú desplegable es incorrecto.

## Workaround

provisional**
N/A
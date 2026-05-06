---
title: 'La ventaja de un número limitado de cuotas muestra el descuento en las demás cuotas en el cuadro combinado'
slug: la-ventaja-de-un-numero-limitado-de-cuotas-muestra-el-descuento-en-las-demas-cuotas-en-el-cuadro-combinado
status: PUBLISHED
createdAt: 2021-01-12T15:55:48.000Z
updatedAt: 2023-03-31T23:07:04.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: benefit-with-restricted-number-of-installments-displays-discount-in-other-installments-in-the-combo-box
locale: es
kiStatus: Backlog
internalReference: 323525
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al registrar una promoción para pagos con tarjeta, con un número limitado de cuotas (por ejemplo, «10 % de descuento»), el descuento se muestra tras seleccionar ese número de cuotas en la caja. Sin embargo, este valor con descuento se convierte en el nuevo valor total, en el que se basarán las demás cuotas para mostrar sus valores. A continuación, en el campo de selección, las demás cuotas, que se calculan en función del valor total **con el descuento**, se muestran entre las opciones. Sin embargo, al seleccionar una cuota diferente, el valor mostrado pasa a ser el correcto.

Esta situación solo se da en el caso de los descuentos con tarjeta y en el momento de la selección. La compra **nunca se cierra con un valor incorrecto**.

## Simulación

1. Crea una ventaja con un número limitado de cuotas;
2. Accede a la tienda y crea un nuevo carrito, pasando a la caja;
3. Selecciona el número de cuotas en las que se aplica la ventaja;
4. Observa que, al abrir el campo de selección de cuotas una vez más, las demás opciones también muestran el descuento;
5. Selecciona otra cuota y comprueba que el valor se ajusta.

## Workaround

provisional**
Hay una solución disponible para este caso como función «beta». Puedes ponerte en contacto con el equipo de asistencia a través de un ticket para obtener más detalles.
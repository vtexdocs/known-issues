---
title: 'La tarjeta de guardado no funciona cuando 3DS2 está activo'
slug: la-tarjeta-de-guardado-no-funciona-cuando-3ds2-esta-activo
status: PUBLISHED
createdAt: 2020-12-28T20:31:10.000Z
updatedAt: 2025-10-16T23:06:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: save-card-doesnt-work-when-3ds2-is-active
locale: es
kiStatus: Backlog
internalReference: 319708
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando los clientes intentan añadir una nueva tarjeta de crédito en la sección «Mi cuenta» de las tiendas que utilizan la autenticación 3DS (V1 o V2), es posible que aparezca un mensaje de error que indique: «Se ha producido un error al intentar guardar la tarjeta». Este error se produce porque la tarjeta de crédito aún no ha sido validada.

Para validar la tarjeta, esta debe estar asociada a una condición de pago. Una vez establecida esta asociación, se realizará un cargo de 1,50 USD en la tarjeta. Sin embargo, esta transacción se cancela posteriormente y, en el proceso, la tarjeta queda validada.

En las tiendas donde los adquirentes emplean la autenticación 3DS, esta transacción activa el proceso de autenticación y solicita la validación de la tarjeta. Sin embargo, dado que no se trata de una compra real, no se puede completar el paso de «desafío» de la autenticación 3DS, lo que da lugar al error mencionado anteriormente al intentar guardar la tarjeta.

## Simulación

Para simular los pasos que conducen al error, siga las instrucciones que se indican a continuación:


1. Acceda a la plataforma VTEX Admin.
2. Configure un adquirente que utilice la autenticación 3DS. Para la V1, asegúrese de que esté correctamente configurada. Para la V2, consulte nuestro artículo «Configuración del flujo de autenticación 3DS 2» para obtener instrucciones más detalladas.
3. Configure un método de pago con tarjeta de crédito (por ejemplo, Mastercard, Visa, American Express) para que sea procesado por el adquirente configurado.
4. Visite la página de inicio de su tienda.
5. Inicie sesión introduciendo su dirección de correo electrónico y contraseña.
6. Haga clic en «Mi cuenta» para acceder a la configuración de su cuenta.
7. Vaya a la sección «Tarjetas de crédito».
8. Seleccione la opción «Añadir nueva tarjeta».
9. Rellene todos los campos obligatorios con la información necesaria de la tarjeta.
10. Haga clic en «Guardar nueva tarjeta» para guardar los datos de la tarjeta.
11. Al seguir este proceso, se producirá un error que indicará el problema encontrado durante la adición de la tarjeta.

## Workaround

Puede resolver este error añadiendo una condición de pago para una tarjeta de crédito asociada a un adquirente que no utilice 3-D Secure (V1 o V2)



%0A
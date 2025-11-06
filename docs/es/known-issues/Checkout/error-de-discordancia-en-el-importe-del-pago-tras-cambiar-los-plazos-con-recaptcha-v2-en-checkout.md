---
title: 'Error de discordancia en el importe del pago tras cambiar los plazos con reCaptcha v2 en Checkout'
slug: error-de-discordancia-en-el-importe-del-pago-tras-cambiar-los-plazos-con-recaptcha-v2-en-checkout
status: PUBLISHED
createdAt: 2025-11-06T23:57:38.849Z
updatedAt: 2025-11-06T23:57:38.849Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: payment-amount-mismatch-error-after-switching-installments-with-recaptcha-v2-in-checkout
locale: es
kiStatus: Backlog
internalReference: 1320840
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El proceso de pago puede bloquear de forma intermitente la realización del pedido con el error "El importe del pago no coincide con el importe previsto" después de que el comprador cambie entre las opciones de pago a plazos con y sin intereses y, a continuación, proceda a realizar el pedido. Los casos se reprodujeron sistemáticamente cuando está activado reCaptcha v2, que a veces puede desencadenar una solicitud de transacción con un valor total distinto del total del pago.


#### Simulación




-

**Requisitos:** Cuenta con reCaptcha v2 habilitado en Checkout. Tener al menos un método de pago que ofrezca cuotas con intereses y otra opción sin intereses.



-

**Pasos:**

1) Crear un nuevo carrito.



2) Seleccione una tarjeta de crédito con una opción de pago a plazos que aplique intereses y, a continuación, proceda a introducir los datos de la tarjeta.



3) Cambie a una opción sin intereses para que cambie el valor total (la operación inversa también funciona, es decir, seleccionar primero la opción sin intereses y luego cambiar a una opción con intereses).



4) Haga clic para finalizar/realizar el pedido. En los intentos fallidos, Checkout devuelve "el importe del pago no coincide con el importe esperado". El comportamiento es intermitente pero fácilmente reproducible (aproximadamente 3 reintentos para reproducir, en promedio).


## Workaround



Desactivar reCaptcha v2 o cambiar de reCaptcha v2 a reCaptcha v3 para Checkout. Como alternativa, intente cambiar las opciones de pago y vuelva a realizar el pedido.



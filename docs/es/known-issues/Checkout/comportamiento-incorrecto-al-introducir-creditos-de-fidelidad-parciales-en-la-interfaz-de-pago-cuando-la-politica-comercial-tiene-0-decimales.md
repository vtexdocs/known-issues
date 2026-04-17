---
title: 'Comportamiento incorrecto al introducir créditos de fidelidad parciales en la interfaz de pago cuando la política comercial tiene 0 decimales'
slug: comportamiento-incorrecto-al-introducir-creditos-de-fidelidad-parciales-en-la-interfaz-de-pago-cuando-la-politica-comercial-tiene-0-decimales
status: PUBLISHED
createdAt: 2026-04-17T21:12:13.491Z
updatedAt: 2026-04-17T21:12:13.491Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: partial-loyalty-credit-input-wrong-behavior-checkout-ui-when-commercial-policy-has-0-decimal-places
locale: es
kiStatus: Backlog
internalReference: 1394857
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los clientes no pueden introducir un importe parcial de crédito de fidelidad en la caja: el campo de entrada sigue mostrando 0 y solo admite un dígito, a pesar de que la API recibe el valor introducido. Esto ocurre cuando la política comercial de la tienda está configurada con cero decimales. La capa de formato elimina la parte decimal y mantiene los separadores de miles, y el analizador de entrada elimina los caracteres que no son dígitos, lo que da como resultado una longitud incorrecta del valor en céntimos y una desincronización de la interfaz de usuario. Afecta a los compradores que utilizan crédito de fidelidad con políticas configuradas con 0 decimales en la interfaz de usuario de Checkout.

## Simulación

Requisitos previos:

- Política comercial con los dígitos decimales configurados en 0.
- Uso parcial de tarjetas de fidelidad/regalo habilitado en la interfaz de pago.

Pasos:

1. Inicie sesión en la cuenta innew con el usuario proporcionado y abra el orderFormId indicado.
2. Intente cambiar el importe parcial del crédito en el campo de entrada del crédito de fidelidad.
3. Observe que el campo de entrada de la interfaz de usuario cambia de forma inesperada y solo parece tenerse en cuenta un dígito, mientras que las solicitudes de red muestran que la API recibe el valor introducido.

## Workaround

¿Existe alguna solución alternativa para este error? En caso afirmativo, descríbala aquí. Si no es así, escriba «N/A» o «No hay ninguna solución alternativa disponible». No elimine esta sección si no hay ninguna solución alternativa, por favor.
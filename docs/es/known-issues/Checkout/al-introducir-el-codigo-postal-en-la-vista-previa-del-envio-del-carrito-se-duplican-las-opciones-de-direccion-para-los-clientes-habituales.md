---
title: 'Al introducir el código postal en la vista previa del envío del carrito, se duplican las opciones de dirección para los clientes habituales'
slug: al-introducir-el-codigo-postal-en-la-vista-previa-del-envio-del-carrito-se-duplican-las-opciones-de-direccion-para-los-clientes-habituales
status: PUBLISHED
createdAt: 2023-12-20T21:36:35.000Z
updatedAt: 2023-12-20T21:36:35.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: placing-postal-code-in-the-shipping-preview-of-the-cart-is-duplicating-address-options-for-recurring-customers
locale: es
kiStatus: Backlog
internalReference: 956338
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Tenemos algunos problemas a la hora de introducir códigos postales en el módulo **Vista previa del envío** del carrito; algunos de ellos se describen en estas incidencias:


- Ref. 1: [Incidencia] Al pegar un código postal en la vista previa del envío del carrito, a veces se obtiene un resultado nulo de la API
- Ref. 2: [Incidencia] El campo de introducción del código postal de la vista previa del envío no se oculta

En este caso, lo que ocurre es que, para los clientes que ya tienen direcciones registradas en su perfil (compradores habituales), al introducir en la Vista previa de envío un código postal ya utilizado en una compra anterior, en la API se añade una opción de dirección de entrega adicional (`shippingData.availableAddresses`); al avanzar por los pasos de la caja y llegar a la selección de la dirección (`/checkout/#/shipping`), resulta que, en lugar de seleccionar la dirección correspondiente a dicho código postal, se abre una nueva opción de selección incompleta y, en algunos casos, oculta, lo que obliga al cliente a seleccionar una de la lista o a completar la «nueva» para pasar al siguiente paso.

## Simulación

1. Utiliza un usuario que ya haya realizado algunas compras y cuyo perfil contenga alguna dirección de entrega.
2. Añade algunos artículos al carrito y, a continuación, ve a la caja.
3. En el carrito, utiliza la vista previa de envío para introducir uno de los códigos postales de tu perfil.
  1. Intenta revisar el `orderForm` y busca el `shippingData.availableAddresses`
  2. La dirección de tu perfil aparecerá en la lista con un detalle clave: la dirección ya tiene el número de la calle (`shippingData.availableAddresses.[].number`)
  3. La nueva opción de la matriz que genera el problema no tiene el `number`, lo que la convierte en una opción de dirección incompleta.
4. Intenta ir al paso de envío del proceso de pago (`/checkout/#/shipping`) y verás que no puedes pasar al paso de pago si no completas la dirección seleccionada o seleccionas otra de las opciones.

## Workaround

En el paso de envío del proceso de pago, intenta seleccionar la dirección deseada de la lista (selecciona obligatoriamente una de las anteriores del cliente).



%0A
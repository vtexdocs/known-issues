---
title: 'El selector de entrega de «Vista previa del envío» muestra una hora incorrecta en caso de que haya varios paquetes o plazos de entrega'
slug: el-selector-de-entrega-de-vista-previa-del-envio-muestra-una-hora-incorrecta-en-caso-de-que-haya-varios-paquetes-o-plazos-de-entrega
status: PUBLISHED
createdAt: 2020-07-13T22:56:56.000Z
updatedAt: 2023-03-23T15:50:05.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-delivery-selector-showing-wrong-time-in-case-of-multiple-packagesdeadlines
locale: es
kiStatus: Backlog
internalReference: 264441
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Si el carrito contiene varios paquetes con plazos de entrega diferentes, el selector de entrega de la vista previa de envío muestra solo uno de los plazos, lo que da lugar a información incorrecta.
El comportamiento esperado en este caso es que el selector muestre el mensaje **Plazos variados** y, debajo del selector, aparezca un mensaje que indique el plazo de entrega de cada paquete en días laborables.

## Simulación

- Añade 2 artículos con diferentes SLA;
- Comprueba que la fecha es incorrecta en el selector de la vista previa de envío.

## Workaround

provisional**
N/A
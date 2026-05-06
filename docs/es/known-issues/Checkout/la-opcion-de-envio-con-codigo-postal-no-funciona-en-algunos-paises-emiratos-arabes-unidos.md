---
title: 'La opción de envío con código postal no funciona en algunos países (Emiratos Árabes Unidos)'
slug: la-opcion-de-envio-con-codigo-postal-no-funciona-en-algunos-paises-emiratos-arabes-unidos
status: PUBLISHED
createdAt: 2020-12-02T16:45:46.000Z
updatedAt: 2024-07-16T13:09:50.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-step-with-postal-code-does-not-work-for-some-countries-united-arab-emirates
locale: es
kiStatus: Fixed
internalReference: 312132
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los Emiratos Árabes Unidos no tienen códigos postales, y la interfaz de pago solo admite dos tipos de datos: código postal o coordenadas geográficas.

Si la tienda configura la entrada de código postal, al llegar al paso de envío durante el proceso de pago, la selección del país «Emiratos Árabes Unidos» no funciona correctamente, y es posible que tampoco funcionen otros.

No es posible añadir nada al componente.

 ![](https://vtexhelp.zendesk.com/attachments/token/EZeQLV41SRmxv7v9e0eUlzFqA/?name=inline358044226.png)

## Simulación

- Ve al paso de envío;
- No se muestra ningún campo para añadir el código postal;

## Workaround

Añade cualquier código postal ficticio a través de la API; los campos se mostrarán entonces, por ejemplo, a través de la consola:

 vtexjs.checkout.sendAttachment('shippingData', { "selectedAddresses": [{ addressType: "residential", country: "ARE", postalCode: "0" }]}).done(r=>{ console.log(r)})

Resultado:
 ![](https://vtexhelp.zendesk.com/attachments/token/cqRElEMi1ukYyP7WR8UjRilyn/?name=image.png)


## **Solución alternativa**
En el caso de las coordenadas geográficas, es posible realizar el traslado con la compra:
 ![](https://vtexhelp.zendesk.com/attachments/token/fGQtJOaturVNnARJIm9erMyEa/?name=image.png)
---
title: 'Una discrepancia en el AddressId provoca el error «dirección no válida para un artículo»'
slug: una-discrepancia-en-el-addressid-provoca-el-error-direccion-no-valida-para-un-articulo
status: PUBLISHED
createdAt: 2024-03-01T19:28:34.000Z
updatedAt: 2024-03-01T19:28:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: addressid-mismatch-causes-invalid-address-for-an-item-error
locale: es
kiStatus: Backlog
internalReference: 992503
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El archivo adjunto `shippingData` del carrito admite el campo `addressId` en varios objetos diferentes: `logisticsInfo`, `address` y `selectedAddresses`.
El campo `addressId` también se conserva en las direcciones guardadas del usuario, almacenadas en la entidad AD de Master Data.

Al realizar un pedido, la API de Checkout compara la dirección de envío seleccionada en el `orderForm` con las disponibles en el perfil del usuario.
Si se produce una coincidencia, el `addressId` dentro de `address` y `selectedAddresses` del `orderForm` se sustituye por el valor existente en su perfil.

Sin embargo, en una fase posterior de las validaciones de la API, también se comparará este `addressId` con el del objeto `logisticsInfo`.
Dado que el de `logisticsInfo` no se sustituye mediante el proceso mencionado anteriormente, es posible que no coincidan, y esta validación posterior fallará.
Esto desencadena un «**dirección no válida para un artículo**» / «endereço inválido para um item», lo que impide que se complete la compra.

## Simulación

- Guarda dos direcciones diferentes en el perfil de un usuario y toma nota de sus valores `addressId`.
- Crea una solicitud de «Place Order». Utiliza una de las direcciones creadas en el paso anterior, pero utiliza el `addressId` de la otra.
- Envía la solicitud. La respuesta contendrá el mensaje de error «dirección no válida para un artículo».

## Workaround

Al enviar la solicitud de pedido con una dirección guardada previamente, asegúrate de que el valor utilizado para `addressId` coincida con los datos reales de la dirección.
Como alternativa, también puedes omitir el `addressId` de la solicitud.
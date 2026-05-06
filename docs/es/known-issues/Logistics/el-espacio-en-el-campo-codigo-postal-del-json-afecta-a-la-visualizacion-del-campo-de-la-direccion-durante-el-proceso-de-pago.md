---
title: 'El espacio en el campo «código postal» del JSON afecta a la visualización del campo de la dirección durante el proceso de pago'
slug: el-espacio-en-el-campo-codigo-postal-del-json-afecta-a-la-visualizacion-del-campo-de-la-direccion-durante-el-proceso-de-pago
status: PUBLISHED
createdAt: 2023-08-01T22:30:21.000Z
updatedAt: 2023-08-01T22:30:21.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: space-in-street-property-in-postal-code-json-affects-address-field-display-at-checkout
locale: es
kiStatus: Backlog
internalReference: 872935
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al activar el uso de la API de códigos postales en el formulario de dirección para países que no siguen el modelo BR (país, provincia, ciudad, barrio, calle), en los países que no tienen todos estos campos rellenados en la API y necesitan poder introducir los demás datos de la dirección en el formulario de dirección al finalizar la compra, el campo de la calle del bloque de dirección no estará disponible si la propiedad «street» de JSON contiene un espacio, ya que se interpretará como rellenado y válido, lo que no permite continuar con el pedido.

## Simulación

Crea un carrito en una tienda de EMEA que utilice el código postal y el formulario de dirección, y en la base de datos de códigos postales el campo de la calle contenga un espacio « ».
El campo de la dirección no estará disponible para rellenarlo.

## Workaround

No existe
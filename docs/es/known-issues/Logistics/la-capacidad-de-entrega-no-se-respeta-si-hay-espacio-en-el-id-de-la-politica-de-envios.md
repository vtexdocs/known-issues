---
title: 'La capacidad de entrega no se respeta si hay espacio en el ID de la política de envíos'
slug: la-capacidad-de-entrega-no-se-respeta-si-hay-espacio-en-el-id-de-la-politica-de-envios
status: PUBLISHED
createdAt: 2023-07-14T21:25:36.000Z
updatedAt: 2024-12-19T19:05:00.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: delivery-capacity-is-not-respected-if-there-is-space-in-the-id-of-shipping-policy
locale: es
kiStatus: Fixed
internalReference: 862830
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Si se utiliza la función de programación de entregas y la capacidad de entrega está habilitada, existen dos casos conocidos en los que la ventana puede seguir estando disponible incluso después de haber alcanzado su límite máximo de capacidad configurado.
Los casos son: un ID de política de envío que contenga un espacio o demasiados caracteres en la cadena; `AccountName+ShippingPolicyId` no puede superar los 60 caracteres.

## Simulación

Cree una política de envío y, en su ID, inserte un espacio, o bien haga que `AccountName+ShippingPolicyId` tenga más de 60 caracteres; configure la entrega programada y la capacidad de entrega.
Realice pedidos seleccionando la ventana registrada y compruebe que es posible crear más pedidos que el máximo configurado en la capacidad de entrega.
Al finalizar la compra, cuando se alcance el límite configurado, la ventana no debería dejar de estar disponible, sino que permanecerá visible y se podrá seleccionar.

## Workaround

No registre ningún Id con un espacio en la política de envío ni con más de 60 caracteres sumando los caracteres de `AccountName+ShippingPolicyId`.
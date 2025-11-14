---
title: 'La capacidad de entrega no se respeta si hay espacio en el Id de la política de envío'
slug: la-capacidad-de-entrega-no-se-respeta-si-hay-espacio-en-el-id-de-la-politica-de-envio
status: PUBLISHED
createdAt: 2025-11-14T19:23:16.663Z
updatedAt: 2025-11-14T19:23:16.663Z
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


Si la función de programación de entregas está en uso y la capacidad de entrega está habilitada, hay dos escenarios conocidos que pueden hacer que la ventana esté disponible incluso después de haber alcanzado su límite máximo de capacidad configurada.
Los escenarios son: ID de política de envío con un espacio o demasiados caracteres formando la cadena, `AccountName+ShippingPolicyId` no puede superar los 60 caracteres.


#### Simulación


Cree una política de envío y, en su Id, inserte un espacio, o `AccountName+ShippingPolicyId` que resulte en más de 60 caracteres, configure la entrega programada y la capacidad de entrega.
Realice los pedidos seleccionando la ventana registrada, compruebe que será posible crear más pedidos que el máximo configurado en la capacidad de entrega.
En el momento del pago, cuando se alcance el límite configurado, la ventana no dejará de estar disponible, sino que permanecerá visible y podrá ser seleccionada.

## Workaround


No registre ningún Id con un espacio en la política de envío o con más de 60 caracteres sumando los caracteres del `AccountName+ShippingPolicyId`.




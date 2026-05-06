---
title: 'La sustitución de productos en pedidos de OMS no funciona en las cuentas del portal del vendedor'
slug: la-sustitucion-de-productos-en-pedidos-de-oms-no-funciona-en-las-cuentas-del-portal-del-vendedor
status: PUBLISHED
createdAt: 2023-02-14T12:24:50.000Z
updatedAt: 2023-02-14T12:24:50.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-replacement-on-oms-order-not-working-on-seller-portal-accounts
locale: es
kiStatus: Backlog
internalReference: 753484
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

No es posible modificar el SKU de un pedido porque el OMS utiliza la API de búsqueda (que está vinculada al catálogo V1) y las cuentas del portal del vendedor utilizan una nueva versión del catálogo. No se ha implementado ningún proxy en esta área.

El error es: «La cuenta solicitada {accountName} no se ha encontrado en el banco de conexión.» <> «La cuenta solicitada {accountName} no se ha encontrado en el banco de conexión.»

## Simulación

1. Vaya a OMS y seleccione el pedido en el que desea sustituir el SKU (debe ser una cuenta del portal del vendedor);
2. Compruebe que aparece un error en la interfaz de usuario;
3. Al examinar el error, se puede ver que el mensaje es el anterior.

## Workaround

No hay solución alternativa.
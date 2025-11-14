---
title: 'La sustitución de productos en un pedido OMS no funciona en las cuentas del portal del vendedor'
slug: la-sustitucion-de-productos-en-un-pedido-oms-no-funciona-en-las-cuentas-del-portal-del-vendedor
status: PUBLISHED
createdAt: 2025-11-14T19:13:09.305Z
updatedAt: 2025-11-14T19:13:09.305Z
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


No está siendo posible cambiar el sku de un pedido porque el OMS utiliza la API de búsqueda (que está relacionada con el catálogo V1) y las cuentas del portal del vendedor utilizan una nueva versión del catálogo. No se ha implementado ningún proxy en esta área.

El error es: "A conta solicitada {accountName} não foi encontrada no banco de conexão." <> "La cuenta solicitada {accountName} no fue encontrada en el banco de conexión."


#### Simulación



1. Vaya a OMS y seleccione el pedido en el que desea sustituir el sku (tiene que ser una cuenta del portal del vendedor);
2. Comprueba que aparece un error en la interfaz de usuario;
3. Inspeccionando el error es posible ver que el mensaje es el de arriba.

## Workaround


No hay solución.




---
title: 'Simulación de pago con una gran cantidad de la misma sku recibe un tiempo de espera Logística'
slug: simulacion-de-pago-con-una-gran-cantidad-de-la-misma-sku-recibe-un-tiempo-de-espera-logistica
status: PUBLISHED
createdAt: 2025-09-25T15:16:49.589Z
updatedAt: 2025-09-25T15:16:49.589Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: checkout-simulation-with-a-great-quantity-of-the-same-sku-receives-a-logistics-timeout
locale: es
kiStatus: No Fix
internalReference: 330775
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Tenemos un error en el servicio de Logística cuando intentamos simular una compra con miles de unidades del mismo SKU. Ese error se produce porque la petición de dividir el paquete tarda demasiado.

El detalle del error en la API es: "La operación fue cancelada".

Para los productos en kit, el escenario puede ser aún más restrictivo porque la logística calculará cada componente del kit individualmente.


#### Simulación



1. Intenta hacer una **Simulación de caja** o una simulación en el **Carro de la compra** con miles de unidades del mismo SKU (como 50k o 3k para kits).
2. Revisa los detalles en la respuesta de la API, y probablemente veas un error al procesar esa petición (**timeout**)

## Workaround


Recomendamos aumentar los límites de paquetes del transportista para acomodar las unidades en un solo paquete. Proporcionaría una solicitud más rápida y no devolvería un tiempo de espera.


---
title: 'El servicio de impuestos obtiene valores diferentes de Marketplace y Fulfillment cuando se utiliza una promoción de "Más por menos".'
slug: el-servicio-de-impuestos-obtiene-valores-diferentes-de-marketplace-y-fulfillment-cuando-se-utiliza-una-promocion-de-mas-por-menos
status: PUBLISHED
createdAt: 2023-11-16T22:22:05.000Z
updatedAt: 2026-11-24T18:19:00.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-getting-different-values-from-marketplace-and-fullfilment-when-a-more-for-less-promotion-is-used
locale: es
kiStatus: Backlog
internalReference: 937730
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al usar el servicio de impuestos, si se aplica una promoción de **Más por Menos** en el carrito y se produce una división de artículos, dependiendo de la cantidad de artículos involucrados en la promoción, la compra no se completará y aparecerá el mensaje de error "**No se pudo crear el pedido solicitado. Inténtelo de nuevo**".

## Simulación

- Cree una promoción de **Más por Menos** (por ejemplo, Compre 6 artículos iguales y llévese 1 gratis);

- Agregue artículos al carrito y asegúrese de que se dividan;

- Intente completar la compra.

## Workaround

N/A
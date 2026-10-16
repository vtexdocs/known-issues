---
title: 'Error al agregar un límite de uso de la tienda a una promoción con un límite de uso del cliente existente.'
slug: error-al-agregar-un-limite-de-uso-de-la-tienda-a-una-promocion-con-un-limite-de-uso-del-cliente-existente
status: PUBLISHED
createdAt: 2026-10-16T16:31:43.000Z
updatedAt: 2026-10-16T16:32:25.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: error-when-adding-a-store-usage-limit-to-a-promotion-with-an-existing-customer-usage-limit
locale: es
kiStatus: Backlog
internalReference: 1474500
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al editar una promoción que ya tiene un límite máximo de uso por cliente, intentar añadir un límite máximo de uso por tienda genera el siguiente error:
"No se puede cambiar una calculadora que ya usa el límite máximo de uso por cliente para que use el límite máximo de uso por tienda". Esta validación solo se produce cuando el límite por cliente se configura y guarda antes de añadir el límite por tienda. Configurar ambos límites simultáneamente o añadir primero el límite por tienda y luego el límite por cliente funciona correctamente.

## Simulación

1. Crea una promoción y configura un límite máximo de uso por cliente.

2. Guarda la promoción.

3. Edita la promoción y añade un límite máximo de uso por tienda.

4. Guarda los cambios y verifica que se muestre el siguiente error: "No se puede cambiar una calculadora que ya usa el límite máximo de uso por cliente para que use el límite máximo de uso por tienda".

## Workaround

Edita la promoción existente eliminando ambas restricciones de uso y guardando los cambios. A continuación, edita la promoción de nuevo y configura simultáneamente el límite máximo de uso por cliente y el límite máximo de uso por tienda. Guarda los cambios. Esta solución alternativa se ha probado con éxito. Permite configurar ambas restricciones sin duplicar la promoción ni afectar su contador de uso existente.
---
title: 'La API para crear o actualizar proveedores de tarjetas regalo siempre actualiza el proveedor actual cuando nunca se ha añadido un nuevo proveedor anteriormente.'
slug: la-api-para-crear-o-actualizar-proveedores-de-tarjetas-regalo-siempre-actualiza-el-proveedor-actual-cuando-nunca-se-ha-anadido-un-nuevo-proveedor-anteriormente
status: PUBLISHED
createdAt: 2023-03-10T19:04:48.000Z
updatedAt: 2023-03-10T19:04:48.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-api-to-createupdate-gift-card-providers-is-always-updating-the-current-provider-when-it-has-never-added-a-new-provider-before
locale: es
kiStatus: Backlog
internalReference: 768954
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar añadir un nuevo ID de proveedor por primera vez en una cuenta, en lugar de añadir un nuevo proveedor, se actualiza el proveedor nativo actual (VtexGiftCard).

## Simulación

Utilice nuestra API para actualizar un proveedor cuando la cuenta nunca haya añadido un nuevo proveedor.

## Workaround

Para añadir un nuevo proveedor, primero debe guardar la información de nuestro proveedor nativo de tarjetas regalo. Una vez que haya guardado la información, podrá añadir el nuevo proveedor correctamente.